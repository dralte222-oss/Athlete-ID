import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"
import { supabase } from "../lib/supabase"
import type { Session, User } from "@supabase/supabase-js"

export type UserRole = "athlete" | "coach"

export interface UserProfile {
  id: string
  email: string
  role: UserRole
  fullName: string
  mobile?: string
  dateOfBirth?: string
  gender?: string
  state?: string
  district?: string
  sport?: string
  coachingExperience?: string
  avatarUrl?: string
  athleteId?: string
  createdAt?: string
  achievements?: string[]
  trainingDetails?: string
  competitionHistory?: string
}

interface AuthContextType {
  session: Session | null
  user: User | null
  profile: UserProfile | null
  loading: boolean
  signUp: (
    email: string,
    password: string,
    metadata: Record<string, unknown>
  ) => Promise<{ error: Error | null }>
  signIn: (
    email: string,
    password: string
  ) => Promise<{ error: Error | null }>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<{ error: Error | null }>
  updatePassword: (password: string) => Promise<{ error: Error | null }>
  updateProfile: (data: Partial<UserProfile>) => Promise<{ error: Error | null }>
  refreshProfile: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  const buildProfile = (user: User): UserProfile => {
    const meta = user.user_metadata || {}
    return {
      id: user.id,
      email: user.email || "",
      role: (meta.role as UserRole) || "athlete",
      fullName: (meta.full_name as string) || "",
      mobile: meta.mobile as string | undefined,
      dateOfBirth: meta.date_of_birth as string | undefined,
      gender: meta.gender as string | undefined,
      state: meta.state as string | undefined,
      district: meta.district as string | undefined,
      sport: meta.sport as string | undefined,
      coachingExperience: meta.coaching_experience as string | undefined,
      avatarUrl: meta.avatar_url as string | undefined,
      athleteId:
        (meta.athlete_id as string) ||
        `AID-IN-${new Date().getFullYear()}-${String(Math.floor(10000 + Math.random() * 90000))}`,
      createdAt: user.created_at,
      achievements: (meta.achievements as string[]) || [],
      trainingDetails: meta.training_details as string | undefined,
      competitionHistory: meta.competition_history as string | undefined,
    }
  }

  const refreshProfile = async () => {
    const {
      data: { user: currentUser },
    } = await supabase.auth.getUser()
    if (currentUser) {
      setUser(currentUser)
      setProfile(buildProfile(currentUser))
    }
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s)
      setUser(s?.user ?? null)
      if (s?.user) {
        setProfile(buildProfile(s.user))
      }
      setLoading(false)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s)
      setUser(s?.user ?? null)
      if (s?.user) {
        setProfile(buildProfile(s.user))
      } else {
        setProfile(null)
      }
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const signUp = async (
    email: string,
    password: string,
    metadata: Record<string, unknown>
  ) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: metadata },
    })
    return { error: error ? new Error(error.message) : null }
  }

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { error: error ? new Error(error.message) : null }
  }

  const signOut = async () => {
    await supabase.auth.signOut()
    setSession(null)
    setUser(null)
    setProfile(null)
  }

  const resetPassword = async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })
    return { error: error ? new Error(error.message) : null }
  }

  const updatePassword = async (password: string) => {
    const { error } = await supabase.auth.updateUser({ password })
    return { error: error ? new Error(error.message) : null }
  }

  const updateProfile = async (data: Partial<UserProfile>) => {
    const metadata: Record<string, unknown> = {}
    if (data.fullName !== undefined) metadata.full_name = data.fullName
    if (data.mobile !== undefined) metadata.mobile = data.mobile
    if (data.dateOfBirth !== undefined) metadata.date_of_birth = data.dateOfBirth
    if (data.gender !== undefined) metadata.gender = data.gender
    if (data.state !== undefined) metadata.state = data.state
    if (data.district !== undefined) metadata.district = data.district
    if (data.sport !== undefined) metadata.sport = data.sport
    if (data.coachingExperience !== undefined)
      metadata.coaching_experience = data.coachingExperience
    if (data.achievements !== undefined) metadata.achievements = data.achievements
    if (data.trainingDetails !== undefined)
      metadata.training_details = data.trainingDetails
    if (data.competitionHistory !== undefined)
      metadata.competition_history = data.competitionHistory

    const { error } = await supabase.auth.updateUser({ data: metadata })
    if (!error) {
      await refreshProfile()
    }
    return { error: error ? new Error(error.message) : null }
  }

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        profile,
        loading,
        signUp,
        signIn,
        signOut,
        resetPassword,
        updatePassword,
        updateProfile,
        refreshProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

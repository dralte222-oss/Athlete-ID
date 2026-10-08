import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function LoginPage() {
  const { signIn, user, loading } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(false)
  const [error, setError] = useState("")
  const [submitting, setSubmitting] = useState(false)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="w-10 h-10 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (user) {
    return <Navigate to="/dashboard" replace />
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSubmitting(true)

    if (!email || !password) {
      setError("Please fill in all fields.")
      setSubmitting(false)
      return
    }

    const { error: err } = await signIn(email, password)
    if (err) {
      setError(err.message)
    }
    setSubmitting(false)
  }

  return (
    <div className="min-h-screen flex animate-gradient-bg relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 dot-pattern opacity-100" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/8 rounded-full blur-[100px]" />

      <div className="relative flex-1 flex items-center justify-center p-5">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 mb-10 justify-center">
            <div className="w-10 h-10 rounded-[12px] bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center shadow-lg shadow-blue-600/20">
              <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-white">
                <path d="M10 2L3.5 5.5V10c0 3.6 2.8 6.9 6.5 7.8C13.7 16.9 16.5 13.6 16.5 10V5.5L10 2z" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1.4" strokeLinejoin="round" />
                <path d="M7.5 10.2l1.8 1.8 3.2-3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-display font-bold text-xl text-white tracking-tight">
              Athlete ID India
            </span>
          </Link>

          {/* Card */}
          <div className="bg-white/[0.06] backdrop-blur-2xl border border-white/[0.12] rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h1 className="font-display font-black text-3xl text-white mb-2">
                Welcome Back to{" "}
                <span className="gradient-text">Athlete ID India</span>
              </h1>
              <p className="text-white/50 text-sm">
                Log in to access your athlete profile and opportunities.
              </p>
            </div>

            {error && (
              <div className="mb-5 p-3.5 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-2.5">
                <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-red-400 shrink-0 mt-0.5">
                  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10 6v4.5M10 13.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="text-red-300 text-sm">{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <svg viewBox="0 0 20 20" fill="none" className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-white/30">
                    <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M2 6l8 5 8-5" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/25 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <svg viewBox="0 0 20 20" fill="none" className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-white/30">
                    <rect x="3" y="9" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M6 9V6a4 4 0 118 0v3" stroke="currentColor" strokeWidth="1.4" />
                    <circle cx="10" cy="13.5" r="1.5" fill="currentColor" />
                  </svg>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="w-full pl-11 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/25 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                  >
                    {showPassword ? (
                      <svg viewBox="0 0 20 20" fill="none" className="w-4.5 h-4.5">
                        <path d="M3 3l14 14M8.5 8.8a2.5 2.5 0 003.3 3.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                        <path d="M5.5 6.2C3.8 7.6 2.5 9.5 2 10.5c1.5 3 4.5 5.5 8 5.5.8 0 1.6-.1 2.3-.4M10 5c3.5 0 6.5 2.5 8 5.5-.4.8-1 1.6-1.7 2.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 20 20" fill="none" className="w-4.5 h-4.5">
                        <path d="M2 10.5c1.5-3 4.5-5.5 8-5.5s6.5 2.5 8 5.5c-1.5 3-4.5 5.5-8 5.5s-6.5-2.5-8-5.5z" stroke="currentColor" strokeWidth="1.4" />
                        <circle cx="10" cy="10.5" r="2.5" stroke="currentColor" strokeWidth="1.4" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="w-4 h-4 rounded border-white/20 bg-white/5 text-blue-600 focus:ring-blue-500/30 focus:ring-offset-0"
                  />
                  <span className="text-white/50 text-sm">Remember me</span>
                </label>
                <Link
                  to="/forgot-password"
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold text-sm rounded-xl shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2 btn-primary"
              >
                {submitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 20 20" fill="none" className="w-4.5 h-4.5">
                      <path d="M3 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Log In</span>
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-white/30 text-xs uppercase tracking-wider">or</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Register link */}
            <p className="text-center text-white/50 text-sm">
              Don&apos;t have an account?{" "}
              <Link
                to="/register"
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                Create an account
              </Link>
            </p>
          </div>

          {/* Footer */}
          <p className="text-center text-white/25 text-xs mt-6">
            © {new Date().getFullYear()} Athlete ID India Pvt. Ltd.
          </p>
        </div>
      </div>
    </div>
  )
}

FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

ENV PORT=5001
ENV NODE_ENV=production

EXPOSE 5001

CMD ["node", "src/server.js"]

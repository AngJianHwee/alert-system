# Stage 1: Install dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Stage 2: Build the Next.js application
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: Run the Next.js application
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# You can uncomment and modify the following line if you need to run on a different port
# ENV PORT 3000

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY . .

EXPOSE 3000

CMD ["npm", "start"]

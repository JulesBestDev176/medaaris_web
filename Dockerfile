# syntax=docker/dockerfile:1

FROM node:24-alpine AS deps

WORKDIR /app

COPY package*.json ./
RUN npm ci

FROM node:24-alpine AS builder

WORKDIR /app

ARG NEXT_PUBLIC_API_URL=https://backend-prod.medaaris.com/api
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL} \
    NEXT_TELEMETRY_DISABLED=1 \
    NODE_OPTIONS="--max_old_space_size=1024"

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:24-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=4300 \
    HOSTNAME=0.0.0.0

RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nextjs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nextjs /app/.next/static ./.next/static

USER nextjs

EXPOSE 4300

CMD ["node", "server.js"]

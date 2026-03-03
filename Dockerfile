FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM caddy:2-alpine
WORKDIR /srv
COPY --from=builder /app/dist .
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80

# --- STAGE 1: Builder ---
FROM node:22-alpine AS builder

WORKDIR /app

# Enable 'pnpm' globally
RUN corepack enable pnpm

# Copy manifests and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source and build SSG
COPY . .
RUN pnpm build

# --- STAGE 2: Runner ---
FROM nginx:alpine AS runner

# Copy custom nginx configuration
COPY deploy/ssg/default.conf /etc/nginx/conf.d/default.conf

# Copy static assets from builder
# Angular 17+ with @angular/build:application puts static files in dist/<project>/browser
COPY --from=builder /app/dist/front/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

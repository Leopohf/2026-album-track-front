# --- STAGE 1: Builder ---
# This stage uses a full Node.js environment to install dependencies and build the application.
# We use an 'alpine' variant to keep the base image size small.
FROM node:22-alpine AS builder

# Set the working directory for all subsequent commands.
WORKDIR /app

# Enable 'pnpm' globally in the container as per project requirements.
RUN corepack enable pnpm

# Copy only dependency manifests first.
# This is a Docker best practice: by copying these files separately, 
# Docker can cache the 'pnpm install' layer. This means if you change your code 
# but not your dependencies, the install step is skipped in future builds, making them much faster.
COPY package.json pnpm-lock.yaml ./

# Install all dependencies (including devDependencies) required to build the Angular app.
RUN pnpm install --frozen-lockfile

# Copy the rest of the application source code.
COPY . .

# Build the Angular SSR application for production.
# This command triggers 'ng build' which bundles, minifies, and optimizes the code.
# The output is placed in the 'dist/' folder.
RUN pnpm build

# --- STAGE 2: Runner ---
# This is the final image that will be deployed. It is much smaller because 
# it does NOT contain the source code, pnpm, or the build tools.
FROM node:22-alpine AS runner

# Set the environment to production. 
# Many libraries use this to enable performance optimizations.
ENV NODE_ENV=production

WORKDIR /app

# Copy ONLY the built artifacts from the builder stage.
# We only need the 'dist' folder and the 'package.json' to run the server.
# This is what makes the image "minimized" and "deployable anywhere".
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json

# Expose the port that the Angular SSR server listens on by default.
EXPOSE 4000

# Command to start the application. 
# This runs the compiled server-side entry point directly with Node.js.
# This container is stateless and can be scaled horizontally behind any load balancer.
CMD ["node", "dist/front/server/server.mjs"]

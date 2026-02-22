FROM node:24-alpine AS builder
WORKDIR /build
COPY package*.json ./
RUN npm ci
COPY . .
RUN node esbuild.config.mjs

FROM gcr.io/distroless/nodejs24-debian13
WORKDIR /app
COPY --from=builder /build/dist/stdio.mjs ./stdio.mjs
CMD ["stdio.mjs"]

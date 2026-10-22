# ---- build: Vite 7 needs Node 20.19+ ----
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build

# ---- serve: static files with SPA fallback ----
FROM nginx:1.27-alpine
# nginx renders templates/*.template into conf.d at startup, filling in ${PORT}
ENV PORT=3000
COPY nginx.conf.template /etc/nginx/templates/default.conf.template
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 3000

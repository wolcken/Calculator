FROM node:11-alpine AS builder

WORKDIR /app
COPY ./ /app

ENV NODE_OPTIONS=--max_old_space_size=8192

FROM nginx:1.15
COPY --from=builder /app/build/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
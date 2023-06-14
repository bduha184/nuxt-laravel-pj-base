# FROM node:16.14.2-alpine3.15
FROM node:18-slim

# ENV HOST=0.0.0.0

WORKDIR /app
COPY . .
RUN apt-get update \
    && apt-get install -y \
    git \
    vim

# CMD ["yarn", "run", "dev"]

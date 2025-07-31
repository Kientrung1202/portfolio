FROM node:22.12.0-alpine

WORKDIR /app

# Install pnpm globally with the version specified in package.json
RUN npm install -g pnpm@8.10.5

# Install dependencies
COPY package*.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Accept build arguments for Next.js public environment variables
ARG NEXT_PUBLIC_CHATBOT_BASE_URL
ARG NEXT_PUBLIC_CHATBOT_AGENT_ENDPOINT

# Set environment variables for build time
ENV NEXT_PUBLIC_CHATBOT_BASE_URL=$NEXT_PUBLIC_CHATBOT_BASE_URL
ENV NEXT_PUBLIC_CHATBOT_AGENT_ENDPOINT=$NEXT_PUBLIC_CHATBOT_AGENT_ENDPOINT

# Build the app
ENV NODE_ENV=production
RUN pnpm run build

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["pnpm", "start"] 
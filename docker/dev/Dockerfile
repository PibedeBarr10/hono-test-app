FROM oven/bun:alpine

COPY /app .

EXPOSE 3000

RUN bun install
RUN chmod 644 src/database

CMD ["bun", "run", "dev"]

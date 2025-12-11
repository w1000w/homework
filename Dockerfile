FROM node:24-alpine

ENV PORT=3001

EXPOSE 3001

COPY . .

RUN npm install

CMD ["node", "index.js"]

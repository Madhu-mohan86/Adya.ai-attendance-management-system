FROM node

WORKDIR /attendance-monitoring

COPY . .

RUN npm install

ENV MONGODB_URI='mongodb://localhost:27017'

ENV SECRET_TOKEN=trial

ENV PORT=3002

ENV HOST=0.0.0.0

CMD ["node","./src/main.js"]

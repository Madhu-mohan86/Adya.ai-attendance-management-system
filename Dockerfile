FROM node

WORKDIR /attendance-monitoring

COPY . .

RUN npm install

ENV MONGODB_URI='mongodb://localhost:27017'

ENV SECRET_TOKEN=trial

ENV PORT=3000

ENV HOST=0.0.0.0

RUN ["node","./src/docs/swagger_gen.js"]

CMD ["node","./src/main.js"]

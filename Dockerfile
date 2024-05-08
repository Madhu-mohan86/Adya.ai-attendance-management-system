FROM --platform=linux/amd64 ubuntu:latest

WORKDIR /attendance-monitoring

RUN apt-get update && apt-get install -y \
    curl 

RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list

RUN apt-get update && apt-get install -y nodejs

COPY ./src .
COPY ./.env .

RUN npm install

CMD ["node","src/main.js"]

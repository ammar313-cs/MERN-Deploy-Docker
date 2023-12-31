FROM ubuntu:latest

RUN apt-get update -y && \
    apt-get install -y ca-certificates curl gnupg && \
    mkdir -p /etc/apt/keyrings && \
    curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg && \
    echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_16.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list && \
    apt-get update -y && \
    apt-get install nodejs -y

RUN mkdir /react-app-repo-in

WORKDIR /react-app-repo-in

COPY ./react-app-repo ./react-app-repo-in

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]

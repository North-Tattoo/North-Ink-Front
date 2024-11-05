# Use uma imagem base do Node.js
FROM node:20

# Defina o diretório de trabalho
WORKDIR /app

# Copie o diretório completo do projeto para dentro do contêiner
COPY . .

# Instale as dependências da raiz
RUN npm install

# Defina o diretório de trabalho para o diretório "site"
WORKDIR /app/site

# Instale as dependências específicas do site
RUN npm install

# Construa o projeto
RUN npm run build

# Exponha a porta que a aplicação vai rodar
EXPOSE 8080

# Comando para rodar a aplicação
CMD ["npm", "start"]

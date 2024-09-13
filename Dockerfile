# Utiliser une image de base Node.js
FROM node:18-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
#COPY public/ /dark-mode-music-player/public
#COPY src/ /dark-mode-music-player/src

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH



# Installer les dépendances
COPY COPY ./package*.json ./
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port sur lequel l'application va tourner
EXPOSE 3000

# Démarrer l'application
CMD ["npm", "run", "dev"]

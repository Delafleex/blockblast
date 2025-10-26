# Gunakan image Node versi ringan
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Salin package files dulu untuk caching layer npm
COPY package.json package-lock.json* yarn.lock* ./

# Install expo CLI dan dependencies project
RUN npm install -g expo-cli && npm install --production=false

# Copy seluruh project
COPY . .

# Port default Expo
EXPOSE 19000 19001 19002

# Jalankan Expo
CMD ["npm", "run", "start"]

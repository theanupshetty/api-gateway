# Base image for node with an appropriate version
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app
COPY . .

# Expose the port that Strapi runs on
EXPOSE 1337

# Command to start Strapi
CMD ["npm", "run", "develop"]

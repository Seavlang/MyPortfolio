FROM node:22.12.0 AS builder

# Set the working directory
WORKDIR /app

COPY package*.json ./

# Install production dependencies
RUN yarn install

# Copy the rest of the application files
COPY . .

# Build the application
RUN yarn build

# Continue write with another slide
FROM node:22.12.0 AS builder

# Set the working directory
WORKDIR /app

COPY package*.json ./

# Install production dependencies
RUN yarn install

# Copy the rest of the application files
COPY . .

# Build the application
RUN yarn build

# Continue write with another slide


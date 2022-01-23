# Stage 1 -  build process
FROM node as build-deps
WORKDIR /usr/src/app
COPY package*.json ./
COPY . ./
RUN npm ci --save react react-dom react-scripts
RUN npm run build

# Stage 2 - production environment 
FROM nginx:stable-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
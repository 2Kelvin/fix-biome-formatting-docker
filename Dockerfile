FROM node:alpine
RUN npm install -g @biomejs/biome
WORKDIR /biome-files-formatter
RUN mkdir files
COPY formatter.js ./formatter.js
CMD [ "node", "formatter.js" ]
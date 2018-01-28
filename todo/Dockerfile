FROM node:6.12.3-alpine
RUN mkdir -p /todo
COPY . /todo
WORKDIR "/todo"
RUN cd /todo
RUN npm install
CMD ["npm", "start"]
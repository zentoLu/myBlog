FROM node
RUN mkdir -p /blog/node
WORKDIR /blog/node

# Bundle app source
COPY . /blog/node
RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]

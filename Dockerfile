FROM 'node:13-alpine'
ENV NODE_ENV production

EXPOSE 9876

WORKDIR /letyouknow

RUN addgroup -g 2000 -S letyouknow && \
    adduser -u 2000 -S letyouknow -G letyouknow && \
    chown letyouknow:letyouknow /letyouknow

USER letyouknow

COPY package*.json ./
RUN npm i -P
COPY . .

CMD ["node", "./bin/letyouknow.js"]

FROM node

RUN npm install -g pnpm

EXPOSE 4321

CMD ["pnpm", "build", "postbuild", "preview"]

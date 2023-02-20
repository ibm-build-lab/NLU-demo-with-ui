# Build step
FROM node:alpine3.10 as build-step

RUN mkdir /app
WORKDIR /app

COPY package.json /app
RUN npm install
COPY . /app

RUN npm run build

# Run Steps
FROM registry.access.redhat.com/ubi8/nginx-120
COPY --from=build-step /app/build /tmp/src/

# Add application sources to a directory that the assemble script expects them
# and set permissions so that the container runs without root access
USER 0
RUN chown -R 1001:0 /tmp/src/
USER 1001

# Let the assemble script install the dependencies
RUN /usr/libexec/s2i/assemble

# Run script uses standard ways to run the application
CMD /usr/libexec/s2i/run

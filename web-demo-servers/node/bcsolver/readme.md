# Demo Backend for Course Project

This is a demonstration server for the course project.  This demonstrates some of nodes architecture features leveraging the `fastify` project.

Some of the interesting aspects include managing plugins, building servers that validate input using `json-schema`, properly managing secrets for a reverse proxy to `github apis`, swagger documentation and a few other things.

In order to execute the server in watch mode:

`yarn run watch`

Also make sure you have a personal github action token and set it up in a file named `.env` as this file will not be pushed to the github repository.
# File Upload using NestJS & Multer


This repo is consists of File Upload to the Database (Postgres) and Fetch the uploaded image to the browser


## Tech

This repo used some packages like:

- [NestJS] - A progressive Node.js framework for building efficient, reliable and scalable server-side applications.
- [Typeorm] - ORM that can run on Node.JS
- [Postgres] - Database
- [Multer] - a node.js middleware for handling `multipart/form-data`, which is primarily used for uploading files
- [Sharp] - for converting large images to a common file format like JPG, PNG, etc, As well as resizing images.
- [Joi] - validation library that allows you to build schemas to validate JavaScript objects


## Installation

This Project requires [Node.js](https://nodejs.org/) v10+ to run.

Note: Provide a `.dev.env` on the root directory, with a content like this, or else `Joi`(schema validation) will return an error.
```
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_NAME=testdb
DB_USERNAME=postgres
DB_PASSWORD=postgres
```

Install the dependencies and start the server.

```sh
cd nestjs-multer-sample
npm i
npm run start:dev
```


[//]: # (links)

   [NestJS]: <https://nestjs.com/>
   [Typeorm]: <https://typeorm.io/>
   [Postgres]: <https://www.postgresql.org/>
   [Multer]: <https://www.npmjs.com/package/multer/>
   [Sharp]: <https://www.npmjs.com/package/sharp>
   [Joi]: <https://github.com/sideway/joi>


# HackerHome Photo Module

> Photo Gallery and Carousel Module for HackerHome, a short-term vacation rental


## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)

## Usage

```bash
# clone this repository
$ git clone https://github.com/hacker-home/Photo-Module.git

# Install dependencies
$ npm install

# Create CSV file to insert into SQL database
$ npm run seedFile

# Bundle files with webpack
$ npm run react-dev

# Run the app
$ npm run start
```

## Requirements

- [npm](http://npmjs.com)
- [Node.js](https://nodejs.org/en/download/)
- [Git](https://git-scm.com)

### Installing Dependencies

From within the root directory:

```sh
npm install
```

### SDC CRUD ROUTES:

#### GET ('/listings/:id')

> express route which serves up one listing info object from the db with the id parameter

#### POST ('/listings')

> express route which inserts a listing info object into the db

#### PUT ('/listings/:id')

> express route which updates a listing info object in the db with the id parameter

#### DELETE ('/listings/:id')

> express route which deletes a listing info object in the db with the id parameter

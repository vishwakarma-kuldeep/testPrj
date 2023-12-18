# Project Name: Practical

## Description
This project is a practical application built with NestJS, utilizing various dependencies to create a powerful API.


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
  - [Development](#development)
  - [Production](#production)
- [Testing](#testing)
- [API Documentation](#api-documentation)
- [Environment Variables](#environment-variables)
- [Dependencies](#dependencies)
- [License](#license)
- [Contributing](#contributing)
- [Support](#support)
- [Acknowledgements](#acknowledgements)

## Installation
To get started with this project, follow these steps:

1. Clone the repository.
2. Go to the project directory.
3. Run `npm install` to install the necessary dependencies.
4. Create a `.env` file in the root directory and add the required environment variables.
5. Run `npm run start:dev` to start the application in development mode.
6. Run `npm run build` to build the application for production.
7. Run `npm run test` to run the tests for the application.


## Usage
### Development
To start the application in development mode, use the following command:
```bash
npm run start:dev

### Production
To start the application in production mode, use the following command:
```bash
npm run build
```
## Testing
To run the tests for this project, use the following command:
```bash
npm run test
```
## API Documentation
<!-- First the user need to run the application then go to the localhost:8000/api-docs -->
The API documentation is available at [http://localhost:8000/api-docs](http://localhost:8000/api-docs).

## Environment Variables
The following environment variables are required to run this project:
- `PORT` - The port number to run the application on.
- `MONGO_URI` - The URI for the MongoDB database.
- `JWT_SECRET` - The secret key to use for JWT authentication.

## Dependencies
The following dependencies are used in this project:
- `@nestjs/common` - The core NestJS framework.
- `@nestjs/config` - A module for loading environment variables.
- `@nestjs/jwt` - A module for JWT authentication.
- `@nestjs/mongoose` - A module for MongoDB integration.
- `@nestjs/swagger` - A module for generating API documentation.
- `@nestjs/testing` - A module for testing NestJS applications.
- `bcrypt` - A module for hashing passwords.
- `class-transformer` - A module for transforming class instances.
- `class-validator` - A module for validating class instances.
- `dotenv` - A module for loading environment variables.

## License
This project is licensed under the MIT license.

## Contributing
To contribute to this project, please create a pull request with a detailed description and we will get back to you as soon as possible.

## Support
If you have any questions, please [open an issue](https://github.com/vishwakarma-kuldeep/test.git/issues/new) and we will get back to you as soon as possible.

## Acknowledgements
- [NestJS](https://nestjs.com/)
- [Swagger](https://swagger.io/)
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://jwt.io/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [class-transformer](https://www.npmjs.com/package/class-transformer)
- [class-validator](https://www.npmjs.com/package/class-validator)
- [dotenv](https://www.npmjs.com/package/dotenv)



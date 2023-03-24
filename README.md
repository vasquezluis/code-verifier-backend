
# MERN stack

MERN stack using tutorials of OpenBootcamp


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` 3000


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Run Locally

Clone the project

```bash
  git clone https://gitlab.com/vasquezluis/code-verifier-backend/-/pipelines
```

Go to the project directory

```bash
  cd code-verifier-backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Dependencies

  "devDependencies": {

    "@types/express": "^4.17.17", // tipos de datos para express
    "@types/jest": "^29.5.0", // tipos de datos para jest
    "@types/morgan": "^1.9.4", // tipos de datos para morgan
    "@types/node": "^18.15.7", // tipos de datos para node
    "@typescript-eslint/eslint-plugin": "^5.56.0", // tipos de datos para eslint
    "eslint": "^8.36.0", // analizador de codigo
    "eslint-config-standard-with-typescript": "^34.0.1", // analizador de codigo
    "eslint-plugin-import": "^2.27.5", // analizador de codigo
    "eslint-plugin-n": "^15.6.1", // analizador de codigo
    "eslint-plugin-promise": "^6.1.1", // analizador de codigo
    "jest": "^29.5.0", // framework de testing
    "nodemon": "^2.0.22", // paquete para reiniciar el servidor automaticamente
    "serve": "^14.2.0", // servidor de paginas estaticas
    "standard": "^17.0.0", // formateador de codifo
    "supertest": "^6.3.3", // modulo para HTTP testing
    "ts-jest": "^29.0.5", // jest para TS
    "ts-node-dev": "^2.0.0", // restablece el servidor creado con TS
    "typescript": "^5.0.2", // typescript
    "webpack": "^5.76.3", // paquete de javascript para crear archivos estaticos
    "webpack-cli": "^5.0.1", // cli oficial para webpack
    "webpack-node-externals": "^3.0.0", // paquete que ignora node_modules en webpack
    "webpack-shell-plugin": "^0.5.0" // corre comandos de shell antes o despues de webpack building
  },
  "dependencies": {

    "dotenv": "^16.0.3", // carga las variables de entorno
    "express": "^4.18.2", // web framework para nodejs
    "morgan": "^1.10.0" // middleware logger http para nodejs
  }
## NPM scripts

  "scripts": {

    "start": "node ./dist/index.js",
    "build": "npx tsc",
    "dev": "ts-node-dev --respawn --transpile-only ./src/index.ts",
    "test": "jest",
    "serve:coverage": "npm run test && cd ./coverage/lcov-report && npx serve"
    
  },
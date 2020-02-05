import { cleanEnv, str } from 'envalid';
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerJSDoc from 'swagger-jsdoc';
import {Application}  from 'express';

function swaggerIgnite(applicationInstance:Application) {
	const { PORT, APP_PATH } = process.env;
    // Swagger definition
    const swaggerDefinition = {
      info: {
        title: 'REST API for my App', // Title of the documentation
        version: '1.0.0', // Version of the app
        description: 'This is the REST API for my product', // short description of the app
      },
      host: APP_PATH+':'+PORT, // the host or url of the app
      basePath: '/', // the basepath of your endpoint
	  schemes: [
        "https",
        "http"
      ],
    };

    // options for the swagger docs
    const options = {
      // import swaggerDefinitions
      swaggerDefinition,
      // path to the API docs
      apis: ["./src/swagger-docs/**/*.yaml"],
    };
    // initialize swagger-jsdoc
    const swaggerSpec = swaggerJSDoc(options);

    // use swagger-Ui-express for your app documentation endpoint
    applicationInstance.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

export default swaggerIgnite;

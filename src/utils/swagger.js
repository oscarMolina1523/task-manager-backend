import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Task Manager API',
      version: '1.0.0',
      description: 'API for managing tasks',
    },
    servers: [
      {
        url: 'http://localhost:5000/api', 
      },
    ],
  },
  apis: ['./src/routes/*.js', './src/controllers/*.js'], 
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app) => {
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;

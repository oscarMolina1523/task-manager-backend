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
        url: 'https://task-manager-backend-production-23f2.up.railway.app/', 
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

<h1 align="left">Task Manager -Backend Documentation</h1>

###

<h2 align="left">Descripción del Proyecto</h2>

###

<p align="left">Task Manager es una API RESTful desarrollada para gestionar tareas. Proporciona las operaciones esenciales para crear, leer, actualizar y eliminar tareas, con un diseño robusto y escalable. Cuenta con authentiacion y proteccion de Endpoints atraves de JWT</p>

###

<h2 align="left">Características Principales</h2>

###

<h3 align="left">Recursos Principales</h3>

###

<p align="left">ID: Generado automáticamente.<br><br>Título (title): Texto obligatorio.<br><br>Descripción (description): Texto opcional.<br><br>Estado (completed): Booleano, por defecto false.<br><br>Fecha de creación (createdAt): Generada automáticamente.</p>

###

<h3 align="left">Endpoints</h3>

###

<h4 align="left">- POST /api/tasks</h4>

###

<p align="left">Crea una nueva tarea.<br><br>Valida que el campo title esté presente.</p>

###

<h4 align="left">- GET /api/tasks</h4>

###

<p align="left">Devuelve la lista de tareas.<br><br>Incluye opción de filtrar por estado (completed o pending).</p>

###

<h4 align="left">- GET /api/tasks/:id</h4>

###

<p align="left">Devuelve los detalles de una tarea específica.</p>

###

<h4 align="left">- PUT /api/tasks/:id</h4>

###

<p align="left">Actualiza los campos de una tarea existente.</p>

###

<h4 align="left">- DELETE /api/tasks/:id</h4>

###

<p align="left">Elimina una tarea por su ID.</p>

###


<h4 align="left">- POST /api/register</h4>

###

<p align="left">Crea una nueva cuenta.<br><br>Valida que los campos email y password sean validos.</p>

###
<h4 align="left">- POST /api/login</h4>

###

<p align="left">Valida un inicio de sesion.</p>

###

<h3 align="left">Requerimientos Técnicos</h3>

###

<h4 align="left">1. Base de Datos</h4>

###

<p align="left">MongoDB con Mongoose.</p>

###

<h4 align="left">2. Validaciones</h4>

###

<p align="left">Uso de express-validator para garantizar la integridad de los datos.</p>

###

<h4 align="left">3. Documentación</h4>

###

<p align="left">Endpoints documentados con Swagger.</p>

###

<h4 align="left">4. Manejo de Errores</h4>

###

<p align="left">Respuestas claras y estructuradas para códigos de error como 400, 404 y 500.</p>

###

<h2 align="left">Instalación y Configuración Local</h2>

###

<h3 align="left">Prerrequisitos</h3>

###

<p align="left">· Node.js >= 14.x<br><br>· MongoDB (local o en la nube)</p>

###

<h3 align="left">Pasos para la Configuración</h3>

###

<p align="left">1. Clona el repositorio:<br><br>https://github.com/oscarMolina1523/task-manager-backend.git</p>

###

<p align="left">2. Instala las dependencias:<br><br>cd task-manager-backend<br>npm install</p>

###

<p align="left">3. Inicia el servidor con el comando:<br><br>npm run start <br><br>El servidor estará disponible en http://localhost:5000</p>

###

<h2 align="left">Documentación de la API</h2>

###

<p align="left">La documentación está disponible en formato Swagger. Una vez que el servidor esté corriendo, acceda a:<br><br>- Corriendo en local:<br><br>http://localhost:5000/swagger/#/<br><br>- Corriendo en producción:<br><br>https://task-manager-backend-production-23f2.up.railway.app/swagger/#/</p>

###

<h2 align="left">Despliegue</h2>

###

<p align="left">El backend está desplegado en Railway. Accede a la API en:<br><br>https://task-manager-backend-production-23f2.up.railway.app/swagger/#/</p>

###

<h2 align="left">Estructura del Proyecto</h2>

###

<p align="left">/task-manager-backend<br>├── controllers<br>│   └── taskController.js <br>│ └── authController.js<br>├── models<br>│   └── taskModel.js <br>│   └── userModel.js<br>├── routes<br>│   └── taskRoutes.js <br>│   └── authRoutes.js<br>├── middlewares<br>│   └── errorHandler.js <br>│   └── authMiddleware.js<br>├── config<br>│   └── db.js<br>├── utils<br>│   └── swagger.js<br>├── app.js<br>├── package.json<br>├── server.js<br>├── .env</p>

###

<h3 align="left">Descripción</h3>

###

<p align="left">1. controllers: Contiene la lógica de negocio de los endpoints.<br><br>2. models: Define los esquemas de Mongoose para la base de datos.<br><br>3. routes: Define las rutas de la API.<br><br>4. middleware: Middleware personalizado para manejo de errores y otros procesos.<br><br>3. config: Configuración de la base de datos y variables de entorno.<br><br>4. utils: Documentacion del swagger clara y detallada.</p>

###

<h3 align="left">Buenas Prácticas Implementadas</h3>

###

<p align="left">1. Validaciones<br><br>Uso de express-validator para validar entradas del usuario.<br><br>2. Documentación<br><br>Swagger integrado para facilitar la comprensión y el uso de la API.<br><br>3. Manejo de Errores<br><br>Middleware centralizado para manejar errores de manera uniforme.<br><br>4. Estructura Modular<br><br>Código organizado en capas claras (controladores, rutas, modelos).<br><br>5. Seguridad<br><br>Variables de entorno protegidas mediante .env.</p>

###

<h2 align="left">Autor:</h2>

###

<h3 align="center">Oscar Danilo Molina</h3>

###

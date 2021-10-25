const express = require('express')
const cors = require('cors');
// const swaggerJSDoc = require('swagger-jsdoc');
// const swaggerUI = require('swagger-ui-express');
const CourseRoute = require('./routes/CourseRoute');
const MaterialRoute = require('./routes/MaterialRoute');
const StudentRoute = require('./routes/StudentRoute');
const VideoLectureRoute = require('./routes/VideoLectureRoute');
const AuthRoute = require('./routes/AuthRoute');
const InstructorRoute = require('./routes/InstructorRoute');
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use('/api/courses', CourseRoute);
app.use('/api/materials', MaterialRoute);
app.use('/api/students', StudentRoute);
app.use('/api/video_lectures', VideoLectureRoute);
app.use('/api/auth', AuthRoute);
app.use('/api/instructors', InstructorRoute);
//Swagger Configuration
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');
const Process = require("process");
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);
const PORT=process.env.PORT||5050
app.listen(PORT, function () {
  console.log(`App runs on port ${PORT}`)
});
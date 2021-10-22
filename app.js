const express = require('express')
const cors = require('cors');
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
app.listen(5050, function () {
  console.log('CORS-enabled web server listening on port 5050')
});
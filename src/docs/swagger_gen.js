import swaggerAutogen from "swagger-autogen";
import{dirname} from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const dir_name = dirname(__filename);
const segments = dir_name.split('/');
const modifiedSegments = segments.slice(0, -1);
const newDirname = modifiedSegments.join('/');
console.log(newDirname);
const doc = {
  info: {
    title: 'Attendance Monitoring',
    description: 'Monitor attendance of students by teachers'
  },
  host: 'localhost:3000'
};

const outputFile = './swagger-output.json';
const routes =  [
    `${newDirname}/routes/create_endpoints/attendance.js`,
    `${newDirname}/routes/create_endpoints/students.js`,
    `${newDirname}/routes/create_endpoints/teachers.js`,
    `${newDirname}/routes/delet_endpoints/attendance.js`,
    `${newDirname}/routes/delet_endpoints/students.js`,
    `${newDirname}/routes/delet_endpoints/teachers.js`,
    `${newDirname}/routes/read_endpoints/attendance.js`,
    `${newDirname}/routes/read_endpoints/students.js`,
    `${newDirname}/routes/read_endpoints/teachers.js`,
    `${newDirname}/routes/update_endpoints/attendance.js`,
    `${newDirname}/routes/update_endpoints/students.js`,
    `${newDirname}/routes/update_endpoints/teachers.js`,
];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */
swaggerAutogen(outputFile, routes, doc)
const express = require("express");
const{createUserRoutes}= require("./Routes/user");
const{createCourseRoutes}= require("./Routes/courses");
const app = express();

app.use("./user, createUserRoutes")
app.use("./course, createCourseRoutes")

createUserRoutes(app);
createCourseRoutes(app);


app.listen(3000);










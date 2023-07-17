import express from "express";
import 'dotenv/config';
import { userRoutes } from "./src/api/student/controller";

const app = express();
const port = process.env.APP_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(userRoutes);

app.listen(port, function() {
  console.log('App listening on port ' + port);
});

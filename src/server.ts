import express from 'express';
import helmet from "helmet";
import path from "path";
import routes from "./routes";
import {errorHandler, notFoundRequest} from "./routes/notFoundRequest";

const app = express();
const port = 3000;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', routes);
app.use(notFoundRequest);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Servidor iniciado no link http://localhost:${port}`);
});

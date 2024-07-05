import express from 'express';
import helmet from "helmet";
import path from "path";
import routes from "./routes";
import productsRouter from "./routes/products";
import voosRouter from "./routes/voos";

const app = express();
const port = 3000;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/products', productsRouter);
app.use('/voos', voosRouter);
app.use('/', routes);

app.listen(port, () => {
    console.log(`Servidor iniciado no link http://localhost:${port}`);
});

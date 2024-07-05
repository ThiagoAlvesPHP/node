import express from 'express';
import helmet from "helmet";
import path from "path";

const app = express();
const port = 3000;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.json({message: 'Hello World!'});
});

app.get('/ping', (req, res) => {
    res.json({message: 'Pong!'});
});

app.get('/products', (req, res) => {
    res.json({products: ['Camiseta', 'Calça', 'Sapato']});
});

// exemplo de rota dinamica http://localhost:3000/voos/x/y
app.get('/voos/:from/:to', (req, res) => {
    let {from, to} = req.params;

    res.json({
        flight: {
            from: from.toUpperCase(),
            to: to.toUpperCase()
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor iniciado no link http://localhost/${port}`);
});

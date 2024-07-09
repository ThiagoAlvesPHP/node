import {readFile, unlink, writeFile} from "node:fs/promises";

const exec = async () => {
    // escrever aquivo
    // console.log('escrevendo no arquivo');
    // const list = ["teste", "teste2", "teste3"];
    // const listTxt = list.join("\n");
    // await writeFile('./teste.txt', listTxt);
    // console.log('pronto');

    // ler arquivo
    // const text = await readFile('./teste.txt', 'utf-8');
    // const list = text.split("\n");
    // console.log(list);

    // preservar e escrever algo novo
    // const text = await readFile('./teste.txt', 'utf-8');
    // const list = text.split("\n");
    // list.push("novo item");
    // const listTxt = list.join("\n");
    // await writeFile('./teste.txt', listTxt);

    // exluir arquivo
    // await unlink('./teste.txt');
}

exec();
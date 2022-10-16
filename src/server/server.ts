import express from 'express';

const server = express();

server.get('/', (req, res) => {
    return res.json({message: "Bem vindo a minha API"})
});



export { server };
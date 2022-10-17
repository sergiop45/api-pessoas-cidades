import { server } from './server/server';

server.listen(process.env.PORT, () => {
    console.log("Server Rodando na porta "+ process.env.PORT);
});
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
server_1.server.listen(process.env.PORT, () => {
    console.log("Server Rodando na porta " + process.env.PORT);
});

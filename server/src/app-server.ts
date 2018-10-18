import { createServer, Server } from 'http';
import * as socketIo from 'socket.io';
import * as express from 'express';

export class AppServer {
    public static readonly PORT = 3000;
    private app: express.Express;
    private port: string | number;
    private io: SocketIO.Server;
    private server: Server;

    constructor() {
        this.port = process.env.PORT || AppServer.PORT;
        this.app = express();
        this.server = createServer(this.app);
        this.io = socketIo(this.server);
    }

    public listen() {
        this.server.listen(this.port, () => {
            console.log(`Running server on port ${this.port}`);
        });

        this.io.on('connect', (socket: SocketIO.Socket) => {
            console.log('Client connected');

            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });
        });
    }
}
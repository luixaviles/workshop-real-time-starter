import { createServer, Server } from 'http';
import * as socketIo from 'socket.io';
import * as express from 'express';
import { Message } from './message';
import { MessageGenerator } from './message-generator';

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
            const generator = new MessageGenerator();
            console.log('Client connected');

            socket.on('message', (m: Message) => {
                console.log('Message received: ' + JSON.stringify(m));
            });

            let interval = setInterval(() => {
                const message = generator.generateMessage();
                console.log('sending message: ' + JSON.stringify(message));
                this.io.emit('message', message);
            }, 1000);

            socket.on('disconnect', () => {
                console.log('Client disconnected');
                clearInterval(interval);
            });
        });
    }
}
import * as express from 'express';

export class AppServer {
    public static readonly PORT:number = 3000;
    private app: express.Express;
    private port: string | number;

    constructor() {
        this.port = process.env.PORT || AppServer.PORT;
        this.app = express();
    }

    public listen() {
        this.app.get('/', (req, res)=> res.send('hello world'));
        this.app.listen(this.port, ()=> {
            console.log('Running');
        });
    }
}
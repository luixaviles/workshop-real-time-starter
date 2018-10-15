# Workshop
This is the starter project to build a real-time app from scratch.

# Running project locally
## Prerequisites

Make sure you have the following installed:

* Node.js (Latest LTS version)
* Git
* Angular CLI 

## Clone repository

```bash
git clone https://github.com/luixaviles/workshop-real-time-starter
cd workshop-real-time-starter
```

# Run Node.js Server

To run server locally, just run the following commands:

```
cd server
npm install 
npm run webpack
npm run start
```

If you don't want to use webpack, you can run:

```
cd server
npm install
tsc
npm run start
```

# Run Angular Client

Open other command line window and run the following commands:

```bash
cd client
npm install
ng serve -o
```

Your default browser will be opened in [http://localhost:4200](http://localhost:4200/)

## License

MIT


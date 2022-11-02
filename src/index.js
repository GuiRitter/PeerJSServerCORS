import 'dotenv/config'; // always first import
import express from 'express';
import 'babel-polyfill';
import cors from 'cors';

const { ExpressPeerServer } = require('peer');

const app = express();

const peerServer = ExpressPeerServer(server, {
	path: '/api'
});

app.options('*', cors()); // include before other routes

// Add middleware for parsing URL encoded bodies (which are usually sent by browser)
app.use(cors());
// Add middleware for parsing JSON and urlencoded data and populating `req.body`
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/peerjs-server', peerServer);

app.listen(process.env.PORT, '127.0.0.1').on('listening', () => {
	console.log(`${(new Date()).toISOString()} are live on ${process.env.PORT}`);
});

export default app;

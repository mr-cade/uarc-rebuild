const Koa = require('koa');
const mongoose = require('mongoose');
const indexRoutes = require('./routes/index');
const membersRoutes = require('./routes/db/members');

/**
 * Koa app */
const app = new Koa();
const PORT = process.env.PORT || 1337;
const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

/**
 * MongoDB connection */
const connStr =  'mongodb://mongo:27017/default';
mongoose.connect(connStr);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('connected');
});

app.use(indexRoutes.routes());
app.use(membersRoutes.routes());

module.exports = server;
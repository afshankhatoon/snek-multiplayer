#!/usr/bin/env node

process.stdout.write('\x07');

const { Game } = require('./src/Game')
const { UserInterface } = require('./src/UserInterface')
const { RemoteInterface } = require('./src/RemoteInterface')
const game = new Game(new UserInterface(), new RemoteInterface())

// Begin game
game.start()

//const net = require('net');
const {connect} = require('./client');
const {setupInput} = require('./input');
 /* const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Game Server says: ', data);
  });
  return conn;
} */
/* const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}

const handleUserInput = function(data){

};
setupInput(handleUserInput); */
console.log('Connecting ...');
//connect();
const conn = connect();
setupInput(conn);

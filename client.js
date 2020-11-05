const net = require('net');
const connect = function(){
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.setEncoding('utf8');
  conn.on('connect',() => {
    console.log("Successfully connected to game server");
  });
  conn.on('connect', () => {
    conn.write('Name: AJK');
  });
  conn.on('data', (data) => {
    console.log('Game Server says: ', data);
  });
  return conn;
}

module.exports = connect;


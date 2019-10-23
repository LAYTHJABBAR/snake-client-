const net = require('net');
const {IP, port} = require("./constants")
const connect = function() {
const conn = net.createConnection({ 
    host: IP, // change to IP address
    port: port
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    conn.write('Hello from client Layth');
    conn.write('Name: LAY')
  });
    // interpret incoming data as text
    conn.setEncoding('utf8'); 
    return conn;
  }
  module.exports =  { connect }
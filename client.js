const net = require('net');
const connect = function() {
const conn = net.createConnection({ 
    host: '192.168.15.225', // change to IP address
    port: '50541'
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
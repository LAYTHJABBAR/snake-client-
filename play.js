const net = require('net');
const { connect } = require('./client')
const { setupInput } = require('./input')
console.log('Connecting ...');
const dir = connect () ;

setupInput(dir);
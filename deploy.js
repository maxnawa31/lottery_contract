const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {
  interface,
  bytecode
} = require('./compile');

const provider = new HDWalletProvider(
  'share area pattern swing picture danger busy action excite balance blouse where', 'https://ropsten.infura.io/v3/fc64655ef2534529ab07af664d5f3d5a'
)

const web3 = new Web3(provider)
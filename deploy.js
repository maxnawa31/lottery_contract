const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {
  interface,
  bytecode
} = require('./compile');

const provider = new HDWalletProvider(
  'share area pattern swing picture danger busy action excite balance blouse where', 'https://ropsten.infura.io/v3/fc64655ef2534529ab07af664d5f3d5a'
)

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts;
  console.log('attempting to deploy from account', accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface)).deploy({data: bytecode}).send({gas:'1000000', from: accounts[0]});
  console.log('contract deployed');
}

deploy()
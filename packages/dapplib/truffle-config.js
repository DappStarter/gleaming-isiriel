require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess glimpse flame suspect notice crime remember common harvest nation flock such'; 
let testAccounts = [
"0x1f81e9542958c7e9b1cbb048fb1efadafaee1fca6478f9fcc08fd76c4d41a070",
"0x66345b60dc68f4fdd86068ec9ab697d47856a73242ffd793ec4eeabad7c30fdc",
"0x0aedf2362bfe0d5649a4c7feae65cc55bc6440fdec0670ac60c00baa23697d5f",
"0xb029e9ef0c6936588e25128b5353e78ab831ddf1bc1398f9a52685a826e82a01",
"0x9426dce9f5cdee904d9e27d205bc3d0e581e32f0d77c0261e4e369bac5512a96",
"0x4508e6574459f7d286dc37efa0ef1cd1186f97e9fa0359316a13cb23b66bdbd0",
"0xb8649e54c00ceae7fcec629bb60f3e500d18c6750e45198f4125d88bc4a64210",
"0x0216114edca360ed0369c5226fadd7d69adae6bd2e141cec5be36fd3abec7a28",
"0x9422c5c0300641cf638c0be4fec6e04061b1c50d0327ac15076e7392ab230557",
"0x09fc2ce8b5a4e7d4c8f5cd65b6b7b572e381e111e2b805fa6292ad05b9cfca02"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

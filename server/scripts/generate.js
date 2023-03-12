const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require ("ethereum-cryptography/utils") ;
const { keccak256 } = require ("ethereum-cryptography/keccak");

const privateKey = secp.utils.randomPrivateKey();
console.log('privateKey:', toHex(privateKey));

const publicKey = secp.getPublicKey(privateKey);
console.log('publicKey:', toHex(publicKey)) ;

const address = keccak256(publicKey.slice(1)).slice(-20);
console.log('address:', `0x${toHex(address)}`);



/* Here i am pasting the generated private key, public key and addresses 
privateKey: a9a7f711c7c4da72ff998681ed1cb4fad1e5dd36f1e45b16c2da4e6089e8f83e
publicKey: 04fa03f2b37d45e9c0e576d907ddcdb2811995810831b1710d519accf98c5197235cb287064b596dfe86f9a4553358959d636e5328bf1214755555b03b366fad73
address: 0xdd3e1a502253a540a0948ee91dd8e7097343dca9


privateKey: caf74a72ba0a2073088b253b186a4f2450f2b7595e7fa290c8f5d4efcab142a1
publicKey: 04015f22c4fd8866e832cc20eb241f05d4382a4ed17d440dfe5b1a24fdd0ee215e43197a8b5d0926ba5be80cb9d1156773388ec5c71fe94b20fb409ab01d56f103
address: 0x0c9a2c707e181e55ff3ce1d7c71c8a2cdac051f6

privateKey: 69503c87268491b85f2b977590aae42c4d70a8a21d927151d5117fb9d0db8f37
publicKey: 044673639688ab0acfe3c3d0ab70d76987605f8ad1925a467365b67327012afe30030ca08362421bf6eccfca74b021ed512d1986f051a8bad219c92c40f224cf26
address: 0x2c489859c3f7e8290987b868b03d883b3ef827c0
*/
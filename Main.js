const chandrayaan = require('./chandrayaan');

const chandrayaan = new chandrayaan(0, 0, 0, 'N');
const commands = ['f', 'r', 'u', 'b', 'l'];
chandrayaan.executeCommands(commands);
console.log('Final Position:', chandrayaan.getCurrentPosition());
console.log('Final Direction:', chandrayaan.getCurrentDirection());



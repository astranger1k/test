const { ShardingManager } = require('discord.js');
const path = require('path');
const { TOKEN } = process.env;
const manager = new ShardingManager(path.join(__dirname, 'XiaoBot.js'), { token: MzYzNDAzNDYwMDg0NzYwNTc3.DLAuEg.fQvvGSXZlJ69jUDp5bQs83m7U_0 });
manager.spawn(undefined, 1000);

const fs = require('fs-extra');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from config.env if it exists
if (fs.existsSync(path.join(__dirname, 'config.env'))) {
  dotenv.config({ path: path.join(__dirname, 'config.env') });
}

// Check for required environment variables and provide defaults where appropriate
if (!process.env.OWNER_NUMBER) {
  console.error('Error: OWNER_NUMBER is not set in environment variables.');
  process.exit(1);
}
if (!process.env.MONGODB_URI) {
  console.warn('Warning: MONGODB_URI is not set. Using default URI.');
}

global.owner = process.env.OWNER_NUMBER.split(",");
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Demith123:demith1234@cluster0.nld90.mongodb.net/";
global.port = process.env.PORT || 5000;
global.email = 'anushadilrukshini7@gmail.com';
global.github = 'https://github.com/demithdj/KING-VAJIRA-MD';
global.location = 'Sultanpur IN';
global.gurl = 'https://instagram.com/'; // add your username
global.sudo = process.env.SUDO || '94703329046';
global.devs = '94703329046';
global.website = 'https://github.com/demithdj/KING-VAJIRA-MD'; //wa.me/+25000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/fb7993e24f7ecdaecbed5.jpg';

module.exports = {
  botname: process.env.BOT_NAME || 'KING VAJIRA 𝐁𝐨𝐭',
  ownername: process.env.OWNER_NAME || 'KING VAJIRA',
  sessionName: process.env.SESSION_ID || false,
  author: process.env.PACK_INFO ? process.env.PACK_INFO.split(";")[0] : 'king vajira',
  auto_read_status: process.env.AUTO_READ_STATUS || false,
  packname: process.env.PACK_INFO ? process.env.PACK_INFO.split(";")[1] : 'KING VAJIRA-Md',
  autoreaction: process.env.AUTO_REACTION || false,
  antibadword: process.env.ANTI_BAD_WORD || 'nbwoed',
  alwaysonline: process.env.ALWAYS_ONLINE || false,
  antifake: process.env.FAKE_COUNTRY_CODE || '971',
  readmessage: process.env.READ_MESSAGE || false,
  auto_status_saver: process.env.AUTO_STATUS_SAVER || false,
  HANDLERS: process.env.PREFIX ? process.env.PREFIX.split(',') : ['.'],
  warncount: process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || false,
  levelupmessage: process.env.LEVEL_UP_MESSAGE || false,
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',
  autobio: process.env.AUTO_BIO || false,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || false,
  heroku: process.env.heroku || false,
  HEROKU: {
    HEROKU: process.env.HEROKU || false,
    API_KEY: process.env.HEROKU_API_KEY || '',
    APP_NAME: process.env.HEROKU_APP_NAME || ''
  },
  VERSION: process.env.VERSION || 'v.0.0.3',
  LANG: process.env.THEME || 'KING VAJIRA',
  WORKTYPE: process.env.WORKTYPE || 'public'
};

// Watch for changes in the current file and reload it if necessary
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update '${__filename}'`);
  delete require.cache[file];
  require(file);
});

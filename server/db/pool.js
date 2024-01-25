const os = require('os');
const mysql = require('mysql2/promise');
const config = require('../config')[process.env.NODE_ENV || 'development'];
// const { customConsoleLog, customConsoleError } = require('../utils/console');

const poolPromise = mysql.createPool(config);

poolPromise.on('error', (err, client) => {
  if (err) console.log(`> ${os.platform()}`);
  if (client) client.release();
});

// exit process & close Pool
const closePoolandExit = async () => {
  console.log('Pool closing');
  try {
    await poolPromise.end();
    console.log('Pool closed');
    process.exit(1);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

process.once('SIGTERM', async () => {
  console.log('SIGTERM');
  // customConsoleLog('SIGTERM');
  await closePoolandExit();
});

process.once('SIGINT', async () => {
  console.log('SIGINT');
  // customConsoleLog('SIGINT'); // Ctrl+C
  await closePoolandExit();
});

process.once('uncaughtException', async (err) => {
  console.log('uncaughtException', err);
  // customConsoleError('uncaughtException', err);
  await closePoolandExit();
});

module.exports = poolPromise;

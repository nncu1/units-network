const colors = require('colors');

function displayHeader() {
  process.stdout.write('\x1Bc');
  console.log(colors.cyan('========================================'));
  console.log(colors.cyan('=      Units Network Testnet BOT       ='));
  console.log(colors.cyan('========================================'));
  console.log();
}

module.exports = displayHeader;

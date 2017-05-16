const spawn = require('cross-spawn');
const path = require('path');

const s = `\\${path.sep}`;
const pattern = `test${s}.+\\.spec\\.js`;

spawn.sync(
  path.normalize('./node_modules/.bin/jest'),
  [pattern].concat(process.argv.slice(2)),
  { stdio: 'inherit' }
);

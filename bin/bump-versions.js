// -*- mode: js2-jsx; -*-
const fs = require('fs');
const path = require('path');
const argv = require('argv');
const semver = require('semver');

const packagePath = path.resolve('package.json');
const packageDetail = require(packagePath);
const manifestPath = path.resolve('src', 'manifest.json');
const manifestDetail = require(manifestPath);

argv.version(packageDetail.version);
argv.option({
  name: 'pretend',
  short: 'p',
  type: 'boolean',
  description: 'Run but do not make any changes',
});

const args = argv.run();

const oldVersion = packageDetail.version;
let newVersion;
if (['major', 'minor', 'patch'].includes(args.targets[0])) {
  newVersion = semver.inc(oldVersion, args.targets[0]);
} else {
  newVersion = semver.clean(args.targets[0]);
}

console.log(`${oldVersion} to ${newVersion}`);

if (!args.options.pretend) {
  packageDetail.version = newVersion;
  manifestDetail.version = newVersion;

  fs.writeFileSync(packagePath, JSON.stringify(packageDetail, null, 2));
  fs.writeFileSync(manifestPath, JSON.stringify(manifestDetail, null, 2));
}

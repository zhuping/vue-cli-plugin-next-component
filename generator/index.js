const fs = require('fs');
const path = require('path');
const process = require('process');
const upperCamelCase = require('uppercamelcase');

module.exports = (api, options, rootOptions) => {
  if (options.componentName) { 
    options.camelName = upperCamelCase(options.componentName);
  }

  api.render('./template', {
    ...options
  });

  api.onCreateComplete(() => {
    const baseDir = process.cwd();
    const oldPath = path.join(baseDir, 'packages/componentName');
    const newPath = path.join(baseDir, `packages/${options.componentName}`);
    fs.renameSync(oldPath, newPath);
  });
}
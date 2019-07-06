const config = require('./protractor.conf.js').config;

config.capabilities = {
  'browserName': 'chrome',
  'chromeOptions': {
    'args': ['--headless'].concat(config.capabilities.chromeOptions.args)
  }
};

exports.config = config;

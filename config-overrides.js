module.exports = {
  jest: (config, env) => {
    config.modulePaths = ['<rootDir>'];
    config.setupTestFrameworkScriptFile = '<rootDir>/src/setupTests.ts';
    return config;
  }
};

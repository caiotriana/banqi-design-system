const project = (() => {
  try {
    const { configureProjects } = require('react-native-test-app');
    return configureProjects({
      android: {
        sourceDir: 'android',
      },
      ios: {
        sourceDir: 'ios',
      },
      windows: {
        sourceDir: 'windows',
        solutionFile: 'windows/BanqiDesignSystemExample.sln',
      },
    });
  } catch {
    return undefined;
  }
})();

module.exports = {
  ...(project ? { project } : undefined),
};

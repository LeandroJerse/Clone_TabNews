module.exports = {
  testEnvironment: 'node',
  testMatch: [
    '**/testes/**/*.test.js',
    '**/testes/**/*.spec.js'
  ],
  watchPathIgnorePatterns: [
    'node_modules/',
    'coverage/',
    '.git/',
    'dist/',
    'build/'
  ],
  collectCoverageFrom: [
    '**/*.js',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!jest.config.js',
    '!**/*.test.js',
    '!**/*.spec.js'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html']
};

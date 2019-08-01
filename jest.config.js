module.exports = {
  moduleNameMapper: {
    '\\.(s?css)$': 'identity-obj-proxy',
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: [
    'jest-enzyme',
    'babel-polyfill',
  ],
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
  testMatch: [
    '**/__tests__/*.test.ts',
    '**/__tests__/*.test.tsx',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  verbose: true,
};

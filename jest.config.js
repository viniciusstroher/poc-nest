const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'ts-jest',
  rootDir: './',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths , { prefix: '<rootDir>/' }),
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  testEnvironment: 'node'
};
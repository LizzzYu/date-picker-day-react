import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	verbose: true,
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
	},
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
};

export default config;

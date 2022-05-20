module.exports = {
    setupFilesAfterEnv: [
        '@testing-library/react',
        '@testing-library/jest-dom'
    ],
    testMatch: [
        '**/?(*.)test.ts?(x)'
    ],
    globals: {
        'jest': {
            tsConfig: 'tsconfig.json',
            diagnostics: false,
        },
    },
    testEnvironment: 'jsdom',
}
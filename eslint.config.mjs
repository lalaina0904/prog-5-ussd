export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'commonjs',
            env: {
                node: true,
                es2021: true,
            },
            globals: {
                module: true,
                require: true,
                console: true,
            },
        },
        rules: {
            'no-console': 'off',
            'no-unused-vars': ['warn'],
        },
    },
];

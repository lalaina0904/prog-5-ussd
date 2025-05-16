export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'commonjs',
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

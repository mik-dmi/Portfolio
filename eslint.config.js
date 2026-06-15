import js from '@eslint/js';

export default [
    { ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**'] },
    js.configs.recommended,
    {
        rules: {
            'no-unused-vars': 'warn',
            'no-undef': 'warn',
        },
    },
];

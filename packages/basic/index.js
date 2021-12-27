module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    extends: ['standard', 'eslint:recommended'],
    parserOptions: {
        ecmaVersion: 13,
    },
    rules: {
        // import
        'import/order': 'error',
        'import/first': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-unresolved': 'off',
        'import/no-absolute-path': 'off',

        // Common
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'array-bracket-spacing': ['error', 'never'],
        camelcase: 'off',
        'comma-spacing': ['error', { before: false, after: true }],
        'comma-style': ['error', 'last'],
        'comma-dangle': ['error', 'always-multiline'],
        'no-constant-condition': 'warn',
        'no-debugger': 'error',
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'no-cond-assign': ['error', 'always'],
        'func-call-spacing': ['off', 'never'],
        'key-spacing': ['error', { beforeColon: false, afterColon: true }],
        indent: ['error', 4, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
        'no-restricted-syntax': [
            'error',
            'DebuggerStatement',
            'ForInStatement',
            'LabeledStatement',
            'WithStatement',
        ],
        'object-curly-spacing': ['error', 'always'],
        'no-return-await': 'off',
        'space-before-function-paren': ['error', 'never'],

        // es6
        'no-var': 'error',
        'prefer-const': [
            'error',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: true,
            },
        ],
        'prefer-arrow-callback': [
            'error',
            {
                allowNamedFunctions: false,
                allowUnboundThis: true,
            },
        ],
        'object-shorthand': [
            'error',
            'always',
            {
                ignoreConstructors: false,
                avoidQuotes: true,
            },
        ],
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'template-curly-spacing': 'error',
        'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
        'generator-star-spacing': 'off',
        'spaced-comment': ['error', 'always', {
            line: {
                markers: ['/'],
                exceptions: ['/', '#'],
            },
            block: {
                markers: ['!'],
                exceptions: ['*'],
                balanced: true,
            },
        }],
    },
};

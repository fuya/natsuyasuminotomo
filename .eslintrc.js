module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "node": true,
    },
    "extends": [
        "airbnb-base",
        "typescript",
        'plugin:vue/recommended',
    ],
    "parserOptions": {
        "ecmaVersion": 2017,
        "parser": "babel-eslint",
        "sourceType": "module",
    },
    "plugins": [
        "vue",
    ],
    "settings": {
        "import/resolver": {
            "alias": [
                ["~", __dirname],
            ]
        },
        "import/core-modules": [
            "vue",
        ],
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
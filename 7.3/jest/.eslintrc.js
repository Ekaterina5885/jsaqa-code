module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "prettier"
        
    ],
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module",
    },
    "rules": {
        "prettier/prettier": "error", 
        "no-multi-spaces": ['error'],
        "no-unused-vars":"warn",
        "no-console": "off",
        "func-names": "off",
        "class-methods-use-this": "off",
        "no-mixed-spaces-and-tabs": "off",
        
    }
};
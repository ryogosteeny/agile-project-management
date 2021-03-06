module.exports = {
    settings: {
        react: {
            version: "detect",
        },
    },
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["plugin:react/recommended", "standard", "react-app", "react-app/jest", "prettier"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        "no-use-before-define": "off",
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
    },
};

module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "parserOptions": {},
  "env": {
    "mocha": true,
    "browser": true
  },
  "settings": {},
  "rules": {
    "import/no-extraneous-dependencies": [
      "error", 
      {
        "devDependencies": [
        "**/test/**", 
        "**/*.test.js", 
        "**/*.test.jsx", 
        "**/*.spec.js"
        ]
      }
    ]
  }
};
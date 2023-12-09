# Webpack Template Repo

Created before starting the Weather App project (9 December 2023).

## Installation Steps

1. Run `npm init -y`
2. Run `npm i -D css-loader html-webpack-plugin sass sass-loader style-loader webpack webpack-cli webpack-dev-server webpack-merge`
3. Add to/change in **package.json**:

```
  "private": true,
  "scripts": {
    "build": "webpack --config webpack.prod.js",
    "dev": "webpack serve --config webpack.dev.js",
    "deploy": "git subtree push --prefix dist origin gh-pages"
  },
```

4. Run `npm init @eslint/config` and go through the configuration steps
5. Install **Prettier** like this:

- Run `npm i --D --save-exact prettier`
- Run `node --eval "fs.writeFileSync('.prettierrc','{}\n')"`
- Run `npm i --D eslint-config-prettier`

6. Change **eslintrc** to:

```
{
  "extends": [
    "some-other-config-you-use",
    "prettier"
  ]
}
```

7. Run `npx eslint-config-prettier PATH/TO/MAIN.js` to get conflicting rules
8. Make sure ESLint and Prettier work together well

### Optional

1. Install babel-loader for webpack, more info [here](https://github.com/babel/babel-loader).

# Using the Shared Stylelint Configuration

This document explains how to set up and use the shared stylelint configuration across multiple packages in your workspace.

## Setup for Each Package

1. Add the following dependencies to your package.json:

```json
"devDependencies": {
  "@garage44/stylelint-config": "> 1",
  "stylelint": "^15.10.3"
}
```

2. Create a `.stylelintrc.js` file in the root of your package:

```js
module.exports = {
  extends: ['@garage44/stylelint-config']
}
```

3. Add a script to your package.json:

```json
"scripts": {
  "lint:scss": "stylelint **/*.scss"
}
```

## Extending the Configuration

If you need to extend the base configuration for a specific package, you can add additional rules:

```js
module.exports = {
  extends: ['@garage44/stylelint-config'],
  rules: {
    // Your package-specific rules here
    'max-nesting-depth': 4,
    'string-quotes': 'single'
  }
}
```

## Using with CI/CD

To ensure all packages use the same stylelint rules in CI/CD pipelines, add a script to the root package.json:

```json
"scripts": {
  "lint:scss": "npm run lint:scss --workspaces"
}
```

This will run the stylelint checks across all packages that have the script defined.

## Recommended Workflow

1. Make changes to your SCSS files
2. Run stylelint to check for issues: `npm run lint:scss`
3. Fix any issues or add exceptions if necessary
4. Commit your changes
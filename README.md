# @garage44/stylelint-config

Shared stylelint configuration for Garage44 projects.

## Installation

```bash
npm install --save-dev @garage44/stylelint-config stylelint
```

## Usage

Create a `.stylelintrc.js` file in your project:

```js
module.exports = {
  extends: ['@garage44/stylelint-config']
};
```

Or in package.json:

```json
{
  "stylelint": {
    "extends": ["@garage44/stylelint-config"]
  }
}
```

## Extending

You can extend the configuration to add your own rules:

```js
module.exports = {
  extends: ['@garage44/stylelint-config'],
  rules: {
    // your custom rules here
  }
};
```
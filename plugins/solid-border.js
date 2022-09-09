const plugin = require('tailwindcss/plugin');

const boxShadow = plugin(function ({ addComponents }) {
  const components = {
    '.button-shadow': {
      boxShadow: '4px 4px 0px var(--tw-shadow)',
    },
  };
  addComponents(components);
});

module.exports = boxShadow;

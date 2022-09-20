const plugin = require('tailwindcss/plugin');

const components = plugin(function ({ addComponents, matchComponents, theme }) {
  const staticComponents = {
    'button-shadow': {
      boxShadow: '4px 4px 0px var(--tw-shadow)',
    },
  };

  const dynamicComponents = {
    'text-stroke': (value) => ({
      '--tw-shadow-colored': 'var(--tw-shadow-color)',
      textShadow: `-${value} -${value} var(--tw-shadow),
        ${value} -${value} var(--tw-shadow),
        -${value} ${value} var(--tw-shadow),
        ${value} ${value} var(--tw-shadow)`,
    }),
  };

  const values = { values: theme('textStroke') };

  addComponents(staticComponents);
  matchComponents(dynamicComponents, values);
});

module.exports = components;

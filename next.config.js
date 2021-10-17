const withLess = require("next-with-less");

module.exports = withLess({
  lessLoaderOptions: {
    /* ... */
    lessOptions: {
      /* ... */
      modifyVars: {
        'primary-color': '#1E213A',
        'text-selection-bg': '#1890FF',
        'font-family': 'Raleway, sans-serif',
        'menu-dark-bg': '#000000',
        'menu-dark-inline-submenu-bg': 'rgba(255, 255, 255, 0.1)'
        /* ... */
      },
    },
  },
  // reactStrictMode: true,
});


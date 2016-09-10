// RequireJS common config

/**
 *
 *
 * THIS FILE IS DEPRECATED
 *
 * It is only used by `grunt build`
 *
 * It will be deleted once css & tempaltes are
 * handled by webpack.
 *
 *
 */

require.config({
  baseUrl: '/assets/js',
  paths: {
    styles: '../css'
  },
  config: {
    css: {
      useLinks: true
    }
  },
  // time to wait for dynamic requires before erroring out
  waitSeconds: 9
});

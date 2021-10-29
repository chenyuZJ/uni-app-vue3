process.env.UNI_USING_VUE3 = true;
process.env.UNI_USING_VUE3_OPTIONS_API = true;
const path = require('path');
const vars = path.resolve(__dirname, 'src/style/variable.less');
const resolve = dir => {
  return path.join(__dirname, dir);
};
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@/': resolve('src'),
        '@/components': resolve('src/components'),
        '@/utils': resolve('src/utils'),
        '@/pages': resolve('src/pages'),
      },
    },
  },
  // css: {
  //   loaderOptions: {
  //     less: {
  //       globalVars: {
  //         hack: `true; @import "${vars}"`,
  //       },
  //     },
  //   },
  // },
};

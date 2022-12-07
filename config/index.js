'use strict';

const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    host: 'localhost',
    port: 8080,
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,


    devtool: 'cheap-module-eval-source-map',

    cacheBusting: true,

    cssSourceMap: true,
    resolve: {
      // 设置别名
      alias: {
        '@': resolve('src')
      }
    }
  },

  build: {
    index: path.resolve(__dirname, '../dist/index.html'),

    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',


    productionSourceMap: true,
    devtool: '#source-map',


    productionGzip: false,
    productionGzipExtensions: [ 'js', 'css' ],


    bundleAnalyzerReport: process.env.npm_config_report
  }
};

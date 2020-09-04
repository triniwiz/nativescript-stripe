import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'com.demo.NSStripe',
  main: 'src/main.js',
  appResourcesPath: 'App_Resources',
  webpackConfigPath: 'webpack.config.js',
  ios: {
    discardUncaughtJsExceptions: true
  },
  android: {
    discardUncaughtJsExceptions: true,
    v8Flags: '--nolazy --expose_gc',
    "markingMode": "none",
    "suppressCallJSMethodExceptions": false
  }
} as NativeScriptConfig;

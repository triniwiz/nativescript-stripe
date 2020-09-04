import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'com.nativescript.StripeDemoTS',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;

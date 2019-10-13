import { NativeModules } from 'react-native';

export default class AppConfig {
  async get() {
    return {
      name: await NativeModules.AppConfig.appName(),
      uid: await NativeModules.AppConfig.appUid(),
    };
  }
}

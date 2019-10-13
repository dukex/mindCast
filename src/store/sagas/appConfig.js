import {
  select, call, all, put,
} from 'redux-saga/effects';

import { Creators as AppConfigCreators } from '~/store/ducks/appConfig';

import {
  removeItemFromStorage,
  persistItemInStorage,
  getItemFromStorage,
} from '~/utils/AsyncStorageManager';

import AppConfig from '~/config/app';

const config = new AppConfig();

const _getRawConfig = async () => await config.get();

const fetchConfigSaved = async ({ uid }) => await getItemFromStorage(uid, false);

const fetchConfig = async ({ uid }) => Promise.resolve({
  slug: uid,
  name: 'Megafono',
  description: 'lorem ipsum',
});

export function* setAppConfig() {
  try {
    const rawConfig = yield _getRawConfig();
    const saved = yield fetchConfigSaved(rawConfig);
    let config;

    if (saved) {
      config = yield JSON.parse(saved);
    } else {
      config = yield fetchConfig(rawConfig);

      yield persistItemInStorage(rawConfig.uid, config);
    }

    yield put(AppConfigCreators.setAppConfigSuccess(config));
  } catch (err) {
    console.log(err);
  }
}

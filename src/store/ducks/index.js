import { combineReducers } from 'redux';

import localPodcastsManager from './localPodcastsManager';
import playlist from './playlist';
import subject from './subject';
import author from './author';
import player from './player';
import home from './home';
import appConfig from './appConfig';

export default combineReducers({
  localPodcastsManager,
  playlist,
  subject,
  author,
  player,
  home,
  appConfig,
});

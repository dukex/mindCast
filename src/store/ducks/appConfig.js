export const Types = {
  SET_APP_CONFIG_REQUEST: 'appConfig/SET_APP_CONFIG_REQUEST',
  SET_APP_CONFIG_SUCCESS: 'appConfig/SET_APP_CONFIG_SUCCESS',
};

export const Creators = {
  setAppConfig: () => ({
    type: Types.SET_APP_CONFIG_REQUEST,
  }),

  setAppConfigSuccess: appConfig => ({
    type: Types.SET_APP_CONFIG_SUCCESS,
    payload: { appConfig },
  }),
};

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case Types.SET_APP_CONFIG_REQUEST:
      return {
        ...state,
      };
    case Types.SET_APP_CONFIG_SUCCESS:
      return {
        ...state,
        ...payload.appConfig,
      };
    default:
      return state;
  }
};

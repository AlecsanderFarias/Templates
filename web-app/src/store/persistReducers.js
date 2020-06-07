import storage from 'redux-persist/lib/storage';

import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'Template Alecsander Farias',
      storage,
      whitelist: ['auth'],
    },
    reducers
  );

  return persistedReducer;
};

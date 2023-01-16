import { configureStore } from '@reduxjs/toolkit'
import persistStore from 'redux-persist/es/persistStore';
import { artistdatareducer } from './Artistdata/reducer';
import { artistloginReducer } from './Auth/ArtistAuth/reducer'
import { usersignupreducer } from './Auth/UserAuth/reducer';
import { applyfilterreducer } from './Filter/reducer';


const store = configureStore({
    reducer: {
        artistloginReducer,
        applyfilterreducer,
        usersignupreducer,
        artistdatareducer
    },
})
export const persistor = persistStore(store);
export default store;

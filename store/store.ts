import { useEffect, useState } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import reducers, { RootSlices } from './slices/';
import { decryptData, encryptData } from '@/utils';


function createStore(preloadedState?: RootSlices) {
  return configureStore({
    reducer: reducers,
    preloadedState,
  });
}

export function useStore(initialState?: RootSlices) {
  const [store, setStore] = useState(() => createStore(initialState));

  useEffect(() => {
    // Load state from localStorage on the client
    const loadState = (): RootSlices | undefined => {
      try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) return undefined;
        const decryptedState = decryptData(serializedState);
        return decryptedState;
      } catch (err) {
        console.error('Failed to load state from localStorage:', err);
        return undefined;
      }
    };

    const storeWithState = createStore(loadState());
    setStore(storeWithState);

    // Save state to localStorage on store updates
    const unsubscribe = storeWithState.subscribe(() => {
      try {
        const state = storeWithState.getState();
        const encryptedState = encryptData(state);
        localStorage.setItem('state', encryptedState);
      } catch (err) {
        console.error('Failed to save state to localStorage:', err);
      }
    });

    // Clean up the subscription
    return () => unsubscribe();
  }, []);

  return store;
}


const store=createStore();

export type RootState =ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof createStore>['dispatch'];

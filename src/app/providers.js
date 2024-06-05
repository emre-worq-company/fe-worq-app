'use client'

import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from '@/redux/store'
import { PrimeReactProvider } from 'primereact/api';

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { errorInterceptor } from '@/app/errorInterceptor';

export default function StoreProvider({ children }) {
  errorInterceptor();

  const storeRef = useRef()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  return (
    <PrimeReactProvider value={{ unstyled: true }}>
        <Provider store={storeRef.current}>
          {children}
          <ToastContainer theme="colored" autoClose={2000} />
        </Provider>
    </PrimeReactProvider>
  );
}
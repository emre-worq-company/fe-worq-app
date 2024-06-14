'use client'

import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from '@/redux/store'
import { SessionProvider } from "next-auth/react";
import { PrimeReactProvider } from 'primereact/api';

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function StoreProvider({ children }) {

  const storeRef = useRef()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  return (
    <SessionProvider>
      <PrimeReactProvider value={{ unstyled: true }}>
          <Provider store={storeRef.current}>
            {children}
            <ToastContainer theme="colored" autoClose={2000} />
          </Provider>
      </PrimeReactProvider>
    </SessionProvider>
  );
}
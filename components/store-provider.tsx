'use client'
import { useStore } from '@/store';
import React from 'react'
import { Provider } from "react-redux";

const StoreProvider = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    const store = useStore();

  return (
    <Provider store={store}>{children}</Provider>
  )
}


export default StoreProvider;
import { NextPage } from 'next';
import { ReactNode } from 'react'
import { AppProps } from 'next/app';
import 'src/styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?:(page:JSX.Element)=> ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component:NextPageWithLayout
}

export default function App({ Component, pageProps }:AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page:JSX.Element):JSX.Element=>page)
  return getLayout(<Component {...pageProps} />)
} 

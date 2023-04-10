import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import { MainLayout } from 'src/components/layouts/MainLayout'
import { DarkLayout } from 'src/components/layouts/DarkLayout'

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
    </>
  )
}

HomePage.getLayout = function getLayout( page:JSX.Element ) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}

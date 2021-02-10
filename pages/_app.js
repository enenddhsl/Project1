import React from 'react'
import App from 'next/app'
import UserProvider from '@/components/context/user/UserProvider'

import '../styles/globals.css'

import Layout from '../components/layout/Layout'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
      <title></title>        
      </Head>
      <UserProvider>
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </div>
  )
}

export default MyApp

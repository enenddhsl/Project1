import React from 'react'
import App from 'next/app'
import '../styles/globals.css'

import Layout from '../components/layout/Layout'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
      <title></title>        
      </Head>

        <Layout>
          <Component {...pageProps} />
        </Layout>

    </div>
  )
}

export default MyApp

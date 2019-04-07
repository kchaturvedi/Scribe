import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import Footer from '../components/Footer'

export default class CustomDocument extends Document {
  render () {
    return (<html className='h-100' lang='en-US'>
      <Head />
      <body className='d-flex flex-column h-100'>
        <Main />
        <Footer />
        <NextScript />
      </body>
    </html>)
  }
}

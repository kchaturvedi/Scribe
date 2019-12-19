import React from 'react'
import Document, { Html,Head, Main, NextScript } from 'next/document'

import '../styles/styles.scss'

import Footer from '../components/Footer'

export default class CustomDocument extends Document {
  render () {
    return (
      <Html lang='en-US'>
        <Head />
        <body className='d-flex flex-column h-100'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

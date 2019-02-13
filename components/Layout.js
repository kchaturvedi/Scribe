import Head from 'next/head'

import Header from './Header'
import '../styles/styles.scss'

const Layout = (props) => (
  <div>
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no' />
    </Head>
    <Header />
    {props.children}
  </div>
)

export default Layout

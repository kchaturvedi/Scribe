import Head from 'next/head'

import Layout from '../components/Layout'

const About = () => (
  <Layout>
    <Head>
      <title>About Scribe</title>
    </Head>
    <div className='container'>
      <div className='row mt-5'>
        <div className='markdown' style={{ marginLeft: '12rem', marginRight: '12rem' }}>
          About will go here
        </div>
      </div>
    </div>
  </Layout>
)

export default About

import Head from 'next/head'
import ReactMarkdown from 'react-markdown'

import Layout from '../components/Layout'

const About = (about) => (
  <Layout>
    <Head>
      <title>About Scribe</title>
    </Head>
    <div className='container'>
      <div className='row mt-5'>
        <div className='markdown' style={{ marginLeft: '12rem', marginRight: '12rem' }}>
          <ReactMarkdown source={about.content} escapeHtml={false} linkTarget={'_blank'} />
        </div>
      </div>
    </div>
  </Layout>
)

About.getInitialProps = async ({ query }) => {
  const content = await require('../posts/about.md')
  return { content }
}

export default About

import Head from 'next/head'

import '../styles/styles.scss'

import postList from '../posts/index'
import Layout from '../components/Layout'
import Post from '../components/Post'
import FeaturedPost from '../components/FeaturedPost'

export default () => (
  <Layout>
    <Head>
      <title>Scribe - the Serverless Markdown Blogging Framework</title>
    </Head>
    <div className='container'>
      <div className='row mt-4'>
        <div className='col-sm'>
          {
            renderFeatured(postList().find((post) => (post.featured)))
          }
        </div>
      </div>
      <div className='row mt-4'>
        <div className='col-sm'>
          {
            postList().map((post) => (
              !post.featured && <Post post={post} key={post.id} />
            ))
          }
        </div>
      </div>
    </div>
  </Layout>
)

const renderFeatured = (post) => <FeaturedPost post={post} key={post.id} />

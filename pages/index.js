import fetch from 'isomorphic-unfetch'
import Head from 'next/head'

import '../styles/styles.scss'

import postList from '../posts/index'
import Layout from '../components/Layout'
import Post from '../components/Post'
import FeaturedPost from '../components/FeaturedPost'

function Index({posts}) {
  return (
    <Layout>
      <Head>
        <title>Scribe - the Serverless Markdown Blogging Framework</title>
      </Head>
      <div className='container'>
        <div className='row mt-4'>
          <div className='col-sm'>
            {
              renderFeatured(posts.find((post) => (post.featured)) || undefined)
            }
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col-sm'>
            {
              posts.map((post) => (
                !post.featured && <Post post={post} key={post.postId} />
              ))
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}

const renderFeatured = (post) => post && <FeaturedPost post={post} key={post.postId} />

Index.getInitialProps = async ({ query }) => {  
  const res = await fetch(`http://localhost:3000/api/retrieve/all`)
  const json = await res.json()
  return {posts : json}
}

export default Index
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/Layout.js'

import postList from '../posts/index'

const Post = (post) => (
  <Layout>
    <Head>
      <title>{post.title}</title>
    </Head>
    <div className='row mt-4' style={{ marginLeft: '10rem', marginRight: '10rem' }}>
      <div className='markdown'>
        <ReactMarkdown source={post.content} escapeHtml={false} linkTarget={'_blank'} />
      </div>
    </div>
  </Layout>
)

Post.getInitialProps = async ({ query }) => {
  const post = postList().find(post => post.id === query.id)
  const content = await require(`../posts/${post.id}.md`)
  return { ...post, content }
}

export default Post

import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/Layout.js'

import postList from '../posts/index'

const Post = (post) => (
  <Layout>
    <Head>
      <title>{post.title}</title>
    </Head>
    <div className='row'>
      <div className='container-fluid mx-0 px-0' style={{ height: '35rem', overflow: 'hidden' }}>
        { post.img && <img className='img-fluid mx-auto d-block' src={post.img} style={{ position: 'relative', bottom: '17rem' }} /> }
      </div>
      <div className='container' style={{ marginTop: '-5rem' }}>
        <div className='card post-title-card mx-auto text-center' style={{ width: '60rem' }}>
          <div className='card-body'>
            <h3 className='card-title'>{post.title}</h3>
            <h6 className='card-subtitle text-muted'>by Kartik Chaturvedi</h6>
          </div>
          <div className='card-footer text-muted'>
            <div className='row'>
              <div className='col-sm text-left'>
                {post.date}
              </div>
              <div className='col-sm text-right'>
                <i>Share this post: </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='row text-center' />
    <div className='container'>
      <div className='row mt-5' style={{ marginLeft: '12rem', marginRight: '12rem' }}>
        <div className='markdown'>
          <ReactMarkdown source={post.content} escapeHtml={false} linkTarget={'_blank'} />
        </div>
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

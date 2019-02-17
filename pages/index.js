import '../styles/styles.scss'

import postList from '../posts/index'
import Layout from '../components/Layout'
import Post from '../components/Post'
import FeaturedPost from '../components/FeaturedPost'

export default () => (
  <Layout>
    <div className='container'>
      <div className='row mt-4'>
        {
          renderFeatured(postList().find((post) => (post.featured)))
        }
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

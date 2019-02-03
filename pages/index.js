import '../styles/styles.scss'

import Link from 'next/link'
import Layout from '../components/Layout'

import postList from '../posts/index'

export default () => (
  <Layout>
    <div className='row mt-4'>
      <div className='col-sm'>
        <div className='card-columns'>
          {
            postList().map((post) => (
              <Link href={`/post?id=${post.id}`} key={post.id}>
                <div className='card'>
                  {post.img && <img className='card-img-top' src={post.img} alt='...' />}
                  <div className='card-body'>
                    <h5 className='card-title'>{post.title}</h5>
                    {post.description && <p className='card-text'>{post.description}</p>}
                    {post.date && <p className='card-text'><small className='text-muted'>{post.date}</small></p>}
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  </Layout>
)

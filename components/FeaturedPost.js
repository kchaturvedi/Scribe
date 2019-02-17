import Link from 'next/link'

import '../styles/styles.scss'

const FeaturedPost = ({ post }) => (
  <div className='featured-container'>
    <Link href={`/post?id=${post.id}`} key={post.id} as={`/${post.id}`}>
      <div>
        <div className='col-sm mt-0 pt-0' style={{ height: '25rem', overflow: 'hidden' }}>
          { post.img && <img className='img-fluid mx-auto d-block' src={post.img} style={{ position: 'relative', bottom: '25rem', width: '100%' }} /> }
        </div>
        <div className='container mb-4' style={{ marginTop: '-5rem' }}>
          <div className='card post-title-card mx-auto text-center' style={{ width: '60rem' }}>
            <div className='card-body'>
              <h3 className='card-title'>{post.title}</h3>
              {post.date && <p className='card-text text-muted'><small>{post.date}</small></p>}
              {post.summary && <p className='card-text text-muted'>{post.summary}</p>}
              <span className='badge badge-pill badge-secondary'>{post.category}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
)

export default FeaturedPost

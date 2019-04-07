import Link from 'next/link'

import '../styles/styles.scss'

const FeaturedPost = ({ post }) => (
  <Link href={`/post?id=${post.id}`} key={post.id} as={`/${post.id}`}>
    <div>
      {/* XS */}
      <div className='featured-container d-block d-sm-none'>
        <div className='container mt-0 pt-0' style={{ height: '20rem', overflow: 'hidden' }}>
          { post.img && <img className='featured-img img-fluid mx-auto' src={post.img} style={{ position: 'relative', bottom: '1rem', width: '100%' }} /> }
        </div>
        <div className='container mb-4' style={{ marginTop: '-2rem' }}>
          <div className='card post-title-card shadow text-center mr-3 ml-3'>
            <div className='card-header shadow-sm'>
              <div className='row'>
                <div className='col-4 text-left text-muted'>
                  {post.date}
                </div>
                <div className='col-4 text-center'>
                  <strong>Featured</strong>
                </div>
                <div className='col-4 text-right text-muted'>
                  <span className='badge badge-pill badge-secondary'>#{post.category}</span>
                </div>
              </div>
            </div>
            <div className='card-body shadow'>
              <h3 className='card-title mb-1'>{post.title}</h3>
              {post.summary && <p className='card-text text-muted mt-2'>{post.summary}</p>}
            </div>
          </div>
        </div>
      </div>
      {/* SM */}
      <div className='featured-container d-none d-sm-block d-md-none'>
        <div className='container mt-0 pt-0' style={{ height: '20rem', overflow: 'hidden' }}>
          { post.img && <img className='featured-img img-fluid mx-auto' src={post.img} style={{ position: 'relative', bottom: '3rem', width: '100%' }} /> }
        </div>
        <div className='container mb-4' style={{ marginTop: '-3rem' }}>
          <div className='card post-title-card shadow text-center mr-4 ml-4'>
            <div className='card-header shadow-sm'>
              <div className='row'>
                <div className='col-4 text-left text-muted'>
                  {post.date}
                </div>
                <div className='col-4 text-center'>
                  <strong>Featured</strong>
                </div>
                <div className='col-4 text-right text-muted'>
                  <span className='badge badge-pill badge-secondary'>#{post.category}</span>
                </div>
              </div>
            </div>
            <div className='card-body shadow'>
              <h3 className='card-title mb-1'>{post.title}</h3>
              {post.summary && <p className='card-text text-muted mt-2'>{post.summary}</p>}
            </div>
          </div>
        </div>
      </div>
      {/* MD */}
      <div className='featured-container d-none d-md-block d-lg-none'>
        <div className='container mt-0 pt-0' style={{ height: '25rem', overflow: 'hidden' }}>
          { post.img && <img className='featured-img img-fluid mx-auto' src={post.img} style={{ position: 'relative', bottom: '8rem', width: '100%' }} /> }
        </div>
        <div className='container mb-4' style={{ marginTop: '-6rem' }}>
          <div className='card post-title-card shadow text-center mr-5 ml-5'>
            <div className='card-header shadow-sm'>
              <div className='row'>
                <div className='col-4 text-left text-muted'>
                  {post.date}
                </div>
                <div className='col-4 text-center'>
                  <strong>Featured</strong>
                </div>
                <div className='col-4 text-right text-muted'>
                  <span className='badge badge-pill badge-secondary'>#{post.category}</span>
                </div>
              </div>
            </div>
            <div className='card-body shadow'>
              <h3 className='card-title mb-1'>{post.title}</h3>
              {post.summary && <p className='card-text text-muted mt-2'>{post.summary}</p>}
            </div>
          </div>
        </div>
      </div>
      {/* LG */}
      <div className='featured-container d-none d-lg-block d-xl-none'>
        <div className='container mt-0 pt-0' style={{ height: '25rem', overflow: 'hidden' }}>
          { post.img && <img className='featured-img img-fluid mx-auto' src={post.img} style={{ position: 'relative', bottom: '18rem', width: '100%' }} /> }
        </div>
        <div className='container mb-4' style={{ marginTop: '-5rem' }}>
          <div className='card post-title-card shadow text-center mr-5 ml-5'>
            <div className='card-header shadow-sm'>
              <div className='row'>
                <div className='col-4 text-left text-muted'>
                  {post.date}
                </div>
                <div className='col-4 text-center'>
                  <strong>Featured</strong>
                </div>
                <div className='col-4 text-right text-muted'>
                  <span className='badge badge-pill badge-secondary'>#{post.category}</span>
                </div>
              </div>
            </div>
            <div className='card-body shadow'>
              <h3 className='card-title mb-1'>{post.title}</h3>
              {post.summary && <p className='card-text text-muted mt-2'>{post.summary}</p>}
            </div>
          </div>
        </div>
      </div>
      {/* XL */}
      <div className='featured-container d-none d-xl-block'>
        <div className='container mt-0 pt-0' style={{ height: '25rem', overflow: 'hidden' }}>
          { post.img && <img className='featured-img img-fluid mx-auto' src={post.img} style={{ position: 'relative', bottom: '11rem', width: '100%' }} /> }
        </div>
        <div className='container mb-4' style={{ marginTop: '-5rem' }}>
          <div className='card post-title-card shadow text-center mr-5 ml-5'>
            <div className='card-header shadow-sm'>
              <div className='row'>
                <div className='col-4 text-left text-muted'>
                  {post.date}
                </div>
                <div className='col-4 text-center'>
                  <strong>Featured</strong>
                </div>
                <div className='col-4 text-right text-muted'>
                  <span className='badge badge-pill badge-secondary'>#{post.category}</span>
                </div>
              </div>
            </div>
            <div className='card-body shadow'>
              <h3 className='card-title mb-1'>{post.title}</h3>
              {post.summary && <p className='card-text text-muted mt-2'>{post.summary}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>
)

export default FeaturedPost

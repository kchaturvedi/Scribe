import Link from 'next/link'
import { RichText } from 'prismic-reactjs'

const FeaturedPost = ({ post }) => (
  <Link href='/posts/[id]' as={`/posts/${post.uid}`}>
    <div>
      <div className='featured-container d-block'>
        <div className='mt-0 pt-0'>
          {post.data.image.url && <img className='featured-img rounded-bottom img-fluid mx-auto'
            src={post.data.image.post_view.url} alt={post.data.image.alt} />
          }
        </div>
        <div className='container mb-4 pt-4 pt-md-0' style={{ marginTop: '-5rem' }}>
          <div className='card post-title-card text-center mr-lg-5 ml-lg-5'>
            <div className='card-header shadow-sm d-flex justify-content-between'>
                <div className='text-muted'>
                  {post.data.date_published}
                </div>
                <div>
                  <strong>Featured</strong>
                </div>
                <div className='text-muted'>
                  <span className='badge badge-pill badge-secondary'>#{post.data.category}</span>
                </div>
            </div>
            <div className='card-body'>
              <h3 className='card-title mb-1'>{RichText.asText(post.data.title)}</h3>
              {post.data.summary && <p className='card-text text-muted mt-2'>{RichText.asText(post.data.summary)}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>
)

export default FeaturedPost

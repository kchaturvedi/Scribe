import Link from 'next/link'
import { RichText } from 'prismic-reactjs'

const Post = ({ post }) => (
  <div>
    <Link href='/posts/[id]' as={`/posts/${post.uid}`}>
      <a style={{color: 'inherit', textDecoration: 'none'}}>
      <div className='row post-container mb-md-5 mx-lg-5 d-flex align-items-stretch'>
        <div className='col-md-5 d-flex justify-content-md-end justify-content-center'>
          {post.data.image.url && <img className='img-fluid rounded-lg d-none d-md-block align-self-start'
            src={post.data.image.url} alt={post.data.image.alt}
          />}
          <div className='d-block d-md-none w-100'>
            {post.data.image.url && <img className='img-fluid mx-auto'
              src={post.data.image.post_view.url} alt={post.data.image.alt}
            />}
          </div>
        </div>
        <div className='col-md-7'>
          <div className='card-body h-100 d-flex flex-column'>
            <h5 className='card-title'>{RichText.asText(post.data.title)}</h5>
            <h6 className='font-weight-normal'>
              <span className='text-muted'>{post.data.date_published}&nbsp;&nbsp;|&nbsp;&nbsp;</span>
              <span className='badge badge-pill badge-secondary mb-1 mt-0'>{post.data.category.toUpperCase()}</span>
            </h6>
            <p className='card-text text-muted flex-grow-1'>{RichText.asText(post.data.summary)}</p>
            <h6 className='card-title text-muted mb-0'>Continue Reading</h6>
            
          </div>
        </div>
      </div>
      </a>
    </Link>
    <hr className='pt-xs-0 pt-sm-2 pb-2' />
  </div>
)

export default Post

import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import pipe from 'ramda/src/pipe';
import path from 'ramda/src/path';
import classnames from 'classnames/bind';
import DisqusThread from 'react-disqus-comments';
import 'prismjs/themes/prism.css';

import s from './post.module.styl';
const cx = classnames.bind(s);

import { format } from '../lib/utils.js';
import Bio from '../components/Bio.js';

const formatDate = pipe(
  x => new Date(x),
  format('YYYY-MM-DD') // What's a pretty format??
);

const getPost = path(['data', 'post']);
const getContext = path(['pathContext']);

const Comments = ({ disqusId, pageURL }) => {
  const props = {
    shortname: 'iansinnott',
  };

  if (disqusId) props.identifier = disqusId;
  if (pageURL) props.url = pageURL;

  return <DisqusThread {...props} />;
};

const PostNav = ({ prev, next }) => (
  <div className={cx('PostNav')}>
    {prev && <Link to={`/${prev.slug}/`}>Prev</Link>}
    <Link to='/'>All Posts</Link>
    {next && <Link to={`/${next.slug}/`}>Next</Link>}
  </div>
);

class BlogPost extends React.Component {
  render() {
    if (this.props.errors && this.props.errors.length) {
      this.props.errors.forEach(({ message }) => {
        console.error(`Blog render errr: ${message}`);
      });
      return (
        <div>
          <h2>Errors</h2>
          <p>See console for details.</p>
        </div>
      );
    }

    const post = getPost(this.props);
    const { next, prev } = getContext(this.props); // Not to be confused with react context...

    return (
      <div className={cx('Post')}>
        <Helmet title={`${post.frontmatter.title} | Ian Sinnott`} />
        <h1>{post.frontmatter.title}</h1>
        <div className={cx('meta')}>
          <p className={cx('date')}>
            <i style={{ marginRight: 10 }} className='fa fa-calendar-check-o' />
            Published: <strong>{formatDate(post.frontmatter.created)}</strong>
          </p>
          <p className={cx('middot')} style={{ margin: '0 1em' }}>
            •
          </p>
          <p className={cx('timeToRead')}>
            <strong>{post.timeToRead}</strong> min read
          </p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <Bio />
        <hr />
        <PostNav prev={prev} next={next} />
        <hr style={{ marginTop: '2rem' }} />
        <Comments
          disqusId={post.frontmatter.disqusId}
          pageURL={post.canonicalURL}
        />
      </div>
    );
  }
}

export default BlogPost;

// NOTE: The $id var is passed in via context in gatsby-node
export const pageQuery = graphql`
  query PostById($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      timeToRead
      canonicalURL
      html
      frontmatter {
        created
        title
        disqusId: dsq_thread_id
      }
    }
  }
`;
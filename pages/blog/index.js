import BlogListHeader from '../../containers/BlogListHeader/BlogListHeader';
import BlogList from '../../containers/BlogList/BlogList';
import { popularPosts } from '../../data/popularPosts';

const title = 'All articles';
const num = 20;

const Blog = () => {
  // Fetch blog list information here

  return (
    <>
      <BlogListHeader
        title={title}
        num={20}
      />
      <BlogList posts={popularPosts} />
    </>
  );
};

export default Blog;

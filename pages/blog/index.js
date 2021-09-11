import BlogListHeader from '../../containers/BlogListHeader/BlogListHeader';

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
    </>
  );
};

export default Blog;

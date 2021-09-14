import short from 'short-uuid';
import Container from '../../components/Wrapper/Container';
import { BlogListWrapper } from './BlogList.style';
import Posts from '../../components/Posts/Posts';
import PostCard2 from '../../components/PostCard2/PostCard2';

// State nya harus di pass dari page, bukan disini, karena untuk list blog dari category atau tag tertentu pakainya blog list ini juga

const BlogList = ({ posts }) => {
  console.log(posts);

  return (
    <BlogListWrapper>
      <Container>
        <Posts withSidebar>
          {
            posts && posts.map((post) => {
              return(
                <PostCard2
                  key={short.generate()}
                  post={post}
                />
              );
            })
          }
        </Posts>
      </Container>
    </BlogListWrapper>
  );
};

export default BlogList;

import Link from 'next/link';
import Container from '../../components/Wrapper/Container';
import {
  BlogListHeaderWrapper, HeaderTitle, NumberOfArticles, HeaderDescription, PageLink,
} from './BlogListHeader.style';
import { capitalize } from '../../util/capitalize';

const BlogTopSection = ({ title, num }) => {
  // Fetch blog list information here

  return (
    <BlogListHeaderWrapper>
      <Container>
        <span>
          <HeaderTitle>
            {title}
            <NumberOfArticles>
              {num} articles
            </NumberOfArticles>
          </HeaderTitle>
        </span>
        <HeaderDescription>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit
          Asperiores non dolor officiis eaque corporis.
        </HeaderDescription>
        <PageLink>
          <Link href="/">
            <a href="/">Home</a>
          </Link>
          &nbsp;&gt;
          All articles
        </PageLink>
      </Container>
    </BlogListHeaderWrapper>
  );
};

export default BlogTopSection;

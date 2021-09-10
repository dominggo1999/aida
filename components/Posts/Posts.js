import React from 'react';
import { PostsGrid } from './Posts.style';

const Posts = ({ col, children }) => {
  const childrenWithColProps = children.map((child, index) => {
    return React.cloneElement(child, {
      col,
    });
  });

  return (
    <PostsGrid col={col}>
      {childrenWithColProps}
    </PostsGrid>
  );
};

export default Posts;

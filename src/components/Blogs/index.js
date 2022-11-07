import React from 'react';

import BlogCard from './Card.js';
import { BlogWrap } from './styled';

const Blogs = ({ edges }) => {
  return (
    <BlogWrap>
      {edges.map((edge, pos) => {
        return <BlogCard {...edge} key={pos} />;
      })}
    </BlogWrap>
  );
};

export default Blogs;

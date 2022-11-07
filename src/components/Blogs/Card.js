import React from 'react';
import { Link } from 'gatsby';

import { BlogContainer, Category, ImgWrap, TextWrap, Info } from './styled';

const BlogCard = ({ node }) => {
  const { title, slug, publishedDate, author, coverImage } = node;

  return (
    <BlogContainer>
      <ImgWrap>
        <Link to={`/blog/${slug}`}>
          <img src={coverImage.file.url} alt='' />
        </Link>
      </ImgWrap>
      <TextWrap>
        <Info>
          <p className='type'>
            <strong>{author}</strong> <span>|</span>
            {publishedDate}
          </p>
        </Info>
        <Link to={`/blog/${slug}`}>
          <h3>{title}</h3>
        </Link>
      </TextWrap>
    </BlogContainer>
  );
};

export default BlogCard;

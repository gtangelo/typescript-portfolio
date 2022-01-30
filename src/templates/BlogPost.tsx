import * as React from 'react';
import { Link, graphql } from 'gatsby';

import { Container } from '@mui/material';
import PageTemplate from './PageTemplate';

const BlogPostTemplate = ({ data, location }) => { // eslint-disable-line
  return (
    <PageTemplate>
      <Container>
        <section dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Container>
    </PageTemplate>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`;

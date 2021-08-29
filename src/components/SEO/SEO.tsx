import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

interface SEOStaticQueryProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      siteUrl: string;
    };
  };
}

const SEOStaticQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;

interface SEOProps {
  title?: string;
  description?: string;
}

const SEO = ({ title = '', description = '' }: SEOProps) => {
  const { site } = useStaticQuery<SEOStaticQueryProps>(SEOStaticQuery);
  const { siteUrl, description: defaultDescription } = site.siteMetadata;

  const seo = {
    title,
    description: description || defaultDescription,
    url: `${siteUrl}${window.location.pathname}`,
    titleTemplate: title ? `%s | ${title}` : `${site.siteMetadata.title}`,
  };

  return (
    <Helmet title="Gabriel Ting">
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
    </Helmet>
  );
};

export default SEO;

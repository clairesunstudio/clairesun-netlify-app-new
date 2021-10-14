import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const siteMetadataFragment = graphql`
  fragment SiteMetadata on Site {
    buildTime
    siteMetadata {
      description
      keywords
      title
    }
  }
`;

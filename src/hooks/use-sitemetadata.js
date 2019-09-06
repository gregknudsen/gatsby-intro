import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
<<<<<<< HEAD
    query {
=======
    {
>>>>>>> 778db745c1565d6f55daa2be4e8a73cea633048f
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

<<<<<<< HEAD
  return data.site.sitemetadata;
};

export default useSiteMetadata;

=======
  return data.site.siteMetadata
};

export default useSiteMetadata;
>>>>>>> 778db745c1565d6f55daa2be4e8a73cea633048f

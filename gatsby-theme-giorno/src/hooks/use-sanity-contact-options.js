import { graphql, useStaticQuery } from "gatsby";

const useSanityContactOptions = () => {
  const data = useStaticQuery(graphql`
    query {
      contactOptions: sanityContact {
        title
        description
        options: option {
          ... on SanityContactAddress {
            _key
            _type
            address
            title
          }
          ... on SanityContactEmail {
            _key
            _type
            email
            title
          }
          ... on SanityContactPhone {
            _key
            _type
            phone
            prefix
            title
          }
        }
      }
    }
  `);

  return data.contactOptions;
};

export default useSanityContactOptions;

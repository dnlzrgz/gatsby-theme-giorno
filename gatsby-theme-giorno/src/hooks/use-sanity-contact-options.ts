import { graphql, useStaticQuery } from "gatsby";
import type { IContactOptionAddress, IContactOptionEmail, IContactOptionPhone } from "../../types";

interface IContactOptions {
  title: string;
  description: string;
  options: [IContactOptionAddress | IContactOptionEmail | IContactOptionPhone];
}

const useSanityContactOptions = (): IContactOptions => {
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

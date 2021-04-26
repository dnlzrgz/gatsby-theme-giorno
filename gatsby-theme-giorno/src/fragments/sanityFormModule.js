import { graphql } from "gatsby";

export const query = graphql`
  fragment SanityFormModule on SanityPage {
    pageBuilder {
      ... on SanityForm {
        _key
        _type
        _rawInputs
        name
        title
        description
        inputs {
          ... on SanityInput {
            _key
            _type
            label
            name
            required
            type
          }
          ... on SanityTextarea {
            _key
            _type
            label
            maxLength
            minLength
            name
            required
          }
          ... on SanitySubmit {
            _key
            _type
            text
          }
        }
      }
    }
  }
`;

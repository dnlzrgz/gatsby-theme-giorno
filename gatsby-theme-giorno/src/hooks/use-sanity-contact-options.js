import { graphql, useStaticQuery } from 'gatsby';

const useSanityContactOptions = () => {
	const data = useStaticQuery(graphql`
		query {
			contact: sanityContact {
				id
				title
				description
				option {
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

	return data.contact;
};

export default useSanityContactOptions;

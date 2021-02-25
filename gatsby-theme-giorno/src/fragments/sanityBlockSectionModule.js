import { graphql } from 'gatsby';

export const query = graphql`
	fragment SanityBlockSectionModule on SanityPage {
		pageBuilder {
			... on SanityBlockSection {
				_key
				_type
				title
				description
				_rawContent
				content {
					children {
						_key
						_type
						marks
						text
					}
					_key
					_type
					list
					style
				}
			}
		}
	}
`;

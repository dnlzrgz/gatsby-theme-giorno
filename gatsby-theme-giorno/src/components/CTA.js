import React from 'react';

const CTA = ({ title, url }) => {
	return (
		<div className="flex items-center justify-center">
			<button
				type="button"
				className="bg-white shadow px-5 py-3 uppercase font-semibold rounded-md"
				onClick={() => console.log(url)}
			>
				{title}
			</button>
		</div>
	);
};

export default CTA;

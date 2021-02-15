import React from 'react';

const CTA = ({ title, url }) => {
	return (
		<div className="flex items-center justify-center mt-9">
			<button
				type="button"
				className="bg-white text-black text-md md:text-lg font-semibold uppercase md:tracking-wide px-6 py-3 rounded-md shadow"
				onClick={() => console.log(url)}
			>
				{title}
			</button>
		</div>
	);
};

export default CTA;

import React from 'react';

const FormSubmit = ({ onSubmit, children }) => {
	return (
		<div className="flex items-center justify-end">
			<button
				type="submit"
				onClick={onSubmit}
				className="text-md font-semibold uppercase bg-primary hover:bg-darker-primary text-invert-text px-6 py-3 tracking-wide outline-none rounded-md shadow"
			>
				{children}
			</button>
		</div>
	);
};

export default FormSubmit;

const IconSearch = ({ twHeight }: { twHeight: string }) => {
	return (
		<svg
			viewBox="0 1.5 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`${twHeight}`}
		>
			<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				{" "}
				<path
					d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
					className="stroke-font-gray/65"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>{" "}
			</g>
		</svg>
	);
};

export default IconSearch;

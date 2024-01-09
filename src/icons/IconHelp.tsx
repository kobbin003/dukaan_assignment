const IconHelp = () => {
	const strokeColor = "stroke-font-gray";
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="h-3"
		>
			<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				{" "}
				<circle
					cx="12"
					cy="12"
					r="10"
					transform="rotate(-180 12 12)"
					className={`${strokeColor}`}
					strokeWidth="1.344"
					strokeLinecap="round"
					strokeLinejoin="round"
				></circle>{" "}
				<path
					d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10"
					className={`${strokeColor}`}
					strokeWidth="1.344"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>{" "}
				<line
					x1="12"
					y1="13"
					x2="12"
					y2="14"
					className={`${strokeColor}`}
					strokeWidth="1.344"
					strokeLinecap="round"
					strokeLinejoin="round"
				></line>{" "}
				<path
					d="M12 17L12 17.01"
					className={`${strokeColor}`}
					strokeWidth="1.344"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>{" "}
			</g>
		</svg>
	);
};

export default IconHelp;

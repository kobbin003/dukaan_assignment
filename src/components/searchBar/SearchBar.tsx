import IconSearch from "../../icons/IconSearch";
// py-2 px-3
const SearchBar = ({
	placeholderText,
	twBgColor,
	twBorder,
	twWidth,
	twRounded,
	twIconHeight,
	twPxPy,
}: {
	placeholderText: string;
	twBgColor: string;
	twWidth: string;
	twRounded: string;
	twIconHeight: string;
	twBorder?: string;
	twPxPy: string;
}) => {
	return (
		<div
			className={`${twBgColor} ${twBorder} ${twWidth} ${twRounded} ${twPxPy} flex items-center  tracking-wider`}
		>
			<IconSearch twHeight={`${twIconHeight}`} />
			<input
				type="search"
				placeholder={placeholderText}
				className={`${twBgColor} ${twWidth} ${twRounded} outline-none placeholder:text-font-gray/65 pl-1.5 `}
			/>
		</div>
	);
};

export default SearchBar;

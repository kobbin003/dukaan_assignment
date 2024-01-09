import IconLeftArrow from "../../../icons/IconLeftArrow";
import IconRightArrow from "../../../icons/IconRightArrow";
import Button from "../../button/Button";

const Paginator = () => {
	const pages = [1, "...", 10, 11, 12, 13, 14, 15, 16, 17, 18];
	return (
		<div className="flex items-center gap-2 py-2">
			<Button text="Previous" reverse>
				<IconLeftArrow />
			</Button>
			<div className="flex items-center gap-2 px-4">
				{pages.map((page, index) => (
					<button
						key={index}
						className={`${
							page == 10 && "bg-font-blue text-white ring-1 ring-font-blue"
						} ${
							page == 1 && "mr-1"
						} text-font-gray text-xs px-1 py-0.5 rounded-sm `}
					>
						{page}
					</button>
				))}
			</div>
			<Button text="Next">
				<IconRightArrow />
			</Button>
		</div>
	);
};

export default Paginator;

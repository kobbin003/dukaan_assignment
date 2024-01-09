import { inrConverter } from "../../utils/inrConverter";

const StatCard = ({
	title,
	value,
	isAmount,
	tailwindclass,
}: {
	title: string;
	value: number;
	isAmount?: boolean;
	tailwindclass: string;
}) => {
	return (
		<div
			// style={{ boxShadow: "0 0 5px 0 #4c4c4c18" }}
			className={`bg-white py-4 px-5 rounded-[6px] ${tailwindclass} shadow-md shadow-gray-300/15`}
		>
			<p className="mb-3 text-font-gray/90 font-normal">{title}</p>
			<p className="text-3xl font-medium">
				{isAmount ? inrConverter(value) : value}
			</p>
		</div>
	);
};
// #1a181e85

export default StatCard;

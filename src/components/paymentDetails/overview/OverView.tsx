import IconDownArrow from "../../../icons/IconDownArrow";
import Button from "../../button/Button";
import StatCard from "../../statCard/StatCard";

const OverView = () => {
	return (
		<div className="flex flex-col gap-6 tracking-normal">
			<div className="flex w-full items-center justify-between">
				<p className="text-lg font-medium ">Overview</p>
				<Button text="Last Month">
					<IconDownArrow
						iconFill="fill-font-gray"
						iconStroke="stroke-font-gray"
						height="h-3"
						width="w-3"
					/>
				</Button>
			</div>
			<div className="flex gap-4">
				<StatCard title="Online orders" value={231} tailwindclass="flex-1" />
				<StatCard
					title="Amount received"
					value={2392312.19}
					isAmount
					tailwindclass="flex-1"
				/>
			</div>
		</div>
	);
};

export default OverView;

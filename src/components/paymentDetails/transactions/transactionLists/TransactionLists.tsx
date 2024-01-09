import IconDropDown from "../../../../icons/IconDropDown";
import IconInfo from "../../../../icons/IconInfo";
import { inrConverter } from "../../../../utils/inrConverter";

const TransactionLists = () => {
	const transactionRows = Array.from({ length: 22 }, () => "");
	return (
		<div className="w-full flex flex-col items-center tracking-normal">
			<table className="w-full text-font-gray ">
				<tr className="bg-dark-grey">
					<th className="text-xs font-medium text-left px-2 py-2 w-1/4">
						Order ID
					</th>
					<th className="text-xs font-medium w-1/4">
						<div className="w-full flex justify-start items-center gap-1">
							<span>Order date</span>
							<div className="-translate-y-1/4">
								<IconDropDown twHeight="h-2" twWidth="w-2" />
							</div>
						</div>
					</th>
					<th className="text-right text-xs font-medium w-1/4">Order amount</th>
					<th className="text-xs font-medium px-2 py-2 w-1/4 ">
						<div className="w-full flex justify-end items-center">
							<span>Transaction fees</span>
							<div className="-translate-y-px">
								<IconInfo />
							</div>
						</div>
					</th>
				</tr>
				{transactionRows.map((_, index) => {
					return (
						<tr key={index} className="border-b box-border">
							<td className="text-font-blue py-3 px-2 text-xs font-medium ">
								#281209
							</td>
							<td className="text-left text-xs font-normal text-font-dark">
								7 July, 2023
							</td>
							<td className="text-right  text-xs font-normal text-font-dark ">
								{inrConverter(1278)}
							</td>
							<td className="text-right  text-xs font-normal text-font-dark px-2">
								{inrConverter(22).split(".")[0]}
							</td>
						</tr>
					);
				})}
			</table>
		</div>
	);
};
{
}
export default TransactionLists;

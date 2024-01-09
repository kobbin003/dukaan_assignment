import IconDownload from "../../../icons/IconDownload";
import IconSort from "../../../icons/IconSort";
import Button from "../../button/Button";
import SearchBar from "../../searchBar/SearchBar";
import Paginator from "../paginator/Paginator";
import TransactionLists from "./transactionLists/TransactionLists";

const Transactions = () => {
	return (
		<div className="flex flex-col gap-6">
			<div className="flex w-max items-center justify-between gap-2 tracking-normal">
				<p className="text-lg font-medium ">Transactions</p>
				<div className="h-6 border-l ring-0.5 ring-font-dark border-font-dark"></div>
				<p className="text-lg font-medium ">This Month</p>
			</div>
			<div className="flex flex-col items-center gap-3 bg-white w-full p-3 shadow-md shadow-gray-300/15">
				<div className="w-full flex items-center justify-between">
					<SearchBar
						placeholderText="Search by order ID..."
						twBgColor="bg-transparent"
						twBorder="border"
						twWidth=""
						twRounded="rounded-[6px]"
						twIconHeight="h-3.5"
						twPxPy="py-2 px-3"
					/>
					<div className="flex gap-3">
						<Button text="Sort">
							<IconSort />
						</Button>
						<Button>
							<IconDownload />
						</Button>
					</div>
				</div>
				<TransactionLists />
				<Paginator />
			</div>
		</div>
	);
};

export default Transactions;

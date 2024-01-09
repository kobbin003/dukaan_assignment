import OverView from "./overview/OverView";
import Transactions from "./transactions/Transactions";

const PaymentDetails = () => {
	return (
		<div className="w-full flex flex-col px-8 py-6  gap-6">
			<OverView />
			<Transactions />
		</div>
	);
};

export default PaymentDetails;

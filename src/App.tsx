import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import PaymentDetails from "./components/paymentDetails/PaymentDetails";

function App() {
	return (
		<div className="flex relative min-h-screen bg-light-grey text-xs antialiased font-inter font-normal">
			<Navbar />
			<div className="flex-1 ">
				<Header />
				<PaymentDetails />
			</div>
		</div>
	);
}

export default App;

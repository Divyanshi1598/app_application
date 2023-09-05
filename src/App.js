// import "./styles.css";
import About from "./Components/About";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Link,
	useLocation,
	Navigate,
} from "react-router-dom";

import Gellery from "./Components/Gellery";
import Contact from "./Components/Contact";
import Submit1 from "./Components/Submit1";
import ListTableTwo from "./Components/ListTableTwo";
import Details from "./Components/Details";
import Insurance from "./Components/Insurance";
import Navbar from "./Components/Navbar";
import EmiCalculator from "./Components/EmiCalculator";
import Submit2 from "./Components/Submit2";
import { Toaster } from "react-hot-toast";
import HomePage from "./Components/HomePage";
import StockCars from "./Components/StockCars";
import Notification from "./Components/Notification";
import ScrollTop from "./Components/ScrollTop";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";
import DashBoard from "./DashBoard";
import Admin from "./Pages/Admin";
import CarLoan from "./Components/CarLoan";
import "./App.css";
// import AddVechil from "./Pages/AddVechil";
// import StoreVechileTable from "./Pages/StoreVechileTable";
// import AdminDash from "./Pages/AdminDash";
import { Header, Container } from "react-bootstrap";
import ReactLoading from "react-loading";
import { useState, useEffect } from "react";
import ErrorPage from "./Components/ErrorPage";

export default function App({ isLoggedIn }) {
	const [isLoading, setIsLoading] = useState(true);
	const [detailspage, setDetailspage] = useState(false);
	const reloadPage = () => {
		window.location.reload();
		// toast.success("Page  Loading ! ");
	};
	const handleHomeClick = () => {
		setDetailspage(false); // Set detailspage to false when clicking on HOME
	};
	useEffect(() => {
		if (reloadPage) {
			// Display loading message while page is reloading
			console.log("Page reloading...");
			// alert("data loading");
			// Simulate reloading by setting a timeout
			setTimeout(() => {
				setIsLoading(false); // Set loading state to false after the timeout
			}, 1000); // Change this timeout value as needed
		} else {
			setIsLoading(false); // If not reloading, set loading state to false
		}
	}, [reloadPage]);

	// if (isLoading) {
	// 	return (
	// 		<div className='loading-message'>
	// 			<div className='pageloadingsize hidden-xs'>
	// 				<ErrorPage />
	// 			</div>{" "}
	// 			<div className='pageloadingsize1 visible-xs'>
	// 				<ErrorPage />
	// 			</div>{" "}
	// 		</div>
	// 	);
	// }

	return (
		<div className=''>
			{" "}
			<ScrollTop />
			<div className='fixed-top'>
				<Navbar onHomeClick={handleHomeClick} />{" "}
			</div>{" "}
			<Routes>
				<Route exact path='/uii' element={<Signup />} exact />{" "}
				<Route exact path='/admin' element={<AdminDash />} exact />{" "}
				<Route
					exact
					path='/dashboard'
					element={isLoggedIn ? <DashBoard /> : <Navigate to='/homepage' />}
					exact
				/>
				<Route
					exact
					path='/'
					element={
						<HomePage
							detailspage={detailspage}
							setDetailspage={setDetailspage}
						/>
					}
					exact
				/>
				<Route path='/insurence' element={<Insurance />} />{" "}
				<Route path='/about' element={<About />} />{" "}
				<Route path='/salecar' element={<Submit1 />} />{" "}
				<Route path='/buycar' element={<ListTableTwo />} />{" "}
				<Route path='/notification' element={<Notification />} />{" "}
				<Route path='/contact' element={<Contact />} />{" "}
				<Route
					path='/detailsdata'
					element={
						<StockCars
							detailspage={detailspage}
							setDetailspage={setDetailspage}
						/>
					}
				/>{" "}
				<Route path='/details' element={<Details />} />{" "}
				<Route path='/emical' element={<EmiCalculator />} />{" "}
				<Route path='/submit2' element={<Submit2 />} />{" "}
				<Route path='/carloans' element={<CarLoan />} />{" "}
				{/* <Route path='/Addvechils' element={<AddVechil />} />{" "}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                				<Route path='/stocktable' element={<StoreVechileTable />} />{" "} */}{" "}
			</Routes>{" "}
			<Toaster
				position='top-center'
				toastOptions={{
					success: {
						style: {
							background: "#05A677",
							color: "#fff",
						},
					},
					info: {
						style: {
							background: "#0948B3",
							color: "#fff",
						},
					},
					error: {
						style: {
							background: "#FA5252",
							color: "#fff",
						},
					},
				}}
			/>{" "}
			<Footer />
		</div>
	);
}

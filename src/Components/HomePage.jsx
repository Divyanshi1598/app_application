import React, { useState, useEffect } from "react";
import CarLoan from "./CarLoan";
import Gellery from "./Gellery";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Navbar from "./Navbar";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./detail.css";
import ScrollTop from "./ScrollTop";

import Details from "./Details";
import { styled } from "@mui/material/styles";

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2, itemsToScroll: 2 },
	{ width: 768, itemsToShow: 4 },
	{ width: 1200, itemsToShow: 4 },
];

const breakPoints2 = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 1, itemsToScroll: 2 },
	{ width: 768, itemsToShow: 2 },
	{ width: 1200, itemsToShow: 2 },
];

export default function HomePage() {
	const [stockdata, setStockdata] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [result, setResult] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [makedatarequest, setMake] = useState([]);
	const [inputvalue, setInputvalue] = useState("");
	const [selectedValue, setSelectedValue] = useState(null);
	const [searchResults, setSearchResults] = useState([]);
	const [demo, setDemo] = useState([]);

	const [data, setData] = useState([]);
	const [model, setModel] = useState([]);
	const [source, setSource] = useState([]);
	const [typedata, setDatatype] = useState([]);
	const [varient, setVarient] = useState([]);
	const [vyear, setVechileYear] = useState([]);
	const [vmonth, setVechileMonth] = useState([]);
	const [extirecolor, setExtirearColor] = useState([]);
	const [fueldata, setFuelData] = useState([]);
	const [transmission, setTransmission] = useState([]);

	const [selectedItem, setSelectedItem] = useState("");
	const [resourcedata, setResoucedata] = useState("");
	const [selecttype, setSelecttype] = useState("");
	const [selectmodel, setSelectmodel] = useState("");
	const [selectfuel, setSelectFuel] = useState("");
	const [selecttransmission, setSelecttransmission] = useState("");
	const [selectextirecolor, setSelectextirecolor] = useState("");
	const [selectmfy, setSelectmfy] = useState("");
	const [selectmfm, setSelectmfm] = useState("");
	const [selectverient, setSelectverient] = useState("");
	const [codemodel, setcodemodel] = useState("");
	const [codemake, setcodemake] = useState("");
	const [codevarient, setvarientdata] = useState([]);
	const [minRange, setMinRange] = useState("");
	const [maxRange, setMaxRange] = useState("");
	const [selectedMake, setSelectedMake] = useState("");
	const [selectedModel, setSelectedModel] = useState("");
	const [selectedVariant, setSelectedVariant] = useState("");
	const [showdata, setShowdata] = useState(false);

	// make list
	useEffect(() => {
		const url =
			"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetGeneralMaster";
		const headers = {
			ApplicationMode: "ONLINE",
			EnvironmentType: "DEMO",
			BrandCode: "UC",
			CountryCode: "IN",
			"Content-Type": "application/json",
		};
		const data = {
			brandCode: "UC",
			countryCode: "IN",
			companyId: "SUSHIL",
			calledBy: "MAKE",
			loginUserId: "RAVI",
			loginIpAddress: "180.151.78.50",
		};

		fetch(url, {
			method: "POST",
			headers: headers,
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error(
						`Request failed with status code: ${response.status}`
					);
				}
			})
			.then((jsonData) => {
				const generalList = jsonData?.generalMasterList[0].generalList;
				setData(generalList);
				console.log(generalList, "checkmakelist");
				console.log(jsonData, "jsondata");
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	// model list

	useEffect(() => {
		const url =
			"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetGeneralMaster";
		const headers = {
			ApplicationMode: "ONLINE",
			EnvironmentType: "DEMO",
			BrandCode: "UC",
			CountryCode: "IN",
			"Content-Type": "application/json",
		};
		const data = {
			brandCode: "UC",
			countryCode: "IN",
			companyId: "SUSHIL",
			calledBy: "MODEL",
			vehMake: codemodel,

			loginUserId: "RAVI",
			loginIpAddress: "180.151.78.50",
		};

		fetch(url, {
			method: "POST",
			headers: headers,
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error(
						`Request failed with status code: ${response.status}`
					);
				}
			})
			.then((jsonData) => {
				const generalList = jsonData?.generalMasterList[0].generalList;
				setModel(generalList);
				console.log(generalList, "MODELLIST");
			})
			.catch((error) => {
				console.error(error);
			});
	}, [codemodel]);

	// varient list
	useEffect(() => {
		const url =
			"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetGeneralMaster";
		const headers = {
			ApplicationMode: "ONLINE",
			EnvironmentType: "DEMO",
			BrandCode: "UC",
			CountryCode: "IN",
			"Content-Type": "application/json",
		};
		const data = {
			brandCode: "UC",
			countryCode: "IN",
			companyId: "SUSHIL",

			calledBy: "VARIANT",
			vehMake: codemodel,
			vehModel: codemake,

			loginUserId: "RAVI",
			loginIpAddress: "180.151.78.50",
		};

		fetch(url, {
			method: "POST",
			headers: headers,
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error(
						`Request failed with status code: ${response.status}`
					);
				}
			})
			.then((jsonData) => {
				const generalList = jsonData?.generalMasterList[0].generalList;
				setVarient(generalList);
				// // console.log(generalList, "varient list");
			})
			.catch((error) => {
				console.error(error);
			});
	}, [codemake, codemodel]);

	const handleSelectChange = (event) => {
		setSelectedItem(event.target.value);
		setcodemodel(event.target.value);
		console.log(event.target.value, "check console");
	};
	const handleSelectChange3 = (event) => {
		setSelectmodel(event.target.value);
		setcodemodel(event.target.value);
		setcodemake(event.target.value);
		console.log(codemake, "setcodemake");

		console.log(event.target.value, "check con");
	};

	// // console.log(event.target.value, "check con");

	const handleSelectChange9 = (event) => {
		setSelectverient(event.target.value);
	};
	const navigate = useNavigate();

	// stock details

	useEffect(() => {
		const fetchData = async () => {
			const url =
				"https://mobile.orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetUsedCarVehStockDetail";
			const headers = {
				ApplicationMode: "ONLINE",
				EnvironmentType: "DEMO",
				BrandCode: "UC",
				CountryCode: "IN",
				"Content-Type": "application/json",
			};
			const data = {
				brandCode: "UC",
				countryCode: "IN",
				companyId: "SUSHIL",
				// budgetFrom: 0,
				// budgetTo: 2000000,
				vehBrandCode: "ALL",
				vehModelCode: "ALL",
				vehFuel: "ALL",
				loginCompanyID: "ORBIT",
				loginUserId: "SULTAN",
				loginIpAddress: "192.168.10.32",
			};

			try {
				const response = await fetch(url, {
					method: "POST",
					headers: headers,
					body: JSON.stringify(data),
				});

				if (response.ok) {
					const responseData = await response.json();
					setStockdata(responseData?.UsedCarVehStockDetail);

					console.log(responseData?.UsedCarVehStockDetail, "stockdata");
					setDemo(responseData?.UsedCarVehStockDetail);
					console.log(responseData?.UsedCarVehStockDetail, "demo");
					// console.log(responseData?.UsedCarVehStockDetail, "check data");
				} else {
					throw new Error(
						`Request failed with status code: ${response.status}`
					);
				}
			} catch (error) {
				console.error("Error:", error);
			}
		};

		fetchData();
	}, []);

	const singleProducthandle = (uniqueSerial) => {
		const product = stockdata.find(
			(item) => item.uniqueSerial === uniqueSerial
		);
		setSelectedProduct(product);
		// navigate("/details");
	};

	const fetchData = async () => {
		const url =
			"https://mobile.orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetUsedCarVehStockDetail";
		const headers = {
			ApplicationMode: "ONLINE",
			EnvironmentType: "DEMO",
			BrandCode: "UC",
			CountryCode: "IN",
			"Content-Type": "application/json",
		};
		const data = {
			brandCode: "UC",
			countryCode: "IN",
			companyId: "SUSHIL",
			budgetFrom: parseInt(minRange) || 0,
			budgetTo: parseInt(maxRange) || 200000000,
			vehBrandCode: selectedItem,
			vehModelCode: selectmodel,
			vehFuel: "ALL",
			loginCompanyID: "ORBIT",
			loginUserId: "SULTAN",
			loginIpAddress: "192.168.10.32",
		};

		try {
			const response = await fetch(url, {
				method: "POST",
				headers: headers,
				body: JSON.stringify(data),
			});

			if (response.ok) {
				const responseData = await response.json();
				setSearchResults(responseData?.UsedCarVehStockDetail);
				setDemo(responseData?.UsedCarVehStockDetail);
				setShowdata(responseData?.UsedCarVehStockDetail);
				console.log("responseData", responseData);
			} else {
				throw new Error(`Request failed with status code: ${response.status}`);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const filterDataCars = (e) => {
		e.preventDefault();
		fetchData();
		// setSearchResults();
		searchResults.map((item) => console.log(item.uniqueSerial, "uniqueserial"));
	};

	const reloadPage = () => {
		window.location.reload();
	};

	useEffect(() => {
		if (!localStorage.getItem("token")) {
			navigate("/");
		}
	}, []);

	return (
		<>
			{/* <Navbar /> */}
			<ScrollTop />
			{selectedProduct ? (
				<Details selectedProduct={selectedProduct} />
			) : (
				<div></div>
			)}
			<div>
				<div
					className='m-home'
					data-scrolling-animations='true'
					data-equal-height='.b-auto__main-item'>
					{/* Loader */}

					<div id='page-preloader'>
						<span className='spinner'></span>
					</div>

					{/* Loader end */}

					{/* slider  */}
					<section className='b-slider'>
						<div
							id='carouselExampleFade'
							className='carousel slide carousel-fade'
							data-bs-ride='carousel'>
							<div className='carousel-inner'>
								<div className='carousel-item active'>
									<img
										style={{ marginTop: "-20px" }}
										src='media/main-slider/sushil-cars.jpg'
										className='d-block w-100'
										alt='...'
									/>
								</div>
							</div>
						</div>
					</section>

					{/* filter form search bar */}
					<section className='b-search'>
						<div className='container'>
							<div className='row'>
								<div
									className='b-search__main'
									style={{
										marginTop: "-20px",
										borderRadius: "30px",
										backgroundColor: "white",
									}}>
									<h4>Search Your Dream Car</h4>
									<form
										id='form1'
										className='b-search__main-form'
										onSubmit={filterDataCars}>
										<div className='row'>
											<div className='col-xs-12 col-md-12'>
												<div>
													<div className='col-xs-3'>
														<select
															value={selectedItem}
															onChange={handleSelectChange}>
															<option value=''>Select Make</option>
															{data.map((item, index) => (
																<option key={index} value={item.code}>
																	{item.description}
																</option>
															))}
														</select>
														<span className='fa fa-caret-down'></span>
													</div>
													<div className='col-xs-3'>
														<select
															value={selectmodel}
															onChange={handleSelectChange3}>
															<option value=''>Select Model</option>
															{model.map((item, index) => (
																<option key={index} value={item.code}>
																	{item.description}
																</option>
															))}
														</select>
														<span className='fa fa-caret-down'></span>
													</div>

													<div className='col-xs-3 '>
														<input
															className='inputdata'
															type='text'
															placeholder='Min Range'
															name='minRange'
															onChange={(e) => setMinRange(e.target.value)}
														/>
													</div>
													<div className='col-xs-3'>
														<input
															className='inputdata'
															type='text'
															placeholder='Max Range'
															name='maxRange'
															onChange={(e) => setMaxRange(e.target.value)}
														/>
													</div>
												</div>
											</div>
											<div className='col-md-12 col-xs-12'>
												{/* <div className='b-search__main-form-range'></div> */}
												<div className='b-search__main-form-submit '>
													<button
														style={{
															backgroundColor: "#f76d2b",
															textAlign: "center",
														}}
														type='submit'
														id='searcgbtn'
														className='  btn btn-lg'>
														<span
															style={{
																backgroundColor: "#f76d2b",
															}}>
															Search
														</span>
													</button>

													<button
														style={{
															marginLeft: "40px",
															backgroundColor: "#555555",
															textAlign: "start",
															color: "white",
														}}
														id='searcgbtn'
														type='reset'
														className='btn    btn-lg'
														onClick={reloadPage}>
														<span>Reset</span>
													</button>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</section>

					{/* Render the list of products */}

					{showdata === false ? (
						<>
							{/* vechile Stock home data on sale section */}

							<section className='b-homeAuto' style={{ marginTop: "-38px" }}>
								<div className='container-fluid'>
									<div className='col-xs-12   visible-xs-horizental-scroll'>
										<div className='b-homeAuto__latest'>
											<h5
												className='s-titleBg wow zoomInLeft'
												style={{ fontFamily: "Segoe UI" }}>
												GIVING OUR CUSTOMERS BEST DEALS
											</h5>
											<br />

											<h2
												className='s-title wow zoomInLeft'
												// '0.9s'
												style={{ fontFamily: "Segoe UI" }}>
												LATEST VEHICLES ON SALE
											</h2>

											<div className='' id='cardrow'>
												<Row xs={12} md={4} id='cardrow'>
													{demo
														?.filter(
															(item) =>
																item.programCode ===
																"SHORT_LIST_WEBSITE_HOME_PAGE"
														)

														.map((item) => (
															<div key={item.uniqueSerial} id='cardrow'>
																{/* {console.log(
																item.programCode ===
																	"SHORT_LIST_WEBSITE_HOME_PAGE",
																"dtuiioooojkkkkkk"
															)} */}
																<Col>
																	<div
																		onClick={() =>
																			singleProducthandle(item.uniqueSerial)
																		}
																		className=' card2 b-auto__main-item '>
																		{/* {console.log(item.modelImages, "data image url")} */}
																		<img
																			style={{
																				aspectRatio: "2/2",
																				width: "100%",
																				// border: "3px solid gray",
																				// borderRadius: "20px",
																			}}
																			className=' img-responsive center-block'
																			src={
																				item?.modelImages.length > 0 &&
																				item?.modelImages[0].uri
																			}
																			alt='nissan'
																		/>

																		<div
																			className=' d-flex b-items__cars-one-info-title'
																			style={{
																				fontSize: "16px",
																				marginLeft: "20px",
																				marginTop: "10px",
																			}}>
																			{" "}
																			<div>{item.vehManufactureYear} </div>
																			<div style={{ marginLeft: "5px" }}>
																				{" "}
																				{item.vehBrandCode}
																			</div>{" "}
																			<div style={{ marginLeft: "5px" }}>
																				{item.vehModelCode}{" "}
																			</div>
																		</div>

																		<div
																			id='textitem'
																			className='d-flex'
																			style={{
																				marginTop: "-4px",
																			}}>
																			<ul
																				className='d-flex'
																				style={{ fontSize: "" }}>
																				<div className='b'>
																					{item.vehOdometer} kms
																				</div>

																				<div
																					className=''
																					style={{ marginLeft: "15px" }}>
																					{item.exteriorColor}
																				</div>
																				<div
																					className=''
																					style={{ marginLeft: "15px" }}>
																					{item.vehFuelCode}
																				</div>

																				<div
																					className=''
																					style={{ marginLeft: "15px" }}>
																					{item.transmissionDesc}
																				</div>
																			</ul>
																		</div>

																		<span
																			style={{
																				marginLeft: "20px",
																			}}
																			className='d-flex ml-6'>
																			<i className=''></i>{" "}
																			<div
																				className='b-items__cars-one-info-title'
																				style={{ fontSize: "21px" }}>
																				Rs {item.vehSellPriceRecommended}
																			</div>
																		</span>
																	</div>
																</Col>
															</div>
														))}
												</Row>
												<div
													className=' fa fa-arrow-right fa-3x visible-xs'
													style={{ marginBottom: "90px" }}></div>

												{/* testing details */}
											</div>
										</div>
									</div>
								</div>
								<div className='clearfix'></div>
							</section>
						</>
					) : (
						<>
							{/* Search Stock data on sale section */}
							<section className='b-homeAuto' style={{ marginTop: "-38px" }}>
								<div className='container-fluid'>
									<div className='col-xs-12   visible-xs-horizental-scroll'>
										<div className='b-homeAuto__latest'>
											<h5
												className='s-titleBg wow zoomInLeft'
												style={{ fontFamily: "Segoe UI" }}>
												GIVING OUR CUSTOMERS BEST DEALS
											</h5>
											<br />

											<h2
												className='s-title wow zoomInLeft'
												style={{ fontFamily: "Segoe UI" }}>
												LATEST VEHICLES ON SALE Search
											</h2>

											<div className='  b-auto__main' id='cardrow'>
												<Row xs={12} md={4} id='cardrow'>
													{demo?.map((item) => (
														<div key={item.uniqueSerial} id='cardrow'>
															{/* {console.log(
															item.programCode ===
																"SHORT_LIST_WEBSITE_HOME_PAGE",
															"dtuiioooojkkkkkk"
														)} */}
															<Col>
																<div
																	onClick={() =>
																		singleProducthandle(item.uniqueSerial)
																	}
																	className=' card2 b-auto__main-item '>
																	{/* {console.log(item.modelImages, "data image url")} */}
																	<img
																		style={{ width: "100%" }}
																		className='  img-responsive center-block'
																		src={
																			item?.modelImages.length > 0 &&
																			item?.modelImages[0].uri
																		}
																		alt='nissan'
																	/>

																	<div
																		className=' d-flex b-items__cars-one-info-title'
																		style={{
																			fontSize: "16px",
																			marginLeft: "20px",
																		}}>
																		{" "}
																		<div>{item.vehManufactureYear} </div>
																		<div style={{ marginLeft: "5px" }}>
																			{" "}
																			{item.vehBrandCode}
																		</div>{" "}
																		<div style={{ marginLeft: "5px" }}>
																			{item.vehModelCode}{" "}
																		</div>
																	</div>

																	<div
																		id='textitem'
																		className='d-flex'
																		style={{
																			marginTop: "-4px",
																		}}>
																		<ul
																			className='d-flex'
																			style={{ fontSize: "" }}>
																			<div className='b'>
																				{item.vehOdometer} kms
																			</div>

																			<div
																				className=''
																				style={{ marginLeft: "20px" }}>
																				{item.exteriorColor}
																			</div>
																			<div
																				className=''
																				style={{ marginLeft: "20px" }}>
																				{item.vehFuelCode}
																			</div>

																			<div
																				className=''
																				style={{ marginLeft: "20px" }}>
																				{item.transmissionDesc}
																			</div>
																		</ul>
																	</div>

																	<span
																		style={{
																			marginLeft: "20px",
																		}}
																		className='d-flex ml-6'>
																		<i className=''></i>{" "}
																		<div
																			className='b-items__cars-one-info-title'
																			style={{ fontSize: "18px" }}>
																			Rs {item.vehSellPriceRecommended}
																		</div>
																	</span>
																</div>
															</Col>
														</div>
													))}
												</Row>

												{/* testing details */}
											</div>
										</div>
									</div>
								</div>
								<div className='clearfix'></div>
							</section>
						</>
					)}
					{/* Exclusive offers slider */}
					<section className='b-featured'>
						<div className='container-fluid'>
							<h2 className='s-title '>Exclusive Offers</h2>
							<div className='carousel-wrapper'>
								<Carousel breakPoints={breakPoints}>
									{stockdata
										?.filter(
											(item) =>
												item.programCode ===
												"SHORT_LIST_WEBSITE_EXCLUSIVE_OFFERS"
										)
										.map((item) => (
											<div key={item.uniqueSerial}>
												<div>
													<div
														onClick={() =>
															singleProducthandle(item.uniqueSerial)
														}
														className=' card3 b-auto__main-item1 '>
														{/* {console.log(item.modelImages, "data image url")} */}
														<img
															style={{
																aspectRatio: "/2",
																width: "100%",
																// border: "3px solid gray",
																// borderRadius: "20px",
															}}
															className=' '
															src={
																item?.modelImages.length > 0 &&
																item?.modelImages[0].uri
															}
															alt='nissan'
														/>

														<div
															className=' d-flex b-items__cars-one-info-title'
															style={{
																fontSize: "16px",
																marginLeft: "20px",
																color: "white",
															}}>
															{" "}
															<div>{item.vehManufactureYear} </div>
															<div style={{ marginLeft: "5px" }}>
																{" "}
																{item.vehBrandCode}
															</div>{" "}
															<div style={{ marginLeft: "5px" }}>
																{item.vehModelCode}{" "}
															</div>
														</div>

														<div
															id='textitem'
															className='d-flex'
															style={{
																marginTop: "-4px",
																color: "white",
															}}>
															<ul className='d-flex' style={{ fontSize: "" }}>
																<div className='b'>{item.vehOdometer} kms</div>

																<div
																	className=''
																	style={{ marginLeft: "15px" }}>
																	{item.exteriorColor}
																</div>
																<div
																	className=''
																	style={{ marginLeft: "15px" }}>
																	{item.vehFuelCode}
																</div>

																<div
																	className=''
																	style={{ marginLeft: "15px" }}>
																	{item.transmissionDesc}
																</div>
															</ul>
														</div>

														<span
															style={{
																marginLeft: "20px",
																color: "white",
															}}
															className='d-flex ml-6'>
															<i className=''></i>{" "}
															<div
																className='b-items__cars-one-info-title'
																style={{ fontSize: "21px", color: "white" }}>
																Rs {item.vehSellPriceRecommended}
															</div>
														</span>
													</div>
												</div>
											</div>
										))}
								</Carousel>
							</div>

							{/* slide checking */}
						</div>
					</section>

					{/* 


WELCOME TO SUSHIL CARS  section */}

					<section className='b-welcome'>
						<div className='container'>
							<div className='row'>
								<div className='col-md-3 col-lg-3 col-xs-12'>
									<div className='row'>
										<div className='col-xs-12 m-padding'>
											<div className='b-welcome__services-auto wow '>
												<div className='b-welcome__services-img m-auto'>
													<Link to='/carloans'>
														<span
															style={{ marginLeft: "25px" }}
															className='fa fa-cab'></span>
													</Link>
												</div>

												<h3>Auto Loans</h3>
											</div>
										</div>
										<div className='col-xs-12 text-right visible-md visible-lg'>
											<div className='m-circle wow slideInRight'>
												<span className='b-welcome__services-circle'></span>
											</div>
										</div>
										<div className='col-xs-12 m-padding'>
											<div className='b-welcome__services-buying wow '>
												<div className='b-welcome__services-img m-buying'>
													<span
														style={{ marginLeft: "25px" }}
														className='fa fa-book'></span>
												</div>
												<h3>Customer Requirements</h3>
											</div>
										</div>
									</div>
								</div>
								<div className='col-md-6 col-lg-6 col-xs-12'>
									<div className='b-welcome__text wow '>
										<h2>INDIA'S LEADING CAR DEALER</h2>
										<h3>WELCOME TO SUSHIL CARS</h3>
										<p>
											Established in the year 2002, Sushil Car Bazar is one of
											the top & most trusted dealership for preowned luxury
											car.In over 17 years of business history we have always
											had a customer oriented approach & total customer
											satisfaction has been our motive. We tend to deliver the
											very best quality vehicle at the foremost competitive
											cost. Sushil Car bazar is a one stop solution to sell
											yourPremium/ Luxury car at best price.
										</p>
										<ul className='welcome-points'>
											<li>
												<span className='fa fa-check'></span>Low Prices, No
												Haggling
											</li>
											<li>
												<span className='fa fa-check'></span>Largest Car
												Dealership
											</li>
											<li>
												<span className='fa fa-check'></span>Multipoint Safety
												Check
											</li>
										</ul>
									</div>
								</div>
								<div className='col-md-3 col-lg-3 col-xs-12'>
									<div className='row'>
										<div className='col-xs-12 m-padding'>
											<div className='b-welcome__services-trade wow '>
												<div className='b-welcome__services-img m-trade'>
													<Link to='/insurence'>
														<span
															style={{ marginLeft: "20px" }}
															className='fa fa-shield'></span>
													</Link>
												</div>
												<h3>insurance</h3>
											</div>
										</div>
										<div className='col-xs-12 text-left visible-md visible-lg'>
											<div className='m-circle pull-right wow slideInLeft'>
												<span className='b-welcome__services-circle m-left'></span>
											</div>
										</div>
									</div>
									<div className='row'>
										<div className='col-xs-12 m-padding'>
											<div className='b-welcome__services-trade wow '>
												<div className='b-welcome__services-img m-trade'>
													<Link to='/emical'>
														<span
															style={{ marginLeft: "28px" }}
															className='fa fa-calculator'></span>
													</Link>
												</div>
												<h3> Emi calculator</h3>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* switch to go mobile */}
					<section className='b-count sms-sec'>
						<div className='container'>
							<div className='row'>
								<div
									className='col-md-6 col-xs-12 percent-blocks sms-main'
									data-waypoint-scroll='true'>
									<div className='row'>
										<div className='col-md-10'>
											<div className='sms-sec__item'>
												<div
													className='getng_t_text wow  '
													style={{
														visibility: "visible",
														animationDelay: "0s",
													}}>
													<p
														className='hidden-xs'
														style={{
															fontSize: "65px",
															fontWight: "700",
															lineHeight: "45px",
															fontVariantCaps: "all-petite-caps",
															fontFamily:
																"'Gill Sans', 'Gill Sans MT', 'Myriad Pro', 'DejaVu Sans Condensed', Helvetica, Arial, 'sans-serif'",
														}}>
														Switch to the fast lane. <br /> Go mobile
													</p>

													<p
														className='visible-xs'
														style={{
															fontSize: "40px",
															fontWight: "700",
															lineHeight: "45px",
															fontVariantCaps: "all-petite-caps",
															fontFamily:
																"'Gill Sans', 'Gill Sans MT', 'Myriad Pro', 'DejaVu Sans Condensed', Helvetica, Arial, 'sans-serif'",
														}}>
														Switch to the fast lane. <br /> Go mobile
													</p>
													<p>
														Download our app and let your mobile assistence do
														all the hard work
													</p>
												</div>
												<div
													className='getng_btns wow  '
													style={{
														visibility: "visible",
														animationDelay: "0.3s",
													}}>
													<a target='_blank' className='apkbtn'>
														<img
															className='lazy'
															alt='apk btn 1'
															src='assets/app-logo/google-play-logo.png'
															style={{ display: "inline-block" }}
														/>
													</a>
													<a target='_blank' className='apkbtn'>
														<img
															className='lazy'
															alt='apk btn 2'
															src='assets/app-logo/apple-app-store-logo.png'
															style={{ display: "inline-block" }}
														/>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* customer syaing slider */}
					{/* <section className='b-homeReviews'>
						<div className='container'>
							<h1 className='s-title wow zoomInUp'>WHAT CUSTOMERS SAYING</h1>
							<Carousel style={{ width: "118%" }} breakPoints={breakPoints2}>
								{CustomerDetails.map((item) => (
									<div key={item}>
										<div className=''>
											<div className='b-homeReviews__main-body'>
												<p style={{ fontSize: "15px" }}>{item.detail}</p>
												<img src={item.carimg} alt='carimg' />
											</div>

											<div
												className='b-homeReviews__main-person'
												style={{ marginTop: "1105" }}>
												<div className='b-review__main-person m-personTwo'>
													<div
														style={{ marginTop: "-30px", marginLeft: "-20px" }}>
														<img src={item.custimg} alt='imgcust' />
													</div>
												</div>
												<div className='b-homeReviews__main-person-name'>
													<em>"</em>
													<h4>{item.custname}</h4>
													<p>{item.feedback}</p>
												</div>
											</div>
										</div>
									</div>
								))}
							</Carousel>
						</div>
					</section> */}
					<section className='b-asks'>
						<div className='container'>
							<div className='row'>
								<div className='col-md-6 col-sm-10 col-sm-offset-1 col-md-offset-0 col-xs-12'>
									<div className='b-asks__first wow '>
										<div className='b-asks__first-circle'>
											<span className='fa fa-search'></span>
										</div>
										<div className='b-asks__first-info'>
											<h2>ARE YOU LOOKING FOR A CAR?</h2>{" "}
											<p>
												Search Our Inventory With Thousands Of Cars And More
												Cars Are Adding On Daily Basis
											</p>
										</div>
										<div className='b-asks__first-arrow'>
											<Link to='/detailsdata'>
												<span className='fa fa-angle-right'></span>
											</Link>
										</div>
									</div>
								</div>
								<div className='col-md-6 col-sm-10 col-sm-offset-1 col-xs-12 col-md-offset-0'>
									<div className='b-asks__first m-second wow '>
										<div className='b-asks__first-circle'>
											<span className='fa fa-rupee'></span>
										</div>
										<div className='b-asks__first-info'>
											<h2 style={{ color: "white" }}>
												DO YOU WANT TO SELL A CAR?
											</h2>
											<p>
												Search Our Inventory With Thousands Of Cars And More
												Cars Are Adding On Daily Basis
											</p>
										</div>
										<div className='b-asks__first-arrow'>
											<Link to='/salecar'>
												<span className='fa fa-angle-right'></span>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className='b-count'>
						<div className='container'>
							<div className='row'>
								<div
									className='col-md-11 col-xs-12 percent-blocks m-main'
									data-waypoint-scroll='true'>
									<div className='row'>
										<div className='col-sm-4 col-xs-6'>
											<div className='b-count__item'>
												<div className='b-count__item-circle'>
													<Link to='/detailsdata'>
														<span
															style={{ marginLeft: "40px" }}
															className='fa fa-car'></span>
													</Link>
												</div>
												<div className='chart' data-percent='5000'>
													<h2 className='percent'>200</h2>
												</div>
												<h5>vehicles in stock</h5>
											</div>
										</div>
										<div className='col-sm-4 col-xs-6'>
											<div className='b-count__item'>
												<div className='b-count__item-circle'>
													<span
														style={{ marginLeft: "40px" }}
														className='fa fa-users'></span>
												</div>
												<div className='chart' data-percent='3100'>
													<h2 className='percent'>3100</h2>
												</div>
												<h5>HAPPY CUSTOMER REVIEWS</h5>
											</div>
										</div>
										<div className='col-sm-4 col-xs-6'>
											<div className='b-count__item'>
												<div className='b-count__item-circle'>
													<span
														style={{ marginLeft: "40px" }}
														className='fa fa-building-o'></span>
												</div>
												<div className='chart' data-percent='500'>
													<h2 className='percent'>2</h2>
												</div>
												<h5>DEALER BRANCHES</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className='b-brands s-shadow'>
						<div className='container'>
							<h5 className='s-titleBg wow zoomInUp'>FIND OUT MORE</h5>
							<br />
							<h2 className='s-title wow zoomInUp'>BRANDS WE OFFER</h2>
							<div className=''>
								<div className='b-brands__brand wow rotateIn'>
									<img src='media/brands/bmwLogo.png' alt='brand' />
								</div>
								<div className='b-brands__brand wow rotateIn'>
									<img src='media/brands/kia.png' alt='brand' />
								</div>
								<div className='b-brands__brand wow rotateIn'>
									<img src='media/brands/volvo.png' alt='brand' />
								</div>
								<div className='b-brands__brand wow rotateIn'>
									<img src='media/brands/mercLogo.png' alt='brand' />
								</div>
								<div className='b-brands__brand wow rotateIn'>
									<img src='media/brands/audiLogo.png' alt='brand' />
								</div>
								<div className='b-brands__brand wow rotateIn'>
									<img src='media/brands/honda.png' alt='brand' />
								</div>
								<div className='b-brands__brand wow rotateIn'>
									<img src='media/brands/mg.png' alt='brand' />
								</div>
							</div>
						</div>
					</section>
					<div className='b-info'>
						<div className='container'>
							<div className='row'>
								<div className='col-md-3 col-xs-12'>
									<aside className='b-info__aside wow zoomInLeft'>
										<article className='b-info__aside-article'>
											<h3>OPENING HOURS</h3>
											<div className='b-info__aside-article-item'>
												<h6>Sales Department</h6>
												<p>
													Mon-Sat : 8:00am - 5:00pm
													<br /> Sunday is closed
												</p>
											</div>
										</article>
										<article className='b-info__aside-article'>
											<h3>About us</h3>
											<p>
												Established in the year 2002, Sushil Car Bazar is one of
												the top & most trusted dealership for preowned luxury
												car.In over 17 years of business history we have always
												had a customer oriented approach & total customer
												satisfaction has been our motive
											</p>
										</article>
										<Link to='/about' className='btn m-btn'>
											Read More<span className='fa fa-angle-right'></span>
										</Link>
									</aside>
								</div>

								<div className='col-md-5 col-xs-12'>
									<address className='b-info__contacts wow zoomInUp'>
										<p>contact us</p>
										<div className='b-info__contacts-item'>
											<span className='fa fa-map-marker'></span>
											<ol>
												Plot No, 5 Block A1 Sector 11 DLF Faridabad, 11-12
												Dividing Road Pincode 121006
											</ol>
										</div>
										<div className='b-info__contacts-item'>
											<span className='fa fa-map-marker'></span>
											<em>
												<ol>Spaze Boulevard, Sector-47, Gurugram</ol>
											</em>
										</div>
										<div className='b-info__contacts-item'>
											<span className='fa fa-phone'></span>
											<ol>
												+91 92509 22333
												<br />
												+91 98114 36332
											</ol>
										</div>

										<div className='b-info__contacts-item'>
											<span className='fa fa-envelope'></span>
											<em>
												<ol>sushilcarbazar@gmail.com</ol>
											</em>
										</div>
									</address>
									<address className='b-info__map'>
										<Link to='/contact'>Open Location Map</Link>
									</address>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

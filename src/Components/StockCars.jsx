import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Item from "./Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./detail.css";
import Details from "./Details";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Slider from "react-slider";
import "./prizerange.css";
import PageScrollTop from "./PageScrollTop";
import ReactLoading from "react-loading";
import Pagination from "./Pagination";

import { Typography, makeStyles, TablePagination } from "@material-ui/core";

const MIN = 50000;
const MAX = 6000000;

const StockCars = () => {
	const [openprice, setOpenprice] = useState(false);
	const [openyear, setOpenyear] = useState(false);
	const [opendriven, setOpendriven] = useState(false);
	const [openmanuf, setOpenmanuf] = useState(false);
	const [openbodytype, setOpenbodytype] = useState(false);
	const [openfueltype, setOpenfueltype] = useState(false);
	const [openTransmission, setOpenTransmission] = useState(false);
	const [stockdata, setStockdata] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState(null);

	const [selectedValue, setSelectedValue] = useState(null);
	const [searchResults, setSearchResults] = useState([]);
	const [demo, setDemo] = useState([]);

	const [data, setData] = useState([]);
	const [model, setModel] = useState([]);
	const [source, setSource] = useState([]);
	const [varient, setVarient] = useState([]);
	const [vyear, setVechileYear] = useState([]);
	const [fueldata, setFuelData] = useState([]);
	const [transmission, setTransmission] = useState([]);
	const [selectbodytype, setselectbodytype] = useState([]);
	const [kmsDriven, setkmsDriven] = useState([]);
	const [selectedItem, setSelectedItem] = useState("");
	const [resourcedata, setResoucedata] = useState("");
	const [selecttype, setSelecttype] = useState("");
	const [selectmodel, setSelectmodel] = useState("");
	const [selectfuel, setSelectFuel] = useState("");
	const [selecttransmission, setSelecttransmission] = useState([]);
	const [selectextirecolor, setSelectextirecolor] = useState("");
	const [selectmfy, setSelectmfy] = useState("");
	const [selectverient, setSelectverient] = useState("");
	const [codemodel, setcodemodel] = useState("");
	const [codemake, setcodemake] = useState("");
	const [codevarient, setvarientdata] = useState([]);
	const [minRange, setMinRange] = useState("");
	const [maxRange, setMaxRange] = useState("");
	const [selectedMake, setSelectedMake] = useState([]);
	const [selectedModel, setSelectedModel] = useState("");
	const [selectedVariant, setSelectedVariant] = useState("");
	const [showdata, setShowdata] = useState(false);

	const [result, setResult] = useState("");
	const [makedatarequest, setMake] = useState([]);
	const [inputvalue, setInputvalue] = useState("");
	const [typedata, setDatatype] = useState([]);
	const [vmonth, setVechileMonth] = useState([]);
	const [extirecolor, setExtirearColor] = useState([]);
	const [selectmfm, setSelectmfm] = useState("");
	const [detailspage, setdetailspage] = useState(false);

	const [prizevalue, setprizevalue] = useState([MIN, MAX]);

	const [currentpage, setCurrentPage] = useState(1);
	const itemsperpage = 18;
	const totalItems = demo.length;
	const totalPage = Math.ceil(totalItems / itemsperpage);

	const onPageChange = (page) => {
		setCurrentPage(page);
	};

	const Startindex = (currentpage - 1) * itemsperpage;
	const EndIndex = Startindex + itemsperpage;
	const currentData = stockdata.slice(Startindex, EndIndex);

	// All Stock Show
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
				budgetFrom: 0,
				budgetTo: 0,
				vehBrandCode: "",
				vehModelCode: "",
				vehFuel: "",
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
					setDemo(responseData?.UsedCarVehStockDetail);

					setSearchResults(responseData?.UsedCarVehStockDetail);
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
		setdetailspage(product);
	};

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
			})
			.catch((error) => {
				console.error(error);
			});
	}, [codemodel]);
	// Lead Type list
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
			calledBy: "LEAD_TYPE",
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
				setDatatype(generalList);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
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
			})
			.catch((error) => {
				console.error(error);
			});
	}, [codemake, codemodel]);
	// year list
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
			calledBy: "MF_YEAR",
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
				setVechileYear(generalList);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	// month list
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
			calledBy: "MONTH",
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
				setVechileMonth(generalList);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	// fuel list
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
			calledBy: "FUEL",
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
				setFuelData(generalList);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	//  TRANSMISSION list
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
			calledBy: "TRANSMISSION",
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
				setTransmission(generalList);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	// extier color list

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
			calledBy: "EXT_COLOR",

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
				setExtirearColor(generalList);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [codemodel, codemake]);

	const handleSelectChange = (event) => {
		setSelectedItem(event.target.value);
		setcodemodel(event.target.value);
	};

	const handleSelectChange4 = (event) => {
		setSelectFuel(event.target.value);
	};

	const handleSelectChange2 = (event) => {
		setSelecttype(event.target.value);
	};
	const handleSelectChange3 = (event) => {
		setSelectmodel(event.target.value);
		setcodemake(event.target.value);
	};

	const handleSelectChange5 = (event) => {
		setSelecttransmission(event.target.value);
	};
	const handleSelectChange6 = (event) => {
		setSelectextirecolor(event.target.value);
	};
	const handleSelectChange7 = (event) => {
		setSelectmfy(event.target.value);
	};
	const handleSelectChange8 = (event) => {
		setSelectmfm(event.target.value);
	};
	const handleSelectChange9 = (event) => {
		setSelectverient(event.target.value);
	};

	const handleSelectBodyType = (event) => {
		setselectbodytype(event.target.value);
	};

	const handleSelectKmsType = (event) => {
		setkmsDriven(event.target.value);
	};

	const navigate = useNavigate();

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
			budgetFrom: prizevalue[0],
			budgetTo: prizevalue[1],
			vehBrandCode: selectedItem,
			vehModelCode: selectmodel,
			vehVariantDesc: selectverient,
			vehFuel: selectfuel,
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
				setStockdata(responseData?.UsedCarVehStockDetail);
				setDemo(responseData?.UsedCarVehStockDetail);
				setShowdata(responseData?.UsedCarVehStockDetail);
			} else {
				throw new Error(`Request failed with status code: ${response.status}`);
			}
		} catch (error) {
			console.error("Data not found", error);
		}
	};

	const handleSaveData = (e) => {
		e.preventDefault();
		fetchData();
		searchResults.map((item) => console.log("uniqueserial"));
	};

	const reloadPage = () => {
		window.location.reload();
	};

	return (
		<>
			<PageScrollTop />
			{detailspage === false ? (
				<div>
					{/* body stucture */}
					<div
						className='m-listTableTwo'
						data-scrolling-animations='true'
						data-equal-height='.b-items__cell'>
						<div id='page-preloader'>
							<span className='spinner'></span>
						</div>

						<section className='b-pageHeader'>
							<div className='container'>
								<h1 className=''>Auto Listings</h1>

								{/* Add total counter stock number  */}

								<div className='b-pageHeader__search  '>
									{showdata === false ? (
										<>
											<span>Total Number of Cars {totalItems} </span>
										</>
									) : (
										<>
											<span>Total Number of Search Cars {demo.length} </span>
										</>
									)}
								</div>
							</div>
						</section>

						<div className='b-breadCumbs s-shadow'>
							<div className='container '>
								<Link to='/' className='b-breadCumbs__page'>
									Home
								</Link>
								<span className='fa fa-angle-right'></span>
								<a className='b-breadCumbs__page m-active'>Buy Car</a>

								<div
									className='b-pageHeader__search visible-xs  '
									style={{
										marginTop: "-20px",
										color: "white",
										padding: "3px",
										marginLeft: "187px",
									}}>
									{showdata === false ? (
										<>
											<span>Total Number of Cars {totalItems} </span>
										</>
									) : (
										<>
											<span>Total Number of Search Cars {demo.length} </span>
										</>
									)}
								</div>
							</div>
						</div>

						{/* filter section */}

						{/* body details cars */}
						<div className='row' id='wid_siz'>
							<div className='drup_mn1 visible-xs '>
								<div className='prise_mn'>
									<ul id='cardrow'>
										<li>
											<select
												id='selectdata2'
												class=''
												value={selectedItem}
												onChange={handleSelectChange}>
												<option value=''>Brand</option>
												{data.map((item, index) => (
													<option key={index} value={item.code}>
														{item.description}
													</option>
												))}
											</select>
										</li>
										<li>
											<select
												id='selectdata2'
												class=''
												value={selectmodel}
												onChange={handleSelectChange3}>
												<option value=''> Model </option>
												{model.map((item, index) => (
													<option key={index} value={item.code}>
														{item.description}
													</option>
												))}
											</select>
										</li>

										<li>
											<select
												id='selectdata2'
												class=''
												value={selectfuel}
												onChange={handleSelectChange4}>
												<option value=''> Fuel-type</option>
												{fueldata.map((item, index) => (
													<option key={index} value={item.code}>
														{item.description}
													</option>
												))}
											</select>
										</li>
									</ul>
									<div className='prizetext'>
										<div className='textprize' style={{ color: "white" }}>
											<span>{prizevalue[0]}</span>
											<span className='rsarr'>
												<i class='fa-solid fa-indian-rupee-sign'></i>{" "}
											</span>{" "}
											-<span> {prizevalue[1]}</span>
											<span className='rsarr'>
												<i class='fa-solid fa-indian-rupee-sign'></i>{" "}
											</span>
										</div>
									</div>

									<div onClick={handleSaveData}>
										<Slider
											className={"prizeslider"}
											onChange={setprizevalue}
											value={prizevalue}
											min={MIN}
											max={MAX}
										/>
									</div>

									<div
										className='filterbutton visible-xs'
										style={{ margin: "10px 20px 10px 60px" }}>
										<button className=' btn-sm' onClick={handleSaveData}>
											Search
										</button>
										<button className=' btn-sm' onClick={reloadPage}>
											Reset
										</button>
									</div>
								</div>
							</div>

							<form
								id='viewform'
								class='s-submit clearfix hidden-xs'
								onSubmit={handleSaveData}
								style={{
									backgroundColor: "black",
									width: "20%",
									height: "30%",
								}}>
								<div class='row'>
									<div class='col-xs-12 col-md-12'>
										<div className='prise_mn'>
											<div className='prizetext'>
												<div className='textprize' style={{ color: "white" }}>
													<span>{prizevalue[0]}</span>
													<span className='rsarr'>
														<i class='fa-solid fa-indian-rupee-sign'></i>{" "}
													</span>{" "}
													-<span> {prizevalue[1]}</span>
													<span className='rsarr'>
														<i class='fa-solid fa-indian-rupee-sign'></i>{" "}
													</span>
												</div>
											</div>

											<div onClick={handleSaveData}>
												<Slider
													className={"prizeslider"}
													onChange={setprizevalue}
													value={prizevalue}
													min={MIN}
													max={MAX}
												/>
											</div>
										</div>

										<br />

										<div class='col-xs-12 col-md-12 col-lg-12 col-xl-12'>
											<div class=''>
												<select
													onClick={handleSaveData}
													id='selectdata'
													class=''
													value={selectedItem}
													onChange={handleSelectChange}>
													<option value=''>Brand</option>
													{data.map((item, index) => (
														<option key={index} value={item.code}>
															{item.description}
														</option>
													))}
												</select>
												<span class='fa fa-caret'></span>
											</div>
										</div>

										<div
											class='col-xs-12 col-md-12 col-lg-12 col-xl-12'
											data-wow-delay='0.5s'>
											<div class=''>
												<select
													id='selectdata'
													class=''
													onClick={handleSaveData}
													value={selectmodel}
													onChange={handleSelectChange3}>
													<option value=''> Model </option>
													{model.map((item, index) => (
														<option key={index} value={item.code}>
															{item.description}
														</option>
													))}
												</select>
												<span class='fa fa-caret-d'></span>
											</div>
										</div>

										<div className='col-xs-12 col-md-12 col-lg-12 col-xl-12'>
											<div class='s-relative'>
												<select
													id='selectdata'
													class=''
													onClick={handleSaveData}
													value={selectfuel}
													onChange={handleSelectChange4}>
													<option value=''> Fuel-type</option>
													{fueldata.map((item, index) => (
														<option key={index} value={item.code}>
															{item.description}
														</option>
													))}
												</select>
												<span class='fa fa-caret-'></span>
											</div>
										</div>

										<br />
										<br />

										<div
											id='fliterbutton'
											className=''
											style={{ alignItems: "center" }}>
											<button
												style={{
													color: "black",

													backgroundColor: "#f76d2b",
												}}
												onClick={reloadPage}
												className='btn-sm btnn1 '>
												Clear Filter
											</button>
											<br />
											<br />
										</div>
									</div>
								</div>
							</form>

							{showdata === false ? (
								<>
									{/* normal Stock */}
									<div className='col-xs-12 col-md-12  col-lg-9 col-xl-9 '>
										<div className='b-items itm_bg1'>
											<div className='container'>
												<div className='b-auto__main'></div>
												<Row xs={12} md={3} id=''>
													{currentData.length === 0 ? (
														<>
															<div
																className='loader hidden-xs'
																style={{
																	marginLeft: "300px",
																	marginTop: "200px",
																}}>
																<ReactLoading
																	type='spin'
																	color='#f76d2b'
																	height={200}
																	width={100}
																/>
															</div>
															<div
																className='loader visible-xs'
																style={{
																	marginTop: "41px",
																	marginLeft: "115px",
																}}>
																<ReactLoading
																	type='spin'
																	color='#f76d2b'
																	height={200}
																	width={100}
																/>
															</div>
														</>
													) : (
														<>
															{currentData?.map((item) => {
																const frontImage = item?.modelImages.find(
																	(image) => image?.imageName === "Front"
																);
																if (frontImage) {
																	return (
																		<div key={frontImage.uri}>
																			<Col>
																				<div
																					onClick={() =>
																						singleProducthandle(
																							item.uniqueSerial
																						)
																					}
																					className=' card2 cr_pic b-auto__main-item '>
																					<img
																						style={{
																							aspectRatio: "2/2",
																							width: "100%",
																						}}
																						className=' img-responsive center-block'
																						src={frontImage.uri}
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
																						<div>
																							{item.vehManufactureYear}{" "}
																						</div>
																						<div style={{ marginLeft: "5px" }}>
																							{" "}
																							{item.vehBrandCode}
																						</div>{" "}
																						<div style={{ marginLeft: "5px" }}>
																							{item.vehModelCode}{" "}
																						</div>
																					</div>

																					<div class='rate_ts_mn'>
																						<ul>
																							<li>{item.vehOdometer} KMS</li>
																							<li>{item.exteriorColor}</li>
																							<li>{item.vehFuelCode}</li>
																							<li>{item.transmissionDesc}</li>
																						</ul>
																					</div>
																					<span
																						style={{
																							marginLeft: "19px",
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
																	);
																}
															})}
														</>
													)}
												</Row>
												<div className='row' style={{}} id='cardrow'>
													<Pagination
														onPageChange={onPageChange}
														currentpage={currentpage}
														totalPage={totalPage}
													/>
												</div>
											</div>
										</div>
									</div>
								</>
							) : (
								/* Search Data   */
								<>
									<>
										{/* web view */}
										<div className=' col-xs-12 col-md-12  col-lg-9 col-xl-9 '>
											<div className='b-items itm_bg1'>
												<div className='container'>
													<div className='b-auto__main'></div>
													<Row xs={12} md={3} id=''>
														{currentData.length === 0 ? (
															<div className='notdatafound'>
																<p>vehicle Not Available</p>
																<img
																	src='https://img.freepik.com/free-vector/no-data-concept-illustration_114360-616.jpg?size=626&ext=jpg'
																	alt='imph'
																/>
															</div>
														) : (
															<>
																{currentData?.map((item) => (
																	<div key={item.uniqueSerial}>
																		{/* {console.log(
																			demo,
																			"check demo search data"
																		)} */}

																		<>
																			<Col>
																				<div
																					onClick={() =>
																						singleProducthandle(
																							item.uniqueSerial
																						)
																					}
																					className='card2 cr_pic b-auto__main-item '>
																					<div className=''>
																						<div className=''>
																							<img
																								style={{
																									aspectRatio: "2/2",
																									width: "100%",
																								}}
																								// id='pic_hit1'
																								className='img-responsive center-block'
																								src={
																									item?.modelImages.length >
																										0 &&
																									item?.modelImages[0].uri
																								}
																								alt='jeep'
																							/>
																						</div>

																						<div
																							className=' d-flex b-items__cars-one-info-title'
																							style={{
																								fontSize: "16px",
																								marginLeft: "20px",
																							}}>
																							{" "}
																							<div>
																								{item.vehManufactureYear}{" "}
																							</div>
																							<div
																								style={{ marginLeft: "5px" }}>
																								{" "}
																								{item.vehBrandCode}
																							</div>{" "}
																							<div
																								style={{ marginLeft: "5px" }}>
																								{item.vehModelCode}{" "}
																							</div>
																						</div>

																						<div class='rate_ts_mn'>
																							<ul>
																								<li>{item.vehOdometer} KMS</li>
																								<li>{item.exteriorColor}</li>
																								<li>{item.vehFuelCode}</li>
																								<li>{item.transmissionDesc}</li>
																							</ul>
																						</div>
																						<span
																							style={{
																								marginLeft: "19px",
																							}}
																							className='d-flex ml-6'>
																							<i className=''></i>{" "}
																							<div
																								className='b-items__cars-one-info-title'
																								style={{ fontSize: "18px" }}>
																								Rs{" "}
																								{item.vehSellPriceRecommended}
																							</div>
																						</span>
																					</div>
																				</div>
																			</Col>
																		</>
																	</div>
																))}
															</>
														)}
													</Row>

													<Pagination
														onPageChange={onPageChange}
														currentpage={currentpage}
														totalPage={totalPage}
													/>
												</div>
											</div>
										</div>
										{/* phone View */}
									</>
								</>
							)}
						</div>
					</div>

					<div className='b-features'>
						<div className='container'>
							<div className='row'>
								<div className='col-md-9 col-md-offset-3 col-xs-6 col-xs-offset-6'>
									<ul className='b-features__items'>
										<li
											className='wow zoomInUp'
											data-wow-delay='0.3s'
											data-wow-offset='100'>
											Low Prices, No Haggling
										</li>
										<li
											className='wow zoomInUp'
											data-wow-delay='0.3s'
											data-wow-offset='100'>
											Largest Car Dealership
										</li>
										<li
											className='wow zoomInUp'
											data-wow-delay='0.3s'
											data-wow-offset='100'>
											Multipoint Safety Check
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					{/* <!--b-features--> */}
				</div>
			) : (
				<>
					{selectedProduct ? (
						<Details selectedProduct={selectedProduct} />
					) : (
						<div></div>
					)}
				</>
			)}
		</>
	);
};

export default StockCars;

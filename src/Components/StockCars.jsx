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
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const StockCars = () => {
	// const classes = useStyles();
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
	// const [priceAmount, setpriceAmount] = useState([]);
	const [selectbodytype, setselectbodytype] = useState([]);
	const [kmsDriven, setkmsDriven] = useState([]);
	const [selectedItem, setSelectedItem] = useState([]);
	const [resourcedata, setResoucedata] = useState("");
	const [selecttype, setSelecttype] = useState("");
	const [selectmodel, setSelectmodel] = useState("");
	const [selectfuel, setSelectFuel] = useState([]);
	const [selecttransmission, setSelecttransmission] = useState([]);
	const [selectextirecolor, setSelectextirecolor] = useState("");
	const [selectmfy, setSelectmfy] = useState([]);
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
	const [selectedItems, setSelectedItems] = useState([]);

	const [result, setResult] = useState("");
	const [makedatarequest, setMake] = useState([]);
	const [inputvalue, setInputvalue] = useState("");
	const [typedata, setDatatype] = useState([]);
	const [vmonth, setVechileMonth] = useState([]);
	const [extirecolor, setExtirearColor] = useState([]);
	const [selectmfm, setSelectmfm] = useState("");

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

	const Amountdata = [
		{
			id: 1,
			img: "0 - 100000 L",
		},
		{
			id: 2,
			img: "100000 - 500000 L",
		},
		{
			id: 3,
			img: "500000 - 10,00000 L",
		},
		{
			id: 4,
			img: "10,00000 - 15,00000 L",
		},

		{
			id: 5,
			img: "15,00000 - 20,00000 L",
		},

		{
			id: 6,
			img: " 20,00000 - 25,00000 L",
		},

		{
			id: 7,
			img: "25,00000 -30,00000 L",
		},

		{
			id: 8,
			img: "30,00000 - 40,00000 L",
		},
		{
			id: 9,
			img: "40,00000 - 50,00000 L",
		},

		{
			id: 10,
			img: "50,00000 - 60,00000 L",
		},

		{
			id: 11,
			img: "60,00000 - 70,00000 L",
		},
		{
			id: 12,
			img: "70,00000 - 1,0000000 Cr",
		},
		{
			id: 13,
			img: "1,0000000 - 5,00000000 Cr",
		},
	];

	const bodyType = [
		{
			id: 1,
			img: "Hatchback",
		},
		{
			id: 2,
			img: "Sedan",
		},
		{
			id: 3,
			img: "SUV/MUV",
		},

		{
			id: 4,
			img: "Convertible",
		},
	];

	const kmsmeter = [
		{
			id: 1,
			img: "0 - 5000 kms",
		},
		{
			id: 2,
			img: " 5000 - 15000 kms",
		},
		{
			id: 3,
			img: "15000 - 30000 kms",
		},
		{
			id: 4,
			img: "30000 - 50000 kms",
		},

		{
			id: 5,
			img: " 50000 - 80000 kms",
		},

		{
			id: 6,
			img: "80000 kms or Above",
		},
	];

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
				console.log(generalList, "LEAD LIST");
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
				console.log(generalList, "varient list");
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
				// // console.log(generalList, "year list");
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
				// // console.log(generalList, "month list");
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
				// // console.log(generalList, "fuel list data");
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
				// // console.log(generalList, "transmission list");
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
				// // console.log(generalList, "EXTERICR COLOR list");
			})
			.catch((error) => {
				console.error(error);
			});
	}, [codemodel, codemake]);

	const handleSelectChange = (event) => {
		setSelectedItem(event.target.value);
		setcodemodel(event.target.value);
		// // console.log(event.target.value, "check console");
	};

	const handleSelectChange2 = (event) => {
		setSelecttype(event.target.value);
	};
	const handleSelectChange3 = (event) => {
		setSelectmodel(event.target.value);
		// setcodemodel(event.target.value);
		setcodemake(event.target.value);
		// // // console.log(setcodemake, "setcodemake");

		// // console.log(event.target.value, "check con");
	};
	const handleSelectChange4 = (event) => {
		setSelectFuel(event.target.value);
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

	const handleSaveData = (e) => {
		e.preventDefault();
		fetchData();
		// setSearchResults();
		searchResults.map((item) => console.log(item.uniqueSerial, "uniqueserial"));
	};

	const reloadPage = () => {
		window.location.reload();
	};
	return (
		<div>
			{/* body stucture */}
			{selectedProduct ? (
				<Details selectedProduct={selectedProduct} />
			) : (
				<div></div>
			)}

			<div
				className='m-listTableTwo'
				data-scrolling-animations='true'
				data-equal-height='.b-items__cell'>
				<div id='page-preloader'>
					<span className='spinner'></span>
				</div>

				<section className='b-pageHeader'>
					<div className='container'>
						<h1 className='wow zoomInLeft' data-wow-delay='0.5s'>
							Auto Listings
						</h1>

						{/* Add total counter stock number  */}

						{/* <div
							className='b-pageHeader__search wow zoomInRight'
							data-wow-delay='0.5s'>
							<h3>Your search returned 28 results</h3>
						</div> */}
					</div>
				</section>

				<div className='b-breadCumbs s-shadow'>
					<div className='container wow zoomInUp' data-wow-delay='0.5s'>
						<a href='home.html' className='b-breadCumbs__page'>
							Home
						</a>
						<span className='fa fa-angle-right'></span>
						<a href='listTableTwo.html' className='b-breadCumbs__page m-active'>
							Search Results
						</a>
					</div>
				</div>

				{/* filter section */}

				{/* body details cars */}
				<div className='row'>
					<form
						id='viewform'
						class='s-submit clearfix'
						onSubmit={handleSaveData}
						style={{
							backgroundColor: "black",
							width: "20%",
							height: "30%",
						}}>
						<div class='row'>
							<div class='col-xs-12 col-md-12 col-lg-3 col-xl-3'>
								<div className='row ' style={{ marginLeft: "20px" }}>
									<div className='col-5'>
										<button
											style={{
												color: "black",
												// marginTop: "20px",
												marginLeft: "150px",
												backgroundColor: "orange",
											}}
											onClick={reloadPage}
											// type='submit'
											className='btn-lg btn-warning'>
											Reset
										</button>
									</div>
									<div className='col-5'>
										<button
											style={{
												color: "black",
												// marginTop: "20px",
												marginLeft: "50px",
												backgroundColor: "orange",
											}}
											type='submit'
											className='btn-lg btn-warning'>
											Filter
										</button>
									</div>
								</div>

								<br />
								<br />
								<div class='col-xs-12 col-md-12 col-lg-12 col-xl-12'>
									<div class=''>
										<select
											id='selectdata'
											class=''
											value={selectedItem}
											onChange={handleSelectChange}>
											<option value=''>Preferred Manufacturer?</option>
											{data.map((item, index) => (
												<option key={index} value={item.code}>
													{item.description}
												</option>
											))}
										</select>
										<span class='fa fa-caret-down'></span>
									</div>
								</div>

								<div
									class='col-xs-12 col-md-12 col-lg-12 col-xl-12'
									data-wow-delay='0.5s'>
									<div class=''>
										<select
											id='selectdata'
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
										<span class='fa fa-caret-down'></span>
									</div>
								</div>
								<div
									class='col-xs-12 col-md-12 col-lg-12 col-xl-12'
									data-wow-delay='0.5s'>
									<div class=''>
										<select
											id='selectdata'
											class=''
											value={selectverient}
											onChange={handleSelectChange9}>
											<option value=''> Variant </option>
											{varient.map((item, index) => (
												<option key={index} value={item.code}>
													{item.description}
												</option>
											))}
										</select>
										<span class='fa fa-caret-down'></span>
									</div>
								</div>

								<div
									class='col-xs-12 col-md-12 col-lg-12 col-xl-12'
									data-wow-delay='0.5s'>
									<div class=''>
										<select
											id='selectdata'
											class=''
											value={selectverient}
											onChange={handleSelectChange9}>
											<option value=''> Budget </option>
											{Amountdata.map((item, id) => (
												<option key={id} value={item.id}>
													{item.img}
												</option>
											))}
										</select>
										<span class='fa fa-caret-down'></span>
									</div>
								</div>

								<div
									class='col-xs-12 col-md-12 col-lg-12 col-xl-12'
									data-wow-delay='0.5s'>
									<div class=''>
										<select
											id='selectdata'
											class=''
											value={selectmfy}
											onChange={handleSelectChange7}>
											<option value=''> Old Years </option>
											{vyear.map((item, index) => (
												<option key={index} value={item.code}>
													{item.description}
												</option>
											))}
										</select>
										<span class='fa fa-caret-down'></span>
									</div>
								</div>

								<div
									data-wow-delay='0.5s'
									className='col-xs-12 col-md-12 col-lg-12 col-xl-12'>
									<div class='s-relative'>
										<select
											id='selectdata'
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
										<span class='fa fa-caret-down'></span>
									</div>
								</div>

								<br />
								<br />
								<br />
								<br />
							</div>
						</div>
					</form>
					{showdata === false ? (
						<>
							{/* normal Stock */}

							<div className='col-xs-12 col-md-12  col-lg-9 col-xl-9'>
								<div className='b-items'>
									<div className='container'>
										<div className='b-auto__main'></div>
										<Row xs={12} md={3} id='cardrow'>
											{stockdata?.map((item) => {
												const frontImage = item?.modelImages.find(
													(image) => image?.imageName === "Front"
												);
												if (frontImage) {
													return (
														<div key={frontImage.uri}>
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
												return null;
											})}
										</Row>
									</div>
								</div>
							</div>
						</>
					) : (
						/* Search Data   */

						<div className=' col-xs-12 col-md-12  col-lg-9 col-xl-9'>
							<div className='b-items'>
								<div className='container'>
									<div className='b-auto__main'></div>
									<Row xs={12} md={3} id='cardrow'>
										<div
											className=' fa fa-angle-right fa-2x visible-xs'
											style={{
												marginLeft: "-70px",
												marginTop: "100px",
											}}></div>
										{demo?.map((item) => (
											<div key={item.uniqueSerial}>
												<Col>
													<div
														onClick={() =>
															singleProducthandle(item.uniqueSerial)
														}
														className='card2 b-auto__main-item '>
														<div className=''>
															<div className=''>
																<img
																	style={{
																		aspectRatio: "2/2",
																		width: "100%",
																	}}
																	// id='pic_hit1'
																	className=''
																	src={
																		item?.modelImages.length > 0 &&
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
																<ul className='d-flex' style={{ fontSize: "" }}>
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
													</div>
												</Col>
											</div>
										))}
									</Row>
								</div>
							</div>
						</div>
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

			<div className='b-info'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-3 col-xs-12'>
							<aside
								className='b-info__aside wow zoomInLeft'
								data-wow-delay='0.3s'>
								<article className='b-info__aside-article'>
									<h3>OPENING HOURS</h3>
									<div className='b-info__aside-article-item'>
										<h6>Sales Department</h6>
										<p>
											Mon-Sat : 8:00am - 5:00pm
											<br />
											Sunday is closed
										</p>
									</div>
								</article>
								<article className='b-info__aside-article'>
									<h3>About us</h3>
									<p>
										Established in the year 2002, Sushil Car Bazar is one of the
										top & most trusted dealership for preowned luxury car.In
										over 17 years of business history we have always had a
										customer oriented approach & total customer satisfaction has
										been our motive.
									</p>
								</article>
								<a href='about.html' className='btn m-btn'>
									Read More<span className='fa fa-angle-right'></span>
								</a>
							</aside>
						</div>

						<div className='col-md-5 col-xs-12'>
							<address
								className='b-info__contacts wow zoomInUp'
								data-wow-delay='0.3s'>
								<p>contact us</p>
								<div className='b-info__contacts-item'>
									<span className='fa fa-map-marker'></span>
									<ol>
										Plot No, 5 Block A1 Sector 11 DLF Faridabad, 11-12 Dividing
										Road Pincode 121006
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
								<a href='contacts.html'>Open Location Map</a>
							</address>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StockCars;

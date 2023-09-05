import React, { useState, useEffect } from "react";
import "./admin.css";
import StoreVechileTable from "./StoreVechileTable";
import { Link } from "react-router-dom";

const AddVechil = () => {
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
			img: "Faridabad",
		},
		{
			id: 1,
			img: "Gurugram",
		},
	];

	const bodyType = [
		{
			id: 1,
			img: "1",
		},
		{
			id: 2,
			img: "2",
		},
		{
			id: 3,
			img: "3",
		},

		{
			id: 4,
			img: "4",
		},
	];

	const kmsmeter = [
		{
			id: 1,
			img: "Mahindra",
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

	const branch = [];

	const vechilSubmit = (e) => {
		e.preventDefault();
		const AllData = {
			serial_no: selectbodytype,
			firstname: "",
			lastname: "",
			email: "",
			phone_no: "",
			branch: "",
			// aggregator: kmsDriven,
			// price_selling: selling_price,
			// odometer: odometer,
			// insurence: insurence,
			// reg_no: regno,

			brand: selectedItem,
			model: selectmodel,
			exteriorColor: selectextirecolor,
			variantCode: selectverient,
			regnFormat: selecttransmission,
			regn1: selecttype,
			mfdYear: selectmfy,
			fuel: selectfuel,
		};
		console.log(AllData, "vechilSubmit");
	};

	return (
		<div className=''>
			<div className=' col-xl-12 bg-black' id='header'>
				<div className='row row-cols-md-2 m-2 p-2 row-cols-lg-2 row-cols-xl-2 font-weight-bold'>
					<span className='text-left text-light '>Create Vehicle Stock</span>
					<span className='text-right'></span>
				</div>
			</div>
			<section className='' style={{ marginTop: "100px" }}>
				<form
					id='consultation-form'
					className='feed-form'
					onSubmit={vechilSubmit}>
					<div className='row'>
						<div className='col-3'>
							<input required='' placeholder='Name' type='text' />
						</div>
						<div className='col-3'>
							{" "}
							<input
								name='lastname'
								required=''
								placeholder='Last Name'
								type='text'
							/>
						</div>

						<div className='col-3'>
							{" "}
							<input
								name='email'
								required=''
								placeholder='E-mail'
								type='email'
							/>
						</div>

						<div className='col-3'>
							{" "}
							<input name='phone' required='' placeholder='Phone number' />
						</div>
					</div>

					<div className='row'>
						<div className='col-3'>
							<div class=''>
								<select
									placeholder='heloo'
									id='selectdata'
									class=''
									value={selectverient}
									onChange={handleSelectChange9}>
									<option value='' placeholder='heloo'>
										Branch
									</option>

									{Amountdata.map((item, id) => (
										<option key={id} value={item.id}>
											{item.img}
										</option>
									))}
								</select>
							</div>
						</div>
						<div className='col-3'>
							<div class=''>
								<select
									id='selectdata'
									class=''
									value={kmsDriven}
									onChange={handleSelectKmsType}>
									<option value=''>Aggregator </option>

									{kmsmeter.map((item, id) => (
										<option key={id} value={item.id}>
											{item.img}
										</option>
									))}
								</select>
							</div>
						</div>
						<div className='col-3'>
							<div class=''>
								<select
									id='selectdata'
									class=''
									value={selectedItem}
									onChange={handleSelectChange}>
									<option value=''>Brand </option>

									{data.map((item, index) => (
										<option key={index} value={item.code}>
											{item.description}
										</option>
									))}
								</select>
							</div>
						</div>
						<div className='col-3'>
							<div class=''>
								<select
									id='selectdata'
									class=''
									value={selectmodel}
									onChange={handleSelectChange3}>
									<option value=''>Model </option>

									{model.map((item, index) => (
										<option key={index} value={item.code}>
											{item.description}
										</option>
									))}
								</select>
							</div>
						</div>
					</div>
					<br />

					<div className='row'>
						<div className='col-3'>
							<div class=''>
								<select
									id='selectdata'
									class=''
									value={selectfuel}
									onChange={handleSelectChange4}>
									<option value=''>Fuel</option>

									{fueldata.map((item, index) => (
										<option key={index} value={item.code}>
											{item.description}
										</option>
									))}
								</select>
							</div>
						</div>
						<div className='col-3'>
							<div class=''>
								<select
									id='selectdata'
									class=''
									value={selectverient}
									onChange={handleSelectChange9}>
									<option value=''>Varient </option>

									{varient.map((item, index) => (
										<option key={index} value={item.code}>
											{item.description}
										</option>
									))}
								</select>
							</div>
						</div>

						<div className='col-3'>
							<div class=''>
								<select
									id='selectdata'
									class=''
									value={selectextirecolor}
									onChange={handleSelectChange6}>
									<option value=''>Ext.Color </option>

									{extirecolor.map((item, index) => (
										<option key={index} value={item.code}>
											{item.description}
										</option>
									))}
								</select>
							</div>
						</div>

						<div class='col-3'>
							<select
								id='selectdata'
								class=''
								value={selecttransmission}
								onChange={handleSelectChange5}>
								<option value=''>Transmission </option>

								{transmission.map((item, index) => (
									<option key={index} value={item.code}>
										{item.description}
									</option>
								))}
							</select>
						</div>
					</div>
					<br />
					<div className='row'>
						<div class='col-3'>
							<select
								id='selectdata'
								class=''
								value={selectmfy}
								onChange={handleSelectChange7}>
								<option value=''>Mfg. Year</option>

								{vyear.map((item, index) => (
									<option key={index} value={item.code}>
										{item.description}
									</option>
								))}
							</select>
						</div>

						<div class='col-3'>
							<select
								id='selectdata'
								class=''
								value={selectbodytype}
								onChange={handleSelectBodyType}>
								<option value=''>Owner Serial No.</option>

								{bodyType.map((item, id) => (
									<option key={id} value={item.id}>
										{item.img}
									</option>
								))}
							</select>
						</div>

						<div class='col-3'>
							<input
								name='odometer'
								required=''
								placeholder='Odometer'
								type='text'
							/>
						</div>

						<div class='col-3'>
							<input
								name='regno'
								required=''
								placeholder='Regn No'
								type='text'
							/>
						</div>
					</div>
					<br />
					<div className='row'>
						<div class='col-3'>
							<input
								name='insurence'
								required=''
								placeholder='Insurence'
								type='text'
							/>
						</div>

						<div class='col-3'>
							<input
								name='selling_price'
								required=''
								placeholder='Selling Price'
								type='text'
							/>
						</div>
					</div>
					<br />

					<div className='col-3'>
						{" "}
						<button class='button_submit'>Submit</button>
					</div>
				</form>
			</section>

			{/* <StoreVechileTable /> */}
		</div>
	);
};

export default AddVechil;

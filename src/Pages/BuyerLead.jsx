import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Chip, Stack } from "@mui/material";
import "./admin.css";
import "./table.css";
import ReactLoading from "react-loading";
import Table from "react-bootstrap/Table";
import DataUpload from "./DataUpload";
import { useNavigate } from "react-router-dom";

const BuyerLead = ({ detailspage, setDetailspage }) => {
	const [dataapi, setdataapi] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [uploadData, setuploaddata] = useState(null);

	const currentDate = new Date();

	const formattedCurrentDate = `${currentDate.getFullYear()}-${String(
		currentDate.getMonth() + 1
	).padStart(2, "0")}-${String(currentDate.getDate()).padStart(
		2,
		"0"
	)}T${String(currentDate.getHours()).padStart(2, "0")}:${String(
		currentDate.getMinutes()
	).padStart(2, "0")}:${String(currentDate.getSeconds()).padStart(2, "0")}`;

	console.log(formattedCurrentDate);

	useEffect(() => {
		const url =
			"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetUsedCarBuyerLeads";
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
			branchCode: "GGN01",
			vehMake: "ALL_BRANDS",
			vehModels: "ALL_MODELS",
			prospectStatus: "ACTIVE_PROSPECT",
			dateFrom: "2001-01-01T00:00:00",
			dateTo: formattedCurrentDate,
			loginCompanyId: "SUSHIL",
			loginCompanyAccessProfile: "DEALER_RETAIL",
			loginEmpHierarchialGroup: "L0",
			loginEmpCode: "E11183",
			loginJobTypeCode: "MGT",
			loginUserId: "SULTAN",
			loginIpAddress: "47.31.176.52",
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
				const generalList = jsonData?.UsedCarBuyerLeads;
				setdataapi(generalList);
			})
			.catch((error) => {
				console.error(error);
			});
	});

	console.log(dataapi, "respo data list lead status api dele");
	const navigate = useNavigate();

	useEffect(() => {
		// Define the URL, headers, and parameters
		const apiUrl =
			"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetUsedCarDocModule";
		const headers = {
			ApplicationMode: "ONLINE",
			EnvironmentType: "DEMO",
			BrandCode: "UC",
			CountryCode: "IN",
			loginCompanyId: "SUSHIL",
			loginUserId: "SULTAN",
			loginIpAddress: "180.151.78.50",
		};
		const queryParams = {
			uniqueSerial: "1273",
			docModule: "UC",
		};

		// Create an array of URLSearchParams from the queryParams object
		const searchParams = new URLSearchParams(queryParams);

		// Construct the final URL by appending the query parameters
		const finalUrl = `${apiUrl}?${searchParams.toString()}`;

		// Make the API call using fetch
		fetch(finalUrl, {
			method: "GET",
			headers: headers,
		})
			.then((response) => response.json())
			.then((data) => {
				// Add default values to handle missing properties
				// const { yourExpectedProperty = defaultValue } = data;
				setuploaddata(data.UsedCarDocSubModules);
				// setSelectedProduct(data.UniqueSerial);
			})
			.catch((error) => console.error("Error:", error));
	}, []);

	console.log(dataapi, "buyer lead sdfh");

	const singleProducthandle = (uniqueSerial) => {
		const product = dataapi.find(
			(itemdata) => itemdata.uniqueSerial === uniqueSerial
		);
		setSelectedProduct(product);
		setuploaddata(product.uniqueSerial);
		console.log(product.uniqueSerial, "asdfbkjl;");
	};

	return (
		<div className=''>
			<>
				<>
					<div>
						<div className=' col-xl-12 bg-dark' id='header'>
							<div className='row row-cols-md-2 m-2 p-4 row-cols-lg-2 row-cols-xl-2 font-weight-bold'>
								<span className='text-left text-light '>Buyer Leads</span>
							</div>
						</div>
						<div
							className='listingdata'
							style={{ backgroundColor: "chocolate", color: "white" }}>
							<div className='row'>
								<div
									className='col-1'
									style={{
										padding: "18px 30px 30px",
										marginLeft: "0px",
									}}>
									Lead Id
								</div>
								<div
									className='col-1'
									style={{
										padding: "18px 30px 30px",
										marginLeft: "-41px",
									}}>
									Branch
								</div>
								<div
									className='col-1'
									style={{
										padding: "18px 30px 30px",
										marginLeft: "-52px",
										width: "10%",
									}}>
									Phone No.
								</div>
								<div
									className='col-1'
									style={{
										padding: "18px 30px 30px",
										marginLeft: "-31px",
									}}>
									Title
								</div>
								<div
									className='col-1'
									style={{
										padding: "18px 30px 30px",
										marginLeft: "-49px",
									}}>
									Name
								</div>

								<div
									className='col-1'
									style={{
										padding: "18px 30px 30px",
										marginLeft: "76px",
									}}>
									Sales Id
								</div>

								<div
									className='col-1'
									style={{
										width: "10%",
										padding: "18px 30px 30px",
										marginLeft: "169px",
									}}>
									Created Date
								</div>

								<div
									className='col-1'
									style={{
										width: "10%",
										padding: "18px 30px 30px",
										marginLeft: "169px",
									}}>
									Close Date
								</div>
							</div>
						</div>

						{dataapi.length === 0 ? (
							<>
								<div style={{ marginLeft: "600px", marginTop: "146px" }}>
									<ReactLoading
										type='spin'
										color='#f76d2b'
										height={200}
										width={200}
									/>
								</div>
							</>
						) : (
							<>
								{dataapi.map((itemdata) => (
									<div className='listingdata' style={{ marginTop: "20px" }}>
										<div className=''>
											<div
												className='row'
												key={itemdata.vehOwnerSerial}
												onClick={() =>
													singleProducthandle(itemdata.uniqueSerial)
												}>
												<div
													className='col-1'
													style={{ padding: "18px 30px 30px", width: "5%" }}>
													{itemdata.prospectNo}
												</div>
												<div
													className='col-1'
													style={{ padding: "18px 30px 30px", width: "5%" }}>
													{itemdata.prospectLocation}
												</div>
												<div
													className='col-1'
													style={{ padding: "18px 30px 30px" }}>
													{itemdata.mobileNo}{" "}
												</div>
												<div
													className='col-1'
													style={{
														width: "     5%",
														padding: "18px 30px 30px",
													}}>
													{itemdata.custTitle}
												</div>
												<div
													className='col-1'
													style={{
														width: "     14%",
														padding: "18px 30px 30px",
													}}>
													{itemdata.custFirstName}
												</div>

												<div
													className='col-1'
													style={{ padding: "18px 30px 30px", width: "6%" }}>
													<p style={{ margingTop: "0px" }}>
														{itemdata.salesMan}
													</p>
												</div>

												{/* <div
													className='col-1'
													style={{ width: "13%", padding: "18px 30px 30px" }}>
													<p style={{ margingTop: "0px" }}>
														{" "}
														{itemdata.vehModel.description}
													</p>
												</div> */}

												{/* <div
													className='col-1'
													style={{ width: " 7%", padding: "18px 30px 30px" }}>
													<div className='d-flex'>
														<img
															style={{ color: "green" }}
															id='imagapiicon'
															src={itemdata.odometerIcon}
															alt='mfyearicon'
														/>{" "}
														<p style={{ marginLeft: "6px" }}>
															{" "}
															{itemdata.vehOdometer}
														</p>
													</div>
												</div> */}
												{/* <div
													className='col-1'
													style={{ width: "5%", padding: "18px 30px 30px" }}>
													<p> {itemdata.vehManufactureYear.description}</p>
												</div> */}
												<div
													className='col-1'
													style={{ width: "13%", padding: "18px 30px 30px" }}>
													<p>{itemdata.vehRegnNo}</p>
												</div>

												<div
													className='col-3'
													style={{ width: "21%", padding: "18px 30px 30px" }}>
													{" "}
													{itemdata.openedOn &&
														new Date(itemdata.openedOn).toLocaleDateString(
															"en-US",
															{
																day: "numeric",
																weekday: "long",
																year: "numeric",
																month: "long",
															}
														)}
												</div>

												<div
													className='col-3'
													style={{ width: "21%", padding: "18px 30px 30px" }}>
													{" "}
													{itemdata.projectedClosureDate &&
														new Date(
															itemdata.projectedClosureDate
														).toLocaleDateString("en-US", {
															day: "numeric",
															weekday: "long",
															year: "numeric",
															month: "long",
														})}
												</div>
											</div>
										</div>
									</div>
								))}
							</>
						)}
					</div>
				</>
			</>
		</div>
	);
};

export default BuyerLead;

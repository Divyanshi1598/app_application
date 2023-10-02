import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Chip, Stack } from "@mui/material";
import "./admin.css";
import "./table.css";
import ReactLoading from "react-loading";
import Table from "react-bootstrap/Table";
import DataUpload from "./DataUpload";
import { useNavigate } from "react-router-dom";

const BookingStovk = ({ detailspage, setDetailspage }) => {
	const [dataapi, setdataapi] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [uploadData, setuploaddata] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const url =
				"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetUsedCarLeadsByStatus";
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
				dataGroup: "STOCK",
				dataType: "VEH_DELIVERY",
				dataPeriodType: "TODAY",
				dateFrom: "2023-09-19T00:00:00",
				dateTo: "2023-09-19T00:00:00",
				loginCompanyId: "SUSHIL",
				loginCompanyAccessProfile: "DEALER_RETAIL",
				loginEmpHierarchialGroup: "L0",
				loginEmpCode: "E11183",
				loginJobTypeCode: "MGT",
				loginUserId: "SULTAN",
				loginIpAddress: "180.151.78.50",
			};

			try {
				const response = await fetch(url, {
					method: "POST",
					headers: headers,
					body: JSON.stringify(data),
				});

				if (response.ok) {
					const responseData = await response.json();
					setdataapi(responseData.usedCarLeads);

					// setDemo(responseData?.UsedCarVehStockDetail);
				} else {
					throw new Error(
						`Request failed with status code: ${response.status}`()
					);
				}
			} catch (error) {
				console.error("Error:", error);
			}
		};

		fetchData();
	}, []);

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

	console.log(dataapi, "uploadData module jfjfkkfk bookings");

	const singleProducthandle = (uniqueSerial) => {
		const product = dataapi.find(
			(itemdata) => itemdata.uniqueSerial === uniqueSerial
		);
		setSelectedProduct(product);
		setuploaddata(product.uniqueSerial);

		navigate("/deleveryform");
		console.log(product.uniqueSerial, "asdfbkjl;");
	};

	return (
		<div className=''>
			<>
				<>
					<div>
						<div className=' col-xl-12 bg-dark' id='header'>
							<div className='row row-cols-md-2 m-2 p-4 row-cols-lg-2 row-cols-xl-2 font-weight-bold'>
								<span className='text-left text-light '>Vehicle Delivery</span>
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
										marginLeft: "-10px",
									}}>
									Name
								</div>
								<div
									className='col-1'
									style={{
										padding: "18px 30px 30px",
										marginLeft: "59px",
									}}>
									Company
								</div>
								<div
									className='col-1'
									style={{
										padding: "18px 30px 30px",
										marginLeft: "-18px",
									}}>
									Brand
								</div>

								<div
									className='col-1'
									style={{
										padding: "18px 30px 30px",
										marginLeft: "-44px",
									}}>
									Model
								</div>
								<div
									className='col-1'
									style={{
										padding: "18px 30px 30px",
										marginLeft: "73px",
									}}>
									Odometer
								</div>
								<div
									className='col-1'
									style={{
										padding: "18px 30px 30px",
										marginLeft: "-16px",
									}}>
									MF. Year
								</div>
								<div
									className='col-1'
									style={{
										width: "9%",
										padding: "18px 30px 30px",
										marginLeft: "-14px",
									}}>
									Phone No.
								</div>

								<div
									className='col-1'
									style={{
										width: "10%",
										padding: "18px 30px 30px",
										marginLeft: "63px",
									}}>
									Created Date
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
													{itemdata.uniqueSerial}
												</div>
												<div
													className='col-1'
													style={{ padding: "18px 30px 30px" }}>
													{itemdata.branchName}{" "}
												</div>
												<div
													className='col-1'
													style={{
														width: "     13%",
														padding: "18px 30px 30px",
													}}>
													{itemdata.vehOwnerName}
												</div>
												<div
													className='col-1'
													style={{ width: "6%", padding: "18px 30px 30px" }}>
													{itemdata.dlrCompanyId}
												</div>

												<div
													className='col-1'
													style={{ padding: "18px 30px 30px", width: "6%" }}>
													<p style={{ margingTop: "0px" }}>
														{itemdata.vehBrand.description}
													</p>
												</div>

												<div
													className='col-1'
													style={{ width: "13%", padding: "18px 30px 30px" }}>
													<p style={{ margingTop: "0px" }}>
														{" "}
														{itemdata.vehModel.description}
													</p>
												</div>

												<div
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
												</div>
												<div
													className='col-1'
													style={{
														width: "5%",
														padding: "18px 30px 30px",
														marginLeft: "11px",
													}}>
													<p> {itemdata.vehManufactureYear.description}</p>
												</div>
												<div
													className='col-1'
													style={{
														width: "13%",
														padding: "18px 30px 30px",
														marginLeft: "29px",
													}}>
													<p>{itemdata.vehRegnNo}</p>
												</div>

												<div
													className='col-3'
													style={{ width: "21%", padding: "18px 30px 30px" }}>
													{" "}
													{itemdata.createDate &&
														new Date(itemdata.createDate).toLocaleDateString(
															"en-US",
															{
																day: "numeric",
																weekday: "long",
																year: "numeric",
																month: "long",
															}
														)}
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

export default BookingStovk;

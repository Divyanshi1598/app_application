import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Chip, Stack } from "@mui/material";
import ReactLoading from "react-loading";
import "./admin.css";
import Table from "react-bootstrap/Table";
import DataUpload from "./DataUpload";
import { useNavigate } from "react-router-dom";
import styled from "./../Components/Item";
const StoreVechileTable = ({ detailspage, setDetailspage }) => {
	const [dataapi, setdataapi] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [uploadData, setuploaddata] = useState(null);
	const [uniquekey, setUniquekey] = useState();

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
				dataType: "VEH_IMG_UPLOAD",
				dataPeriodType: "TODAY",
				dateFrom: "2023-09-14T00:00:00",
				dateTo: "2023-09-14T00:00:00",
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

	console.log(dataapi, "respo data list lead status api");
	const navigate = useNavigate();

	console.log(uploadData, "uploadData module jfjfkkfk");

	const singleProducthandle = (uniqueSerial) => {
		const product = dataapi.find(
			(itemdata) => itemdata.uniqueSerial === uniqueSerial
		);
		setSelectedProduct(product);
		setUniquekey(product.uniqueSerial);
		setuploaddata(product.uniqueSerial);
		navigate(`/dataupload?uniquekey=${product.uniqueSerial}`);

		console.log(product.uniqueSerial, "asdfbkjljjjjjj;");
	};

	console.log(selectedProduct, "get unique number");

	return (
		<div className=''>
			<>
				<>
					<div>
						<div className=' col-xl-12 bg-dark' id='header'>
							<div className='row row-cols-md-2 m-2 p-4 row-cols-lg-2 row-cols-xl-2 font-weight-bold'>
								<span className='text-left text-light '>Stock Details</span>
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
										marginLeft: "106px",
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
										marginLeft: "-24px",
									}}>
									Model
								</div>
								<div
									className='col-1'
									style={{
										padding: "18px 30px 30px",
										marginLeft: "36px",
									}}>
									Odometer
								</div>
								<div
									className='col-1'
									style={{
										padding: "18px 30px 30px",
										marginLeft: "16px",
									}}>
									MF. Year
								</div>
								<div
									className='col-1'
									style={{
										width: "9%",
										padding: "18px 30px 30px",
										marginLeft: "-48px",
									}}>
									Phone No.
								</div>

								<div
									className='col-1'
									style={{
										width: "10%",
										padding: "18px 30px 30px",
										marginLeft: "23px",
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
												onClick={() => {
													singleProducthandle(itemdata.uniqueSerial);
												}}>
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
														width: "     16%",
														padding: "18px 30px 30px",
													}}>
													{itemdata.vehOwnerName}
												</div>
												<div
													className='col-1'
													style={{ width: "7%", padding: "18px 30px 30px" }}>
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
													style={{ width: "12%", padding: "18px 30px 30px" }}>
													<p style={{ margingTop: "0px" }}>
														{" "}
														{itemdata.vehModel.description}
													</p>
												</div>

												<div
													className='col-1'
													style={{ width: " 9%", padding: "18px 30px 30px" }}>
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
													style={{ width: "4%", padding: "18px 30px 30px" }}>
													<p> {itemdata.vehManufactureYear.description}</p>
												</div>
												<div
													className='col-1'
													style={{ width: "11%", padding: "18px 30px 30px" }}>
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

export default StoreVechileTable;

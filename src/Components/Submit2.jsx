import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import styled from "./Item";

const Submit2 = () => {
	const [statelist, setStateList] = useState([]);
	const [city, setCity] = useState([]);
	const [selectedstate, setSelectedstate] = useState("");
	const [selectcity, setSelectcity] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [serachresult, setSearchResult] = useState([]);
	const [code, setCode] = useState("");
	const [name, setname] = useState("");
	const [email, setemail] = useState("");
	const [mobile, setmobile] = useState("");
	const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
	const [num2, setNum2] = useState(Math.floor(Math.random() * 10));
	const [userAnswer, setUserAnswer] = useState("");
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");

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
			calledBy: "STATE",
			// vehMake: "BMW",
			// vehModel: "220D",
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
				const generalList = jsonData.generalMasterList[0].generalList;
				setStateList(generalList);
				console.log(generalList, "state list data");
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

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
			calledBy: "CITY",
			stateCode: code,

			loginUserId: "RAVI",
			loginIpAddress: "180.151.78.50",
		};

		// {"brandCode":"UC",
		// "countryCode":"IN",
		// "companyId":"SUSHIL",
		// "calledBy":"STATE",
		// "vehMake":"HYUNDAI",
		// "vehModel":"EMBERA",
		// "loginUserId":"RAVI",
		// "loginIpAddress":"180.151.78.50"}

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
				const generalList = jsonData.generalMasterList[0].generalList;
				setCity(generalList);
				// console.log(generalList, "city list data");
				console.log(jsonData, "json");
			})
			.catch((error) => {
				console.error(error);
			});
	}, [code]);

	const handleSelectChange11 = (event) => {
		setSelectedstate(event.target.value);
		setCode(event.target.value);

		// console.log(event.target.value, "check event");
	};
	const handleSelectChange12 = (event) => {
		setSelectcity(event.target.value);
	};

	const generateNumbers = () => {
		setNum1(Math.floor(Math.random() * 10));
		setNum2(Math.floor(Math.random() * 10));
	};

	const resetCaptcha = () => {
		setUserAnswer("");
		setMessage("");
		setError("");
		generateNumbers();
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const sum = num1 + num2;
		if (parseInt(userAnswer) === sum) {
			setMessage("Correct answer!");
			setError("incorrect ");
			resetCaptcha();
		} else {
			setMessage("");

			setError("please enter captcha code");
			setUserAnswer("");
		}
	};

	const Props = localStorage.getItem("data");
	// localStorage.removeItem("data");
	const PropsData = JSON.parse(Props);
	// console.log(Props, "proData");

	const navigate = useNavigate();

	const handleSaveData = (e) => {
		e.preventDefault();

		const Datasecond = {
			brandCode: "UC",
			countryCode: "IN",
			companyId: "SUSHIL",
			branchCode: "GGN01",
			uniqueSerial: "0",
			mobile: mobile,
			email: email,
			mfdMonth: PropsData.mfdMonth,
			firstName: name,
			source: "26",
			brand: PropsData.brand,
			model: PropsData.model,
			exteriorColor: PropsData.exteriorColor,
			variantCode: PropsData.variantCode,
			regnFormat: PropsData.regnFormat,
			regnPart1: "",
			regnPart2: "",
			regnPart3: "",
			regnPart4: "",
			regn1: PropsData.regn1,
			regn2: "",
			vehicleRegnNo: "",
			mfdYear: PropsData.mfdYear,
			fuel: PropsData.fuel,
			regnState: selectedstate,
			regnCity: selectcity,

			loginCompanyID: "SUSHIL",
			loginUserId: "RAVI",
			loginIpAddress: "180.151.78.50",
		};

		fetch(
			" https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/UpdateBasicInfo",
			{
				method: "POST",
				headers: {
					ApplicationMode: "ONLINE",
					EnvironmentType: "DEMO",
					BrandCode: "UC",
					CountryCode: "IN",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(Datasecond),
			}
		)
			.then((response) => response.json())
			.then((data) => {
				toast.success(data.result);
				navigate("/");
				// Handle the response data here
				console.log("Response:", data);
			})
			.catch((error) => {
				// Handle any errors
				toast(error);
				console.error("Error:", error);
			});

		console.log(Datasecond, "secontdata");
	};

	return (
		<div>
			{/* header section */}

			<div className='m-submit1' data-scrolling-animations='true'>
				<div id='page-preloader'>
					<span className='spinner'></span>
				</div>

				<section className='b-pageHeader'>
					<div className='container'>
						<h1 className='wow zoomInLeft' data-wow-delay='0.3s'>
							Submit Your Vehicle
						</h1>
					</div>
				</section>

				<div className='b-breadCumbs s-shadow'>
					<div className='container wow' data-wow-delay='0.5s'>
						<a href='home.html' className='b-breadCumbs__page'>
							Home
						</a>
						<span className='fa fa-angle-right'></span>
						<a href='submit1.html' className='b-breadCumbs__page m-active'>
							Submit a Vehicle
						</a>
					</div>
				</div>
			</div>

			<div className='b-submit'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-3 col-md-4 col-sm-5 col-xs-6'>
							<aside className='b-submit__aside'>
								<div
									className='b-submit__aside-step m-active wow'
									data-wow-delay='0.3s'>
									<h3>Step 1</h3>
									<div className='b-submit__aside-step-inner m-active clearfix'>
										<div className='b-submit__aside-step-inner-icon'>
											<span className='fa fa-car'></span>
										</div>
										<div className='b-submit__aside-step-inner-info'>
											<h4>Add YOUR Vehicle</h4>
											<p>Select your vehicle &amp; add info</p>
											<div className='b-submit__aside-step-inner-info-triangle'></div>
										</div>
									</div>
								</div>

								<div
									className='b-submit__aside-step m-active wow'
									data-wow-delay='0.3s'>
									<h3>Step 2</h3>
									<div className='b-submit__aside-step-inner m-active clearfix'>
										<div className='b-submit__aside-step-inner-icon'>
											<span className='fa fa-user'></span>
										</div>
										<div className='b-submit__aside-step-inner-info'>
											<h4>Contact Details</h4>
											<p>Choose vehicle specifications</p>
											<div className='b-submit__aside-step-inner-info-triangle'></div>
										</div>
									</div>
								</div>
							</aside>
						</div>
						<div className='col-lg-9 col-md-8 col-sm-7 col-xs-6'>
							<div className='b-submit__main'>
								<form className='s-submit'>
									<div
										className='b-submit__main-contacts wow'
										data-wow-delay='0.3s'>
										<header className='s-headerSubmit s-lineDownLeft'>
											<h2>Contact Details</h2>
										</header>

										<div className='row'>
											<div className='col-md-6 col-xs-12'>
												<div className='b-submit__main-element'>
													<label style={{ color: "black" }}>
														Name <span>*</span>
													</label>
													<input
														type='text'
														placeholder='please enter name'
														name='name'
														onChange={(e) => setname(e.target.value)}
													/>
												</div>
											</div>
											<div className='col-md-6 col-xs-12'>
												<div className='b-submit__main-element'>
													<label style={{ color: "black" }}>
														Email Id <span>*</span>
													</label>
													<input
														type='text'
														name='email'
														placeholder='please enter email id'
														onChange={(e) => setemail(e.target.value)}
													/>
												</div>
											</div>
										</div>

										<div className='row'>
											<div className='col-md-6 col-xs-12'>
												<div className='b-submit__main-element'>
													<label style={{ color: "black" }}>
														Enter Your Phone Number <span>*</span>
													</label>
													<input
														type='text'
														name='mobile'
														placeholder='please enter mobile no.'
														onChange={(e) => setmobile(e.target.value)}
													/>
												</div>
											</div>
											<div className='col-md-6 col-xs-12'>
												<div
													className='b-submit__main-element wow'
													data-wow-delay='0.5s'>
													<label style={{ color: "black" }}>
														State <span>*</span>
													</label>
													<div className='s-relative'>
														<select
															className='m-select'
															value={selectedstate}
															onChange={handleSelectChange11}>
															<option value='regnCity'>Select item</option>
															{statelist.map((item, index) => (
																<option key={index} value={item.code}>
																	{item.description}
																</option>
															))}
														</select>
														<span className='fa fa-caret-down'></span>
													</div>
												</div>
											</div>
										</div>
										<div className='row'>
											<div className='col-md-6 col-xs-12'>
												<div
													className='b-submit__main-element wow'
													data-wow-delay='0.5s'>
													<label style={{ color: "black" }}>
														City <span>*</span>
													</label>
													<div className='s-relative'>
														<select
															className='m-select'
															value={selectcity}
															onChange={handleSelectChange12}>
															<option value='regnCity'>Select item</option>
															{city.map((item, index) => (
																<option key={index} value={item.code}>
																	{item.description}
																</option>
															))}
														</select>
														<span className='fa fa-caret-down'></span>
													</div>
												</div>
											</div>
											<div className='col-md-6 col-xs-12'>
												<div
													className='b-submit__main-element wow'
													data-wow-delay='0.5s'>
													<form>
														<span
															className='d-flex'
															style={{
																backgroundColor: "grey",
																marginTop: "-25px",
															}}>
															<h2 style={{ marginLeft: "20px" }}>
																{num1} + {num2} = ?
															</h2>
															<i
																style={{ marginLeft: "200px" }}
																onClick={resetCaptcha}
																class='fa fa-refresh fa-2x'
																aria-hidden='true'></i>
														</span>

														<label
															style={{
																color: "black",
																mrginTop: "-70px",
															}}></label>
														<div className='d-flex'>
															<input
																className='s-relative'
																placeholder='please Enter right captcha'
																type='text'
																value={userAnswer}
																onChange={(event) =>
																	setUserAnswer(event.target.value)
																}></input>
															{/* <i
																// onClick={handleSubmit}
																class='fa fa-check-square-o fa-3x fa-success'
																aria-hidden='true'></i> */}
														</div>
													</form>

													{message && (
														<p style={{ color: "black" }}>{message}</p>
													)}
													{error && <p style={{ color: "red" }}>{error}</p>}
												</div>
											</div>
										</div>
									</div>
									<div className='row '>
										<div className='col-xs-12 col-md-12  col-lg-6 col-xl-6'>
											<Link
												to='/salecar'
												style={{
													backgroundColor: "#f76d2b",
													color: "white",
													marginTop: "30px",
												}}
												type='submit'
												className='btn m-btn pull-right wow btn-danger'
												data-wow-delay='0.3s'>
												Click to &amp; Back
												<span className='fa fa-arrow-left'></span>
											</Link>
										</div>
										<div className='col-xs-12 col-md-12 col-lg-6 col-xl-6'>
											<button
												style={{ backgroundColor: "#f76d2b" }}
												type='button'
												onClick={handleSubmit}
												data-toggle='modal'
												href='#ignismyModal'
												className='btn m-btn pull-right wow btn-danger'
												data-wow-delay='0.3s'>
												Click to &amp; Raise Request
												<span className='fa fa-check'></span>
											</button>

											{!error && (
												<>
													<div className=''>
														<div className='row'>
															<div
																className='modal fade'
																id='ignismyModal'
																role='dialog'>
																<div
																	className='modal-dialog'
																	style={{ margingTop: "90px" }}>
																	<div className='modal-content'>
																		<div className='modal-header'>
																			<button
																				type='button'
																				className='close'
																				data-dismiss='modal'
																				aria-label=''>
																				<span>×</span>
																			</button>
																			<hr />
																		</div>

																		<div className='modal-body'>
																			<div className='thank-you-pop'>
																				<img
																					className='hidden-xs'
																					style={{
																						width: "50px",
																						marginLeft: "200px",
																					}}
																					src='http://goactionstations.co.uk/wp-content/uploads/2017/03/Green-Round-Tick.png'
																					alt=''
																				/>

																				<img
																					className='visible-xs'
																					style={{
																						width: "50px",
																						marginLeft: "150px",
																					}}
																					src='http://goactionstations.co.uk/wp-content/uploads/2017/03/Green-Round-Tick.png'
																					alt=''
																				/>
																				<h4
																					className=''
																					style={{
																						marginTop: "10px",
																						marginLeft: "140px",
																					}}>
																					Are you sure to raise enquiry?
																					{/* Your request has been received. We will
																			contact you shortly! */}
																				</h4>

																				{/* <h4
																					className='visible-xs'
																					style={{
																						marginTop: "10px",
																						marginLeft: "80px",
																					}}>
																					Are you sure to raise enquiry??
																					{/* Your request has been received. We will
																			contact you shortly! */}
																				{/* </h4>  */}
																				<p></p>
																				<div
																					className='d-flex'
																					style={{
																						marginLeft: "150px",
																					}}>
																					<button
																						onClick={handleSaveData}
																						style={{
																							backgroundColor: "#f76d2b",
																							width: "60px",
																							color: "white",
																							fontSize: "15px",
																							margin: "5px",
																						}}
																						type='submit'
																						className='btn'
																						data-dismiss='modal'>
																						Yes
																					</button>

																					<button
																						style={{
																							backgroundColor: "green",
																							width: "60px",
																							color: "white",
																							fontSize: "15px",
																							margin: "5px",
																						}}
																						type='button'
																						className='close'
																						data-dismiss='modal'
																						aria-label=''>
																						No
																					</button>
																				</div>

																				{/* <div
																					id='phoneView'
																					className='d-flex visible-xs '>
																					<button
																						id='btnphoneView'
																						onClick={handleSaveData}
																						style={{}}
																						type='submit'
																						className='btn'
																						data-dismiss='modal'>
																						Yes phone
																					</button>

																					<button
																						id='btnmodelphonev'
																						type='button'
																						className='close'
																						data-dismiss='modal'
																						aria-label=''>
																						No
																					</button>
																				</div> */}
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</>
											)}
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* footer section */}

			<div className='b-info'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-3 col-xs-6'>
							<aside
								className='b-info__aside wow zoomInLeft'
								data-wow-delay='0.3s'>
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
						<div className='col-md-3 col-xs-6'></div>

						<div className='col-md-5 col-xs-6'>
							<address className='b-info__contacts wow' data-wow-delay='0.3s'>
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

export default Submit2;

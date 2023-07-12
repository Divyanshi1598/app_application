import React, { useState, useEffect } from "react";
import "./detail.css";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import toast from "react-hot-toast";
import ScrollTop from "./ScrollTop";
// import Modal from "react-modal";

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2, itemsToScroll: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 1200, itemsToShow: 3 },
];

function Details({ selectedProduct }) {
	const [selectedImageIndex, setSelectedImageIndex] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [stockdata, setStockdata] = useState([]);

	const [email, setemail] = useState("");
	const [mobile, setmobile] = useState("");
	const [contactName, setcontactName] = useState("");
	const [pincode, setpincode] = useState("");

	const [selectedImage, setSelectedImage] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
	const [num2, setNum2] = useState(Math.floor(Math.random() * 10));
	const [userAnswer, setUserAnswer] = useState("");
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");
	const [changeimage, setchangeimage] = useState();
	const [zoom, setZoom] = useState(null);

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
			setError("");
			resetCaptcha();
		} else {
			setMessage("");
			setError("Please Enter captcha code");
			setUserAnswer("");
		}
	};

	const handleImageClick = (image) => {
		// setSelectedImage(image);
		setIsModalOpen(image);
	};

	const closeModal = () => {
		setSelectedImage(null);
		// setIsModalOpen(false);
	};

	const navigate = useNavigate();

	const HandleDataSave = (e) => {
		e.preventDefault();

		const Datasecond = {
			brandCode: "UC",
			countryCode: "IN",
			companyId: "SUSHIL",
			branchCode: "GGN01",
			prospectLocation: "GGN01",
			title: "",
			entity: "I",
			firstName: contactName,
			middleName: "",
			LastName: "",
			suffix: "",
			regnState: "",
			regnCity: "",
			pincode: pincode,
			email: email,
			contactName: contactName,
			mobile: mobile,
			assembly: "CKD",
			edition: "STD",
			source: "",
			usage: "02",
			refFrom: "10",
			firstAction: "",
			actionDate: "2020-11-10",
			actionComment: "Test",
			campaign: 0,
			dealerCompanyDocket: "0",
			corporateFlag: "N",
			dealType: "OEM_SELECT",
			approveFlag: "N",
			corporateComment: "",
			salesperson: "E20003", //API - create method to be implemented
			projectedClosureDate: "2020-11-15",
			hour: "2020-11-10T14:57:54.853Z",
			demoVehModel: "",
			demoVehVariant: "",
			demoVehChassisNo: "",
			make: selectedProduct.vehBrandCode, //stock API make 1  ------   make
			subModel: selectedProduct.vehVariantCode, //stock API submodel 2  ----- varient
			model: selectedProduct.vehModelCode, //stock API mode 3     ---- model
			qty: 1,
			color: selectedProduct.exteriorColor, //stock API make exterior color 4
			interiorColor: "STD",
			style: "STD",
			my: selectedProduct.vehManufactureYear, //Manufacuring year 5
			vy: selectedProduct.vehManufactureYear, //Manufacuring year 6
			ActiveRate: "HOT",
			userId: "Sultan",
			slotMins: "2020-11-10T14:30:00.853Z",
			slotCount: 1,
			valueString:
				"CUST_JOB_TYPE,SALARIED;PUR_INTENTION,LESS_THAN_2W;COMP_MODELS,AUDIA3;",
			testDriveZone: "GGN",
			teamCode: "A",
			createIP: "180.151.78.50", //ip to be implemented
		};

		fetch(
			" https://mobile.orbitsys.com/OrbitsysSmbApiDemo/Prospect/SaveNewProspect",
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
				// alert(data.result);
				navigate("/");

				// Handle the response data here
				console.log("Response:", data);
			})
			.catch((error) => {
				// Handle any errors
				console.error("Error:", error);
			});

		console.log(Datasecond, "secontdata");
	};

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
				budgetTo: 2000000,
				vehBrandCode: "ALL",
				vehModelCode: "HECTOR",
				vehFuel: "PETROL",
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

	return (
		<>
			<ScrollTop />
			{/* top image half */}
			<div
				style={{ position: "top" }}
				className='m-listTableTwo'
				data-scrolling-animation='true'
				data-equal-height='.b-tems_cell'>
				<section className='b-pageHeader'>
					<div className='container'>
						<h1 className='wow zoomInLeft' data-wow-delay='0.5s'>
							Vehicle Details Page
						</h1>
					</div>
				</section>

				<div
					style={{ backgroundColor: "black" }}
					className='b-breadCumbs s-shadow wow zoomInUp'
					data-wow-delay='0.5s'>
					<div className='container'>
						<a href='home.html' className='b-breadCumbs__page'>
							Home
						</a>
						<span className='fa fa-angle-right'></span>
						<a href='listings.html' className='b-breadCumbs__page'>
							Vehicle Details Page
						</a>
						<span className='fa fa-angle-right'></span>
					</div>
				</div>

				{/* test slider */}

				<div className='carousel-wrapper'>
					<Carousel breakPoints={breakPoints}>
						{selectedProduct?.modelImages.map((item) => (
							<div key={item.uniqueSerial}>
								<a
									id='slider_img'
									class='img-responsive center-block b-auto__main-item wow zoomInUp'
									href='#'
									data-toggle='modal'
									data-title={item.uri}
									data-target='#image-gallery'>
									<img
										class='img-thumbnail'
										src={item.uri}
										onClick={(e) => setZoom(item.uri)}
										alt='Another alt text'
										style={{ aspectRatio: "3/2" }}
										className=' card img-responsive center-block'
									/>
								</a>

								<div class=''>
									<div class='row'>
										<div
											class='modal fade'
											id='image-gallery'
											tabindex='-1'
											role='dialog'
											aria-labelledby='myModalLabel'
											aria-hidden='true'>
											<div class='modal-dialog modal-lg mdl_wd'>
												<div class='modal-content'>
													<div class='modal-header'>
														<h4
															class='modal-title'
															id='image-gallery-title'></h4>
														<button
															type='button'
															class='close'
															data-dismiss='modal'>
															<span aria-hidden='true'>×</span>
															<span class='sr-only'>Close</span>
														</button>
													</div>

													<section className='b-slider'>
														<div
															id='carouselExampleFade'
															class='carousel slide carousel-fade'
															data-bs-ride='carousel'>
															<div class='carousel-inner'>
																{selectedProduct?.modelImages.map((item) => (
																	<div
																		class='carousel-item active'
																		key={item.uniqueSerial}>
																		<img src={zoom} alt='...' />
																	</div>
																))}
															</div>

															<button
																class='carousel-control-prev'
																type='button'
																data-bs-target='#carouselExampleFade'
																data-bs-slide='prev'>
																<span
																	style={{
																		height: "14px",
																		marginLeft: "-200px",
																	}}
																	class='carousel-control-prev-icon visually-hidden'
																	aria-hidden='true'></span>
																<span class='visually-hidden'>Previous</span>
															</button>
															<button
																class='carousel-control-next'
																type='button'
																data-bs-target='#carouselExampleFade'
																data-bs-slide='next'>
																<span
																	class='carousel-control-next-icon visually-hidden'
																	aria-hidden='true'></span>
																<span class='visually-hidden'>Next</span>
															</button>
														</div>
													</section>

													<div class='modal-footer'>
														<button
															type='button'
															class='btn btn-secondary float-left  '
															id='show-previous-image'
															data-bs-target='#carouselExampleFade'
															data-bs-slide='prev'>
															<i
																class='fa fa-arrow-left'
																aria-hidden='true'></i>
														</button>

														<button
															type='button'
															id='show-next-image'
															data-bs-target='#carouselExampleFade'
															data-bs-slide='next'
															class='btn btn-secondary float-right'>
															<i
																aria-hidden='true'
																class='fa fa-arrow-right'></i>
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</Carousel>
				</div>

				{/* cars image slider model */}

				<section className='b-detail s-shadow'>
					<div className='container'>
						<div className='b-detail__main'>
							<div className=''>
								<div className='col-md-8 col-xs-12'>
									<div className='b-detail__main-info'>
										<div
											className='b-detail__main-info-images wow zoomInUp'
											data-wow-delay='0.5s'>
											<div className='row m-smallPadding'>
												{selectedProduct ? (
													<div className='col-xs-10'>
														<div className=''>
															<h1>{selectedProduct.vehBrandCode}</h1>
														</div>

														<aside className='b-detail__main-aside'>
															<div
																className='b-detail__main-aside-desc wow zoomInUp'
																data-wow-delay='0.5s'>
																<h2
																	className='s-titleDet'
																	style={{ marginTop: "40px" }}>
																	Description
																</h2>

																<div className='row'>
																	<div className='col-6'>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Make
																		</h4>
																	</div>
																	<div className='col-6'>
																		<p className='b-detail__main-aside-desc-value'>
																			{selectedProduct.vehBrandCode}
																		</p>
																	</div>
																</div>

																<div className='row'>
																	<div className='col-6'>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Model
																		</h4>
																	</div>
																	<div className='col-6'>
																		<p className='b-detail__main-aside-desc-value'>
																			{selectedProduct.vehModelCode}
																		</p>
																	</div>
																</div>

																<div className='row'>
																	<div className='col-6'>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Fuel Code
																		</h4>
																	</div>
																	<div className='col-6'>
																		<p className='b-detail__main-aside-desc-value'>
																			{selectedProduct.vehFuelCode}
																		</p>
																	</div>
																</div>

																<div className='row'>
																	<div className='col-6'>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Variant Code
																		</h4>
																	</div>
																	<div className='col-6'>
																		<p className='b-detail__main-aside-desc-value'>
																			{selectedProduct.vehVariantCode}
																		</p>
																	</div>
																</div>

																<div className='row'>
																	<div className='col-6'>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Variant Description
																		</h4>
																	</div>
																	<div className='col-6'>
																		<p className='b-detail__main-aside-desc-value'>
																			{selectedProduct.vehVariantDesc}
																		</p>
																	</div>
																</div>

																<div className='row'>
																	<div className='col-6'>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Exterior Color
																		</h4>
																	</div>
																	<div className='col-6'>
																		<p className='b-detail__main-aside-desc-value'>
																			{selectedProduct.exteriorColor}
																		</p>
																	</div>
																</div>

																<div className='row'>
																	<div className='col-6'>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Prize
																		</h4>
																	</div>
																	<div className='col-6'>
																		<p className='b-detail__main-aside-desc-value'>
																			{selectedProduct.vehSellPriceRecommended}
																		</p>
																	</div>
																</div>

																<div className='row'>
																	<div className='col-6'>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Transmission
																		</h4>
																	</div>
																	<div className='col-6'>
																		<p className='b-detail__main-aside-desc-value'>
																			{selectedProduct.transmissionDesc}
																		</p>
																	</div>
																</div>

																<div className='row'>
																	<div className='col-6'>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Kilometres
																		</h4>
																	</div>
																	<div className='col-6'>
																		<p className='b-detail__main-aside-desc-value'>
																			{selectedProduct.vehOdometer} KM
																		</p>
																	</div>
																</div>

																<div className='row'>
																	<div className='col-6'>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Owner Serial No.
																		</h4>
																	</div>
																	<div className='col-6'>
																		<p className='b-detail__main-aside-desc-value'>
																			{selectedProduct.vehOwnerSerial}
																		</p>
																	</div>
																</div>

																<div className='row'>
																	<div className='col-6'>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Manufacture Year
																		</h4>
																	</div>
																	<div className='col-6'>
																		<p className='b-detail__main-aside-desc-value'>
																			{selectedProduct.vehManufactureYear}
																		</p>
																	</div>
																</div>

																<div className='row'>
																	<div className='col-6'>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Manufacture Month
																		</h4>
																	</div>
																	<div className='col-6'>
																		<p className='b-detail__main-aside-desc-value'>
																			{selectedProduct.vehManufactureMonth}
																		</p>
																	</div>
																</div>

																<div className='row'>
																	<div className='col-6'>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Registration Date
																		</h4>
																	</div>
																	<div className='col-6'>
																		<p className='b-detail__main-aside-desc-value'>
																			{selectedProduct.vehRegnDate &&
																				new Date(
																					selectedProduct.vehRegnDate
																				).toLocaleDateString("en-US", {
																					weekday: "long",
																					year: "numeric",
																					month: "long",
																					day: "numeric",
																				})}
																		</p>
																	</div>
																</div>

																<div className='row'>
																	<div className='col-6'>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Registration Year
																		</h4>
																	</div>
																	<div className='col-6'>
																		<p className='b-detail__main-aside-desc-value'>
																			{selectedProduct.vehRegnYear}
																		</p>
																	</div>
																</div>

																<div className='row'>
																	<div className='col-6'>
																		<h4 className='b-detail__main-aside-desc-title'>
																			Registration Month
																		</h4>
																	</div>
																	<div className='col-6'>
																		<p className='b-detail__main-aside-desc-value'>
																			{selectedProduct.vehRegnMonth}
																		</p>
																	</div>
																</div>
															</div>
														</aside>
													</div>
												) : (
													<>no data</>
												)}
											</div>
										</div>
									</div>
								</div>

								<div className=''>
									<div className='col-md-4 col-xs-12'>
										<aside className='b-detail__main-aside'>
											<div
												className='b-detail__main-aside-desc wow zoomInUp'
												data-wow-delay='0.5s'>
												<h2 className='s-titleDet'>
													INQUIRE ABOUT THIS VEHICLE
												</h2>
												<div className='b-detail__main-aside-about-call'>
													<span className='fa fa-phone'></span>
													<div>92509 22333</div>
													<p>Call the seller 24/7 and they would help you.</p>
												</div>
												<div className='b-detail__main-aside-about-seller'>
													<p>
														Seller Info: <span>Sushil Car Bazar</span>
													</p>
												</div>
												<div className='b-detail__main-aside-about-form'>
													<div className='b-detail__main-aside-about-form-links'>
														<a
															href='#'
															className='j-tab m-active s-lineDownCenter'
															data-to='#form1'>
															GENERAL INQUIRY
														</a>
														<a href='#' className='j-tab' data-to='#form2'>
															SCHEDULE TEST DRIVE
														</a>
													</div>
													<form id='form1'>
														<input
															type='text'
															placeholder='YOUR NAME'
															name='contactName'
															onChange={(e) => setcontactName(e.target.value)}
														/>
														<input
															type='email'
															placeholder='EMAIL ADDRESS'
															onChange={(e) => setemail(e.target.value)}
															name='email'
														/>
														<input
															type='tel'
															placeholder='Please enter phone no.'
															name='mobile'
															onChange={(e) => setmobile(e.target.value)}
														/>

														<input
															type='tel'
															placeholder='PinCode'
															name='pincode'
															onChange={(e) => setpincode(e.target.value)}
														/>

														<form>
															<div
																className='d-flex'
																style={{
																	backgroundColor: "grey",
																}}>
																<h2 style={{ marginLeft: "30px" }}>
																	{num1} + {num2} = ?
																</h2>
																<i
																	style={{ marginLeft: "100px" }}
																	onClick={resetCaptcha}
																	class='fa fa-refresh fa-2x'
																	aria-hidden='true'></i>
															</div>

															<label style={{ color: "black" }}></label>
															<div className='' style={{ marginTop: "-60px" }}>
																<input
																	className='s-relative'
																	placeholder='please Enter right captcha'
																	type='text'
																	value={userAnswer}
																	onChange={(event) =>
																		setUserAnswer(event.target.value)
																	}></input>
															</div>
														</form>

														{message && (
															<span style={{ color: "red" }}>{message}</span>
														)}
														{error && (
															<span style={{ color: "red" }}>{error}</span>
														)}

														<button
															style={{ backgroundColor: "#f76d2b" }}
															type='button'
															data-toggle='modal'
															onClick={handleSubmit}
															href='#ignismyModal'
															className='btn m-btn'>
															RAISE ENQUIRY
															<span className='fa fa-ticket fa-5x'></span>
														</button>

														{/* popup message */}
														{!error && (
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
																							style={{
																								width: "50px",
																								marginLeft: "200px",
																							}}
																							src='http://goactionstations.co.uk/wp-content/uploads/2017/03/Green-Round-Tick.png'
																							alt=''
																						/>
																						<h4
																							style={{
																								marginTop: "10px",
																								marginLeft: "150px",
																							}}>
																							Are you sure to raise enquiry?
																						</h4>
																						<p></p>
																						<div
																							className='d-flex '
																							style={{
																								marginLeft: "170px",
																							}}>
																							<button
																								onClick={HandleDataSave}
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
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														)}
													</form>
												</div>
											</div>
										</aside>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
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
									<em />
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
		</>
	);
}
export default Details;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./style.css";
import PageScrollTop from "./PageScrollTop";

import {
	Table,
	TableCell,
	TableRow,
	Typography,
	Slider,
	makeStyles,
} from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import Box from "@material-ui/core/Box";
import "./detail.css";
// import Slider from "@mui/material/Slider";

ChartJS.register(ArcElement, Tooltip, Legend);

const EmiCalculator = () => {
	const [pAmount, setpAmount] = useState(100000);
	const [interest, setinterest] = useState(20);
	const [duration, setDuration] = useState(84);
	const maxValue = 50000000;
	const intMax = 20;
	const maxDuration = 84;

	// const months = 84;
	// const years = months / 84;
	// const output = years === 1 ? "1 year" : `${years} years`;

	const intr = interest / 1200;
	const emi = duration
		? Math.round((pAmount * intr) / (1 - Math.pow(1 / (1 + intr), duration)))
		: 0;
	const totalAmt = duration * emi;
	var TotalAmountOfCredit = Math.round(
		(emi / intr) * (1 - Math.pow(1 + intr, -duration))
	);
	const TotalAmountOfInterest = Math.round(totalAmt - TotalAmountOfCredit);

	const DataSheet = {
		marksTenure: [{ value: 84, label: "7Y" }],

		marksInt: [{ value: 20, label: "20%" }],
		marksAmt: [{ value: 50000000, label: "5cr" }],
	};

	const data = {
		labels: ["Total Interest", "Total Amount"],
		datasets: [
			{
				data: [TotalAmountOfInterest, pAmount],
				backgroundColor: ["#f76d2b", "#9b9b9b"],
				fontSize: "20px",
			},
		],
	};

	const increaseAmount = () => {
		setpAmount((prevAmount) => prevAmount + 50000);
	};
	const decreaseAmount = () => {
		setpAmount((prevAmount) => prevAmount - 50000);
	};
	return (
		<>
			<PageScrollTop />
			<section className='b-pageHeader'>
				<div className='container'>
					<h1 className='wow ' data-wow-delay='0.5s'>
						Easy EMI
					</h1>
				</div>
			</section>
			<div className='b-breadCumbs s-shadow ' data-wow-delay='0.5s'>
				<div className='container'>
					<Link to='/' className='b-breadCumbs__page'>
						Home
					</Link>
					<span className='fa fa-angle-right'></span>
					<Link to='/emical' className='b-breadCumbs__page m-active'>
						Emi Calculator
					</Link>
				</div>
			</div>

			<section className='b-detail s-shadow'>
				<div className='container '>
					<div className='header'>
						<div className='b-detail__main'>
							<div className='row '>
								<div className='col-md-10 col-xs-12'>
									<h1 className='car-emi-title ' data-wow-delay='0.5s'>
										Car EMI Calculator
									</h1>
									<p
										style={{ fontSize: "14px" }}
										className=' '
										data-wow-delay='0.5s'>
										The Car Loan EMI Calculator, is the best way to calculate
										your Equated Monthly Instalments for the loan amount you
										require. The EMI calculator helps in decision-making and
										brings you one step closer to your dream car. Now with all
										the details in place, all you need to do is apply for a car
										loan.
									</p>
								</div>
								<button>
									<i className='bi bi-list'></i>
								</button>
							</div>

							<div className='row mt-40'>
								<div className='pls1'>
									<img
										src='data:image/png;base64,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'
										alt='pluse'
										onClick={decreaseAmount}
									/>
								</div>

								<div className='pls2'>
									<img
										src='https://t4.ftcdn.net/jpg/05/74/25/83/240_F_574258315_arorgwPQRiTJxYyumFEpQm8hnWWnMuQn.jpg'
										alt='pluse'
										onClick={increaseAmount}
									/>
								</div>

								<div className=' col-sm-4 car_mn'>
									<div className='detail-group'>
										<Typography gutterBottom>
											<strong style={{ fontSize: "17px" }}>Loan Amount</strong>
											<strong style={{ fontSize: "17px", marginLeft: "50px" }}>
												Rs. {pAmount.toLocaleString("en-IN")}
											</strong>
										</Typography>
										<Box md={{ width: 700 }}>
											<Slider
												aria-label='Temperature'
												defaultValue={pAmount}
												// fontSize='40px'
												max={maxValue}
												color='secondary'
												type='line'
												speed={pAmount}
												marks={DataSheet.marksAmt}
												value={pAmount}
												onChange={(event, vAmt) => setpAmount(vAmt)}
												onClick={increaseAmount}
											/>
										</Box>
										<Typography gutterBottom>
											<strong style={{ fontSize: "17px" }}>
												Interest Rate
											</strong>

											<strong style={{ fontSize: "17px", marginLeft: "50px" }}>
												{interest} %
											</strong>
										</Typography>
										{/* <p>{pAmount}</p> */}

										<Box md={{ width: 700 }}>
											<Slider
												aria-label='Temperature'
												color='secondary'
												marks={DataSheet.marksInt}
												defaultValue={interest}
												value={interest}
												onChange={(event, vInt) => {
													setinterest(vInt);
												}}
												max={intMax}
											/>
										</Box>

										<Typography style={{ fontSize: "17px" }} gutterBottom>
											<strong>Tenure (Manths)</strong>
											<strong style={{ marginLeft: "50px" }}>
												{" "}
												{duration} months
											</strong>
										</Typography>
										<Box md={{ width: 700 }}>
											<Slider
												aria-label='Temperature'
												color='secondary'
												marks={DataSheet.marksTenure}
												defaultValue={duration}
												value={duration}
												onChange={(event, vDur) => {
													setDuration(vDur);
												}}
												max={maxDuration}
											/>
										</Box>
									</div>
								</div>

								<div
									className='col-sm-2'
									id='circledata'
									style={{ marginTop: "46px", marginLeft: "98px" }}>
									<Typography gutterBottom>
										<strong style={{ fontSize: "15px" }}>
											Interest Amount
										</strong>
										<br />
										<strong style={{ fontSize: "17px" }}>
											Rs. {TotalAmountOfInterest.toLocaleString("en-IN")}
										</strong>
									</Typography>

									<br />

									<Typography gutterBottom>
										<strong style={{ fontSize: "15px" }}>
											Monthly Loan EMI
										</strong>
										<br />
										<strong style={{ fontSize: "17px" }}>
											Rs. {emi.toLocaleString("en-IN")}
										</strong>
									</Typography>
									<br />

									<Typography gutterBottom>
										<strong style={{ fontSize: "15px" }}>
											Total Amount Payable
										</strong>{" "}
										<br />
										<strong style={{ fontSize: "17px" }}>
											Rs.{" "}
											{totalAmt.toLocaleString("en-IN")
												? totalAmt.toLocaleString("en-IN")
												: 0}
										</strong>
									</Typography>
								</div>

								<div className='col-sm-4 car_mn2 canvas'>
									<Doughnut data={data} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='b-brands s-shadow'>
				<div className='container'>
					<h5 className='s-titleBg ' data-wow-delay='0.5s'>
						FIND OUT MORE
					</h5>
					<br />
					<h2 className='s-title ' data-wow-delay='0.5s'>
						BRANDS WE OFFER
					</h2>
					<div className=''>
						<div className='b-brands__brand wow rotateIn' data-wow-delay='0.5s'>
							<img src='media/brands/bmwLogo.png' alt='brand' />
						</div>
						<div className='b-brands__brand wow rotateIn' data-wow-delay='0.5s'>
							<img src='media/brands/kia.png' alt='brand' />
						</div>
						<div className='b-brands__brand wow rotateIn' data-wow-delay='0.5s'>
							<img src='media/brands/volvo.png' alt='brand' />
						</div>
						<div className='b-brands__brand wow rotateIn' data-wow-delay='0.5s'>
							<img src='media/brands/mercLogo.png' alt='brand' />
						</div>
						<div className='b-brands__brand wow rotateIn' data-wow-delay='0.5s'>
							<img src='media/brands/audiLogo.png' alt='brand' />
						</div>
						<div className='b-brands__brand wow rotateIn' data-wow-delay='0.5s'>
							<img src='media/brands/honda.png' alt='brand' />
						</div>
						<div className='b-brands__brand wow rotateIn' data-wow-delay='0.5s'>
							<img src='media/brands/mg.png' alt='brand' />
						</div>
					</div>
				</div>
			</section>

			<div className='b-features'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-9 col-md-offset-3 col-xs-6 col-xs-offset-6'>
							<ul className='b-features__items'>
								<li className='' data-wow-delay='0.3s' data-wow-offset='100'>
									Low Prices, No Haggling
								</li>
								<li className='' data-wow-delay='0.3s' data-wow-offset='100'>
									Largest Car Dealership
								</li>
								<li className='' data-wow-delay='0.3s' data-wow-offset='100'>
									Multipoint Safety Check
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default EmiCalculator;

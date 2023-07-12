import React from "react";
import { Link } from "react-router-dom";
import "./detail.css";
function About({ reloadPage }) {
	return (
		<div className>
			<div className='m-about' data-scrolling-animations='true'>
				<div id='page-preloader'>
					<span className='spinner'></span>
				</div>

				<section className='b-pageHeader'>
					<div className='container'>
						<h1 className='wow zoomInLeft' data-wow-delay='0.7s'>
							About Us
						</h1>
						<div
							className='b-pageHeader__search wow zoomInRight'
							data-wow-delay='0.7s'>
							<h3>The Largest Auto Dealer Online</h3>
						</div>
					</div>
				</section>
				<div className='b-breadCumbs s-shadow'>
					<div className='container'>
						<a href='home.html' className='b-breadCumbs__page'>
							Home
						</a>
						<span className='fa fa-angle-right'></span>
						<Link to='/about' className='b-breadCumbs__page m-active'>
							About Us
						</Link>
					</div>
				</div>
				<section className='b-best'>
					<div className='container'>
						<div className='row'>
							<div className='col-sm-6 col-xs-12'>
								<div className='b-best__info'>
									<header className='s-lineDownLeft b-best__info-head'>
										<h2 className='wow zoomInUp' data-wow-delay='0.5s'>
											The Best &amp; the Largest Auto Dealer
										</h2>
									</header>

									<p className='wow zoomInUp' data-wow-delay='0.5s'>
										Established in the year 2002, Sushil Car Bazar is one of the
										top & most trusted dealership for preowned luxury car.In
										over 17 years of business history we have always had a
										customer oriented approach & total customer satisfaction has
										been our motive.
										<br />
										We tend to deliver the very best quality vehicle at the
										foremost competitive cost. Sushil Car bazar is a one stop
										solution to sell yourPremium/ Luxury car at best price.
										<br />
									</p>
									<a
										href='listTableTwo.html'
										className='btn m-btn m-readMore wow zoomInUp'
										data-wow-delay='0.1s'>
										view listings<span className='fa fa-angle-right'></span>
									</a>
								</div>
							</div>
							<div className='col-sm-6 col-xs-12'>
								<img
									id='aboutlogo_img'
									className='img-responsive center-block wow zoomInUp'
									data-wow-delay='0.1s'
									alt='best'
									src='images/about/shushil.jpeg'></img>

								<span
									className='m-price   hidden-xs'
									style={{
										textAlign: "center",
										fontWeight: "bold",
										color: "",
										marginLeft: "190px",
										fontSize: "20px",

										// backgroundColor: "#f76d2b",
									}}>
									Mr. Sushil Bansal MD
								</span>

								<span
									className='m-price visible-xs'
									style={{
										textAlign: "center",
										fontWeight: "bold",
										color: "",
										marginLeft: "70px",
										fontSize: "20px",

										// backgroundColor: "#f76d2b",
									}}>
									Mr. Sushil Bansal MD
								</span>
							</div>
						</div>
					</div>
				</section>
				<section
					className='b-what s-shadow m-home'
					style={{ marginTop: "-80px" }}>
					<div className='container'>
						<h3 className='s-titleBg wow zoomInUp' data-wow-delay='0.5s'>
							CUSTOMERS ARE IMPORTANT FOR US
						</h3>
						<br />
						<h2 className='s-title wow zoomInUp' data-wow-delay='0.5s'>
							WHAT WE OFFERS
						</h2>
						<Link to='/details'>
							<div className='row' id='cardrow'>
								<div className='col-sm-4 col-xs-12'>
									<div
										className='b-world__item wow zoomInLeft'
										data-wow-delay='0.5s'>
										<img
											className='img-responsive'
											src='media/370x200/jeep.jpg'
											alt='jeep'
										/>
										<div className='b-world__item-val'>
											<span className='b-world__item-val-title'>WE OFFER</span>
										</div>
										<h2>Low Prices, No Haggling</h2>
									</div>
								</div>
								<div className='col-sm-4 col-xs-12'>
									<div
										className='b-world__item wow zoomInUp'
										data-wow-delay='0.5s'>
										<img
											className='img-responsive'
											src='media/370x200/volvo.jpg'
											alt='mazda'
										/>
										<div className='b-world__item-val'>
											<span className='b-world__item-val-title'>
												WE ARE THE
											</span>
										</div>
										<h2>Largest Car Dealership</h2>
									</div>
								</div>
								<div className='col-sm-4 col-xs-12'>
									<div
										className='b-world__item wow zoomInRight'
										data-wow-delay='0.5s'>
										<img
											className='img-responsive'
											src='media/370x200/mg-interior.jpg'
											alt='chevrolet'
										/>
										<div className='b-world__item-val'>
											<span className='b-world__item-val-title'>
												OUR CUSTOMERS GET
											</span>
										</div>
										<h2>Multipoint Safety Check</h2>
									</div>
								</div>
							</div>
						</Link>
					</div>
				</section>
				<section className='b-more'>
					<div className='container'>
						<div className='row'>
							<div className='col-sm-6 col-xs-12'>
								<div
									className='b-more__why wow zoomInLeft'
									data-wow-delay='0.5s'>
									<h2 className='s-title'>WHY SUSHIL CARS</h2>
									<p>
										Sushil Cars is one of the pre-owned cars suppliers in the
										geography who recommends and supplies cars as per your
										requirement and budget. We don’t sell cars only; we always
										try to give appropriate cars as per customers’ need.{" "}
									</p>
								</div>
							</div>
							{/* <div className='col-sm-6 col-xs-12'>
								<div className='b-more__info wow zoomInRight' data-wow-delay='0.5s'>
									<h2 className='s-title'>MORE INFO</h2>
									<div className='b-more__info-block'>
										<div className='b-more__info-block-title'>
											Fair Price for Everyone
											<a className='j-more' href='#'>
												<span className='fa fa-angle-left'></span>
											</a>
										</div>
										<div className='b-more__info-block-inside j-inside'>
											<p>
												We understand the value of your hard earned money and
												that’s why we keep pricing fair. Everything which is
												related to money is crystal clear and no hidden charges.{" "}
											</p>
										</div>
									</div>
									<div className='b-more__info-block'>
										<div className='b-more__info-block-title'>
											Large Number of Vehicles
											<a href='#' className='j-more'>
												<span className='fa fa-angle-left'></span>
											</a>
										</div>
										<div className='b-more__info-block-inside j-inside'>
											<p>
												CWe have large numbers of cars with us, whether you
												consider the make, brands, fuel, structure, segments,
												seating capacity & others.{" "}
											</p>
										</div>
									</div>
									<div className='b-more__info-block'>
										<div className='b-more__info-block-title'>
											Auto Loan Available
											<a href='#' className='j-more'>
												<span className='fa fa-angle-left'></span>
											</a>
										</div>
										<div className='b-more__info-block-inside j-inside'>
											<p>
												As your pre-owned cars partner we understand the value
												of your finances and that’s why we have all the possible
												loan options for you.
											</p>
										</div>
									</div>
								</div>
							</div> */}

							<div className='col-sm-6 col-xs-12'>
								<div
									className='b-more__info wow zoomInRight'
									data-wow-delay='0.5s'>
									<h2 className='s-title'>MORE INFO</h2>
									<div className='b-more__info-block'>
										<div className='b-more__info-block-title'>
											Fair Price for Everyone
											<a className='j-more' href='#'>
												<span className='fa fa-angle-left'></span>
											</a>
										</div>
										<div className='b-more__info-block-inside j-inside'>
											<p>
												We understand the value of your hard earned money and
												that’s why we keep pricing fair. Everything which is
												related to money is crystal clear and no hidden charges.{" "}
											</p>
										</div>
									</div>
									<div className='b-more__info-block'>
										<div className='b-more__info-block-title'>
											Large Number of Vehicles
											<a href='#' className='j-more'>
												<span className='fa fa-angle-left'></span>
											</a>
										</div>
										<div className='b-more__info-block-inside j-inside'>
											<p>
												CWe have large numbers of cars with us, whether you
												consider the make, brands, fuel, structure, segments,
												seating capacity & others.{" "}
											</p>
										</div>
									</div>
									<div className='b-more__info-block'>
										<div className='b-more__info-block-title'>
											Auto Loan Available
											<a href='#' className='j-more'>
												<span className='fa fa-angle-left'></span>
											</a>
										</div>
										<div className='b-more__info-block-inside j-inside'>
											<p>
												As your pre-owned cars partner we understand the value
												of your finances and that’s why we have all the possible
												loan options for you.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* <section className='b-personal s-shadow'>
					<div className='container'>
						<h3 className='s-titleBg wow zoomInUp' data-wow-delay='0.5s'>
							the people you can trust ON
						</h3>
						<br />
						<h2 className='s-title wow zoomInUp' data-wow-delay='0.5s'>
							OUR TEAM MEMBERS
						</h2>
						<div
							id='carousel-small'
							className='owl-carousel enable-owl-carousel'
							data-items='4'
							data-navigation='true'
							data-auto-play='true'
							data-stop-on-hover='true'
							data-items-desktop='4'
							data-items-desktop-small='3'
							data-items-tablet='2'
							data-items-tablet-small='2'>
							<div>
								<div
									className='b-personal__worker wow zoomInUp'
									data-wow-delay='0.5s'>
									<div className='b-personal__worker-img'>
										<img
											src='media/persons/jason.jpg'
											className='img-responsive'
											alt='jason'
										/>
										<div className='b-personal__worker-img-social'>
											<div className='b-personal__worker-img-social-main'>
												<a href='#'>
													<span className='fa fa-facebook-square'></span>
												</a>
												<a href='#'>
													<span className='fa fa-twitter-square'></span>
												</a>
												<a href='#'>
													<span className='fa fa-pinterest-square'></span>
												</a>
												<a href='#'>
													<span className='fa fa-google-plus-square'></span>
												</a>
											</div>
										</div>
									</div>
									<h6>Owner / Co-Invester</h6>
									<div className='b-personal__worker-name s-lineDownLeft'>
										<h4 className='s-titleDet'>Jason Roy</h4>
									</div>
									<p>
										Owner of Sushil Cars, started the company in 2005. A very
										hard working person who loves to drive the cars.
									</p>
								</div>
							</div>
							<div>
								<div
									className='b-personal__worker wow zoomInUp'
									data-wow-delay='0.5s'>
									<div className='b-personal__worker-img'>
										<img
											src='media/persons/paul.jpg'
											className='img-responsive'
											alt='paul'
										/>
										<div className='b-personal__worker-img-social'>
											<div className='b-personal__worker-img-social-main'>
												<a href='#'>
													<span className='fa fa-facebook-square'></span>
												</a>
												<a href='#'>
													<span className='fa fa-twitter-square'></span>
												</a>
												<a href='#'>
													<span className='fa fa-pinterest-square'></span>
												</a>
												<a href='#'>
													<span className='fa fa-google-plus-square'></span>
												</a>
											</div>
										</div>
									</div>
									<h6>Delivery Incharge</h6>
									<div className='b-personal__worker-name s-lineDownLeft'>
										<h4 className='s-titleDet'>Paul Richard</h4>
									</div>
									<p>
										Owner of Sushil Cars, started the company in 2005. A very
										hard working person who loves to drive the cars.
									</p>
								</div>
							</div>
							<div>
								<div
									className='b-personal__worker wow zoomInUp'
									data-wow-delay='0.5s'>
									<div className='b-personal__worker-img'>
										<img
											src='media/persons/peter.jpg'
											className='img-responsive'
											alt='peter'
										/>
										<div className='b-personal__worker-img-social'>
											<div className='b-personal__worker-img-social-main'>
												<a href='#'>
													<span className='fa fa-facebook-square'></span>
												</a>
												<a href='#'>
													<span className='fa fa-twitter-square'></span>
												</a>
												<a href='#'>
													<span className='fa fa-pinterest-square'></span>
												</a>
												<a href='#'>
													<span className='fa fa-google-plus-square'></span>
												</a>
											</div>
										</div>
									</div>
									<h6>Auto Reviewer / Technican</h6>
									<div className='b-personal__worker-name s-lineDownLeft'>
										<h4 className='s-titleDet'>Peter Harold</h4>
									</div>
									<p>
										Owner of Sushil Cars, started the company in 2005. A very
										hard working person who loves to drive the cars.
									</p>
								</div>
							</div>
							<div>
								<div
									className='b-personal__worker wow zoomInUp'
									data-wow-delay='0.5s'>
									<div className='b-personal__worker-img'>
										<img
											src='media/persons/maria.jpg'
											className='img-responsive'
											alt='maria'
										/>
										<div className='b-personal__worker-img-social'>
											<div className='b-personal__worker-img-social-main'>
												<a href='#'>
													<span className='fa fa-facebook-square'></span>
												</a>
												<a href='#'>
													<span className='fa fa-twitter-square'></span>
												</a>
												<a href='#'>
													<span className='fa fa-pinterest-square'></span>
												</a>
												<a href='#'>
													<span className='fa fa-google-plus-square'></span>
												</a>
											</div>
										</div>
									</div>
									<h6>Sales Representative</h6>
									<div className='b-personal__worker-name s-lineDownLeft'>
										<h4 className='s-titleDet'>Maria Susan</h4>
									</div>
									<p>
										Owner of Sushil Cars, started the company in 2005. A very
										hard working person who loves to drive the cars.
									</p>
								</div>
							</div>
							<div>
								<div
									className='b-personal__worker wow zoomInUp'
									data-wow-delay='0.5s'>
									<div className='b-personal__worker-img'>
										<img
											src='media/persons/jason.jpg'
											className='img-responsive'
											alt='jason'
										/>
										<div className='b-personal__worker-img-social'>
											<div className='b-personal__worker-img-social-main'>
												<a href='#'>
													<span className='fa fa-facebook-square'></span>
												</a>
												<a href='#'>
													<span className='fa fa-twitter-square'></span>
												</a>
												<a href='#'>
													<span className='fa fa-pinterest-square'></span>
												</a>
												<a href='#'>
													<span className='fa fa-google-plus-square'></span>
												</a>
											</div>
										</div>
									</div>
									<h6>Owner / Co-Invester</h6>
									<div className='b-personal__worker-name s-lineDownLeft'>
										<h4 className='s-titleDet'>Jason Roy</h4>
									</div>
									<p>
										Owner of Sushil Cars, started the company in 2005. A very
										hard working person who loves to drive the cars.
									</p>
								</div>
							</div>
							<div>
								<div
									className='b-personal__worker wow zoomInUp'
									data-wow-delay='0.5s'>
									<div className='b-personal__worker-img'>
										<img
											src='media/persons/paul.jpg'
											className='img-responsive'
											alt='paul'
										/>
										<div className='b-personal__worker-img-social'>
											<div className='b-personal__worker-img-social-main'>
												<a href='#'>
													<span className='fa fa-facebook-square'></span>
												</a>
												<a href='#'>
													<span className='fa fa-twitter-square'></span>
												</a>
												<a href='#'>
													<span className='fa fa-pinterest-square'></span>
												</a>
												<a href='#'>
													<span className='fa fa-google-plus-square'></span>
												</a>
											</div>
										</div>
									</div>
									<h6>Delivery Incharge</h6>
									<div className='b-personal__worker-name s-lineDownLeft'>
										<h4 className='s-titleDet'>Paul Richard</h4>
									</div>
									<p>
										Owner of Sushil Cars, started the company in 2005. A very
										hard working person who loves to drive the cars.
									</p>
								</div>
							</div>
							<div>
								<div
									className='b-personal__worker wow zoomInUp'
									data-wow-delay='0.5s'>
									<div className='b-personal__worker-img'>
										<img
											src='media/persons/peter.jpg'
											className='img-responsive'
											alt='peter'
										/>
										<div className='b-personal__worker-img-social'>
											<div className='b-personal__worker-img-social-main'>
												<a href='#'>
													<span className='fa fa-facebook-square'></span>
												</a>
												<a href='#'>
													<span className='fa fa-twitter-square'></span>
												</a>
												<a href='#'>
													<span className='fa fa-pinterest-square'></span>
												</a>
												<a href='#'>
													<span className='fa fa-google-plus-square'></span>
												</a>
											</div>
										</div>
									</div>
									<h6>Auto Reviewer / Technican</h6>
									<div className='b-personal__worker-name s-lineDownLeft'>
										<h4 className='s-titleDet'>Peter Harold</h4>
									</div>
									<p>
										Owner of Sushil Cars, started the company in 2005. A very
										hard working person who loves to drive the cars.
									</p>
								</div>
							</div>
							<div>
								<div
									className='b-personal__worker wow zoomInUp'
									data-wow-delay='0.5s'>
									<div className='b-personal__worker-img'>
										<img
											src='media/persons/maria.jpg'
											className='img-responsive'
											alt='maria'
										/>
										<div className='b-personal__worker-img-social'>
											<div className='b-personal__worker-img-social-main'>
												<a href='#'>
													<span className='fa fa-facebook-square'></span>
												</a>
												<a href='#'>
													<span className='fa fa-twitter-square'></span>
												</a>
												<a href='#'>
													<span className='fa fa-pinterest-square'></span>
												</a>
												<a href='#'>
													<span className='fa fa-google-plus-square'></span>
												</a>
											</div>
										</div>
									</div>
									<h6>Sales Representative</h6>
									<div className='b-personal__worker-name s-lineDownLeft'>
										<h4 className='s-titleDet'>Maria Susan</h4>
									</div>
									<p>
										Owner of Sushil Cars, started the company in 2005. A very
										hard working person who loves to drive the cars.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section> */}
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
											Established in the year 2002, Sushil Car Bazar is one of
											the top & most trusted dealership for preowned luxury
											car.In over 17 years of business history we have always
											had a customer oriented approach & total customer
											satisfaction has been our motive.
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
									<a href='contacts.html'>Open Location Map</a>
								</address>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default About;

import React from "react";
import { Link } from "react-router-dom";
import Gellery from "./Gellery";
import toast from "react-hot-toast";
import MdPhone from "@mui/icons-material/Phone";

const Navbar = () => {
	const reloadPage = () => {
		window.location.reload();
		toast.success("Page  Loading ! ");
	};
	console.log(reloadPage, "reloadPage");

	return (
		<div>
			<nav className='nav_b  b navbar-inverse  '>
				<div className=' '>
					<div className='row'>
						<div className='col-sm-2 col-xs-3'>
							<div
								className='b-nav__logo '

								// style={{ marginLeft: "-220px" }}
							>
								<img onClick={reloadPage} src='images/logo/logo-1.png' />
							</div>
						</div>

						<div className='col-sm-2 visible-xs'>
							<div className='b-topBarsocial-wrapper none'>
								<div className='b-topbar-social'>
									<a href='#'>
										<span className='fa fa-facebook-square'></span>
									</a>

									<a href='#'>
										<span className='fa fa-instagram'></span>
									</a>
									<a href='#'>
										<span className='fa fa-youtube-square'></span>
									</a>
									<a href='#' style={{ marginTop: "10px" }}>
										<span className=''>
											<i class='fa-sharp fa-solid fa-phone'></i> +91 92509 22333
										</span>
									</a>
								</div>
							</div>
						</div>
						<div className='col-sm-6' style={{ marginTop: "-20px" }}>
							<div className='b-nav__list '>
								<div className='navbar-header'>
									<button
										type='button'
										className='navbar-toggle'
										style={{ marginLeft: "220px" }}
										data-toggle='collapse'
										data-target='#nav'>
										<span className='sr-only'>Toggle navigation</span>
										<span className='icon-bar'></span>
										<span className='icon-bar'></span>
										<span className='icon-bar'></span>
									</button>
								</div>
								<div className='collapse navbar-collapse' id='nav'>
									<ul className='navbar-nav-menu' onClick={reloadPage}>
										<li>
											<Link to='/' variant='body2'>
												Home
											</Link>
										</li>

										<li>
											<Link to='/salecar'>SELL CAR</Link>
										</li>
										<li>
											<Link to='/buycar'>BUY CAR</Link>
										</li>
										<li>
											<Link to='/detailsdata'>Gallery</Link>
										</li>

										<li>
											<Link to='/about'>ABOUT US</Link>
										</li>

										<li>
											<Link to='/contact'>CONTACT US</Link>
										</li>

										{/* <li>
											<Link to='/login'>login</Link>
										</li> */}
									</ul>
								</div>
							</div>
						</div>
						<div className='col-sm-3 hidden-xs'>
							<div className='b-topBarsocial-wrapper'>
								<div className='b-topbar-social'>
									<a href='https://www.facebook.com/profile.php?id=100077481055938'>
										<span className='fa fa-facebook-square'></span>
									</a>{" "}
									<a href='https://www.instagram.com/sushilcarbazzar/'>
										<span className='fa fa-instagram'></span>
									</a>
									<a href='https://www.youtube.com/@sushilcarbazzar5502'>
										<span className='fa fa-youtube-square'></span>
									</a>
									<a href='#'>
										<span
											className='fa-sharp fa-solid fa-phone text-white'
											style={{ marginTop: "20px" }}>
											+91 92509 22333
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;

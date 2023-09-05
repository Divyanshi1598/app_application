import React, { useState } from "react";
import "./singup.css";
import toast from "react-hot-toast";
import LogoCars from "./LogoCars";
import Animation from "./Animation";
import Admin from "./../Pages/Admin";
import HomePage from "./HomePage";
function Signup({ loggedIn }) {
	const [company, setCompany] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const onSubmit = (e) => {
		e.preventDefault();

		const loginType = loggedIn ? "CDB_USER" : "CDB_ADMIN"; // Set the login type based on whether the user is an admin or not

		const data = {
			loginCountryCode: "IN",
			deviceScreenSize: "4.59",
			appVersion: "V000",
			loginType: loginType,
			deviceOs: "Android",
			ipAddress: "",
			deviceOsVersion: "27",
			firebase: "",
			deviceId: "",
			versionCode: "Sushil_CAR",
			loginMacAddress: "7C:46:85:53:E2:33",
			loginBrandCode: "UC",
			loginPassword: password,
			loginUserId: username,
			deviceMobile: "",
			loginCompanyId: company,
			appReleasePhase: "DEMO",
		};

		fetch(
			"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/Login/GetLoginInfoV2",
			{
				method: "POST",
				headers: {
					ApplicationMode: "ONLINE",
					EnvironmentType: "DEMO",
					BrandCode: "UC",
					CountryCode: "IN",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			}
		)
			.then((response) => response.json())
			.then((data) => {
				toast(data.loginNotValidReason);
				console.log("Response:", data);

				// Check if the login was successful
				if (data.success) {
					// Redirect the user based on their role
					if (loggedIn) {
						// Redirect to admin panel
						window.location.href = "/admin";
					} else {
						// Redirect to user panel
						window.location.href = "/a";
					}
				}
			})
			.catch((error) => {
				console.error("Error:", error);
			});

		console.log(data, "second data");
	};

	return (
		<div className='container1'>
			<div className='row'>
				<div className='col-7'>
					<div className=''>
						<div className='form1'>
							{/* <LogoCars /> */}
							<Animation />
						</div>
					</div>
				</div>
				<div className='col-5'>
					<form className='form1' onSubmit={onSubmit}>
						<div className='form_front1'>
							<div className='form_details1'>
								<img src='images/logo/logo-1.png' alt='logo img' />
							</div>
							<hr />
							<div className='' style={{ color: "white" }}>
								<input class='check' type='checkbox' id='checkbox_toggle' />
								<div class='checkbox'>
									<label for='checkbox_toggle' class='slide'>
										<label for='checkbox_toggle' class='toggle'></label>
										<label for='checkbox_toggle' class='text'>
											Admin
										</label>
										<label for='checkbox_toggle' class='text'>
											User
										</label>
									</label>
								</div>
							</div>
							{/* slection users */}

							<input
								type='text'
								className='input1'
								placeholder='company name'
								name='company'
								onChange={(e) => setCompany(e.target.value)}
							/>
							<input
								type='text'
								name='username'
								onChange={(e) => setUsername(e.target.value)}
								className='input1'
								placeholder='user name'
							/>
							<input
								type='text'
								name='password'
								onChange={(e) => setPassword(e.target.value)}
								className='input1'
								placeholder=' password'
							/>
							<button className='btn1'>Login</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
export default Signup;

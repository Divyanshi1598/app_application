import React, { useState } from "react";
import "./admin.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const BookingForm = () => {
	const [name, setname] = useState("");
	const [email, setemail] = useState("");
	const [mobile, setmobile] = useState("");
	const [reg, setreg] = useState("");
	const [grosselling, setgrosselling] = useState("");
	const [insurencer, setinsurencer] = useState("");
	const [rto, setrto] = useState("");
	const [assistence, setassistence] = useState("");
	const [addservice, setaddservice] = useState("");

	const [transfer, settransfer] = useState("");
	const [cost, setcost] = useState("");
	const [wranty, setwranty] = useState("");
	const [maitence, setmaitence] = useState("");
	const [basicelling, setBasicselling] = useState("");
	const [bokingamount, setbokingamount] = useState("");
	const [odometer, setodometer] = useState("");
	const [remark, setremark] = useState("");

	const vechilSubmit = (e) => {
		e.preventDefault();

		const Datasecond = {
			brandCode: "UC",
			countryCode: "IN",
			uniqueSerial: "1186",
			companyId: "SUSHIL",
			loginUserId: "SULTAN",

			loginIpAddress: "180.151.78.50",
			uniqueProspectNo: "0",
			closureTpAgency: "",
			bookingAmount: bokingamount,
			ownerTransferCost: transfer,
			insuRenewalAmount: insurencer,
			accessoriesCost: cost,
			rtoTax: rto,
			warrantyCost: wranty,
			rsaCost: assistence,
			maintainenceCost: maitence,
			vasCost: addservice,
			basicSellingPrice: basicelling,
			grossSellingPrice: grosselling,
			bookingComment: remark,
			loginUserDealerId: "",
			xApplication_Mode: "",
		};
		fetch(
			" https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetUsedCarBookingData",
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
				// navigate("/stocktable");
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
			<div className=' col-xl-12 bg-black' id='header'>
				<div className='row row-cols-md-2 m-2 p-4 row-cols-lg-2 row-cols-xl-2 font-weight-bold'>
					<span className='text-left text-light '>
						<Link style={{ color: "white", marginLeft: "-10px" }} to='/admin'>
							<ArrowBackIcon
								style={{ marginRight: "41px", fontSize: "30px" }}
							/>
						</Link>{" "}
						Booking Stock
					</span>
				</div>
			</div>
			<form
				id='consultation-form'
				className='feed-form'
				onSubmit={vechilSubmit}>
				<div className='row'>
					<div className='col-3'>
						<input
							required=''
							className='admintextbox'
							placeholder='Name'
							type='text'
							name='name'
							onChange={(e) => setname(e.target.value)}
						/>
					</div>

					<div className='col-3'>
						{" "}
						<input
							className='admintextbox'
							name='email'
							required=''
							placeholder='E-mail'
							type='email'
							onChange={(e) => setemail(e.target.value)}
						/>
					</div>
					<div className='col-3'>
						{" "}
						<input
							className='admintextbox'
							required=''
							name='mobile'
							onChange={(e) => setmobile(e.target.value)}
							placeholder='Phone number'
						/>
					</div>

					<div className='col-3'>
						{" "}
						<input
							className='admintextbox'
							required=''
							name='reg'
							onChange={(e) => setreg(e.target.value)}
							placeholder='Registration No.'
						/>
					</div>
				</div>
				<br />
				<div className='row'>
					<div className='col-3'>
						{" "}
						<input
							className='admintextbox'
							required=''
							name='grosselling'
							onChange={(e) => setgrosselling(e.target.value)}
							placeholder='Gross Selling Price'
						/>
					</div>

					<div className='col-3'>
						{" "}
						<input
							className='admintextbox'
							required=''
							name='insurencer'
							onChange={(e) => setinsurencer(e.target.value)}
							placeholder='Insurence Renewal Cost'
						/>
					</div>
					<div className='col-3'>
						{" "}
						<input
							className='admintextbox'
							required=''
							name='rto'
							onChange={(e) => setrto(e.target.value)}
							placeholder='RTO Road Tax'
						/>
					</div>

					<div className='col-3'>
						{" "}
						<input
							className='admintextbox'
							required=''
							name='assistence'
							onChange={(e) => setassistence(e.target.value)}
							placeholder='Road Side Assistance Cost'
						/>
					</div>
				</div>
				<br />

				<div className='row'>
					<div className='col-3'>
						{" "}
						<input
							className='admintextbox'
							required=''
							name='addservice'
							onChange={(e) => setaddservice(e.target.value)}
							placeholder='Value Added Service'
						/>
					</div>

					<div className='col-3'>
						{" "}
						<input
							className='admintextbox'
							required=''
							name='transfer'
							onChange={(e) => settransfer(e.target.value)}
							placeholder='Owner Transfer Cost'
						/>
					</div>

					<div className='col-3'>
						{" "}
						<input
							className='admintextbox'
							required=''
							name='cost'
							onChange={(e) => setcost(e.target.value)}
							placeholder='Accessories Cost'
						/>
					</div>

					<div className='col-3'>
						{" "}
						<input
							className='admintextbox'
							required=''
							name='wranty'
							onChange={(e) => setwranty(e.target.value)}
							placeholder='Warranty Cost'
						/>
					</div>
				</div>
				<br />

				<div className='row'>
					<div className='col-3'>
						{" "}
						<input
							className='admintextbox'
							required=''
							name='basicelling'
							onChange={(e) => setBasicselling(e.target.value)}
							placeholder='Basic Selling Price'
						/>
					</div>

					<div className='col-3'>
						{" "}
						<input
							className='admintextbox'
							required=''
							name='maitence'
							onChange={(e) => setmaitence(e.target.value)}
							placeholder='Maintenance Package'
						/>
					</div>

					<div className='col-3'>
						{" "}
						<input
							className='admintextbox'
							required=''
							name='bokingamount'
							onChange={(e) => setbokingamount(e.target.value)}
							placeholder='Booking Amount'
						/>
					</div>

					<div class='col-3'>
						<input
							name='odometer'
							onChange={(e) => setodometer(e.target.value)}
							required=''
							placeholder='Odometer'
							type='text'
							className='admintextbox'
						/>
					</div>
				</div>

				<br />
				<div className='row'>
					<div className='col-3'>
						{" "}
						<textarea
							className='admintextbox'
							required=''
							width='70'
							name='remark'
							onChange={(e) => setremark(e.target.value)}
							placeholder='Remarks'
						/>
					</div>
				</div>
				<br />

				<div className='col-3'>
					{" "}
					<button class='admin_submit'>Submit</button>
				</div>
			</form>
		</div>
	);
};

export default BookingForm;

<div className='row'></div>;

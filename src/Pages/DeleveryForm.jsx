import React, { useEffect, useState } from "react";
import "./admin.css";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const DeleveryForm = () => {
	const [data, setData] = useState([]);
	const [reason, setReson] = useState([]);
	const [selectreson, setselectreson] = useState([]);
	const [selectClosure, setselectClosure] = useState("");
	const [remark, setremark] = useState("");
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
	const navigate = useNavigate();

	const handleClosureType = (event) => {
		setselectClosure(event.target.value);
	};

	const handleClosureReason = (event) => {
		setselectreson(event.target.value);
	};

	console.log(selectreson, "selectClosure reson");
	console.log(selectClosure, "selectClosure type");
	const vechilSubmit = (e) => {
		e.preventDefault();

		const Datasecond = {
			brandCode: "UC",
			countryCode: "IN",
			uniqueSerial: "1270",
			companyId: "SUSHIL",
			loginUserId: "SULTAN",
			loginIpAddress: "180.151.78.50",
			uniqueProspectNo: "",
			closureType: selectClosure,
			closureReasonCode: selectreson,
			finCase: "N",
			financeCode: "0",
			tenure: "Select Tenure",
			financeAmount: "0",
			closureTpAgency: "",
			bookingAmount: "0",
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
			" https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/SaveUsedCarVehDeliveryData",
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
				navigate("/deleveryhome");
				console.log("Response:", data);
			})
			.catch((error) => {
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
						Delivery Stock
					</span>
				</div>
			</div>
			<form
				id='consultation-form'
				className='feed-form'
				onSubmit={vechilSubmit}>
				<div className='row'>
					<div className='col-3'>
						<select
							placeholder='heloo'
							id='selectdata'
							className='admintextbox'
							value={selectClosure}
							onChange={handleClosureType}>
							<option value='' placeholder='heloo'>
								Select Closure Type
							</option>

							{data.map((item, id) => (
								<option key={id} value={item.dataCode}>
									{item.dataDescription}
								</option>
							))}
						</select>
					</div>
					<div className='col-3'>
						<select
							placeholder='heloo'
							id='selectdata'
							className='admintextbox'
							value={selectreson}
							onChange={handleClosureReason}>
							<option value='' placeholder='heloo'>
								Select Reason
							</option>

							{reason.map((item, id) => (
								<option key={id} value={item.dataCode}>
									{item.dataDescription}
								</option>
							))}
						</select>
					</div>

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
				</div>
				<div className='row'></div>
				<br />

				<div className='row'>
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
				</div>
				<br />

				<div className='row'>
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
							name='basicelling'
							onChange={(e) => setBasicselling(e.target.value)}
							placeholder='Basic Selling Price'
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
							name='mobile'
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

export default DeleveryForm;

import React, { useState, useEffect } from "react";
import Admin from "./Admin";
import PropTypes from "prop-types";
import "./admin.css";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { Typography, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import StoreVechileTable from "./StoreVechileTable";
import ImageUploadData from "./ImageUploadData";
import "./admin.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Features = () => {
	const [fetaures, setfetaures] = useState([]);
	const [retails, setretailsdata] = useState([]);
	const [prosposedsell, setprosposedsell] = useState([]);
	const [price, setprice] = useState("");
	const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
	const [selectedRadioValue, setSelectedRadioValue] = useState(null);

	useEffect(() => {
		const url =
			"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/Features";
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
			calledBy: "FEATURES",
			uniqueSerial: "",
			loginUserId: "EVALUATOR",
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
				console.log(jsonData, "data response");
				const generalList = jsonData?.Feature.dataPointCollections;
				const rediodata = jsonData?.SalesType.dataPointCollections;
				const Dataprosposedsell = jsonData?.ProposedSellingPrice;

				setfetaures(generalList);
				setretailsdata(rediodata);
				setprosposedsell(Dataprosposedsell);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	console.log(fetaures, "fetaures");
	const navigate = useNavigate();

	const handleCheckboxChange = (e) => {
		const { value, checked } = e.target;
		if (checked) {
			setSelectedCheckboxes((prevSelected) => [...prevSelected, value]);
		} else {
			setSelectedCheckboxes((prevSelected) =>
				prevSelected.filter((item) => item !== value)
			);
		}
	};
	console.log(selectedRadioValue, "selectedCheckboxes");

	const saveFeatures = (e) => {
		e.preventDefault();

		const Datasecond = {
			brandCode: "UC",
			companyId: "SUSHIL",
			loginUserId: "SULTAN",
			loginIpAddress: "180.151.78.50",
			countryCode: "IN",

			ProposedSellingPrice: price,
			SalesType: selectedRadioValue,
			InsuType: "",
			InsuCompany: "",
			InsuDate: "",
			ChassisNo: "",
			CurrentKMS: "",
			Features: selectedCheckboxes,
			uniqueSerial: "1273",
		};

		fetch(
			" https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/SaveFeatureData",
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

				console.log("Response:", data);
			})
			.catch((error) => {
				toast(error);
				console.error("Error:", error);
			});

		console.log(Datasecond, "secontdata");
	};
	return (
		<div style={{ marginTop: "-30px" }}>
			<div className=' col-xl-12 bg-black' id='header'>
				<div className='row row-cols-md-2 m-2 p-4 row-cols-lg-2 row-cols-xl-2 font-weight-bold'>
					<span className='text-left text-light '>
						<Link style={{ color: "white", marginLeft: "-10px" }} to='/admin'>
							<ArrowBackIcon
								style={{ marginRight: "41px", fontSize: "30px" }}
							/>
						</Link>{" "}
						Features
					</span>
				</div>
			</div>
			<div
				id='Paris'
				class='tabcontent '
				style={{ marginTop: "20px", marginLeft: "50px" }}>
				{fetaures.map((itemdata) => (
					<div
						className='form-check form-check-inline'
						id='datachackbox'
						key={itemdata}>
						<div className='d-flex' id='checkbox'>
							<input
								className='form-check-input'
								type='checkbox'
								id={`checkbox-${itemdata.dataCode}`}
								value={itemdata.dataCode}
								onChange={handleCheckboxChange}
								checked={selectedCheckboxes.includes(itemdata.dataCode)}
							/>
							<label
								className='form-check-label1'
								htmlFor={`checkbox-${itemdata.dataDescription}`}>
								{itemdata.dataDescription}
							</label>
						</div>
					</div>
				))}
				{retails.map((itemdata) => (
					<div className='' key={itemdata}>
						<div className=''>
							<div class='' id='raiostyle'>
								<div
									class='form-check form-check-inline'
									id='datachackbox1'
									key={itemdata}>
									<div className='d-flex' id='checkbox'>
										<input
											class='form-check-input'
											type='radio'
											name='flexRadioDefault'
											id={`flexRadioDefault_${itemdata.id}`}
											value={itemdata.dataDescription}
											checked={selectedRadioValue === itemdata.dataDescription}
											onChange={() =>
												setSelectedRadioValue(itemdata.dataDescription)
											}
										/>
										<label
											class='form-check-label1'
											htmlFor={`flexRadioDefault_${itemdata.id}`}>
											{itemdata.dataDescription}
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}

				<div className='datainputtext' style={{ marginTop: "0px" }}>
					<input
						type='text'
						name='price'
						className='admintextbox1'
						placeholder={prosposedsell.dataPointDescription}
						onChange={(event) => setprice(event.target.value)}
					/>

					<button
						style={{ marginLeft: "40px" }}
						onClick={saveFeatures}
						className='admin_submit '>
						Approve
					</button>
				</div>
			</div>
		</div>
	);
};

export default Features;

import React, { useState, useEffect } from "react";
import ImageUploading from "react-images-uploading";
import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import UpgradeIcon from "@mui/icons-material/Upgrade";

function EvalutionImage() {
	// Separate state variables for each document type
	const [adharFrontImages, setAdharFrontImages] = useState([]);
	const [adharBackImages, setAdharBackImages] = useState([]);
	const [panCardImages, setPanCardImages] = useState([]);
	const [passportImages, setPassportImages] = useState([]);
	const [secondIdImages, setSecondIdImages] = useState([]);
	const [showCameraIcon, setShowCameraIcon] = useState(true);
	const [selectedFiles, setSelectedFiles] = useState([]);
	const [selectedFiles1, setSelectedFiles1] = useState([]);

	const [dataimage, setdataimage] = useState(null);

	useEffect(() => {
		// Define the URL, headers, and parameters
		const apiUrl =
			"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetUsedCarDocModule";
		const headers = {
			ApplicationMode: "ONLINE",
			EnvironmentType: "DEMO",
			BrandCode: "UC",
			CountryCode: "IN",
			loginCompanyId: "SUSHIL",
			loginUserId: "SULTAN",
			loginIpAddress: "180.151.78.50",
		};
		const queryParams = {
			uniqueSerial: "1273",
			docModule: "UC",
		};

		// Create an array of URLSearchParams from the queryParams object
		const searchParams = new URLSearchParams(queryParams);

		// Construct the final URL by appending the query parameters
		const finalUrl = `${apiUrl}?${searchParams.toString()}`;

		// Make the API call using fetch
		fetch(finalUrl, {
			method: "GET",
			headers: headers,
		})
			.then((response) => response.json())
			.then((data) => {
				// Add default values to handle missing properties
				// const { yourExpectedProperty = defaultValue } = data;
				setdataimage(data.UsedCarDocSubModules);
				// setSelectedProduct(data.UniqueSerial);
			})
			.catch((error) => console.error("Error:", error));
	}, []);
	console.log(dataimage, "dataimage iii");

	const handleImageClick = (index) => {
		const fileInput = document.getElementById(`fileInput_${index}`);
		if (fileInput) {
			fileInput.click();
		}
	};
	const handleFileChange = (index, e) => {
		const file = e.target.files[0];
		const updatedSelectedFiles = [...selectedFiles];
		updatedSelectedFiles[index] = file;
		setSelectedFiles(updatedSelectedFiles);
		setSelectedFiles1(updatedSelectedFiles);
	};

	return (
		<div className='tabdatasize'>
			<div className='row'>
				{dataimage
					?.filter((item, index) => item.SubModuleCode === "EVLTN_IMG")
					.map((item, index) => (
						<>
							{console.log(item.DocGroups[1].DocGroupDescription, "evalution")}
							{console.log(item.DocGroups[0].DocCodes[1].DocDescription, "evl")}
							<h3>{item.DocGroups[0].DocGroupDescription}</h3>
							<div className='col-1' key={item.DisplaySerial}>
								<input
									type='file'
									id={`fileInput_${index}`}
									style={{ display: "none" }}
									onChange={(e) => handleFileChange(index, e)}
								/>
								{/* Display the selected image if available */}
								{selectedFiles[index] ? (
									<img
										src={URL.createObjectURL(selectedFiles[index])}
										alt='Selected Image'
										onClick={() => handleImageClick(index)}
									/>
								) : (
									// Display the initial image
									<img
										src={
											item.DocGroups[0].DocCodes[0].AzureUri !== null
												? item.DocGroups[0].DocCodes[0].AzureUri
												: item.DocGroups[0].DocCodes[0].DocTypeIconPath
										}
										alt='AzureUri'
										onClick={() => handleImageClick(index)}
									/>
								)}

								<h5>{item.DocGroups[0].DocCodes[0].DocDescription}</h5>
							</div>

							<div className='col-1' key={item.DisplaySerial}>
								<input
									type='file'
									id={`fileInput_${index}`}
									style={{ display: "none" }}
									onChange={(e) => handleFileChange(index, e)}
								/>
								{/* Display the selected image if available */}
								{selectedFiles[index] ? (
									<img
										src={URL.createObjectURL(selectedFiles[index])}
										alt='Selected Image'
										onClick={() => handleImageClick(index)}
									/>
								) : (
									// Display the initial image
									<img
										src={
											item.DocGroups[0].DocCodes[1].AzureUri !== null
												? item.DocGroups[0].DocCodes[1].AzureUri
												: item.DocGroups[0].DocCodes[1].DocTypeIconPath
										}
										alt='AzureUri'
										onClick={() => handleImageClick(index)}
									/>
								)}

								<h5>{item.DocGroups[0].DocCodes[1].DocDescription}</h5>
							</div>

							<div className='col-1' key={item.DisplaySerial}>
								<input
									type='file'
									id={`fileInput_${index}`}
									style={{ display: "none" }}
									onChange={(e) => handleFileChange(index, e)}
								/>
								{/* Display the selected image if available */}
								{selectedFiles[index] ? (
									<img
										src={URL.createObjectURL(selectedFiles[index])}
										alt='Selected Image'
										onClick={() => handleImageClick(index)}
									/>
								) : (
									// Display the initial image
									<img
										src={
											item.DocGroups[0].DocCodes[2].AzureUri !== null
												? item.DocGroups[0].DocCodes[2].AzureUri
												: item.DocGroups[0].DocCodes[2].DocTypeIconPath
										}
										alt='AzureUri'
										onClick={() => handleImageClick(index)}
									/>
								)}

								<h5>{item.DocGroups[0].DocCodes[2].DocDescription}</h5>
							</div>

							<div className='col-1' key={item.DisplaySerial}>
								<input
									type='file'
									id={`fileInput_${index}`}
									style={{ display: "none" }}
									onChange={(e) => handleFileChange(index, e)}
								/>
								{/* Display the selected image if available */}
								{selectedFiles[index] ? (
									<img
										src={URL.createObjectURL(selectedFiles[index])}
										alt='Selected Image'
										onClick={() => handleImageClick(index)}
									/>
								) : (
									// Display the initial image
									<img
										src={
											item.DocGroups[0].DocCodes[3].AzureUri !== null
												? item.DocGroups[0].DocCodes[3].AzureUri
												: item.DocGroups[0].DocCodes[3].DocTypeIconPath
										}
										alt='AzureUri'
										onClick={() => handleImageClick(index)}
									/>
								)}

								<h5>{item.DocGroups[0].DocCodes[3].DocDescription}</h5>
							</div>

							<div className='col-1' key={item.DisplaySerial}>
								<input
									type='file'
									id={`fileInput_${index}`}
									style={{ display: "none" }}
									onChange={(e) => handleFileChange(index, e)}
								/>
								{/* Display the selected image if available */}
								{selectedFiles[index] ? (
									<img
										src={URL.createObjectURL(selectedFiles[index])}
										alt='Selected Image'
										onClick={() => handleImageClick(index)}
									/>
								) : (
									// Display the initial image
									<img
										src={
											item.DocGroups[0].DocCodes[4].AzureUri !== null
												? item.DocGroups[0].DocCodes[4].AzureUri
												: item.DocGroups[0].DocCodes[4].DocTypeIconPath
										}
										alt='AzureUri'
										onClick={() => handleImageClick(index)}
									/>
								)}

								<h5>{item.DocGroups[0].DocCodes[4].DocDescription}</h5>
							</div>

							<div className='col-1' key={item.DisplaySerial}>
								<input
									type='file'
									id={`fileInput_${index}`}
									style={{ display: "none" }}
									onChange={(e) => handleFileChange(index, e)}
								/>
								{/* Display the selected image if available */}
								{selectedFiles[index] ? (
									<img
										src={URL.createObjectURL(selectedFiles[index])}
										alt='Selected Image'
										onClick={() => handleImageClick(index)}
									/>
								) : (
									// Display the initial image
									<img
										src={
											item.DocGroups[0].DocCodes[5].AzureUri !== null
												? item.DocGroups[0].DocCodes[5].AzureUri
												: item.DocGroups[0].DocCodes[5].DocTypeIconPath
										}
										alt='AzureUri'
										onClick={() => handleImageClick(index)}
									/>
								)}

								<h5>{item.DocGroups[0].DocCodes[5].DocDescription}</h5>
							</div>

							<div className='col-1' key={item.DisplaySerial}>
								<input
									type='file'
									id={`fileInput_${index}`}
									style={{ display: "none" }}
									onChange={(e) => handleFileChange(index, e)}
								/>
								{/* Display the selected image if available */}
								{selectedFiles[index] ? (
									<img
										src={URL.createObjectURL(selectedFiles[index])}
										alt='Selected Image'
										onClick={() => handleImageClick(index)}
									/>
								) : (
									// Display the initial image
									<img
										src={
											item.DocGroups[0].DocCodes[6].AzureUri !== null
												? item.DocGroups[0].DocCodes[6].AzureUri
												: item.DocGroups[0].DocCodes[6].DocTypeIconPath
										}
										alt='AzureUri'
										onClick={() => handleImageClick(index)}
									/>
								)}

								<h5>{item.DocGroups[0].DocCodes[6].DocDescription}</h5>
							</div>

							<div className='col-1' key={item.DisplaySerial}>
								<input
									type='file'
									id={`fileInput_${index}`}
									style={{ display: "none" }}
									onChange={(e) => handleFileChange(index, e)}
								/>
								{/* Display the selected image if available */}
								{selectedFiles[index] ? (
									<img
										src={URL.createObjectURL(selectedFiles[index])}
										alt='Selected Image'
										onClick={() => handleImageClick(index)}
									/>
								) : (
									// Display the initial image
									<img
										src={
											item.DocGroups[0].DocCodes[7].AzureUri !== null
												? item.DocGroups[0].DocCodes[7].AzureUri
												: item.DocGroups[0].DocCodes[7].DocTypeIconPath
										}
										alt='AzureUri'
										onClick={() => handleImageClick(index)}
									/>
								)}

								<h5>{item.DocGroups[0].DocCodes[7].DocDescription}</h5>
							</div>

							{/* interior */}

							<h3>{item.DocGroups[1].DocGroupDescription}</h3>
							{console.log(item.DocGroups[1].DocCodes[0].DocDescription, "evl")}

							<div className='col-2' key={item.DisplaySerial}>
								<input
									type='file'
									id={`fileInput_${index}`}
									style={{ display: "none" }}
									onChange={(e) => handleFileChange(index, e)}
								/>
								{/* Display the selected image if available */}
								{selectedFiles[index] ? (
									<img
										src={URL.createObjectURL(selectedFiles[index])}
										alt='Selected Image'
										onClick={() => handleImageClick(index)}
									/>
								) : (
									// Display the initial image
									<img
										src={
											item.DocGroups[1].DocCodes[0].AzureUri !== null
												? item.DocGroups[1].DocCodes[0].AzureUri
												: item.DocGroups[1].DocCodes[0].DocTypeIconPath
										}
										alt='AzureUri'
										onClick={() => handleImageClick(index)}
									/>
								)}

								<h5>{item.DocGroups[1].DocCodes[0].DocDescription}</h5>
							</div>

							<div className='col-1' key={item.DisplaySerial}>
								<input
									type='file'
									id={`fileInput_${index}`}
									style={{ display: "none" }}
									onChange={(e) => handleFileChange(index, e)}
								/>
								{/* Display the selected image if available */}
								{selectedFiles[index] ? (
									<img
										src={URL.createObjectURL(selectedFiles[index])}
										alt='Selected Image'
										onClick={() => handleImageClick(index)}
									/>
								) : (
									// Display the initial image
									<img
										src={
											item.DocGroups[1].DocCodes[1].AzureUri !== null
												? item.DocGroups[1].DocCodes[1].AzureUri
												: item.DocGroups[1].DocCodes[1].DocTypeIconPath
										}
										alt='AzureUri'
										onClick={() => handleImageClick(index)}
									/>
								)}

								<h5>{item.DocGroups[1].DocCodes[1].DocDescription}</h5>
							</div>

							<div className='col-1' key={item.DisplaySerial}>
								<input
									type='file'
									id={`fileInput_${index}`}
									style={{ display: "none" }}
									onChange={(e) => handleFileChange(index, e)}
								/>
								{/* Display the selected image if available */}
								{selectedFiles[index] ? (
									<img
										src={URL.createObjectURL(selectedFiles[index])}
										alt='Selected Image'
										onClick={() => handleImageClick(index)}
									/>
								) : (
									// Display the initial image
									<img
										src={
											item.DocGroups[1].DocCodes[2].AzureUri !== null
												? item.DocGroups[1].DocCodes[2].AzureUri
												: item.DocGroups[1].DocCodes[2].DocTypeIconPath
										}
										alt='AzureUri'
										onClick={() => handleImageClick(index)}
									/>
								)}

								<h5>{item.DocGroups[1].DocCodes[2].DocDescription}</h5>
							</div>

							<div className='col-1' key={item.DisplaySerial}>
								<input
									type='file'
									id={`fileInput_${index}`}
									style={{ display: "none" }}
									onChange={(e) => handleFileChange(index, e)}
								/>
								{/* Display the selected image if available */}
								{selectedFiles[index] ? (
									<img
										src={URL.createObjectURL(selectedFiles[index])}
										alt='Selected Image'
										onClick={() => handleImageClick(index)}
									/>
								) : (
									// Display the initial image
									<img
										src={
											item.DocGroups[1].DocCodes[3].AzureUri !== null
												? item.DocGroups[1].DocCodes[3].AzureUri
												: item.DocGroups[1].DocCodes[3].DocTypeIconPath
										}
										alt='AzureUri'
										onClick={() => handleImageClick(index)}
									/>
								)}

								<h5>{item.DocGroups[1].DocCodes[3].DocDescription}</h5>
							</div>

							<div className='col-1' key={item.DisplaySerial}>
								<input
									type='file'
									id={`fileInput_${index}`}
									style={{ display: "none" }}
									onChange={(e) => handleFileChange(index, e)}
								/>
								{/* Display the selected image if available */}
								{selectedFiles[index] ? (
									<img
										src={URL.createObjectURL(selectedFiles[index])}
										alt='Selected Image'
										onClick={() => handleImageClick(index)}
									/>
								) : (
									// Display the initial image
									<img
										src={
											item.DocGroups[1].DocCodes[4].AzureUri !== null
												? item.DocGroups[1].DocCodes[4].AzureUri
												: item.DocGroups[1].DocCodes[4].DocTypeIconPath
										}
										alt='AzureUri'
										onClick={() => handleImageClick(index)}
									/>
								)}

								<h5>{item.DocGroups[1].DocCodes[4].DocDescription}</h5>
							</div>

							<div className='col-1' key={item.DisplaySerial}>
								<input
									type='file'
									id={`fileInput_${index}`}
									style={{ display: "none" }}
									onChange={(e) => handleFileChange(index, e)}
								/>
								{/* Display the selected image if available */}
								{selectedFiles[index] ? (
									<img
										src={URL.createObjectURL(selectedFiles[index])}
										alt='Selected Image'
										onClick={() => handleImageClick(index)}
									/>
								) : (
									// Display the initial image
									<img
										src={
											item.DocGroups[2].DocCodes[0].AzureUri !== null
												? item.DocGroups[2].DocCodes[0].AzureUri
												: item.DocGroups[2].DocCodes[0].DocTypeIconPath
										}
										alt='AzureUri'
										onClick={() => handleImageClick(index)}
									/>
								)}

								<h5>{item.DocGroups[2].DocCodes[0].DocDescription}</h5>
							</div>

							<div className='col-1' key={item.DisplaySerial}>
								<input
									type='file'
									id={`fileInput_${index}`}
									style={{ display: "none" }}
									onChange={(e) => handleFileChange(index, e)}
								/>
								{/* Display the selected image if available */}
								{selectedFiles[index] ? (
									<img
										src={URL.createObjectURL(selectedFiles[index])}
										alt='Selected Image'
										onClick={() => handleImageClick(index)}
									/>
								) : (
									// Display the initial image
									<img
										src={
											item.DocGroups[3].DocCodes[0].AzureUri !== null
												? item.DocGroups[3].DocCodes[0].AzureUri
												: item.DocGroups[3].DocCodes[0].DocTypeIconPath
										}
										alt='AzureUri'
										onClick={() => handleImageClick(index)}
									/>
								)}

								<h5>{item.DocGroups[3].DocCodes[0].DocDescription}</h5>
							</div>
						</>
					))}
			</div>
		</div>
	);
}

export default EvalutionImage;

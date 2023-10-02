import React, { useState, useEffect } from "react";
function ContactDoc() {
	const [dataimage, setdataimage] = useState(null);
	const [selectedFiles, setSelectedFiles] = useState([]);
	const [selectedFiles1, setSelectedFiles1] = useState([]);

	const handleImageClick = (index) => {
		const fileInput = document.getElementById(`fileInput_${index}`);
		if (fileInput) {
			fileInput.click();
		}
	};
	const handleImageClick1 = (index) => {
		const fileInput = document.getElementById(`fileInput1_${index}`);
		if (fileInput) {
			fileInput.click();
		}
	};

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

	const handleFileChange = (index, e) => {
		const file = e.target.files[0];
		const updatedSelectedFiles = [...selectedFiles];
		updatedSelectedFiles[index] = file;
		setSelectedFiles(updatedSelectedFiles);
	};

	const handleFileChange1 = (index, e) => {
		const file = e.target.files[0];
		const updatedSelectedFiles1 = [...selectedFiles1];
		updatedSelectedFiles1[index] = file;
		setSelectedFiles1(updatedSelectedFiles1);
	};

	return (
		<div className='tabdatasize'>
			<div className='row'>
				{dataimage
					?.filter((item, index) => item.SubModuleCode === "CTRCT_DOC")
					.map((item, index) => (
						<>
							<div className='col-2' key={item.DisplaySerial}>
								<h5>{item.DocGroups[0].DocCodes[0].DocDescription}</h5>
								<input
									type='file'
									id={`fileInput_${index}`}
									style={{ display: "none" }}
									onChange={(e) => handleFileChange(index, e)}
								/>
								{selectedFiles[index] ? (
									<img
										className='imageuploads'
										src={URL.createObjectURL(selectedFiles[index])}
										alt='Selected Image'
										onClick={() => handleImageClick(index)}
									/>
								) : (
									<img
										className='imageupload'
										src={
											item.DocGroups[0].DocCodes[0].AzureUri !== null
												? item.DocGroups[0].DocCodes[0].AzureUri
												: item.DocGroups[0].DocCodes[0].DocTypeIconPath
										}
										alt='AzureUri'
										onClick={() => handleImageClick(index)}
									/>
								)}
							</div>

							<div className='col-2' key={item.DisplaySerial}>
								<h5>{item.DocGroups[1].DocCodes[0].DocDescription}</h5>
								<input
									type='file'
									id={`fileInput1_${index}`}
									style={{ display: "none" }}
									onChange={(e) => handleFileChange1(index, e)}
								/>
								{selectedFiles1[index] ? (
									<img
										className='imageuploads'
										src={URL.createObjectURL(selectedFiles1[index])}
										alt='Selected Image'
										onClick={() => handleImageClick1(index)}
									/>
								) : (
									<img
										className='imageupload'
										src={
											item.DocGroups[1].DocCodes[0].AzureUri !== null
												? item.DocGroups[1].DocCodes[0].AzureUri
												: item.DocGroups[1].DocCodes[0].DocTypeIconPath
										}
										alt='AzureUri'
										onClick={() => handleImageClick1(index)}
									/>
								)}
							</div>
						</>
					))}
			</div>
		</div>
	);
}

export default ContactDoc;

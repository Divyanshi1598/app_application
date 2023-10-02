import React, { useState, useEffect } from "react";

function Buyer({ product, uniquekey }) {
	const [dataimage, setdataimage] = useState(null);
	const [selectedFiles, setSelectedFiles] = useState([]);
	const [selectedFiles1, setSelectedFiles1] = useState([]);

	const handleImageClick = (index) => {
		const fileInput = document.getElementById(`fileInput_${index}`);
		if (fileInput) {
			fileInput.click();
		}
	};

	useEffect(() => {
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
			uniqueSerial: uniquekey,
			docModule: "UC",
		};

		const searchParams = new URLSearchParams(queryParams);

		const finalUrl = `${apiUrl}?${searchParams.toString()}`;

		fetch(finalUrl, {
			method: "GET",
			headers: headers,
		})
			.then((response) => response.json())
			.then((data) => {
				setdataimage(data.UsedCarDocSubModules);
			})
			.catch((error) => console.error("Error:", error));
	}, []);

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
					?.filter((item, index) => item.SubModuleCode === "BUY_DOC")
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
								<h5>{item.DocGroups[0].DocCodes[1].DocDescription}</h5>
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
												? item.DocGroups[0].DocCodes[1].AzureUri
												: item.DocGroups[0].DocCodes[1].DocTypeIconPath
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
												? item.DocGroups[1].DocCodes[0].AzureUri
												: item.DocGroups[1].DocCodes[0].DocTypeIconPath
										}
										alt='AzureUri'
										onClick={() => handleImageClick(index)}
									/>
								)}
							</div>

							<div className='col-2'>
								<h5>{item.DocGroups[2].DocCodes[0].DocDescription} </h5>
								<input
									type='file'
									id={`fileInput1_${index}`}
									style={{ display: "none" }}
									onChange={(e) => handleFileChange(index, e)}
								/>

								{selectedFiles1[index] ? (
									<img
										className='imageuploads'
										src={URL.createObjectURL(selectedFiles1[index])}
										alt='Selected Image'
										onClick={() => handleImageClick(index)}
									/>
								) : (
									<img
										className='imageupload'
										src={
											item.DocGroups[3].DocCodes[0].AzureUri !== null
												? item.DocGroups[3].DocCodes[0].AzureUri
												: item.DocGroups[3].DocCodes[0].DocTypeIconPath
										}
										alt='AzureUri'
										onClick={() => handleImageClick(index)}
									/>
								)}
							</div>

							<div className='col-2'>
								<h5>{item.DocGroups[3].DocGroupDescription} </h5>
								<input
									type='file'
									id={`fileInput1_${index}`}
									style={{ display: "none" }}
									onChange={(e) => handleFileChange(index, e)}
								/>

								{selectedFiles1[index] ? (
									<img
										className='imageuploads'
										src={URL.createObjectURL(selectedFiles1[index])}
										alt='Selected Image'
										onClick={() => handleImageClick(index)}
									/>
								) : (
									<img
										className='imageupload'
										src={
											item.DocGroups[3].DocCodes[0].AzureUri !== null
												? item.DocGroups[3].DocCodes[0].AzureUri
												: item.DocGroups[3].DocCodes[0].DocTypeIconPath
										}
										alt='AzureUri'
										onClick={() => handleImageClick(index)}
									/>
								)}
							</div>
						</>
					))}
			</div>
		</div>
	);
}

export default Buyer;
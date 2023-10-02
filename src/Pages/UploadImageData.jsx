import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "./../Components/Item";

function UploadImageData({ product, uniquekey }) {
	const [dataimage, setDataImage] = useState(null);
	const [selectedFiles, setSelectedFiles] = useState([]);
	const [selectedFiles1, setSelectedFiles1] = useState([]);
	const [selectedFiles2, setSelectedFiles2] = useState([]);
	const [selectedFiles3, setSelectedFiles3] = useState([]);
	const [selectedFiles4, setSelectedFiles4] = useState([]);
	const [deleteItem, setDeleteItem] = useState(null);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [apigroup, setapigroup] = useState("");
	const [index1, setIndex1] = useState();
	const [index2, setIndex2] = useState();
	const [decodem, setDecodem] = useState();

	console.log(apigroup, "apigroup");

	const [uploadData, setuploaddata] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};

	console.log(product, "selectedProduct mmmmmmm");
	console.log("asdfghjkldfghjkl", uniquekey);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetUsedCarDocModule?uniqueSerial=${uniquekey}&docModule=UC`,
					{
						method: "GET",
						headers: {
							ApplicationMode: "ONLINE",
							EnvironmentType: "DEMO",
							BrandCode: "UC",
							CountryCode: "IN",
							loginCompanyId: "SUSHIL",
							loginUserId: "SULTAN",
							loginIpAddress: "180.151.78.50",
						},
					}
				);
				const data = await response.json();
				if (response.ok) {
					setDataImage(data.UsedCarDocSubModules);
				} else {
					toast.error("Failed to fetch data");
				}
			} catch (error) {
				toast.error("An error occurred while fetching data");
				console.error("Error:", error);
			}
		};

		fetchData();
	}, [uniquekey]);

	const handleFileChange = (index, e, index1, index2, DocCode) => {
		const file = e.target.files[0];
		const updatedSelectedFiles = [...selectedFiles];
		updatedSelectedFiles[index] = file;
		setSelectedFiles(updatedSelectedFiles);
		setIndex1(index1);
		setIndex2(index2);
		setDecodem(DocCode);
	};

	const navigate = useNavigate();

	// delete api

	function handeldelete(ind1, ind2) {
		dataimage
			?.filter((item, index) => item.SubModuleCode === "SELR_DOC")
			.map((item, index) => {
				let uniqueSerial = item.DocGroups[ind1].DocCodes[ind2].ImageSerial;
				let docGroupCode = item.DocGroups[ind1].DocCodes[ind2].DocGroupCode;
				let docCode = item.DocGroups[ind1].DocCodes[ind2].DocMasterCode;
				console.log(
					"I am item...............",
					uniqueSerial,
					docGroupCode,
					docCode
				);
				deleteData(uniqueSerial, docGroupCode, docCode);
			});
	}

	const deleteData = (uniqueSerialv, docGroupCodev, docCodev) => {
		const dataToDelete = {
			brandCode: "UC",
			countryCode: "IN",
			docModuleCode: "UC",
			docSubModuleCode: "SELR_DOC",
			docGroupCode: docGroupCodev,
			docCode: docCodev,
			calledBy: docCodev,
			uniqueSerial: uniqueSerialv,
			loginUserId: "SULTAN",
			loginIpAddress: "47.31.182.158",
			loginUserCompanyId: "SUSHIL",
			statusFlag: "Y",
			resultCode: "null",
		};

		fetch(
			"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/Document/DeleteDocument",
			{
				method: "POST",
				headers: {
					ApplicationMode: "ONLINE",
					EnvironmentType: "DEMO",
					BrandCode: "UC",
					CountryCode: "IN",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(dataToDelete),
			}
		)
			.then((response) => response.json())
			.then((data) => {
				toast.success(data.result);
				console.log("Response: delete ", data);
			})
			.catch((error) => {
				toast.error("An error occurred while deleting data");
				console.error("Error:", error);
			});
	};

	const SaveDataApi = (item, index) => {
		if (!selectedFiles[index]) {
			return;
		}
		const docDescription =
			item.DocGroups[index1].DocCodes[index2].DocDescription;
		const SubModuleCode = item.SubModuleCode;
		const doccode1 = item.DocGroups[index1].DocCodes[index2].DocGroupCode;
		const docDescription2 =
			item.DocGroups[index1].DocCodes[index2].DocMasterCode;
		console.log(docDescription2, "docDescription");

		const formData = new FormData();
		formData.append("image", selectedFiles[index]);
		console.log(dataimage.SubModuleDescription, "dataimage");

		formData.append("DocKeyType", "UC_DOC");
		formData.append("LogIpAddress", "192.168.10.2");
		formData.append("CompanyId", "SUSHIL");
		formData.append("BrandCode", "UC");
		formData.append("CountryCode", "IN");
		formData.append("LogUserId", "RAVI");

		const currentTimeMillis = new Date().getTime();
		formData.append("FileTitle", `DRP_${currentTimeMillis}`);
		formData.append("FileText", `DOC_${currentTimeMillis}`);

		formData.append("ImageSize", selectedFiles[index].size);
		formData.append("FileName", `TIR_${currentTimeMillis}`);
		formData.append("DocCode", decodem);
		formData.append("FileGroup", "TIR_DOC");
		formData.append("DocModule", "UC");

		formData.append("FileSizeLimitKb", "3072");
		formData.append("DocLocation", "GGN01");
		formData.append("DocKeyValue", uniquekey);
		formData.append("FileExtn", "jpg");
		formData.append("DocGroup", doccode1);
		formData.append("FileExtensionAllowed", "jpg");
		formData.append("DocSubModule", SubModuleCode);

		fetch(
			"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/Document/UploadDocument",
			{
				method: "POST",
				headers: {
					ApplicationMode: "ONLINE",
					EnvironmentType: "DEMO",
					BrandCode: "UC",
					CountryCode: "IN",
				},
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((data) => {
				toast.success(data.result);
				console.log("Response:", data);
			})
			.catch((error) => {
				toast.error("An error occurred while uploading data");
				console.error("Error:", error);
			});
	};

	const handleImageClick = (index) => {
		const fileInput = document.getElementById(`fileInput_${index}`);
		if (fileInput) {
			fileInput.click();
		}
	};

	return (
		<div className='tabdatasize'>
			<button onClick={SaveDataApi}> saving</button>
			<div className='row'>
				{dataimage
					?.filter((item, index) => item.SubModuleCode === "SELR_DOC")
					.map((item, index) => (
						<>
							<div className='col-2' key={item.DisplaySerial}>
								<h5>{item.DocGroups[0].DocCodes[0].DocDescription}</h5>

								<input
									type='file'
									id={`fileInput`}
									style={{}}
									onChange={(e) => {
										handleFileChange(index, e, 0, 0, "AADHAR_FRONT");
									}}
								/>
								{selectedFiles[index] ? (
									<img
										className='imageuploads'
										src={URL.createObjectURL(selectedFiles[index])}
										alt='Selected Image'
										onClick={() => handleImageClick(index, 0, 0)}
									/>
								) : (
									<>
										{item.DocGroups[0].DocCodes[0].AzureUri !== null ? (
											<>
												{" "}
												<div
													class='modal fade bd-example-modal-lg'
													tabindex='-1'
													role='dialog'
													aria-labelledby='myLargeModalLabel'
													aria-hidden='true'>
													<div class='modal-dialog modal-lg'>
														<div
															class='modal-content'
															style={{ width: "60%", height: "60%" }}>
															<img
																className=''
																src={item.DocGroups[0].DocCodes[0].AzureUri}
																alt='AzureUri'
															/>
														</div>
													</div>
												</div>
												<img
													className='imageuploads'
													src={item.DocGroups[0].DocCodes[0].AzureUri}
													alt='AzureUri'
													onClick={() => handleImageClick(index)}
												/>
												{/* <DeleteIcon onClick={() => deleteData(item, index)} /> */}
												<DeleteIcon onClick={() => handeldelete(0, 0)} />
											</>
										) : (
											<>
												<img
													className='imageuploads'
													src={item.DocGroups[0].DocCodes[0].DocTypeIconPath}
													alt='AzureUri'
													onClick={() => handleImageClick(index)}
													data-toggle='modal'
													data-target='.bd-example-modal-lg'
												/>

												<button
													style={{ margingTop: "10px" }}
													data-toggle='modal'
													data-target='.bd-example-modal-lg'>
													view
												</button>
												{/* <DeleteIcon onClick={() => deleteData(item, index)} /> */}
											</>
										)}
									</>
								)}
							</div>

							<div className='col-2' key={item.DisplaySerial}>
								<h5 onClick={SaveDataApi(item, index)}>
									{item.DocGroups[0].DocCodes[1].DocDescription}
								</h5>

								<input
									type='file'
									id={`fileInput`}
									style={{}}
									onChange={(e) => {
										handleFileChange(index, e, 0, 1, "AADHAR_BACK");
									}}
								/>
								{selectedFiles[index] ? (
									<>
										<img
											className='imageuploads'
											src={URL.createObjectURL(selectedFiles[index])}
											alt='Selected Image'
											onClick={() => handleImageClick(index)}
										/>

										<DeleteIcon onClick={() => handeldelete(0, 1)} />
									</>
								) : (
									<>
										{item.DocGroups[0].DocCodes[1].AzureUri !== null ? (
											<>
												{" "}
												<div
													class='modal fade bd-example-modal-lg'
													tabindex='-1'
													role='dialog'
													aria-labelledby='myLargeModalLabel'
													aria-hidden='true'>
													<div class='modal-dialog modal-lg'>
														<div
															class='modal-content'
															style={{ width: "60%", height: "60%" }}>
															{/* <img
																className=''
																src={item.DocGroups[0].DocCodes[0].AzureUri}
																alt='AzureUri'
															/> */}
														</div>
													</div>
												</div>
												<img
													className='imageuploads'
													src={item.DocGroups[0].DocCodes[1].AzureUri}
													alt='AzureUri'
													onClick={() => handleImageClick(index)}
												/>
												<DeleteIcon onClick={() => handeldelete(0, 1)} />
											</>
										) : (
											<>
												<img
													className='imageuploads'
													src={item.DocGroups[0].DocCodes[1].DocTypeIconPath}
													alt='AzureUri'
													onClick={() => handleImageClick(index)}
													data-toggle='modal'
													data-target='.bd-example-modal-lg'
												/>
												{/* <DeleteIcon onClick={handeldelete(0, 1)} /> */}
											</>
										)}
									</>
								)}
							</div>

							<div className='col-2' key={item.DisplaySerial}>
								<h5 onClick={SaveDataApi(item, index)}>
									{item.DocGroups[1].DocCodes[0].DocDescription}
								</h5>

								<input
									type='file'
									id={`fileInput`}
									style={{}}
									onChange={(e) => {
										handleFileChange(index, e, 1, 0, "PAN_CARD");
									}}
								/>
								{selectedFiles[index] ? (
									<>
										<img
											className='imageuploads'
											src={URL.createObjectURL(selectedFiles[index])}
											// alt='Selected Image'
											onClick={() => handleImageClick(index)}
										/>
										{/* <DeleteIcon onClick={handeldelete(1, 0)} /> */}
									</>
								) : (
									<>
										{item.DocGroups[1].DocCodes[0].AzureUri !== null ? (
											<>
												{" "}
												<div
													class='modal fade bd-example-modal-lg'
													tabindex='-1'
													role='dialog'
													aria-labelledby='myLargeModalLabel'
													aria-hidden='true'>
													<div class='modal-dialog modal-lg'>
														<div
															class='modal-content'
															style={{ width: "60%", height: "60%" }}>
															<img
																className=''
																src={item.DocGroups[0].DocCodes[0].AzureUri}
																alt='AzureUri'
															/>
														</div>
													</div>
												</div>
												<img
													className='imageuploads'
													src={item.DocGroups[1].DocCodes[0].AzureUri}
													alt='AzureUri'
													onClick={() => handleImageClick(index)}
												/>
												<DeleteIcon onClick={() => handeldelete(1, 0)} />
											</>
										) : (
											<>
												<img
													className='imageuploads'
													src={item.DocGroups[1].DocCodes[0].DocTypeIconPath}
													alt='AzureUri'
													onClick={() => handleImageClick(index)}
													data-toggle='modal'
													data-target='.bd-example-modal-lg'
												/>
												{/* <DeleteIcon onClick={handeldelete(1, 0)} /> */}
											</>
										)}
									</>
								)}
							</div>

							<div className='col-2' key={item.DisplaySerial}>
								<h5 onClick={SaveDataApi(item, index)}>
									{item.DocGroups[2].DocCodes[0].DocDescription}
								</h5>

								<input
									type='file'
									id={`fileInput`}
									style={{}}
									onChange={(e) => {
										handleFileChange(index, e, 2, 0, "PHOTO_PASSPORT_SIZE");
									}}
								/>
								{selectedFiles[index] ? (
									<>
										<img
											className='imageuploads'
											src={URL.createObjectURL(selectedFiles[index])}
											alt='Selected Image'
											onClick={() => handleImageClick(index)}
										/>
									</>
								) : (
									<>
										{item.DocGroups[2].DocCodes[0].AzureUri !== null ? (
											<>
												{" "}
												<div
													class='modal fade bd-example-modal-lg'
													tabindex='-1'
													role='dialog'
													aria-labelledby='myLargeModalLabel'
													aria-hidden='true'>
													<div class='modal-dialog modal-lg'>
														<div
															class='modal-content'
															style={{ width: "60%", height: "60%" }}>
															<img
																className=''
																src={item.DocGroups[0].DocCodes[0].AzureUri}
																alt='AzureUri'
															/>
														</div>
													</div>
												</div>
												<img
													className='imageuploads'
													src={item.DocGroups[2].DocCodes[0].AzureUri}
													alt='AzureUri'
													onClick={() => handleImageClick(index)}
												/>
												<DeleteIcon onClick={() => handeldelete(2, 0)} />
											</>
										) : (
											<>
												<img
													className='imageuploads'
													src={item.DocGroups[2].DocCodes[0].DocTypeIconPath}
													alt='AzureUri'
													onClick={() => handleImageClick(index)}
													data-toggle='modal'
													data-target='.bd-example-modal-lg'
												/>
												{/* <DeleteIcon onClick={handeldelete(2, 0)} /> */}
											</>
										)}
									</>
								)}
							</div>

							<div className='col-2' key={item.DisplaySerial}>
								<h5 onClick={SaveDataApi(item, index)}>
									{item.DocGroups[3].DocCodes[0].DocDescription}
								</h5>

								<input
									type='file'
									id={`fileInput`}
									style={{}}
									onChange={(e) => {
										handleFileChange(index, e, 3, 0, "SECOND_ID");
									}}
								/>
								{selectedFiles[index] ? (
									<>
										<img
											className='imageuploads'
											src={URL.createObjectURL(selectedFiles[index])}
											alt='Selected Image'
											onClick={() => handleImageClick(index)}
										/>
									</>
								) : (
									<>
										{item.DocGroups[3].DocCodes[0].AzureUri !== null ? (
											<>
												{" "}
												<div
													class='modal fade bd-example-modal-lg'
													tabindex='-1'
													role='dialog'
													aria-labelledby='myLargeModalLabel'
													aria-hidden='true'>
													<div class='modal-dialog modal-lg'>
														<div
															class='modal-content'
															style={{ width: "60%", height: "60%" }}>
															{/* <img
																className=''
																src={item.DocGroups[0].DocCodes[0].AzureUri}
																alt='AzureUri'
															/> */}
														</div>
													</div>
												</div>
												<img
													className='imageuploads'
													src={item.DocGroups[3].DocCodes[0].AzureUri}
													alt='AzureUri'
													onClick={() => handleImageClick(index)}
												/>
												<DeleteIcon onClick={() => handeldelete(3, 0)} />
											</>
										) : (
											<>
												<img
													className='imageuploads'
													src={item.DocGroups[0].DocCodes[0].DocTypeIconPath}
													alt='AzureUri'
													onClick={() => handleImageClick(index)}
													data-toggle='modal'
													data-target='.bd-example-modal-lg'
												/>
												{/* <DeleteIcon onClick={handeldelete(3, 0)} /> */}
											</>
										)}
									</>
								)}
							</div>
						</>
					))}
			</div>
		</div>
	);
}

export default UploadImageData;

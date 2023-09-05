import React, { useRef, useState, useEffect } from "react";
import "./admin.css";

const FiinalImage = () => {
	const inputRef = useRef(null);
	const [imageList, setImageList] = useState([]);

	const uploadImage = (event) => {
		const files = event.target.files;
		const newImageList = [...imageList];

		for (let i = 0; i < files.length; i++) {
			const file = files[i];
			newImageList.push(URL.createObjectURL(file));
		}

		setImageList(newImageList);
	};

	const deleteImage = (index) => {
		const newImageList = [...imageList];
		newImageList.splice(index, 1);
		setImageList(newImageList);
	};

	useEffect(() => {
		return () => {
			imageList.forEach((image) => URL.revokeObjectURL(image));
		};
	}, [imageList]);

	return (
		<div>
			<div className='' onClick={() => inputRef.current.click()}>
				<div className=''>
					<div className='row'>
						{imageList.map((image, index) => (
							<div className='col-xs-12 col-md-12 col-lg-3' key={index}>
								<div className='card'>
									<img className='stockimage' src={image} alt='textimage' />
								</div>
								<div class=''>
									<p>Front {index + 1}</p>
									<button
										style={{ width: "50px" }}
										className='btn btn-danger btn-sm'
										onClick={() => deleteImage(index)}>
										Delete
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className='row'>
				<div className='col-xs-12 col-md-12 col-xs-12 col-md-12 col-lg-3'>
					<input
						type='file'
						ref={inputRef}
						onChange={uploadImage}
						style={{ display: "none" }}
						multiple
					/>
				</div>
				<div className='col-xs-12 col-md-12 col-lg-3'>
					<input
						type='file'
						ref={inputRef}
						onChange={uploadImage}
						// style={{ display: "none" }}
						multiple
					/>
				</div>
				<div className='col-xs-12 col-md-12 col-lg-3'>
					<input
						type='file'
						ref={inputRef}
						onChange={uploadImage}
						// style={{ display: "none" }}
						multiple
					/>
				</div>
				<div className='col-xs-12 col-md-12 col-lg-3'>
					<input
						type='file'
						ref={inputRef}
						onChange={uploadImage}
						// style={{ display: "none" }}
						multiple
					/>
				</div>
				<br /> <br />
				<div className='col-xs-12 col-md-12 col-lg-3'>
					<input
						type='file'
						ref={inputRef}
						onChange={uploadImage}
						// style={{ display: "none" }}
						multiple
					/>
				</div>
				<div className='col-xs-12 col-md-12 col-lg-3'>
					<input
						type='file'
						ref={inputRef}
						onChange={uploadImage}
						// style={{ display: "none" }}
						multiple
					/>
				</div>
				<div className='col-xs-12 col-md-12 col-lg-3'>
					<input
						type='file'
						ref={inputRef}
						onChange={uploadImage}
						// style={{ display: "none" }}
						multiple
					/>
				</div>
				<div className='col-xs-12 col-md-12 col-lg-3'>
					<input
						type='file'
						ref={inputRef}
						onChange={uploadImage}
						// style={{ display: "none" }}
						multiple
					/>
				</div>
				<br /> <br />
				<div className='col-xs-12 col-md-12 col-lg-3'>
					<input
						type='file'
						ref={inputRef}
						onChange={uploadImage}
						// style={{ display: "none" }}
						multiple
					/>
				</div>
				<div className='col-xs-12 col-md-12 col-lg-3'>
					<input
						type='file'
						ref={inputRef}
						onChange={uploadImage}
						// style={{ display: "none" }}
						multiple
					/>
				</div>
				<div className='col-xs-12 col-md-12 col-lg-3'>
					<input
						type='file'
						ref={inputRef}
						onChange={uploadImage}
						// style={{ display: "none" }}
						multiple
					/>
				</div>
				<div className='col-xs-12 col-md-12 col-lg-3'>
					{" "}
					<input
						type='file'
						ref={inputRef}
						onChange={uploadImage}
						// style={{ display: "none" }}
						multiple
					/>
				</div>
				<br /> <br />
				<div className='col-xs-12 col-md-12 col-lg-3'>
					<input
						type='file'
						ref={inputRef}
						onChange={uploadImage}
						// style={{ display: "none" }}
						multiple
					/>
				</div>
				<div className='col-xs-12 col-md-12 col-lg-3'>
					<input
						type='file'
						ref={inputRef}
						onChange={uploadImage}
						// style={{ display: "none" }}
						multiple
					/>
				</div>
				<div className='col-xs-12 col-md-12 col-lg-3'>
					<input
						type='file'
						ref={inputRef}
						onChange={uploadImage}
						// style={{ display: "none" }}
						multiple
					/>
				</div>
				<br /> <br />
			</div>
		</div>
	);
};

export default FiinalImage;

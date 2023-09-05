import React, { useState } from "react";
import {
	DataGrid,
	GridActionsCellItem,
	GridToolbarContainer,
	GridToolbarExport,
	gridClasses,
	GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Chip, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import AddVechil from "./AddVechil";
import "./admin.css";

const StoreVechileTable = () => {
	const [filterColumn, setFilterColumn] = useState("");
	const [filterValue, setFilterValue] = useState("");
	let columns = [
		{
			field: "s_no",
			headerName: "Serial No.",
			minWidth: 50,
			flex: 1,
		},
		{ field: "make", headerName: "Brand", minWidth: 50, flex: 1 },
		{
			field: "model",
			headerName: "Model",
			minWidth: 75,
			flex: 1,
		},
		{ field: "varient", headerName: "Varient", minWidth: 100, flex: 1 },
		{
			field: "ext_color",
			headerName: "Ext. Color",
			minWidth: 100,
			flex: 1,
		},
		{
			field: "insurence",
			headerName: "Insurence",
			minWidth: 100,
			flex: 1,
		},
		{
			field: "selling_price",
			headerName: "Selling Price",
			minWidth: 100,
			flex: 1,
		},
		{
			field: "upload",
			headerName: "Upload",
			minWidth: 100,
			flex: 1,
		},

		{
			field: "is_active",
			headerName: "View",
			width: 150,
			flex: 1,
			renderCell: (params) =>
				params.value === "Y" ? (
					<Chip label='Active' color='success' size='small' />
				) : params.value === "N" ? (
					<Chip label='InActive' color='warning' size='small' />
				) : (
					<Chip label='Block' size='small' />
				),
		},
		// {
		// 	field: "Action",
		// 	type: "actions",
		// 	headerName: "Action",
		// 	width: 80,
		// 	flex: 1,
		// 	getActions: (params) => [
		// 		<GridActionsCellItem
		// 			label={showMasterScript === false ? "Edit" : "Verify"}
		// 			onClick={(e) => {
		// 				dispatch(
		// 					setParems({
		// 						data: {
		// 							CAMP_ID: params.row.CAMP_ID,
		// 							action: "UPDATE",
		// 							url: "managescripts",
		// 							rowdata: params.row,
		// 						},
		// 					})
		// 				);
		// 			}}
		// 			showInMenu
		// 		/>,

		// 		<GridActionsCellItem
		// 			label='Delete'
		// 			onClick={(e) => {
		// 				deleteComponent(e, params.row);
		// 			}}
		// 			showInMenu
		// 		/>,
		// 	],
		// },
	];

	function CustomToolbar() {
		return (
			<Stack direction='row' justifyContent='flex-end'>
				<GridToolbarContainer className={gridClasses.toolbarContainer}>
					<GridToolbarExport />
					<GridToolbarFilterButton />
				</GridToolbarContainer>
			</Stack>
		);
	}

	const onFilterChange = React.useCallback(async (filterModel) => {
		if (
			filterModel?.items?.[0]?.value &&
			filterModel?.items?.[0]?.value.length > 0
		) {
			setFilterColumn(filterModel?.items?.[0]?.columnField);
			setFilterValue(filterModel?.items?.[0]?.value);
		}
	}, []);

	return (
		<div className=''>
			<div className=' col-xl-12 bg-dark' id='header'>
				<div className='row row-cols-md-2 m-2 p-2 row-cols-lg-2 row-cols-xl-2 font-weight-bold'>
					<span className='text-left text-light '>Stock Details</span>
					<span className='text-right'>
						<Link
							to='/Addvechils'
							style={{ fontSize: "15px" }}
							type='btn'
							className='btn btn-success btn-sm float-right '>
							Add New Vechile Stock
						</Link>
					</span>
				</div>
			</div>
			<div className='card' style={{ marginTop: "30px" }}>
				<DataGrid
					id='datatable'
					//loading={loadingData}
					getRowId={(r) => r.sno}
					rows=''
					fontSize={30}
					columns={columns}
					pageSize={10}
					rowHeight={35}
					rowsPerPageOptions={[10, 25, 25, 50, 100]}
					autoHeight={true}
					className='bg-white'
					components={{
						Toolbar: CustomToolbar,
					}}
					density='compact'
				/>
			</div>
		</div>
	);
};

export default StoreVechileTable;

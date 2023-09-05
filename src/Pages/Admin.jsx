// import React, { useEffect } from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import toast from "react-hot-toast";
// import Box from "@mui/material/Box";
// import MuiDrawer from "@mui/material/Drawer";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import CssBaseline from "@mui/material/CssBaseline";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
// import { useNavigate } from "react-router-dom";
// import Person2Icon from "@mui/icons-material/Person2";
// import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
// import HomePage from "./../Components/HomePage";
// import "./admin.css";
// import { Link } from "react-router-dom";
// import AddVechil from "./AddVechil";
// import StoreVechileTable from "./StoreVechileTable";

// const drawerWidth = 100;

// const openedMixin = (theme) => ({
// 	width: drawerWidth,
// 	transition: theme.transitions.create("width", {
// 		easing: theme.transitions.easing.sharp,
// 		duration: theme.transitions.duration.enteringScreen,
// 	}),
// 	overflowX: "hidden",
// });

// const closedMixin = (theme) => ({
// 	transition: theme.transitions.create("width", {
// 		easing: theme.transitions.easing.sharp,
// 		duration: theme.transitions.duration.leavingScreen,
// 	}),
// 	overflowX: "hidden",
// 	width: `calc(${theme.spacing(7)} + 1px)`,
// 	[theme.breakpoints.up("sm")]: {
// 		width: `calc(${theme.spacing(8)} + 1px)`,
// 	},
// });

// const DrawerHeader = styled("div")(({ theme }) => ({
// 	display: "flex",
// 	alignItems: "center",
// 	justifyContent: "flex-end",
// 	padding: theme.spacing(0, 1),
// 	// necessary for content to be below app bar
// 	...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
// 	shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
// 	zIndex: theme.zIndex.drawer + 1,
// 	transition: theme.transitions.create(["width", "margin"], {
// 		easing: theme.transitions.easing.sharp,
// 		duration: theme.transitions.duration.leavingScreen,
// 	}),
// 	...(open && {
// 		marginLeft: drawerWidth,
// 		width: `calc(100% - ${drawerWidth}px)`,
// 		transition: theme.transitions.create(["width", "margin"], {
// 			easing: theme.transitions.easing.sharp,
// 			duration: theme.transitions.duration.enteringScreen,
// 		}),
// 	}),
// }));

// const Drawer = styled(MuiDrawer, {
// 	shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
// 	width: drawerWidth,
// 	flexShrink: 0,
// 	whiteSpace: "nowrap",
// 	boxSizing: "border-box",
// 	...(open && {
// 		...openedMixin(theme),
// 		"& .MuiDrawer-paper": openedMixin(theme),
// 	}),
// 	...(!open && {
// 		...closedMixin(theme),
// 		"& .MuiDrawer-paper": closedMixin(theme),
// 	}),
// }));

// export default function MiniDrawer() {
// 	const theme = useTheme();
// 	const [open, setOpen] = React.useState(false);
// 	const navigate = useNavigate();
// 	useEffect(() => {
// 		if (!localStorage.getItem("token")) {
// 			toast.success("User Logout");
// 			navigate("/");
// 		}
// 	}, []);

// 	const reloadPage = () => {
// 		window.location.reload();
// 		navigate("/");
// 	};

// 	const handleDrawerOpen = () => {
// 		setOpen(true);
// 	};

// 	const handleDrawerClose = () => {
// 		setOpen(false);
// 	};

// 	return (
// 		<Box sx={{ display: "flex" }}>
// 			<CssBaseline />
// 			<AppBar position='fixed' open={open} style={{ backgroundColor: "black" }}>
// 				<Toolbar>
// 					<IconButton
// 						color='inherit'
// 						aria-label='open drawer'
// 						onClick={handleDrawerOpen}
// 						edge='start'
// 						sx={{
// 							marginRight: 5,
// 							...(open && { display: "none" }),
// 						}}>
// 						<MenuIcon />
// 					</IconButton>
// 					<Typography variant='h6' noWrap component='div'>
// 						<div
// 							className='b-nav__logo wow slideInLeft'
// 							data-wow-delay='0.3s'
// 							// style={{ marginLeft: "-220px" }}
// 						>
// 							<img src='images/logo/logo-1.png' />
// 						</div>
// 					</Typography>
// 				</Toolbar>
// 			</AppBar>
// 			<Drawer
// 				variant='permanent'
// 				open={open}
// 				style={{ backgroundColor: "black" }}>
// 				<DrawerHeader>
// 					<IconButton
// 						onClick={handleDrawerClose}
// 						style={{ backgroundColor: "white" }}>
// 						{theme.direction === "rtl" ? (
// 							<ChevronRightIcon />
// 						) : (
// 							<ChevronLeftIcon />
// 						)}
// 					</IconButton>
// 				</DrawerHeader>

// 				<List className='listmenu'>
// 					<div
// 						className='listmenu'
// 						style={{ marginLeft: "-35px", fontSize: "13px" }}>
// 						<ul className='navbar-nav-menu'>
// 							<li>
// 								<Link to='/profile' variant='body2'>
// 									Profile
// 								</Link>
// 							</li>
// 							<br />
// 							<br />

// 							<li>
// 								<Link to='/stocktable'> Upload </Link>
// 							</li>
// 							<br />
// 							<br />
// 							<li
// 								style={{ color: "white" }}
// 								onClick={() => {
// 									localStorage.removeItem("token");
// 								}}>
// 								<Link> Logout</Link>
// 							</li>

// 							{/* <li>
// 											<Link to='/login'>login</Link>
// 										</li> */}
// 						</ul>
// 					</div>
// 				</List>
// 				{/* <Divider /> */}
// 			</Drawer>

// 			<Box
// 				style={{ backgroundColor: "black" }}
// 				component='main'
// 				sx={{ flexGrow: 1, p: 3 }}>
// 				{/* <DrawerHeader />
// 				<Divider /> */}
// 				{/* <AddVechil /> */}
// 				<StoreVechileTable />

// 				<AddVechil />

// 				{/* <HomePage /> */}
// 			</Box>
// 		</Box>
// 	);
// }

// import React from "react";
// import { Link } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
// import HomeIcon from "@mui/icons-material/Home";
// import { Sildebar } from "./Sildebar";
// import { useState } from "react";
// import "./admin.css";
// import CloseIcon from "@mui/icons-material/Close";
// import { IconContext } from "react-icons";
// import * as AiIcons from "react-icons/ai";
// import ImageUploadData from "./ImageUploadData";

// const Admin = () => {
// 	const [sidebar, setSidebar] = useState(false);
// 	const ShowSidebar = () => setSidebar(!sidebar);
// 	return (
// 		<div>
// 			<div className='row'>
// 				<IconContext.Provider value={{ color: "white" }}>
// 					<div className='navbar'>
// 						<Link to='#' className='menu-bars'>
// 							<MenuIcon onClick={ShowSidebar} />
// 						</Link>

// 						<div
// 							className='b-nav__logo wow slideInLeft'
// 							data-wow-delay='0.3s'
// 							style={{ marginLeft: "220px" }}>
// 							<img src='images/logo/logo-1.png' />
// 						</div>
// 					</div>
// 					<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
// 						<ul className='nav-menu-items' onClick={ShowSidebar}>
// 							<li className='navbar-toggle'>
// 								<Link to='#' className='menu-bars'>
// 									<AiIcons.AiOutlineClose />
// 								</Link>
// 							</li>
// 							{Sildebar.map((item, index) => {
// 								return (
// 									<li key={index} className={item.cName}>
// 										<Link to={item.path}>
// 											{item.icon}
// 											<span className='item-data'>{item.title}</span>
// 										</Link>
// 									</li>
// 								);
// 							})}
// 						</ul>
// 					</nav>
// 				</IconContext.Provider>
// 			</div>

// 			<div className='col-9'>
// 				<ImageUploadData />
// 			</div>
// 		</div>
// 	);
// };

// export default Admin;

import React, { useState } from "react";
import PropTypes from "prop-types";

import { Typography, Tabs, Tab, Box } from "@mui/material";
import "./admin.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import StoreVechileTable from "./StoreVechileTable";
import AddVechil from "./AddVechil";
import ImageUploadData from "./ImageUploadData";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	};
}

export default function VerticalTabs() {
	const [value, setValue] = React.useState(0);
	const [sidebar, setSidebar] = useState(false);

	const ShowSidebar = () => setSidebar(!sidebar);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	function openCity(evt, cityName) {
		var i, tabcontent, tablinks;
		tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}
		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "");
		}
		document.getElementById(cityName).style.display = "block";
		evt.currentTarget.className += " active";
	}

	// Get the element with id="defaultOpen" and click on it

	return (
		<>
			<div className='navbar'>
				{/* <Link to='#' className='menu-bars'>
					<MenuIcon onClick={ShowSidebar} />
				</Link> */}

				<div
					className='b-nav__logo wow slideInLeft'
					data-wow-delay='0.3s'
					style={{ marginTop: "-15px" }}>
					<img src='images/logo/logo-1.png' />
				</div>
			</div>
			<div class='tab'>
				<button class='tablinks' onClick={(event) => openCity(event, "London")}>
					Home
				</button>

				<button class='tablinks' onClick={(event) => openCity(event, "Paris")}>
					Stock Details
				</button>
				<button class='tablinks' onClick={(event) => openCity(event, "Tokyo")}>
					Add New Vehicle
				</button>
				<button class='tablinks' onClick={(event) => openCity(event, "Tokyo")}>
					Image Upload
				</button>
			</div>

			<div id='London' class='tabcontent'>
				<StoreVechileTable />
			</div>

			<div id='Paris' class='tabcontent'>
				<AddVechil />
			</div>

			<div id='Tokyo' class='tabcontent'>
				<ImageUploadData />
			</div>
		</>
	);
}

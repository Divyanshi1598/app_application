import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import { AppBar, Tabs, Tab, Typography, Box } from "@mui/material";

import FiinalImage from "./FiinalImage";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}>
			{value === index && (
				<Box sx={{ p: 3, fontSixe: 20 }}>
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
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`,
	};
}

export default function ImageUploadData() {
	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	return (
		<div>
			<Box
				sx={{ bgcolor: "background.black", width: "100%", fontSize: "50px" }}>
				<AppBar position='static'>
					<Tabs
						style={{ fontSize: "30px" }}
						value={value}
						onChange={handleChange}
						indicatorColor='secondary'
						textColor='inherit'
						variant='fullWidth'
						fontSize='30px'
						aria-label='full width tabs example'>
						<Tab label='Seller Documents' {...a11yProps(0)} />
						<Tab label='Buyer Documents' {...a11yProps(1)} />
						<Tab label='Vehicle Documents' {...a11yProps(2)} />
						<Tab label='Procurement Document' {...a11yProps(3)} />
						<Tab label='Contact Document' {...a11yProps(4)} />
						<Tab label='Evaluation Images' {...a11yProps(5)} />
						<Tab label='Final Images' {...a11yProps(6)} />
						<Tab label='Stock-In' {...a11yProps(7)} />
						<Tab label='Datasheet' {...a11yProps(8)} />
					</Tabs>
				</AppBar>
				<SwipeableViews
					axis={theme.direction === "rtl" ? "x-reverse" : "x"}
					index={value}
					onChangeIndex={handleChangeIndex}>
					<TabPanel value={value} index={0} dir={theme.direction}>
						<h1>Item One</h1>
					</TabPanel>
					<TabPanel value={value} index={1} dir={theme.direction}>
						Item Two
					</TabPanel>
					<TabPanel value={value} index={2} dir={theme.direction}>
						Item Three
					</TabPanel>
					<TabPanel value={value} index={3} dir={theme.direction}>
						Item four
					</TabPanel>
					<TabPanel value={value} index={4} dir={theme.direction}>
						Item5
					</TabPanel>
					<TabPanel value={value} index={5} dir={theme.direction}>
						5
					</TabPanel>
					<TabPanel value={value} index={6} dir={theme.direction}>
						<FiinalImage />
					</TabPanel>
					<TabPanel value={value} index={7} dir={theme.direction}>
						Item 8
					</TabPanel>
					<TabPanel value={value} index={8} dir={theme.direction}>
						Item 9
					</TabPanel>
				</SwipeableViews>
			</Box>
		</div>
	);
}

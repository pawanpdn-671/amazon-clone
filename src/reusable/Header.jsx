import SearchIcon from "@mui/icons-material/Search";
import React from "react";

function Header() {
	return (
		<div className="header">
			<div className="header-logo">
				<img
					src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt="amazon logo"
				/>
			</div>

			<div className="header-search">
				<input type="text" className="header-search-input" />
				<SearchIcon className="header-search-icon" />
			</div>

			<div className="header-nav">
				<div className="header-nav-option">
					<span className="header-nav-option-line1">
						Hello Guest
					</span>
					<span className="header-nav-option-line2">
						Sign In
					</span>
				</div>
				<div className="header-nav-option">
					<span className="header-nav-option-line1">
						Returns
					</span>
					<span className="header-nav-option-line2">Orders</span>
				</div>
				<div className="header-nav-option">
					<span className="header-nav-option-line1">Your</span>
					<span className="header-nav-option-line2">Prime</span>
				</div>
			</div>
		</div>
	);
}

export default Header;

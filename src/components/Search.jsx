import React from "react";

export default function Search({ handleSearch }) {
	return (
		<header className="col s12">
			<div className="row col s12">
				<nav>
					<div className="nav-wrapper col s12">
						<form onSubmit={handleSearch}>
							<div className="input-field">
								<input id="search" type="search" name="search" required />
								<label className="label-icon" htmlFor="search">
									<i className="material-icons">search for a user</i>
								</label>
								<i className="material-icons">close</i>
							</div>
						</form>
					</div>
				</nav>
			</div>
		</header>
	);
}

import React from "react";

export default function Footer() {
	return (
		<>
			<footer className="page-footer">
				<div className="container">
					<div className="row">
						<div className="col s12">
							<h5 className="white-text"></h5>
							<p className="grey-text text-lighten-4"></p>
						</div>
						<div className="col l4 offset-l2 s12">
							<h5 className="white-text"></h5>
						</div>
					</div>
				</div>
				<div className="footer-copyright">
					<a
						className="grey-text text-lighten-4 right"
						href="https://www.linkedin.com/in/guillermo-baker/"
					>
						Linkedin
					</a>
					<span className="t-copyright">© 2022 Guillermo Baker</span>
				</div>
			</footer>
		</>
	);
}

import React from "react";
import { useState, useEffect } from "react";
import { getRepos } from "../services/repos";
import M from "materialize-css";

export default function Repo({ userRepository }) {
	const [userRepo, setUserRepo] = useState([]);

	useEffect(() => {
		M.AutoInit();
	});

	useEffect(() => {
		(async () => {
			setUserRepo(await getRepos(userRepository));
		})();
	}, [userRepository]);

	return (
		<div>
			{userRepo.map((data) => {
				return (
					<ul className="collapsible" key={data.id}>
						<li>
							<div className="collapsible-header">
								<i className="material-icons">expand_more</i>
								<p>{data.name}</p>
							</div>
							<div className="collapsible-body">
								<a href={data.clone_url}>{data.description}</a>
							</div>
						</li>
					</ul>
				);
			})}
		</div>
	);
}

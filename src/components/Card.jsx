import React from "react";
import Repo from "../components/Repo";

//
export default function Card({ userName }) {
	return (
		<>
			{
				<main>
					{ userName ? (
						<div className="card col s12">
							<div className="card-image waves-effect waves-block waves-light">
								<img className="activator" src={userName.avatar_url} />
							</div>
							<div className="card-content">
								<span className="card-title activator grey-text text-darken-4">
									<i className="material-icons right"></i>
									{userName.login}
								</span>
								<span className="black-text">
									number of repos: {userName.public_repos}
								</span>
								<div className="black-text">
									followers: {userName.followers}
								</div>
							</div>
							<div className="card-reveal">
								<span className="card-title grey-text text-darken-4">
									{userName.name}
									<i className="material-icons right">close</i>
								</span>
								{/* Enviamos el nombre del repositorio al component Repo */}
								<Repo userRepository={userName.login} />
							</div>
						</div>
					) : (
						<div></div>
					)}
				</main>
			}
		</>
	);
}

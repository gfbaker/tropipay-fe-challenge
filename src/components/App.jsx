import { useState, useEffect } from "react";
import { getUsers } from "../services/Users";
import { getRepos } from "../services/repos";
import M from "materialize-css";

export default function App() {
	//hook para inicializar los componentes dinámicos de Materialize
	useEffect(() => {
		M.AutoInit();
	},);

	let [userSearch, setUserSearch] = useState("");
	let [userData, setUserData] = useState("");
	let [repoData, setRepoData] = useState([]);

	//guardamos la variable del search
	const inputHandler = (e) => {
		setUserSearch(e.target.value);
	};

	//funciones y llamadas que se ejecutan en el submit del form
	const submitHandler = async (e) => {
		e.preventDefault();
		const user = await getUsers(userSearch);
		setUserData(user);
		const repo = await getRepos(userSearch);
		setRepoData(repo);
		console.log(repo);
	};

	return (
		<>
			<header className="col s12">
					<div className="row col s12">
						<nav>
							<div className="nav-wrapper col s12">
								<form onSubmit={submitHandler}>
									<div className="input-field">
										<input
											id="search"
											type="search"
											required
											onChange={inputHandler}
										/>
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
			<main>
				{userData ? (
					<div className="card col s12">
						<div className="card-image waves-effect waves-block waves-light">
							<img className="activator" src={userData.avatar_url} />
						</div>
						<div className="card-content">
							<span className="card-title activator grey-text text-darken-4">
              <i className="material-icons right"></i>
								{/* <i className="small material-icons">person_outline</i> */}
								{userData.login}
							</span>
							<span className="black-text">
								{/* <i className="small material-icons">archive</i> */}
								number of repos: {userData.public_repos}
							</span>
							<div className="black-text">
								{/* <i className="small material-icons">person</i> */}
								followers: {userData.followers}
							</div>
						</div>
						<div className="card-reveal">
							<span className="card-title grey-text text-darken-4">
								{userData.name}
								<i className="material-icons right">close</i>
							</span>
							{repoData.map((repo) => {
								return (
									<ul className="collapsible" key={repo.id}>
										<li>
											<div className="collapsible-header">
												<i className="material-icons">expand_more</i>
												<p>{repo.name}</p>
											</div>
											<div className="collapsible-body">
												<a href={repo.clone_url}>{repo.description}</a>
											</div>
										</li>
									</ul>
								);
							})}
						</div>
					</div>
				) : (
					<div></div>
				)}
			</main>
		</>
	);
}

<<<<<<< HEAD
let [tree, setTree] = useState([]);
=======
# Codigo con el que intenté con Axios traer el contenido de API Github
>>>>>>> 00f1311b0ecceb40820fc33b9d929cf1652d7b53

let [tree, setTree] = useState([]);
let [fileNames, setFileNames] = useState([]);

async function start() {
try {
let res = await axios.get(
`https://api.github.com/repos/${userSearch}/mercadoLiebre/git/trees/master?recursive=1`
);
tree = tree.concat(res.data.tree);
while (tree.length !== 0) {
await getFilesNameRecur();
}
console.log(fileNames);
} catch (e) {
console.log(e);
}
}

async function getTreeFromGithub(url) {
try {
let response = await axios.get(url);
return response.data.tree;
} catch (e) {
console.log(e);
throw e;
}
}

async function getFilesNameRecur() {
let firstObjectOfTree = tree.pop();
if (firstObjectOfTree.type === "tree") {
let subTree = await getTreeFromGithub(firstObjectOfTree.url);
console.log(subTree)
tree = tree.concat(subTree);
} else if (firstObjectOfTree.type === "blob") {
fileNames.push(firstObjectOfTree.path);
}
}



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
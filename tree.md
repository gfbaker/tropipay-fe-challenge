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

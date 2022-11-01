import React from "react";
import { useState, useEffect } from "react";
import { getTree } from "../services/tree";

export default function Tree(userName) {
	const [data, setData] = useState([]);
	const [dataTree, setDataTree] = useState([])

	useEffect(() => {
		(async () => {
			setData(await getTree(userName.userName));
		})();
	}, []); 

	useEffect(() => {
		setDataTree(data.tree)
	}, [data])

	console.log(dataTree)

}     

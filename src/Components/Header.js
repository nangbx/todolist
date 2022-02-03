import React from "react";


const styles = {
    width: '100%',
    height: '100%'
}
const styleP = {
    color: '#ccc'
}
export default function Header() {


	return (
		<div>
			<img style={styles} src='./img/1.png' />
            <h1>Todolist</h1>
            <p style={styleP}>By: Nh3</p>
		</div>
	);
}

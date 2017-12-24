/*
{
	channel: 1
	creation_date: "2017-12-05T10:09:16.259Z"
	id: "d89e3c1c-54e8-4ae2-969f-e8f38dd8ec9b"
	message: "Rateau il va à la gare"
	username: "RIPOPERS"
}
*/
import React from 'react';
import UsernameDisplay from "./UsernameDisplay";

const getRandomColor = () => {
	return Math.floor(Math.random() * 255) + 1
}

const Accueil = (props) => {
	return (
		<header className="App-header">
			{/*<img src={logo} className="App-logo" alt="logo" />*/}
			<input
				onKeyPress={(e) => {
					if (e.key === "Enter") {
					}
				}}
				type='text'
				value={""}
				// onChange={(e) => }
			/>
			<button
				// onClick={() => {"yolo"}
				// }
			>
				Composents à tester
			</button>
		</header>
	);
}

export default Accueil;

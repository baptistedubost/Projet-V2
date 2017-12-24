
/*
	username
	message

*/

import React from 'react';

import UsernameDisplay from "./UsernameDisplay";

const FormMessenger = (props) => {
	const styleChild = {
		position: "absolute",
		top: "50%",
		width: "50%",
		transform: "translateX(50%)"
	}
	return (
		<div
			style={
				 {
				 	height: 150,
				 	width: "100%",
				 	position: "relative",
				 	backgroundColor: "transparent"
				 }
			 }
		>
			{
				!props.usernameValid ?
					<div style={styleChild}>
						<UsernameDisplay username={props.username} tagline="Votre usernname est"/>
						Ecrivez votre username
						<input
							onKeyPress={(e) => {
								if (e.key === "Enter") {
									props.onClickValidUserName();
								}
							}}
							type="text"
							value={props.username}
							onChange={props.onChangeUserName}
						/>
						<button
							onClick={props.onClickValidUserName}
						>
							Valider
						</button>
					</div>
				:
					<div style={styleChild}>
						<div>
							Channel :
							<input
								type="number"
								name="quantity"
								min="-10"
								max="10"
								value={ props.channel ? props.channel : 0 }
								onChange={props.onChangeChannel}
							/>
						</div>
						<UsernameDisplay username={props.username} tagline="Vous êtes "/>
						Ecrivez votre message
						<input
							onKeyPress={(e) => {
								if (e.key === "Enter") {
									props.onClickValidMessage();
								}
							}}
							type="text"
							value={props.message}
							onChange={props.onChangeMessage}
						/>
						<button
							onClick={props.onClickValidMessage}
						>
							Envoyer
						</button>
						<div>
							<button onClick={props.onClickDeconnexion}>
								Deconnexion
							</button>
						</div>
					</div>
			}
		</div>
	);
}

export default FormMessenger;

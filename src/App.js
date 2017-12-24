import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import FormMessenger from "./components/FormMessenger";

import { todos_add_todo, todos_remove_todo, todos_finish_todo, todos_edit_todo, count_increment, count_decrement, count_increment_achat, count_decrement_achat, zero_achat, all_zero_achat, prix_total} from "./services/todos/actions";

class App extends Component {

	state = {
		items: [],
		text:"",
		etatSupprimer: false,
		etatEdit: false,
		indexEdit: null,
		textEdit:"",
		storeNameValid: false,
		nomStore: "",
		prix: Number,
		prixEdit: Number,
		description: "",
		url_image: "",
		descriptionEdit: "",
		urlEdit: "",
		prixTotal: 0,
	}


	render() {
		return (
			<div className="App">
				<header className="App-header">

					<h1>
						<img src={logo} className="App-logo" alt="logo" />
						{this.state.nomStore}
					</h1>
					{
					!this.state.storeNameValid ?
						<input
							placeholder="Nom du magasin"
							onKeyPress={(e) => {
								if (e.key === "Enter") {
										this.setState({
											storeNameValid: true,
										})
								}
							}}
							type='text'
							value={this.state.nomStore}
							onChange={(e) => this.setState({ nomStore: e.target.value })}
						/>
					:
						null
					}
					{
					!this.state.storeNameValid ?
						<button
							onClick={() => {
											this.setState({
												storeNameValid: true,
											});
										}
							}
						>
							Ajouter le magasin
						</button>
					:
						null
					}
					<br/><br/>
				</header>
				<div>
				    <div id="colonne1">
				    <h2>Magasin :</h2>
				    <ul>
						{
							this.props.todos.items.map((item, index) => {
								return (
									<li
										key={item.id}
									>
											
									{item.text}      
									<br/>
									Prix : {item.prix}€      Quantité : {item.count}
									<br/>
									<img src={item.url_image} alt="" width="200" height="200"/>
									{item.description}
									<br/>
									{
									item.count>0 ?
										<button onClick={ () => {
															this.props.count_increment_achat({index: index})
															this.props.count_decrement({index: index})
															this.props.prix_total()
															this.setState({prixTotal: this.props.todos.prixTotal})
														}
													}	
												>
													{
														"Mettre dans le caddie"
													}
										</button>
									:
										null
									}
									<br/><br/>
									</li>
								)
							})
						}
					</ul>

				    </div>
					<div id="colonne2">
					<h2>Stock du magasin :</h2>
						{
						this.state.storeNameValid ?
							<input
								placeholder="Nom de l'article"
								// onKeyPress={(e) => {
								// 	if (e.key === "Enter") {
								// 			this.props.todos_add_todo({ text: this.state.text });
								// 			this.setState({
								// 				text: ""
								// 			})
								// 	}
								// }}
								type='text'
								value={this.state.text}
								onChange={(e) => this.setState({ text: e.target.value })}
							/>
						:
							null
						}
						<br/>
						{
						this.state.storeNameValid ?
							<input
								placeholder="Prix de l'article"
								// onKeyPress={(e) => {
								// 	if (e.key === "Enter") {
								// 			this.props.todos_add_todo_prix({ prix: this.state.prix });
								// 			this.setState({
								// 				prix: ""
								// 			})
								// 	}
								// }}
								type='Number'
								value={this.state.prix}
								onChange={(e) => this.setState({ prix: e.target.value })}
							/>
						:
							null
						}
						<br/>
						{
						this.state.storeNameValid ?
							<input
								placeholder="Description de l'article"
								// onKeyPress={(e) => {
								// 	if (e.key === "Enter") {
								// 			this.props.todos_add_todo_prix({ prix: this.state.prix });
								// 			this.setState({
								// 				prix: ""
								// 			})
								// 	}
								// }}
								type='text'
								value={this.state.description}
								onChange={(e) => this.setState({ description: e.target.value })}
							/>
						:
							null
						}
						<br/>
						{
						this.state.storeNameValid ?
							<input
								placeholder="URL de l'image"
								// onKeyPress={(e) => {
								// 	if (e.key === "Enter") {
								// 			this.props.todos_add_todo_prix({ prix: this.state.prix });
								// 			this.setState({
								// 				prix: ""
								// 			})
								// 	}
								// }}
								type='text'
								value={this.state.url_image}
								onChange={(e) => this.setState({ url_image: e.target.value })}
							/>
						:
							null
						}
						<br/>
						{
						this.state.storeNameValid ?
							<button
								onClick={() => {this.props.todos_add_todo({ text: this.state.text,
																			prix: this.state.prix,
																			description: this.state.description,
																			url_image: this.state.url_image
																		 });
												this.setState({
													text: "",
													prix: Number,
													description: "",
													url_image: "",
													storeNameValid: true,
												})}
								}
							>
								Ajouter
							</button>
						:
							null
						}
						<ul>
						{
							this.props.todos.items.map((item, index) => {
								return (
									<li
										key={item.id}
									>
										
											{item.text}      
											<br/>
											Prix : {item.prix}€      Quantité : {item.count}
											<br/>
											<img src={item.url_image} alt="" width="200" height="200"/>
											{item.description}
											<br/>
											<button onClick={ () =>
															this.props.todos_remove_todo({ index: index })
													}
												>
													{
															"Supprimer"
													}
											</button>
											{
											this.state.etatEdit && index==this.state.indexEdit ?
												<br/>
											:
												null
											}	
											{
												index==this.state.indexEdit && this.state.etatEdit ?
													<input //récupère la valeur entré au clavier
														onKeyPress={(e) => {
															if (e.key === "Enter") {
																this.props.todos_edit_todo({
																				index: index,
																				text: this.state.textEdit 
																			})
																this.setState({
																	etatEdit: false, 
																	indexEdit: null,
																	})
																console.log("EDITION VALIDEE !!!")
															}
														}}
														type="text"
														value={this.state.textEdit}
														onChange={e => {
															this.setState({textEdit: e.target.value //mets cette variable à jour dans le state
															})
														}}
													/>
												:
													null
											}
											{
											this.state.etatEdit && index==this.state.indexEdit ?
												<br/>
											:
												null
											}	
											{
											this.state.etatEdit && index==this.state.indexEdit ?
												<input
													placeholder="Prix de l'article"
													// onKeyPress={(e) => {
													// 	if (e.key === "Enter") {
													// 			this.props.todos_add_todo_prix({ prix: this.state.prix });
													// 			this.setState({
													// 				prix: ""
													// 			})
													// 	}
													// }}
													type='Number'
													value={this.state.prixEdit}
													onChange={(e) => this.setState({ prixEdit: e.target.value })}
												/>
											:
												null
											}
											{
											this.state.etatEdit && index==this.state.indexEdit ?
												<br/>
											:
												null
											}	
											{
											this.state.etatEdit && index==this.state.indexEdit ?

												<input
													placeholder="Description de l'article"
													// onKeyPress={(e) => {
													// 	if (e.key === "Enter") {
													// 			this.props.todos_add_todo_prix({ prix: this.state.prix });
													// 			this.setState({
													// 				prix: ""
													// 			})
													// 	}
													// }}
													type='text'
													value={this.state.descriptionEdit}
													onChange={(e) => this.setState({ descriptionEdit: e.target.value })}
												/>
											:
												null
											}
											{
											this.state.etatEdit && index==this.state.indexEdit ?
												<br/>
											:
												null
											}	
											{
											this.state.etatEdit && index==this.state.indexEdit ?
												
												<input
													placeholder="URL de l'image"
													// onKeyPress={(e) => {
													// 	if (e.key === "Enter") {
													// 			this.props.todos_add_todo_prix({ prix: this.state.prix });
													// 			this.setState({
													// 				prix: ""
													// 			})
													// 	}
													// }}
													type='text'
													value={this.state.urlEdit}
													onChange={(e) => this.setState({ urlEdit: e.target.value })}
												/>
											:
												null
											}
											<br/>
											{
											this.state.etatEdit && index==this.state.indexEdit?
													null
												:
													<button onClick={ () => 
														this.setState({
															etatEdit: true,
															indexEdit: index,
															textEdit: item.text,
															prixEdit: item.prix,
															descriptionEdit: item.description,
															urlEdit: item.url_image
															})				
														}
													>
														{
															"Editer"
														}
													</button>
											}

											{
												index==this.state.indexEdit && this.state.etatEdit ?
													<button onClick={ () => {
														this.props.todos_edit_todo({
																					index: index,
																					text: this.state.textEdit,
																					prix: this.state.prixEdit,
																					description: this.state.descriptionEdit,
																					url_image: this.state.urlEdit,
																				})
														
														this.setState({
															etatEdit: false, 
															indexEdit: null,
															})
														console.log("EDITION VALIDEE !!!")
														}
														}
													>
														{
															"Valider l'édition"
														}
													</button>
												:
													console.log("Edition non valider !!!!")
											}
											{
												index==this.state.indexEdit && this.state.etatEdit ?
													<button onClick={ () => {
															this.setState({
																etatEdit: false,
																indexEdit: null,
																})
															}
														}	
													>
														{
															"Annuler l'éditiion"
														}
													</button>
												:
													null
											}
											<button onClick={ () => {
														this.props.count_increment({index: index})
													}
												}	
											>
												{
													"+"
												}
											</button>
											<button onClick={ () => {
														this.props.count_decrement({index: index})
													}
												}	
											>
												{
													"-"
												}
											</button>
											<br/><br/>
											{
											console.log("Etat edit : ", this.state.etatEdit, "Index edit : ", this.state.indexEdit)
											}
									</li>
								)
							})
						}
					</ul>
					</div>
					<div id="centre">
						<h2>Caddie :</h2>
						<ul>
						{
							this.props.todos.items.map((item, index) => {
									return (
										item.acheter > 0 ?
											<li
												key={item.id}
											>
													
											{item.text}      
											<br/>
											Prix : {item.prix*item.acheter}€      Quantité : {item.acheter}
											<br/>
											{item.description}
											<br/>
											<button onClick={ () => {
																this.props.count_increment({index: index})
																this.props.count_decrement_achat({index: index})
																this.props.prix_total()
																this.setState({prixTotal: this.props.todos.prixTotal})
															}
														}	
													>
														{
															"Retirer un du caddie"
														}
											</button>
											<button onClick={ () => {
																this.props.zero_achat({index: index})
															}
														}	
													>
														{
															"Acheter"
														}
											</button>
											<br/><br/>
											</li>
										:
											null
									)
							})
						}
					</ul>
						{// <h4>Prix total : {this.state.prixTotal}</h4>
						}
						<button onClick={ () => {
											this.props.all_zero_achat()
											this.setState({
												items: this.props.todos.items
											})
										}
									}	
								>
									{
										"Tout acheter"
									}
						</button>
					</div>
				</div>
			</div>
			
		);
	}

}


const mapStateToProps = (state) => ({
	todos: state.todos,
});


const mapActionsToProps = (dispatch) => ({
	todos_add_todo: bindActionCreators(todos_add_todo, dispatch),
	todos_remove_todo: bindActionCreators(todos_remove_todo, dispatch),
	todos_finish_todo: bindActionCreators(todos_finish_todo, dispatch),
	todos_edit_todo: bindActionCreators(todos_edit_todo, dispatch),
	count_increment: bindActionCreators(count_increment, dispatch),
	count_decrement: bindActionCreators(count_decrement, dispatch),
	count_increment_achat: bindActionCreators(count_increment_achat, dispatch),
	count_decrement_achat: bindActionCreators(count_decrement_achat, dispatch),
	zero_achat: bindActionCreators(zero_achat, dispatch),
	all_zero_achat: bindActionCreators(all_zero_achat, dispatch),
	prix_total: bindActionCreators(prix_total, dispatch),

});


export default connect(mapStateToProps, mapActionsToProps)( App );

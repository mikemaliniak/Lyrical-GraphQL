import React, { Component } from "react";

class SongCreate extends Component {
	constructor(props) {
		super(props);
		this.state = { title: "" };

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	}

	render() {
		return (
			<div>
				<h3>Create a new Song</h3>
				<form action="">
					<label htmlFor="Song Title">Song Title:</label>
					<input
						type="text"
						name="title"
						onChange={this.handleInputChange}
						value={this.state.title}
					/>
				</form>
			</div>
		);
	}
}

export default SongCreate;

import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import { hashHistory } from "react-router";
import query from "../queries/fetchSongs";

class SongCreate extends Component {
	constructor(props) {
		super(props);
		this.state = { title: "" };

		this.handleInputChange = this.handleInputChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	}

	onSubmit(e) {
		e.preventDefault();
		this.props
			.mutate({
				variables: {
					title: this.state.title,
				},
				refetchQueries: [{ query }],
			})
			.then(() => hashHistory.push("/"));
	}

	render() {
		return (
			<div className="container">
				<Link to="/">Home</Link>
				<h3>Create a new Song</h3>
				<form onSubmit={this.onSubmit}>
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

const mutation = gql`
	mutation AddSong($title: String) {
		addSong(title: $title) {
			title
		}
	}
`;

export default graphql(mutation)(SongCreate);

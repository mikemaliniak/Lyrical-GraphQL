import React, { Component } from "react";
import { graphql } from "react-apollo";
import fetchSong from "../queries/fetchSong";
import { Link } from "react-router";

class SongDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { song } = this.props.data;
		if (!song) return <div>Loading...</div>;
		return (
			<div className="container">
				<Link to="/">Back</Link>
				<h3>{song.title}</h3>
			</div>
		);
	}
}

export default graphql(fetchSong, {
	options: (props) => {
		return {
			variables: {
				id: props.params.id,
			},
		};
	},
})(SongDetail);

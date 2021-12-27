import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			songs: [
				{ title: "Smells Like Teen Spirit" },
				{ title: "In Bloom" },
				{ title: "Come as you are" },
				{ title: "Breed" },
				{ title: "Lithium" },
			],
		};
	}
	renderSongs() {
		const { songs } = this.props.data;
		if (!songs) return null;
		return songs.map((song) => (
			<li className="collection-item" key={song.id}>
				{song.title}
			</li>
		));
	}
	render() {
		const { loading } = this.props.data;
		if (loading) return <div>Loading...</div>;
		return <ul className="collection">{this.renderSongs()}</ul>;
	}
}

const query = gql`
	{
		songs {
			title
			id
		}
	}
`;

export default graphql(query)(SongList);

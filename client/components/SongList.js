import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import query from "../queries/fetchSongs";
import gql from "graphql-tag";

class SongList extends Component {
	onSongDelete(id) {
		this.props
			.mutate({
				variables: { id },
			})
			.then(() => this.props.data.refetch());
	}
	renderSongs() {
		const { songs } = this.props.data;
		if (!songs) return null;
		return songs.map(({ title, id }) => (
			<li className="collection-item" key={id}>
				<Link to={`/songs/${id}`}>{title}</Link>
				<i
					className="material-icons"
					onClick={() => this.onSongDelete(id)}
				>
					delete
				</i>
			</li>
		));
	}
	render() {
		const { loading } = this.props.data;
		if (loading) return <div>Loading...</div>;
		return (
			<div>
				<ul className="collection">{this.renderSongs()}</ul>
				<Link
					to="/songs/new"
					className="btn-floating btn-large red right"
				>
					<i className="material-icons">add</i>
				</Link>
			</div>
		);
	}
}

const mutation = gql`
	mutation DeleteSong($id: ID) {
		deleteSong(id: $id) {
			id
		}
	}
`;

export default graphql(mutation)(graphql(query)(SongList));

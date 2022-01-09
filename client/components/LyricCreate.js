import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class LyricCreate extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			content: "",
		};
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props
			.mutate({
				variables: {
					content: this.state.content,
					songId: this.props.songId,
				},
			})
			.then(() => this.setState({ content: "" }));
	}
	render() {
		return (
			<form onSubmit={(e) => this.handleSubmit(e)}>
				<label>Add a Lyric</label>
				<input
					type="text"
					name="content"
					value={this.state.content}
					onChange={(e) => this.handleChange(e)}
				/>
			</form>
		);
	}
}

const mutation = gql`
	mutation AddLyricToSong($content: String, $songId: ID) {
		addLyricToSong(content: $content, songId: $songId) {
			id
			lyrics {
				id
				content
				likes
			}
		}
	}
`;

export default graphql(mutation)(LyricCreate);

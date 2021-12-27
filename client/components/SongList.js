import React, { Component } from "react";

class SongList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			songs: [
				{ title: "Smells Like Teen Spirit" },
				{ title: "In Bloom" },
				{ title: "Come as you are" },
				{ title: "Breed" },
			],
		};
	}
	render() {
		console.log(this.props);
		const { songs } = this.state;
		return (
			<div>
				{songs.map((song) => (
					<div key={song.title}>{song.title}</div>
				))}
			</div>
		);
	}
}

export default SongList;

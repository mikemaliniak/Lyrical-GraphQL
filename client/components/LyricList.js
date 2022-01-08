import React, { Component } from "react";

class LyricList extends React.Component {
	renderLyrics() {
		const { lyrics } = this.props;

		if (!lyrics) return null;

		return lyrics.map(({ id, content }) => (
			<li key={id} className="collection-item">
				{content}
			</li>
		));
	}
	render() {
		return <ul className="collection">{this.renderLyrics()}</ul>;
	}
}

export default LyricList;

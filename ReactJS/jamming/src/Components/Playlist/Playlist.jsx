import React, { Component } from "react";
import TrackList from "../TrackList/TrackList.jsx";
import "./Playlist.css";

export class Playlist extends Component {
  handleNameChange = event => {
    this.props.onNameChange(event.target.value);
    console.log(event.target.value);
  };

  render() {
    return (
      <div className="Playlist">
        <input onChange={this.handleNameChange} defaultValue={"New Playlist"} />
        <TrackList
          onRemove={this.props.onRemove}
          isRemoval={true}
          tracks={this.props.playlistTracks}
        />
        <button onClick={this.props.onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;

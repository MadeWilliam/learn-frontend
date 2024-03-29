import React, { Component } from "react";
import "./TrackList.css";
import Track from "../Track/Track.jsx";

class TrackList extends Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map(track => {
          return <Track onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} onAdd={this.props.onAdd} track={track} key={track.id} />;
        })}
      </div>
    );
  }
}

export default TrackList;

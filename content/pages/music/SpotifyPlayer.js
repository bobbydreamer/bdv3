/**
 * Spotify player iframe widget
 *
 * @author Alexander Wallin <office@alexanderwallin.com>
 * @see https://developer.spotify.com/technologies/widgets/spotify-play-button/
 */

import React, { Component } from "react"

// Size presets, defined by Spotify
const sizePresets = {
  large: {
    width: 300,
    height: 380,
  },
  compact: {
    width: 300,
    height: 80,
  },
}

/**
 * SpotifyPlayer class
 */
class SpotifyPlayer extends Component {
  // ------------------------------------------------------
  // Render
  // ------------------------------------------------------

  render() {
    // const { uri, view, theme } = this.props
    const { uri } = this.props
    let { size } = this.props

    if (typeof size === `string`) {
      size = sizePresets[size]
    }

    return (
/*
      <iframe title="Spotify" 
              src="https://open.spotify.com/embed/playlist/0sz2J5ZVROxMv3ZkVMTKuw?si=Tg-Dup3iQ7ivdIGo1R5fAQ" 
              width="300" height="380" frameborder="0" allowtransparency="true" 
              allow="encrypted-media">
      </iframe>      
*/
      <iframe title="Spotify" 
      src={uri} 
      width="300" height="380" frameborder="0" allowtransparency="true" 
      allow="encrypted-media">
      </iframe>      

    )
  }
}

export default SpotifyPlayer

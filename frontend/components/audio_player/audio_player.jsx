import React from 'react'
import ReactHowler from 'react-howler'

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);


  }

  getHowler () {
    this.player.howler
  }

  getDuration () {
    this.player.duration()
  }

  getSeek () {
    this.player.seek()
  }

  setSeek () {
    this.player.seek(0.5)
  }


  render () {
    return (
      <ReactHowler
        
      />
    )
  }
}

export default AudioPlayer;


/*
Props that


prop	      default	  description
src		                The sources to the track(s) to be loaded for the sound (URLs or base64 data URIs). These should be in order of preference, howler.js will automatically load the first one that is compatible with the current browser. If your files have no extensions, you will need to explicitly specify the extension using the format property.
                      Updating the src prop on the fly will destroy any currently playing howler instance and create a new one with the new src. Updating other props while keeping the src the same will maintain the current howler instance.
preload	    true	    Automatically begin downloading the audio file when the react-howler is initiated.
playing	    true	    Set to true or false to pause or play the media.
                      Setting to true on initial load will play the audio immediately after it is loaded
loop	      false	    Set to true or false to enable/disable loop
mute	      false	    Set to true or false to mute/unmute current audio
volume	    1.0	      The volume of the specific howl, from 0.0 to 1.0
html5	      false	    Set to true to force HTML5 Audio. This should be used for large audio files so that you don't have to wait for the full file to be downloaded and decoded before playing.
format	    []	      howler.js automatically detects your file format from the extension, but you may also specify a format in situations where extraction won't work (such as with a SoundCloud stream).
onPlay	    noop	    Called when audio starts or resumes playing
onPause	    noop	    Called when audio is paused
onVolume	  noop	    Called when volume is changed
onStop	    noop	    Called when audio is stopped
onLoad	    noop	    Called when audio is loaded (buffered)
onLoadError	noop	    Called when an error occurs whilst attempting to load media
onEnd	      noop	    Called when media finishes playing

*/

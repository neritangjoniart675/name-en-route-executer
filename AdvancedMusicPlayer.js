/* 
Filename: AdvancedMusicPlayer.js
Content: An advanced music player that allows users to manage a playlist, play, pause, skip tracks, and adjust volume.
*/

class MusicPlayer {
  constructor(playlist) {
    this.playlist = playlist;
    this.currentTrackIndex = 0;
    this.isPlaying = false;
    this.volume = 50;
  }

  play() {
    this.isPlaying = true;
    console.log(`Playing: ${this.playlist[this.currentTrackIndex]}`);
  }

  pause() {
    this.isPlaying = false;
    console.log(`Paused: ${this.playlist[this.currentTrackIndex]}`);
  }

  nextTrack() {
    if (this.currentTrackIndex === this.playlist.length - 1) {
      this.currentTrackIndex = 0;
    } else {
      this.currentTrackIndex++;
    }

    if (this.isPlaying) {
      console.log(`Playing: ${this.playlist[this.currentTrackIndex]}`);
    } else {
      console.log(`Next track: ${this.playlist[this.currentTrackIndex]}`);
    }
  }

  previousTrack() {
    if (this.currentTrackIndex === 0) {
      this.currentTrackIndex = this.playlist.length - 1;
    } else {
      this.currentTrackIndex--;
    }

    if (this.isPlaying) {
      console.log(`Playing: ${this.playlist[this.currentTrackIndex]}`);
    } else {
      console.log(`Previous track: ${this.playlist[this.currentTrackIndex]}`);
    }
  }

  setVolume(volume) {
    this.volume = volume;
    console.log(`Volume set to: ${this.volume}`);
  }
}

// Example usage
const myPlaylist = ["Song 1", "Song 2", "Song 3", "Song 4", "Song 5"];
const myMusicPlayer = new MusicPlayer(myPlaylist);

myMusicPlayer.play(); // Output: Playing: Song 1

myMusicPlayer.nextTrack(); // Output: Playing: Song 2

myMusicPlayer.pause(); // Output: Paused: Song 2

myMusicPlayer.setVolume(80); // Output: Volume set to: 80

myMusicPlayer.previousTrack(); // Output: Playing: Song 1
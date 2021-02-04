import { useState, useRef } from 'react';
import Data from './utils/data';
import Player from './components/player';
import Library from './components/library';
import SongPlay from './components/songPlay';
import Nav from './components/nav';

const App = () => {
  const [songs, setSongs] = useState(Data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({ currentTime: 0, duration: 0 });
  const audioRef = useRef();
  const [libraryStatus, setLibraryStatus] = useState(false);

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({ currentTime, duration });
  };

  const songEndHandler = async () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    let newIndex = (currentIndex + 1) % songs.length;

    await setCurrentSong(songs[newIndex]);
    if (isPlaying) audioRef.current.play();
  };

  return (
    <main
      className={`transition-all duration-300 ease-in overflow-x-hidden ${
        libraryStatus ? 'library-active' : ''
      }`}
    >
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <SongPlay currentSong={currentSong} isPlaying={isPlaying} />
      <Player
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
      />

      <Library
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        currentSong={currentSong}
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </main>
  );
};

export default App;

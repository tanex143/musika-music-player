import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStepForward,
  faStepBackward,
  faPlay,
  faPause,
} from '@fortawesome/free-solid-svg-icons';
import { Slider } from 'antd';

const Player = ({
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  songs,
}) => {
  const playSongHandler = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();

    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e;
    setSongInfo({ ...songInfo, currentTime: e });
  };

  const trackHandler = async (direction) => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    let newIndex = currentIndex + direction;

    if (newIndex < 0) {
      newIndex = songs.length - 1;
    } else if (newIndex >= songs.length) {
      newIndex = 0;
    }

    await setCurrentSong(songs[newIndex]);

    if (isPlaying) audioRef.current.play();
  };

  return (
    <>
      <div className='flex ww-50 md:ww-45 mx-auto transition-all duration-300 ease-in'>
        <h1 className='m-1'>{formatTime(songInfo.currentTime)}</h1>
        <Slider
          className='w-full cursor-pointer'
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragHandler}
        />
        <h1 className='m-1'>
          {songInfo.duration ? formatTime(songInfo.duration) : '0:00'}
        </h1>
      </div>
      <div className='flex justify-around sm:max-w-md max-w-xs mx-auto mt-10 transition-all duration-300 ease-in'>
        <FontAwesomeIcon
          icon={faStepBackward}
          className='m-1 cursor-pointer text-xl sm:text-2xl lg:text-4xl'
          onClick={() => trackHandler(-1)}
        />
        <FontAwesomeIcon
          icon={isPlaying ? faPause : faPlay}
          className='m-1 cursor-pointer text-2xl sm:text-3xl lg:text-5xl'
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          icon={faStepForward}
          size='2x'
          className='m-1 cursor-pointer text-xl sm:text-2xl lg:text-4xl'
          onClick={() => trackHandler(1)}
        />
      </div>
    </>
  );
};

export default Player;

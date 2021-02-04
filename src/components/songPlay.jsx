const SongPlay = ({ currentSong, isPlaying }) => {
  return (
    <>
      <div
        className={
          'relative min-h-60 flex flex-col items-center transition-all duration-300 ease-in'
        }
      >
        <img
          src={currentSong.cover}
          alt='cover'
          className={`rounded-full md:w-75 xs:w-75 pt-5 opacity-75 w-70 transition-all duration-300 ease-in ${
            isPlaying ? 'animation-on' : ''
          }`}
        />
        <h1 className='md:text-2xl text-xl font-bold pt-8 pb-3'>
          {currentSong.title}
        </h1>
        <h1 className='md:text-lg'>{currentSong.artist}</h1>
      </div>
    </>
  );
};

export default SongPlay;

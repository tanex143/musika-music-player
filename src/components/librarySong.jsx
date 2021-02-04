const LibrarySong = ({
  song,
  songs,
  currentSong,
  setCurrentSong,
  audioRef,
  isPlaying,
}) => {
  const songSelectHandler = async () => {
    const selectedSong = songs.filter((eachSong) => eachSong.id === song.id);
    await setCurrentSong(selectedSong[0]);
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  };

  return (
    <>
      <div
        className={`flex px-3 py-2 hover:bg-gray-200 transition-all duration-300 ease-in cursor-pointer ${
          song === currentSong ? 'bg-bluesh' : ''
        }`}
        onClick={songSelectHandler}
      >
        <div>
          <img src={song.cover} alt='cover' className='w-16 rounded' />
        </div>
        <div className='ml-2'>
          <h1 className='font-bold -mb-1'>{song.title}</h1>
          <h1>{song.artist}</h1>
        </div>
      </div>
    </>
  );
};

export default LibrarySong;

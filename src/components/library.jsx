import LibrarySong from './librarySong';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input } from 'antd';
import { useState } from 'react';
import Data from './../utils/data';

const Library = ({
  songs,
  setSongs,
  setCurrentSong,
  audioRef,
  isPlaying,
  currentSong,
  libraryStatus,
}) => {
  const [text, setText] = useState('');

  const searchItemHandler = (e) => {
    e.preventDefault();

    const searching = songs.filter((song) =>
      song.title.toLowerCase().includes(text.toLowerCase())
    );

    setSongs(searching);
  };

  const changingSearchHandler = (e) => {
    if (text) {
      setSongs(Data());
    }

    setText(e.target.value);
  };
  return (
    <nav
      className={`absolute left-0 top-0 overflow-y-scroll sm:w-70 w-full h-full flex flex-col bg-white ${
        libraryStatus ? 'shadow-high' : ''
      } rounded-lg transition-all duration-300 ease-linear ${
        libraryStatus ? '' : 'transform -translate-x-full'
      } ${libraryStatus ? 'opacity-100' : 'opacity-0'}`}
    >
      <h1 className='p-3 text-2xl font-semibold'>Music List</h1>
      <div className='py-3 border-b-2 px-3'>
        <form className='relative' onSubmit={searchItemHandler}>
          <Input
            placeholder='search . . .'
            className='border-gray-700 rounded py-1'
            onChange={changingSearchHandler}
            value={text}
          />
          <button className='absolute top-0 right-0 focus:outline-none py-1 px-3 bg-gray-300 border border-gray-700 rounded'>
            <FontAwesomeIcon icon={faSearch} className='text-lg' />
          </button>
        </form>
      </div>

      {songs.map((song) => (
        <LibrarySong
          key={song.id}
          song={song}
          songs={songs}
          setCurrentSong={setCurrentSong}
          audioRef={audioRef}
          isPlaying={isPlaying}
          currentSong={currentSong}
        />
      ))}
    </nav>
  );
};

export default Library;

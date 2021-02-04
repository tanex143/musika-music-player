import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <div className='container mx-auto flex justify-around sm:py-5 py-3 transition-all duration-300 ease-in'>
      <h1 className='sm:text-4xl text-3xl font-bold font-satisfy tracking-widest'>
        Musika
      </h1>
      <div>
        <button
          onClick={() => setLibraryStatus(!libraryStatus)}
          className='relative z-10 font-semibold border-2 py-1 px-2 border-black hover:bg-gray-700 hover:text-white focus:outline-none transition-all duration-300 ease-in'
        >
          Library <FontAwesomeIcon icon={faMusic} />
        </button>
      </div>
    </div>
  );
};

export default Nav;

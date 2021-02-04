import { v4 as uuidv4 } from 'uuid';
import bestInMeCover from './images/blue.jpg';
import ifYoureNotTheOneCover from './images/bedingfield.jpg';
import onlyLoveCover from './images/trademark.jpg';
import trulyMadlyDeeplyCover from './images/savage_garden.jpg';
import shaneFilanCover from './images/shane_filan.jpg';
import a1Cover from './images/a1.jpg';
import edwinMcCainCover from './images/edwin_mccain.jpg';
import all4OneCover from './images/all_4_one.jpg';
import ronanKeatingCover from './images/ronan_keating.jpg';
import joeyMcIntyreCover from './images/joey_mcintyre.jpg';
import mariahCareyCover from './images/mariah_carey.jpg';
import boyzoneCover from './images/boyzone.jpg';
import shainaTwainCover from './images/shaina_twain.jpeg';
//////////////////////////////////////////////////////////
import ifYoureNotTheOne from './music/If_Youre_Not_The_One.mp3';
import onlyLove from './music/Only_Love.mp3';
import trulyMadlyDeeply from './music/Truly_Madly_Deeply.mp3';
import bestInMe from './music/Best_In_Me.mp3';
import beautifulInWhite from './music/Beautiful_In_White.mp3';
import heavenByYourside from './music/Heaven_by_Yourside.mp3';
import iCouldNotAskForMore from './music/I_Could_Not_Ask_For_More.mp3';
import iSwear from './music/I_Swear.mp3';
import ifTomorrowNeverComes from './music/If_Tomorrow_Never_Comes.mp3';
import stayTheSame from './music/Stay_The_Same.mp3';
import thankGodIFoundYou from './music/Thank_God_I_Found_You.mp3';
import words from './music/Words.mp3';
import youreStillTheOne from './music/Youre_Still_The_One.mp3';

const Data = () => {
  return [
    {
      id: uuidv4(),
      title: 'Best In Me',
      cover: `${bestInMeCover}`,
      artist: 'Blue',
      audio: `${bestInMe}`,
    },
    {
      id: uuidv4(),
      title: "If You're not the one",
      cover: `${ifYoureNotTheOneCover}`,
      artist: 'Daniel Bedingfield',
      audio: `${ifYoureNotTheOne}`,
    },
    {
      id: uuidv4(),
      title: 'Only Love',
      cover: `${onlyLoveCover}`,
      artist: 'Trade Mark',
      audio: `${onlyLove}`,
    },
    {
      id: uuidv4(),
      title: 'Truly Madly Deeply',
      cover: `${trulyMadlyDeeplyCover}`,
      artist: 'Savage Garden',
      audio: `${trulyMadlyDeeply}`,
    },
    {
      id: uuidv4(),
      title: 'Beautiful in White',
      cover: `${shaneFilanCover}`,
      artist: 'Shane Filan',
      audio: `${beautifulInWhite}`,
    },
    {
      id: uuidv4(),
      title: 'Heaven by Your Side',
      cover: `${a1Cover}`,
      artist: 'A1',
      audio: `${heavenByYourside}`,
    },
    {
      id: uuidv4(),
      title: 'I Could Not Ask For More',
      cover: `${edwinMcCainCover}`,
      artist: 'Edwin McCain',
      audio: `${iCouldNotAskForMore}`,
    },
    {
      id: uuidv4(),
      title: 'I Swear',
      cover: `${all4OneCover}`,
      artist: 'All 4 One',
      audio: `${iSwear}`,
    },
    {
      id: uuidv4(),
      title: 'If Tomorrow Never Comes',
      cover: `${ronanKeatingCover}`,
      artist: 'Ronan Keating',
      audio: `${ifTomorrowNeverComes}`,
    },
    {
      id: uuidv4(),
      title: 'Stay The Same',
      cover: `${joeyMcIntyreCover}`,
      artist: 'Joey McIntyre',
      audio: `${stayTheSame}`,
    },
    {
      id: uuidv4(),
      title: 'Thank God I Found You',
      cover: `${mariahCareyCover}`,
      artist: 'Mariah Carey',
      audio: `${thankGodIFoundYou}`,
    },
    {
      id: uuidv4(),
      title: 'Words',
      cover: `${boyzoneCover}`,
      artist: 'Boyzone',
      audio: `${words}`,
    },
    {
      id: uuidv4(),
      title: "You're Still The One",
      cover: `${shainaTwainCover}`,
      artist: 'Shaina Twain',
      audio: `${youreStillTheOne}`,
    },
  ];
};

export default Data;

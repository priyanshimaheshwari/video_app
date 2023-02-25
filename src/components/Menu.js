import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import MovieIcon from '@mui/icons-material/Movie';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FeedIcon from '@mui/icons-material/Feed';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import HelpIcon from '@mui/icons-material/Help';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Menu = ({darkMode,setDarkMode}) => {
  return (
    <div className='flex w-[320px] bg-${({theme})=>theme.bg}; text-${({theme})=>theme.text}; h-[703px] sticky top-0'><div className='pb-[10px]  pl-[26px] pr-[26px] '><div className=' '><div className='flex items-center font-bold'><img className='h-30 w-20' src='https://wallpaperaccess.com/full/2404616.jpg'/>LamaTube</div>
    <div className='flex items-center cursor-pointer pl-6 gap-5 pb-2'><HomeIcon />Home</div>
    <div className='flex items-center cursor-pointer pl-6 gap-5 pb-2'><ExploreIcon />Explore</div>
    <div className='flex items-center cursor-pointer pl-6 gap-5 pb-2'><SubscriptionsIcon />Subscription</div><div className='mb-[8px]   border-${({theme})=>theme.soft}  border-2'></div>
    <div className='mb-[15px]  border-solid border-${({theme})=>theme.soft}'>
    <div className='flex items-center cursor-pointer pl-6 gap-5 pb-2'><VideoLibraryIcon />Library</div>
    <div className='flex items-center cursor-pointer pl-6 gap-5 pb-2'><HistoryIcon />History</div>
    <div className='mb-[8px]   border-${({theme})=>theme.soft}  border-2'></div>
    <div className='flex flex-col pl-8 pr-4 '>Sign in to like videos, comment, and subscribe.
      <button className='border-blue-900 text-blue-900 bg-transparent border-solid border-2 '><AccountCircleIcon />SIGN IN</button></div><div className='mb-[8px]   border-${({theme})=>theme.soft}  border-2'></div><div className='pl-6 pb-2'>BEST OF LAMATUBE</div>
    <div className='flex items-center cursor-pointer pl-6 gap-5 pb-2'><LibraryMusicIcon />Music</div>
    <div className='flex items-center cursor-pointer pl-6 gap-5 pb-2'><SportsBasketballIcon />Sports</div>
    <div className='flex items-center cursor-pointer pl-6 gap-5 pb-2'><SportsEsportsIcon />Gaming</div>
    <div className='flex items-center cursor-pointer pl-6 gap-5 pb-2'><MovieIcon />Movies</div>
    <div className='flex items-center cursor-pointer pl-6 gap-5 pb-2'><FeedIcon />News</div>
    <div className='flex items-center cursor-pointer pl-6 gap-5 pb-1'><LiveTvIcon />Live</div></div><div className='mb-[8px]   border-${({theme})=>theme.soft}'></div>
    <div className='flex items-center cursor-pointer pl-6 gap-5 pb-2'><SettingsIcon />Settings</div>
    <div className='flex items-center cursor-pointer pl-6 gap-5 pb-2'><FlagCircleIcon />Report</div>
    <div className='flex items-center cursor-pointer pl-6 gap-5 pb-2'><HelpIcon />Help</div>
    <div onClick={()=>setDarkMode(!darkMode)} className='flex items-center cursor-pointer pl-6 gap-5 pb-2'><LightModeIcon />LightMode</div>
    
    </div></div></div>
    
  )
}

export default Menu
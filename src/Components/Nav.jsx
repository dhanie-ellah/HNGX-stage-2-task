import React from 'react'
import Logo from '../Assets/Logo (2).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <div className=' flex justify-between items-center'>
      <img src={Logo} alt="MovieBox Logo" className=' md:w-[25%]' />

      <form className=' bg-transparent border rounded-md p-[0.45rem] px-[2rem] w-[50%] flex items-center justify-between md:p-[0.25rem] md:px-[1rem]'>
        <input
          type="search"
          name="searchBar"
          id="searchBar"
          placeholder="What do you want to watch?"
          className=' bg-transparent placeholder:text-white placeholder:text-sm w-full focus:outline-none text-white'
        />
        <FontAwesomeIcon icon={faSearch} className=' text-white text-xs'/>
      </form>

      <div className=' flex items-center gap-[0.5rem]'>
        <p className=' text-white text-sm md:hidden'>Sign in</p>
        <FontAwesomeIcon icon={faBars} className=' bg-rose rounded-full text-white p-[0.5rem] md:text-xs'/>
      </div>
    </div>
  );
}

export default Nav
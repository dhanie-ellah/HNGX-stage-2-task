import React from 'react'
import Nav from './Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import IMDb from '../Assets/IMDb.png'
import Fruit from '../Assets/fruit.png'

const Header = () => {
  return (
    <div className=" bg-[url(./Assets/poster.png)] px-[3rem] py-[1rem] md:px-[1rem]">
      <Nav />
      <section className=' w-[27%] py-[5rem] flex flex-col gap-[1rem] md:w-[100%] md:py-[1rem] md:gap-2'>
        <h1 className=' text-white text-5xl font-bold md:text-2xl md:text-center'>John Wick 3 : Parabellum</h1>

        <div className=' flex gap-[1rem] md:justify-center md:gap-2'>
          <div className=' flex gap-[0.5rem]'>
            <img src={IMDb} alt="" />
            <p className=' text-white text-sm md:text-xs'>86.0/100</p>
          </div>
          <div className=' flex gap-[0.5rem]'>
            <img src={Fruit} alt="" />
            <p className=' text-white text-sm md:text-xs'> 97% </p>
          </div>
        </div>

        <p className=' text-white md:text-center md:text-xs'>
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
        <button className=' bg-rose text-white py-[6px] px-[16px] rounded-md w-fit md:m-auto md:text-xs'> <FontAwesomeIcon icon={faPlayCircle}/> Watch trailer</button>
      </section>
    </div>
  );
}

export default Header
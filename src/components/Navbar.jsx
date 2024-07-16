import React, { useState } from 'react'
import burger from '/images/icon-hamburger.svg'
export const Navbar = () => {
    const [menuClicked, setMenuClicked] = useState(false)

    const handleClick = () => {
        setMenuClicked(!menuClicked)
    }
    return (
        <nav className='font-Barlow'>
            <ul className={`${menuClicked ? 'flex' : 'hidden'} bg-white py-[39px] w-[329px] h-[305px] absolute left-0 right-0 mx-auto top-[106px] flex-col items-center place-content-between 
            
            after:content-[""] after:absolute after:top-[-24px] after:right-0 after:border-[12px] after:border-t-transparent after:border-l-transparent after:border-white  text-Dark-grayish-blue text-xl z-10
            
            tablet:after:hidden tablet:bg-transparent tablet:relative tablet:flex tablet:flex-row tablet:h-full tablet:top-0 tablet:w-[400px] tablet:py-0 
      
            lg:w-[490px]

            sm:flex sm:after:hidden sm:bg-transparent sm:flex-row sm:top-0 sm:w-[480px] sm:h-full sm:py-0 sm:relative sm:mt-0 sm:text-white
            md:w-[500px]
            `} >
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Services</li>
                <li className='cursor-pointer'>Projects</li>
                <li className='cursor-pointer bg-Yellow w-[140px] h-[56px] grid place-content-center rounded-full font-Fraunces text-Very-dark-desaturated-blue uppercase sm:bg-white sm:hover:bg-opacity-25 sm:hover:text-White  tablet:bg-White tablet:hover:text-white tablet:hover:bg-opacity-25 '>Contact</li>
            </ul>
            <div className="cursor-pointer sm:hidden" onClick={handleClick}>
                <img src={burger} alt="menu hamburguesa" />
            </div>
        </nav>
    )
}

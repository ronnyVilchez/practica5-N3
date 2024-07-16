import { Navbar } from './Navbar'
import logo from '/images/logo.svg'

export const Header = () => {
    return (
        <header className='absolute w-full px-6 pt-8'>
            <div className='flex h-6 place-content-between m-auto sm:h-14 items-center' >
                <img className='w-[124px] h-6 sm:w-[170px] sm:h-[33px]' src={logo} alt="logo" />
                <Navbar />
            </div>
        </header>
    )
}

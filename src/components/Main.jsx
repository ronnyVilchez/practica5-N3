import imgDesktop from '/images/desktop/image-header.jpg'
import imgMobile from '/images/mobile/image-header.jpg'
import arrow from '/images/icon-arrow-down.svg'

export const Main = () => {
  return (
    <section>
      <picture>
        <source media="(max-width:639px)" srcSet={imgMobile} />
        <source media="(min-width:640px)" srcSet={imgDesktop} />
        <img src={imgMobile} alt='background header' />
      </picture>
      <p className='absolute top-[144px] w-[327px] font-Fraunces font-black text-[40px] uppercase tracking-[6.25px] text-White text-center left-0 right-0 mx-auto sm:w-[600px] xl:text-[56px] xl:w-[750px] xl:top-[191px] xl:tracking-[8.75px]'>
        We are creatives
      </p>
      <img className='absolute top-[294px] left-0 right-0 mx-auto sm:top-[220px] ' src={arrow} alt="arrow down" />
    </section>
  )
}

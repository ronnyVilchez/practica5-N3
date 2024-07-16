import eggImgMobile from '/images/mobile/image-transform.jpg'
import eggImgDesktop from '/images/desktop/image-transform.jpg'
import glassImgMobile from '/images/mobile/image-stand-out.jpg'
import glassImgDesktop from '/images/desktop/image-stand-out.jpg'
import graphicDesingMobile from '/images/mobile/image-graphic-design.jpg'
import graphicDesingDesktop from '/images/desktop/image-graphic-design.jpg'
import photographyMobile from '/images/mobile/image-photography.jpg'
import photographyDesktop from '/images/desktop/image-photography.jpg'

import { Text } from './Text'
import { Image } from './Image'
import { ImageText } from './ImageText'

export const Services = () => {
  return (
    <section className='tablet:grid tablet:grid-cols-2' >
      <Image
        order='order-2'
        imgMobile={eggImgMobile}
        imgDesktop={eggImgDesktop}
      />
      <Text
        order='order-1'
        title='Transform your brand'
        text='We are a full-service creative agency specializing in helping brands grow fast. 
        Engage your clients through compelling visuals that do most of the marketing for you.'
        color='bg-Yellow'
      />
      <Image
        order='order-3'
        imgMobile={glassImgMobile}
        imgDesktop={glassImgDesktop}
      />
      <Text
        order='order-4'
        title='Stand out to the right audience'
        text='Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'
        color='bg-Soft-red'
      />
      <ImageText
        order='order-5'
        imgMobile={graphicDesingMobile}
        imgDesktop={graphicDesingDesktop}
        title='Graphic design'
        text='Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'
      />
      <ImageText
        order='order-6'
        imgMobile={photographyMobile}
        imgDesktop={photographyDesktop}
        title='Photography'
        text='Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
      />
    </section>
  )
}

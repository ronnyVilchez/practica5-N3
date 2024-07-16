import bottesImgMobile from '/images/mobile/image-gallery-milkbottles.jpg'
import bottesImgDesktop from '/images/desktop/image-gallery-milkbottles.jpg'
import orangeImgMobile from '/images/mobile/image-gallery-orange.jpg'
import orangeImgDesktop from '/images/desktop/image-gallery-orange.jpg'
import coneImgMobile from '/images/mobile/image-gallery-cone.jpg'
import coneImgDesktop from '/images/desktop/image-gallery-cone.jpg'
import cubesImgMobile from '/images/mobile/image-gallery-sugar-cubes.jpg'
import cubesImgDesktop from '/images/desktop/image-gallery-sugarcubes.jpg'

import { Image } from './Image'

export const Gallery = () => {
  return (
    <section className='grid grid-cols-2 sm:flex'>
      <Image
        imgMobile={bottesImgMobile}
        imgDesktop={bottesImgDesktop}
      />
      <Image
        imgMobile={orangeImgMobile}
        imgDesktop={orangeImgDesktop}
      />
      <Image
        imgMobile={coneImgMobile}
        imgDesktop={coneImgDesktop}
      />
      <Image
        imgMobile={cubesImgMobile}
        imgDesktop={cubesImgDesktop}
      />
    </section>
  )
}

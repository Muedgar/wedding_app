import './styles/box.css'
import './styles/hero.css'

import tree from './assets/tree.png'
import stand from './assets/stand.png'
import vows from './assets/vows.png'
import Image from 'next/image'

const HomePage = () => {
  return (
    <section>
     

      {/* <div className="leaf_perspective mt-[200px] m-auto">
        <div className="leaf_box">
          <div className="leaf_face leaf_box_right"></div>
          <div className="leaf_face leaf_box_left"></div>
          <div className="leaf_face leaf_box_bottom"></div>
          <div className="leaf_face leaf_box_top">
            <div className="leaf_box_top_1"></div>
            <div className="leaf_box_top_2"></div>
          </div>
          <div className="leaf_face leaf_box_front"></div>
          <div className="leaf_face leaf_box_back"></div>
        </div>
      </div> */}
      <div id="hero" className='w-screen h-[700px]'>
        <Image
          className='w-full h-full object-fill'
          src={tree}
          alt='img'
        />
        <div className='hero_stand w-full h-[80%]'>
        <Image
          className='stand w-[500px] h-[500px] object-fill'
          src={stand}
          alt='img'
        />
         <Image
          className='vows w-[200px] h-[300px] object-fill'
          src={vows}
          alt='img'
        />
        </div>
      </div>
    </section>
  )
}

export default HomePage;
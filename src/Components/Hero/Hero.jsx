import React, {useState} from 'react'
import './hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_img.png"
import hero_image_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"
import{motion} from 'framer-motion'
import NumberCounter from 'number-counter'
import { Link } from 'react-scroll'

export default function Hero() {

  const transition = {type: 'spring', duration:3}
  const mobile = window.innerWidth <=768 ? true:false;
  const [menuOpened , setMenuOpened] = useState(false);

  return (
    <div className="hero" id='home'>

      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header/>

{/*the best ad */}
        <div className="the-best-ad">
           <motion.div
           initial={{left:mobile? "165px": '200px'}}
           whileInView={{left: '8px'}}
           transition={{...transition, type: 'tween'}}
           
           ></motion.div>
          <span>the best fitness club in galle </span>
        </div>

{/*Hero Heading */}
      <div className="hero-text">
        <div>
          <span className='stroke-text'>Make</span>
          <span> Your</span>
        </div>
        <div>
          <span>Dream Body</span>
        </div>

        <div>
          <span>
            Empowering you to become your best by providing a professional gym
          </span>
        </div>
      </div>

  {/*figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={+15} start={0} delay='2' preFix="+"/>
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
           < NumberCounter end={+150} start={120} delay='2' preFix="+"/>
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
            <NumberCounter end={+25} start={10} delay='2' preFix="+"/>
            </span>
            <span>fitness programs</span>
          </div>
        </div>

  {/*Hero Buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>      

      </div>
      <div className="right-h">


        <button className="btn">
           <Link
           onClick={()=> setMenuOpened(false)}
           to='join'
           span={true}
           smooth={true}>Join Now</Link></button>
        
        
          
          
          


        <motion.div
        initial={{right:"-1rem"}}
        whileInView={{right:"4rem"}}
        transition={transition}
        className="heart-rate">
          <img src={heart} alt="#"/>
          <span>Heart Rate</span>
          <span>110 bpm</span>
        </motion.div>

        
    {/*hero images */}
        <img src={hero_image} alt="" className='hero-img' />
        <motion.img
        initial={{right:'11rem'}}
        whileInView={{right: '24rem'}}
        transition={transition}
        src={hero_image_back} alt="" className='hero-img-back' />


    {/*calories */}
        <motion.div 
        initial={{right:"35rem"}}
        whileInView={{right:"45rem"}}
        transition={transition}
        className="calories">

            <img src={calories} alt="" />
            <div>
              <span>Calories Burned</span>
              <span> 220 kcal</span>
            </div>
            
        </motion.div>
      </div>

      
    </div>
  )
}

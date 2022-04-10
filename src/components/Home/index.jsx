import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';

const Home = () => {
    const[letterClass , setLetterClass]= useState('text-animate')
    const nameArray=['o' , 'u' , 'h' , 'i' ,'b']
    const jobArray = ['w','e' ,'b','','d','e','v','e','l','o','p','e','r','.']


    useEffect(() => {
       
         setTimeout(()=> {
            setLetterClass('text-animate-hover')
        },4000)

    },[])
    

    return (
      <div className="container home-page">
          <div className="text-zone">
             <h1>
                 <span className={letterClass}>H</span>
                 <span className={`${letterClass} _12`}>i</span>
             <br/>
             <span className={`${letterClass} _12`}>I</span>
             <span className={`${letterClass} _12`}>'m</span>
             <img src={LogoTitle} alt="developer" />
             <AnimatedLetters letterCLass={letterClass}
             strArray={nameArray}
             idx={15}/>
             <br/>
             <AnimatedLetters letterCLass={letterClass}
             strArray={jobArray}
             idx={22}/>
             </h1>

             <h2>
                 Frontend Developer / Blockchain Expert / Crypto enthusiast
             </h2>
             <Link to="/contact" className='flat-button'>CONTACT ME</Link>
          </div>
    <div class="sky">

        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        
    </div>
    <Logo/>
      </div>
    );
}

export default Home
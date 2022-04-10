import { useEffect, useState } from 'react'
import {faCss3,faEthereum,faGitAlt,faHtml5,faJsSquare,faReact,} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const aboutmeTitle = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']
  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
         
          <h1>
             <AnimatedLetters letterCLass={letterClass}
             strArray={aboutmeTitle}
             idx={15}/>
             </h1>


          <p>I'm very ambitious junior web developer looking for a role in 
                  the Web3 ecosystem with the opportunity to work with the latest 
                  technologies on challenging and diverse projects</p>
                  <p align="LEFT">I made a career change in 2021 by leaving insurance field 
                  and devoting myself 100% to my passion for blockchain and web technologies .
                  I'm quietly confident , naturally curious , and perpetually working on improving my skills</p>
                  <p>If I need to define myself in one sentence that would be a person curious about the world, always in search of learning, 
                  a young father, passionate about technologies and crypto enthusiast</p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faEthereum} color="black" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About

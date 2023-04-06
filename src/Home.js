import React, { useState, useRef, useEffect } from 'react';
import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';
import video from './video.mp4'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion"

const Home = ({ navBar, setNavBar }) => {

  const [showImage, setShowImage] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleTimeUpdate = () => {
      if (video.currentTime >= 5) {
        setShowImage(true)
      };

    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const [name, nameCount] = useTypewriter({
    words: ["Name: Shari Baloch"],
    delaySpeed: 2000,
  })

  const [age, ageCount] = useTypewriter({
    words: ["Age: 30"],
    delaySpeed: 2000,
  })

  const [gender, genderCount] = useTypewriter({
    words: ["Gender: FEMALE"],
    delaySpeed: 2000,
  })

  const [org, orgCount] = useTypewriter({
    words: ["Organization: Balochistan Liberation Army"],
    delaySpeed: 1000,
  })

  React.useEffect(() => {
    setNavBar([1, 0]);
  }, []);

  return (
    <div className='mt-16 w-full h-screen flex items-center justify-center bg-[#e6f6fd] dark:bg-slate-900'>

      <div className='w-full lg:max-w-[90%] h-[90%] flex items-center space-x-6 p-6'>

        <div className='w-1/2 h-fit shadow-2xl'>
          <div className='rounded-2xl overflow-hidden'>
            
            <video ref={videoRef} controls>
              <source src={video} type="video/mp4" />
            </video>
            
          </div>
        </div>
        
        {showImage &&
        <div className='flex flex-col items-center justify-center space-y-4 w-1/2 h-full border-2 border-black dark:border-white rounded-2xl p-4'>

          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'linear', duration: 3 }}
            src='https://pbs.twimg.com/media/FHEkN7GWUA4Xyjt?format=jpg&name=small'
            alt=''
            className='h-64 w-64 rounded-3xl shadow-2xl'
          />

          <div className='text-4xl font-extrabold'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
              {name}
            </span>
          </div>

          <div className='text-4xl font-extrabold'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
              {age}
            </span>
          </div>

          <div className='text-4xl font-extrabold'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
              {gender}
            </span>
          </div>

          <div className='text-3xl font-extrabold'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
              {org}
            </span>
          </div>


          <div className='text-justify text-xl w-[90%] bg-white dark:bg-slate-400 p-8 rounded-3xl drop-shadow-2xl'>
            The bomber was identified as Shari Baloch, a 30-year-old female and secondary school science teacher from Kech District in Balochistan. She held bachelor's and master's degrees in education from the Allama Iqbal Open University, and had also obtained a master's degree in zoology from the University of Balochistan. She had reportedly enrolled in another postgraduate degree at the University of Karachi months before the attack, but was not reported to be a student there at the time.
          </div>

        </div>
        }

      </div>

    </div>
  )
}

export default Home

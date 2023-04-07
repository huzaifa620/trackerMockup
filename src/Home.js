import React, { useState, useRef, useEffect } from 'react';
import 'plyr-react/plyr.css';
import video from './video.mp4'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delayChildren: 1, staggerChildren: 0.5}
    }
  }
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  React.useEffect(() => {
    setNavBar([1, 0]);
  }, []);

  return (
    <div className='mt-16 w-full h-fit lg:h-screen flex items-center justify-center bg-[#e6f6fd] dark:bg-slate-900'>

      <div className='w-full lg:max-w-[90%] h-[90%] flex flex-col lg:flex-row space-y-4 lg:space-y-0 items-center lg:space-x-6 p-6'>

        <div className='w-full lg:w-1/2 h-fit shadow-2xl'>
          <div className='rounded-2xl overflow-hidden'>
            
            <video ref={videoRef} controls>
              <source src={video} type="video/mp4" />
            </video>
            
          </div>
        </div>
        
        {showImage &&
        <div className='flex flex-col items-center justify-center space-y-4 w-full lg:w-1/2 h-full lg:border-2 border-black dark:border-white rounded-2xl lg:p-4'>

          <div className='flex flex-col lg:flex-row w-[90%] space-y-2 lg:space-y-0'>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: 'linear', duration: 3 }}
              src='https://pbs.twimg.com/media/FHEkN7GWUA4Xyjt?format=jpg&name=small'
              alt=''
              className='h-64 lg:w-64 w-full object-contain rounded-3xl shadow-2xl'
            />

            <motion.div className='flex flex-col items-center lg:items-start justify-center px-2 space-y-1 lg:space-x-0' variants={container} ref={ref} initial={"hidden"} animate={controls}>

              <motion.div variants={item} className='text-xl h-fit lg:text-4xl font-extrabold bg-black dark:bg-white text-center w-full lg:w-fit p-2 lg:pr-8 rounded-2xl lg:rounded-r-3xl'>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                  Shari Baloch
                </span>
              </motion.div>

              <motion.div variants={item} className='text-xl h-fit lg:text-4xl font-extrabold bg-black dark:bg-white text-center w-full lg:w-fit p-2 lg:pr-8 rounded-2xl lg:rounded-r-3xl'>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                  Age: 30
                </span>
              </motion.div>

              <motion.div variants={item} className='text-xl h-fit lg:text-4xl font-extrabold bg-black dark:bg-white text-center w-full lg:w-fit p-2 lg:pr-8 rounded-2xl lg:rounded-r-3xl'>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                  Female
                </span>
              </motion.div>

              <motion.div variants={item} className='text-xl h-fit lg:text-3xl font-extrabold bg-black dark:bg-white text-center lg:text-left w-full lg:w-fit p-2 lg:pr-8 rounded-2xl lg:rounded-r-3xl'>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                  Organization: Balochistan Liberation Army
                </span>
              </motion.div>
            </motion.div>

          </div>
          
          <div className='text-justify text-xl w-[90%] bg-white dark:bg-slate-400 p-8 rounded-3xl drop-shadow-2xl overflow-auto'>
            The bomber was identified as Shari Baloch, a 30-year-old female and secondary school science teacher from Kech District in Balochistan. She held bachelor's and master's degrees in education from the Allama Iqbal Open University, and had also obtained a master's degree in zoology from the University of Balochistan. She had reportedly enrolled in another postgraduate degree at the University of Karachi months before the attack, but was not reported to be a student there at the time.
          </div>

        </div>
      }

      </div>

    </div>
  )
}

export default Home

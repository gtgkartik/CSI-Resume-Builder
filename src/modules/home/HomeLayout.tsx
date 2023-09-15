import { motion, useAnimation } from 'framer-motion';
import { signInWithPopup } from 'firebase/auth';
import NavbarDark from './components/NavbarDark';
import { Button } from '@mui/material';
import FeatureSection from './components/Feature';
import Image from 'next/image';
import Person from './components/Person';
import { auth, provider } from '../../Firebase';
import { useState } from 'react';

const HomeLayout = () => {
  const [showFullText, setShowFullText] = useState(false);

  const handleSeeMoreClick = () => {
    setShowFullText(!showFullText);
  };
  const controls = useAnimation();
  const animationEffectsHoverEnter = { scale: 1.05 };
  const animationEffectsHoverLeave = { scale: 1 };
  const animationEffectsFirstLoad = {
    scale: [0.9, 1],
    opacity: [0, 1],
  };
  const transtionEffects = {
    type: 'spring',
    stiffness: 400,
    damping: 17,
  };

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      // Redirect to the /builder page after successful sign-in
      window.location.href = '/builder';
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} className="scroll-smooth ">
      <NavbarDark />
      <div className="w-full h-screen md:flex sm:justify-center ">
        <div className="w-3/5 h-full sm:hidden md:flex ">
          <Image src={'/icons/authimage.jpg'} className="" alt="logo" height="200" width="1000" />
        </div>

        <div className="w-2/5 h-full md:pl-8 md:flex-col sm:p-5 ">
          {/* Csi logo and text  */}
          <div className="mt-[60px] top-[70px]">
            <div className="flex items-center font-bold space-x-2">
              <Image src={'/icons/logo.png'} alt="logo" width="85" height="85" />

              <div className="flex flex-col text-dark">
                <h1 className="text-[33px]  font-juneauBold">Resume</h1>
                <h1 className="text-[33px]  font-juneauBold mt-[-0.7rem]">Builder</h1>
              </div>
            </div>
          </div>
          {/* end of csi logo and text  */}

          <div className="pt-5 mt-5 border-t-solid border-t-4 ls:w-[500px]  sm:w-[300px] border-t-green">
            <h1 className="font-juneauBold text-[32px]">Nice to see you here.</h1>
            <div className="ls:w-[500px]  sm:w-[300px] top-3 relative font-juneauRegular">
              <div className="relative opacity-75">
                Resume Builder, proudly presented by CSI Chapter VIT-AP with an easy-to-use layout
                and professional assistance, makes creating an amazing resume easy for people at all
                stages of their careers. Join us on your professional path, and let the CSI Chapter
                at VIT-AP's Resume Builder be your trusted partner in creating a resume that will
                make an impact. Your success story starts right here.
                <p className="top-4 relative">
                  Note: We are in the Beta stage, therefore there may be some UX or technical issues
                  that will be resolved shortly.
                </p>
              </div>
            </div>
            <div className="flex relative pt-[60px]  ">
              <button
                onClick={handleSignInWithGoogle}
                className="bg-dark flex items-center space-x-4 justify-center w-[300px] p-3 rounded-md"
              >
                <Image alt="Google Icon" src={'/icons/googleicon.png'} width={20} height={20} />
                <a className="text-white font-juneauRegular">Sign in with Google</a>
              </button>
            </div>
          </div>

          <div className="flex pt-[30px] ">
            <p className="sm:text-[10px] ls:text-[15px] font-juneauRegular">© CSI CHAPTER 2023</p>
          </div>
        </div>
      </div>
      {/* <div
        style={{
          background: 'linear-gradient(180deg, #E7EEFA 50%, #FFFFFF 100%)',
          fontFamily: "'Roboto Slab', serif",
        }}
      >
        <div className="mx-6 md:mx-40 xl:mx-60 mb-6">
          <motion.div
            className="grid grid-cols-12 pt-12 md:pt-24"
            initial={{ opacity: 0 }}
            animate={animationEffectsFirstLoad}
            transition={transtionEffects}
          >
            <div className="col-span-12 sm:col-span-4">
              <motion.img
                id="resume-3d"
                src="/resume.webp"
                alt="resume-3d"
                className="w-6/12 sm:w-9/12"
                onMouseEnter={() => {
                  controls.start(animationEffectsHoverEnter, transtionEffects);
                }}
                onMouseLeave={() => {
                  controls.start(animationEffectsHoverLeave, transtionEffects);
                }}
                animate={controls}
              />
            </div>
            <div className="col-span-12 sm:col-span-8">
              <h3 className="text-xl md:text-2xl mb-2 text-resume-400">SIMPLEST WAY TO BUILD A</h3>
              <h1 className="text-5xl mb-12 text-resume-800">Professional Resume</h1>

              <div className="flex mb-10">
                <div className="bg-resume-800 w-1 rounded-lg"></div>
                <p className="text-lg ml-3 text-resume-800">
                  &ldquo;The secret to getting ahead is getting started&rdquo;
                  <br />
                  —Mark Twain
                </p>
              </div>

              <button
                onClick={handleSignInWithGoogle}
                className="bg-dark flex items-center space-x-4 justify-center w-[300px] p-3 rounded-md"
                style={{
                  background: 'linear-gradient(to bottom, #111727, #212c4d)',
                }}
              >
                <Image alt="Google Icon" src={'/icons/googleicon.png'} width={20} height={20} />
                <a className="text-white">Sign in with Google</a>
              </button>

              <p
                className="xl:invisible text-resume-800"
                style={{ fontFamily: "'Roboto Slab', serif" }}
              >
                Desktop screen recommended
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="mx-6 md:mx-40 xl:mx-60 my-32 w-75"
        style={{ fontFamily: "'Roboto Slab', serif" }}
        initial={{ opacity: 0 }}
        animate={animationEffectsFirstLoad}
        transition={transtionEffects}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FeatureSection />
        </div>
      </motion.div>

      <div className=" my-32">
        <div
          id="contribute"
          className="mx-6 md:mx-40 xl:mx-60 py-12"
          style={{ fontFamily: "'Roboto Slab', serif" }}
        >
          <div className="grid grid-cols-12 items-center text-center">
            <div className="col-span-12 lg:col-span-4 mb-4 lg:mb-0 flex flex-col items-center gap-2">
              <Image src={'/icons/laptop.gif'} alt="logo" height="120" width="120" />
              <p className="text-dark text-xl mt-2">
                Do you want to <strong>build amazing products like Us ?</strong>
              </p>
            </div>
            <div className="col-span-12 lg:col-span-1 mb-4 lg:mb-0 text-resume-800 text-4xl">
              <p>+</p>
            </div>
            <div className="col-span-12 lg:col-span-2 flex flex-col items-center gap-2">
              <Image src={'/icons/browser.gif'} alt="logo" height="120" width="120" />
              <p className="text-dark text-xl mt-2">
                Do you <strong>write code?</strong>
              </p>
            </div>
            <div className="invisible lg:visible lg:col-span-2 text-resume-800 text-4xl mx-6">
              <p>=</p>
            </div>
            <div className="col-span-12 lg:col-span-3 mx-auto flex flex-col items-center">
              <div className="mb-6">
                <Image src={'/icons/work.gif'} alt="logo" height="120" width="120" />
              </div>
              <div>
                <a
                  href="https://github.com/sadanandpai/resume-builder"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="contained" className="bg-dark mt-0 lg:mt-5 mb-3">
                    Join Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="about-us"
        className="mx-6 md:mx-40 xl:mx-60 my-32"
        style={{ fontFamily: "'Roboto Slab', serif" }}
      >
        <h2 className="text-resume-800 text-3xl mb-2 text-center lg:text-left">Contributors</h2>
        <p className="text-resume-400 mb-8 text-center lg:text-left">
          A bunch of developers and designers — who love to build open source projects and learn
          along!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Person />
        </div>
        <p className="text-resume-400 my-8 text-center lg:text-left">
          Follow Us on &nbsp;
          <a
            href="https://medium.com/@yakshag/e-resume-build-a-professional-resume-design-case-study-3dc02a6359ea"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Social Media
          </a>
          ↗
        </p>
      </div> */}
    </motion.div>
  );
};

export default HomeLayout;

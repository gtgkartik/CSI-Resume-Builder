import type { NextPage } from 'next';
import Head from 'next/head';
import Person from '../modules/home/components/Person';
import { motion, useAnimation } from 'framer-motion';
import NavbarDark from 'src/modules/home/components/NavbarDark';

const Contributors: NextPage = () => {
  return (
    <>
      <NavbarDark />
      <div>
        <Head>
          <title>Resume Builder: Contributors</title>
          <meta name="description" content="Single Page Resume Builder" />
          <link rel="icon" type="image/png" href="/icons/resume-icon.png" />
        </Head>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          className="scroll-smooth"
        >
          <div
            id="about-us"
            className="mx-6 md:mx-40 xl:mx-60 mt-[50px] mb-[100px]"
            style={{ fontFamily: "'Roboto Slab', serif" }}
          >
            <h2 className="text-resume-800 text-3xl mb-2 text-center lg:text-left font-juneauBold">
              Contributors
            </h2>
            <p className="text-resume-400 mb-8 text-center lg:text-left font-juneauRegular">
              A bunch of developers and designers — who love to build open source projects and learn
              along!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Person />
            </div>
            <p className="text-resume-400 my-8 text-center lg:text-left">
              Follow Us on &nbsp;
              <a
                href="https://bento.me/csivitap"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Social Media
              </a>
              ↗
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Contributors;

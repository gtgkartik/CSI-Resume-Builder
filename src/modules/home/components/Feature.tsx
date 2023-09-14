import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';

function FeatureSection() {
  return (
    <>
      <FeatureCard>
        <CardPinnnedIcon>
          <Image src="/icons/style.svg" alt="style" height="56" width="56" />
        </CardPinnnedIcon>
        <p className="text-xl mr-14 text-white">
          Customise with <strong>templates and themes</strong>!
        </p>
      </FeatureCard>

      <FeatureCard>
        <CardPinnnedIcon>
          <Image src="/icons/speed.svg" alt="speed" height="56" width="56" />
        </CardPinnnedIcon>
        <p className="text-xl mr-14 text-white ">
          Simple <strong>interface</strong> that helps you build quicky!
        </p>
      </FeatureCard>

      <FeatureCard>
        <CardPinnnedIcon>
          <Image src="/icons/magic.svg" alt="magic" height="56" width="56" />
        </CardPinnnedIcon>
        <p className="text-xl mr-14 text-white">
          No <strong>sign up </strong>needed — go straight to building!
        </p>
      </FeatureCard>

      <FeatureCard>
        <CardPinnnedIcon>
          <Image src="/icons/lock.svg" alt="lock" height="56" width="56" />
        </CardPinnnedIcon>
        <p className="text-xl mr-14 text-white">
          We dont collect your <strong>data</strong>, We value your privacy
        </p>
      </FeatureCard>
    </>
  );
}

const FeatureCard = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const animationEffectsHoverEnter = { scale: 1.05 };
  const animationEffectsHoverLeave = { scale: 1 };

  const transtionEffects = {
    type: 'spring',
    stiffness: 400,
    damping: 30,
  };

  return (
    <motion.div
      className={`transition ease-in-out delay-100 duration-300 text-resume-800 hover:text-resume-50 fill-resume-800 px-6 py-10 lg:p-12 flex shadow-md cursor-pointer relative rounded-xl`}
      style={{
        background: 'linear-gradient(to bottom, #111727, #212c4d)',
      }}
      onMouseEnter={() => {
        controls.start(animationEffectsHoverEnter, transtionEffects);
      }}
      onMouseLeave={() => {
        controls.start(animationEffectsHoverLeave, transtionEffects);
      }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

const CardPinnnedIcon = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="backdrop-blur-2xl bg-resume-100 rounded-full p-2 shadow-level-hard absolute right-0 top-0 -mt-4 -mr-1">
      {children}
    </div>
  );
};

export default FeatureSection;

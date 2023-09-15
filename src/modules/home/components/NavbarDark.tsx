import Image from 'next/image';
import ProfileCard from './ProfileCard';

const NavbarDark = (props: any): JSX.Element => {
  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById('about-us');
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <div
        className={`w-full  bg-[#111727] md:flex sm:flex ls:flex justify-between md:px-[107px] ls:px-[60px] sm:px-[30px]  h-[96px] items-center`}
      >
        {/* Primary Navbar  */}
        <div className="flex items-center font-bold space-x-3">
          <Image src={'/icons/logo.png'} alt="logo" height="70" width="70" />
          <div className="flex flex-col text-white">
            <h1 className="text-[23px]  font-juneauBold">Resume</h1>
            <h1 className="text-[23px]  font-juneauBold mt-[-0.7rem]">Builder</h1>
          </div>
        </div>
        {/* Middle part  */}
        <div className="flex">
          <div className="md:flex sm:hidden">
            <ul className="flex font-inter items-center mr-[86px] space-x-7 sm:flex  text-white">
              <li className="cursor-pointer">
                <a href="/">Home</a>
              </li>
              <li className="cursor-pointer">
                <a href="/Contributors">Contributors</a>
              </li>
              {/* <li className="cursor-pointer">About Us</li> */}
              {/* <li className="cursor-pointer">Contact Us</li> */}
              <li className="cursor-pointer">
                <a target="#" href="https://www.instagram.com/csi_vitap/">
                  Follow Us
                </a>
              </li>
              <li className="cursor-pointer">
                <a target="#" href="https://isj4dugg0q2.typeform.com/to/BvoJJGN1">
                  Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* <ProfileCard color="white" textcolor= "dark" /> */}
        </div>
        {/* Secondary Navbar  */}
      </div>
    </>
  );
};

export default NavbarDark;

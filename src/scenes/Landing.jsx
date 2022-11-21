import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import videoBg from '../assets/videoBg.mp4';
import Typed from 'react-typed';

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="main"
    >

      <video src={videoBg} autoPlay loop muted />

    

      <div className="content">
      
        {/* MAIN TEXT */}
        <div className="z-30 basis-2/5 mt-12 md:mt-32">
          {/* HEADINGS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="text-6xl font-playfair z-10 text-center md:text-start">
              Hello I'm Innocente {""} GIHOZO
            </p>

            <Typed
              className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
              strings={['Front End Developer', 'Back End Developer', 'Quality Assurance']}
              typeSpeed={180}
              backSpeed={140}
              loop
            />
          </motion.div>

          {/* CALL TO ACTIONS */}
          <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <AnchorLink
              className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              Contact Me
            </AnchorLink>
            <AnchorLink
              className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
                Let's talk.
              </div>
            </AnchorLink>
          </motion.div>

          <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <SocialMediaIcons />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Landing;

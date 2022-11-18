import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = ({ progressPercentage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="bg-light-gray pt-20">
      {/* HEADER AND IMAGE SECTION */}
      
      <div className="md:flex md:justify-between md:gap-16 mr-20 ml-20 bg-white  px-16 ">
        <div className='w-11/12 pr-11 pl-5'>
          <div className='pb-5'>
            <h2>HTML5</h2>
            <div className='h-1 w-full bg-light-blue'>

              <div
                style={{ width: `${98}%` }}
                className={`h-full ${progressPercentage < 70 ? 'bg-red-600' : 'bg-verydeep-blue'}`}>
              </div>
            </div>
          </div>

          <div className='pb-5'>
            <h2>CSS3</h2>
            <div className='h-1 w-full bg-light-blue'>

              <div
                style={{ width: `${95}%` }}
                className={`h-full ${progressPercentage < 70 ? 'bg-red-600' : 'bg-verydeep-blue'}`}>
              </div>
            </div>
          </div>
          <div className='pb-5'>
            <h2>Tailwind CSS</h2>
            <div className='h-1 w-full bg-light-blue'>

              <div
                style={{ width: `${80}%` }}
                className={`h-full ${progressPercentage < 70 ? 'bg-red-600' : 'bg-verydeep-blue'}`}>
              </div>
            </div>
          </div>

          <div className='pb-5'>
            <h2>Javascript</h2>
            <div className='h-1 w-full bg-light-blue'>

              <div
                style={{ width: `${90}%` }}
                className={`h-full ${progressPercentage < 70 ? 'bg-red-600' : 'bg-verydeep-blue'}`}>
              </div>
            </div>
          </div>

          <div className='pb-5'>
            <h2>ReactJs</h2>
            <div className='h-1 w-full bg-light-blue'>

              <div
                style={{ width: `${88}%` }}
                className={`h-full ${progressPercentage < 70 ? 'bg-red-600' : 'bg-verydeep-blue'}`}>
              </div>
            </div>
          </div>

          <div className='pb-5'>
            <h2>React Native</h2>
            <div className='h-1 w-full bg-light-blue'>

              <div
                style={{ width: `${75}%` }}
                className={`h-full ${progressPercentage < 70 ? 'bg-red-600' : 'bg-verydeep-blue'}`}>
              </div>
            </div>
          </div>

          <div className='pb-5'>
            <h2>MongoDB</h2>
            <div className='h-1 w-full bg-light-blue'>

              <div
                style={{ width: `${80}%` }}
                className={`h-full ${progressPercentage < 70 ? 'bg-red-600' : 'bg-verydeep-blue'}`}>
              </div>
            </div>
          </div>

          <div className='pb-5'>
            <h2>Postgres/MySQL</h2>
            <div className='h-1 w-full bg-light-blue'>

              <div
                style={{ width: `${80}%` }}
                className={`h-full ${progressPercentage < 70 ? 'bg-red-600' : 'bg-verydeep-blue'}`}>
              </div>
            </div>
          </div>

          <div className='pb-5'>
            <h2>Typescript</h2>
            <div className='h-1 w-full bg-light-blue'>

              <div
                style={{ width: `${80}%` }}
                className={`h-full ${progressPercentage < 70 ? 'bg-red-600' : 'bg-verydeep-blue'}`}>
              </div>
            </div>
          </div>

          <div className='pb-5'>
            <h2>NodeJS</h2>
            <div className='h-1 w-full bg-light-blue'>

              <div
                style={{ width: `${80}%` }}
                className={`h-full ${progressPercentage < 70 ? 'bg-red-600' : 'bg-verydeep-blue'}`}>
              </div>
            </div>
          </div>

          <div className='pb-5'>
            <h2>Rest API</h2>
            <div className='h-1 w-full bg-light-blue'>

              <div
                style={{ width: `${75}%` }}
                className={`h-full ${progressPercentage < 70 ? 'bg-red-600' : 'bg-verydeep-blue'}`}>
              </div>
            </div>
          </div>

        </div>

        {/* <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
            fames odio in at.
          </p>
        </motion.div> */}

        <div className="">

          <div className='flex flex-col justify-center'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>About Me</h1>
            <p>
              I'm an Experienced full stuck software developer with expertise in design,
              UI/UX, installation, testing and maintenance of sotware systems
              with over one year of experience as a junior software
              engineer.I completed 3months internship with Mobile development at Justice Bot,
              where I honed my mobile app development skills.In addition to that I' m a certified
              software tester.
            </p>
            {/* <button className='bg-black text-[#0000FF] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button> */}
          </div>

          {/* {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >


               <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" /> 
          )
          } */}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            A auctor pharetra hendrerit mattis amet etiam interdum platea. Est
            morbi porttitor scelerisque fermentum, sagittis non egestas. Amet
            odio sit sagittis,
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Urna, eget pulvinar dolor cursus volutpat dictum odio. Nec ultricies
            amet in in neque nibh tortor. Libero sed pretium justo nulla blandit
            nulla amet habitant iaculis. Iaculis in congue vitae sollicitudin
            faucibus a
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Accumsan eu fringilla nisi, eget. Vitae, eget ut id proin arcu in
            curabitur. Lectus libero, egestas enim aliquam quis felis amet.
            Sagittis, amet netus fringilla netus lobortis odio sed platea.
            Bibendum.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;

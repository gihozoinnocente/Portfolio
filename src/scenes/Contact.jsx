import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="contact py-48">
      {/* HEADINGS */}
      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-end w-full"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div> */}

      {/* FORM & IMAGE */}
      {/* <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
            method="POST"
          >
            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <button
              className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
              type="submit"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
     
     
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 flex justify-center"
        >
         <div className='flex flex-col justify-center'>
            <h1 className='text-3xl mb-3'>Get In Touch</h1>
            <p>Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
              Simply fill the from and send me an email.</p>

              <SocialMediaIcons />

            </div>
        </motion.div>
      </div> */}


<div className='w-full bg-[blue]  py-16 px-20'>
      <div className='w-full bg-[#FFF] py-10 px-10'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <div className='pr-11 pl-5'>

            <div>
              <h1 className='text-3xl mb-3'>Send A Message</h1>
              <input
                type="text"
                class="
          form-control
          block
          w-full
          px-4
          py-2
          mb-5
          text-xl
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
                id="exampleFormControlInput2"
                placeholder="Your Name"
              />

              <input
                type="text"
                class="
          form-control
          block
          w-full
          px-4
          py-2
          mb-5
          text-xl
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
                id="exampleFormControlInput2"
                placeholder="Your Email"
              />

              <input
                type="text"
                class="
          form-control
          block
          w-full
          px-4
          py-2
          mb-5
          text-xl
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
                id="exampleFormControlInput2"
                placeholder="Subject"
              />

              <textarea
                class="
        form-control
        block
        w-full
        px-3
        py-1.5
        mb-5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Your message"
              ></textarea>

              <button className='bg-blue-600 text-white py-3 px-5 rounded-3xl'>SEND A MESSAGE</button>
            </div>

          </div>

          <div className='flex flex-col justify-center'>
            <h1 className='text-3xl mb-3'>Get In Touch</h1>
            <p>Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
              Simply fill the from and send me an email.</p>

            <div className='flex mt-5 gap-7'>
              <button class="w-12 h-12 rounded-full 
                       bg-blue-500 hover:bg-blue-300 text-white">
                <FaFacebook size='2rem' className='ml-2 flex 
                        justify-center items-center' />
              </button>

              <button class="w-12 h-12 rounded-full 
                       bg-blue-500 hover:bg-red-500 text-white">
                <FaLinkedin size='2rem' className='ml-2 flex 
                        justify-center items-center' />
              </button>

              <button class="w-12 h-12 rounded-full 
                       bg-blue-500 hover:bg-red-500 text-white">
                <FaGithub size='2rem' className='ml-2 flex 
                        justify-center items-center' />
              </button>

              <button class="w-12 h-12 rounded-full 
                       bg-blue-500 hover:bg-red-500 text-white">
                <FaTwitter size='2rem' className='ml-2 flex 
                        justify-center items-center' />
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
    </section>
  );
};

export default Contact;

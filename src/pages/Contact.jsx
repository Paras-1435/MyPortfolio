import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import ToggleTheme from "../components/ToggleTheme";
import { themeContext } from "../useContext/store";

export default function Contact() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme } = useContext(themeContext)
  console.log(theme)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
     form.current.reset();
    setIsModalOpen(true)
    emailjs
      .sendForm(
        "service_4cif53n",   // ✅ Your Service ID
        "template_i7sw6sy",  // ✅ Your Template ID
        form.current,
        "eqRcUjUSZPUehyhBd"  // ✅ Your Public Key
      )
      .then(
        () => {
         
          // Auto close after 5 seconds
          setTimeout(() => {
            setIsModalOpen(false);
          }, 4000); 
          // console.log("Message Sent:", result.text);
          // alert("Message sent successfully!");
        },
        (error) => {
          // console.log("Error:", error.text);
          alert("Something went wrong!");
        }
      );
  };


  return (
    <>
      <ToggleTheme />

      {/* className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900 p-6" */}
      <div id="con-box" className={theme === 'dark' ? ' transition-all ease-in-out duration-500' : 'bg-[#d6d6d6] transition-all ease-in-out duration-500'}>


        <section id="contact" className={theme === 'dark' ? ' transition-all ease-in-out duration-500' : '[&_h2,p]:text-black transition-all ease-in-out duration-500 [&_div]:border-black '} >
          <div className=" max-w-lg p-8 rounded-2xl bg-white/10 backdrop-blur-5xl shadow-2xl shadow-black border border-white/20">

            <h2 className="text-3xl font-bold text-center text-green-400  mb-4">Get in Touch</h2>
            <p className="text-center text-green-500 font-semibold mb-6">Have a question or want to work together? Drop me a message!</p>

            <form ref={form} onSubmit={sendEmail} action='' className={theme === 'dark' ? '[&_input]:text-white' : '[&_input,textarea]:text-black [&_button]:bg-blue-600 [&_button]:hover:bg-blue-700 [&_button]:hover:shadow-black transition-all ease-in-out duration-500'} >
              <input
                required
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3  rounded-lg bg-white/10 border-1 border-black text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:green-500"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 mt-4 rounded-lg bg-white/10 border border-black text-white placeholder-gray-400 focus:outline-none focus:ring-1 "
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                name="message"
                className="w-full p-3 mt-4 rounded-lg bg-white/10 border border-black text-white placeholder-gray-400 focus:outline-none focus:ring-1"
              />
              <button

                type="submit"
                className="w-full py-3 cursor-pointer rounded-lg bg-green-600 hover:shadow-green-600 hover:bg-green-700 text-white font-semibold shadow-lg transition-transform hover:scale-105"
              >
                Send Message
              </button>
            </form>

            <div className="mt-6 flex justify-center  text-black space-x-6">
              <div id="foo-icon" className={theme === 'dark' ? '' : '[&_span]:text-black [&_a]:bg-[#d6d6d6]'} >
                <span className="text-green-400">Gmail:</span>
                <a href="mailto:paraskir7@gmail.com" className="overflow-hidden bg-green-400  rounded-full p-1 ">
                  <img className="bg-cover size-4" src="../images/gmail.png" alt="" />
                </a>
                <a className="rounded-full p-1 bg-green-400" href="https://www.linkedin.com/in/paraskir/" target="_blank" rel="noreferrer">
                  <FaLinkedin className=" transition" />
                </a>
                <a className="rounded-full p-1 bg-green-400" href="https://www.instagram.com/parth_14355/" target="_blank" rel="noreferrer">
                  <FaInstagram className=" transition" />
                </a>
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* ✅ Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white dark:bg-gray-900/90 rounded-xl p-6 max-w-sm w-full shadow-lg text-center">
            <h3 className="text-xl font-semibold text-green-500 mb-2">
              🎉 Thanks for connecting!
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              I’ll get back to you soon 🚀
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </>
  )
}

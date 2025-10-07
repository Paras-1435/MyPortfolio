import { useContext } from "react";
import { themeContext } from "../useContext/store";
import ToggleTheme from "../components/ToggleTheme";

export default function Certificates() {

   const {theme}=useContext(themeContext)
  const certificates = [
    {
      title: "Web Development using ASP.NET C#",
      issuer: "Participated in a 7-day national workshop organized by Central Library and ICT Cell, Maharaja Agrasen College, Jagadhri",
      date: "(28th November to 5th December 2022)",
      link: "./images/WebDev_cert.jpg",
    },
    {
      title: "Program Debugging Competition – 1st Position",
      issuer: "Secured 1st position in the competition organized by the Department of Computer Science & Applications,Maharaja Agrasen Mahavidyalaya, Jagadhr",
      date: "16 March, 2023",
      link: "./Doc/Debug.pdf",
    },
    {
      title: "Create a Website Using Wordpress",
      issuer: "Coursera",
      date: "24 January, 2024",
      link: "https://coursera.org/share/16239a228ddb523452f22edc7b512035",
    },
    {
      title: "Introduction to Cybersecurity Awareness",
      issuer: "By HP Life",
      date: " 11 July, 2025",
      link: "https://www.life-global.org/certificate/2e19967f-f1e7-4c7b-bd01-6acbf534bad6",
    },
  ];

  return (
    <>
    <ToggleTheme/>
{/* className="bg-gray-950 text-gray-200 py-16 px-6 " */}
    <section id="certificates" className={theme==='dark'?'':'bg-[#d6d6d6] [&_h2]:text-black '} >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-white text-center  mb-12">Certificates</h2>

        <div className="relative border-1 border-t-0 border-r-0 border-b-0 border-gray-700">
          {certificates.map((cert, index) => (
            <div key={index} className="mb-10 ml-6 rounded-lg shadow-amber-50 shadow-xs">
              {/* Dot */}
              <div className={theme==='dark'?'':' [&_div]:bg-black'}>
                <div className="absolute w-3 h-3 bg-green-400 rounded-full -left-1.5 border border-gray-900"></div>
              </div>
              

              {/* Content */}
              <div className={theme==='dark'?'':'[&_div]:bg-[#d6d6d6] [&_h3]:text-black [&_p]:text-gray-600 [&_a]:bg-blue-500 hover:[&_a]:bg-blue-600 [&_a]:text-white'}>
              <div className="bg-gray-900 p-6 border-t-2 rounded-xl shadow-lg hover:shadow-xl transition">
                <h3 className="text-xl font-semibold text-green-400">{cert.title}</h3>
                <p className="text-gray-400">{cert.issuer}</p>
                <p className="text-sm text-gray-500 mt-2">{cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block  bg-green-500 hover:bg-green-600 text-black font-semibold px-4 py-2 rounded-lg transition"
                >
                  View Certificate
                </a>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

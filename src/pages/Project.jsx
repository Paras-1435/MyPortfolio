import React, { useContext } from "react";
import ProjectCard from "../components/ProjectCard";
import userManagementImg from "../assets/user-management.png"; // Screenshot/GIF
import salonHero from "../assets/salonHero.png"; // Screenshot/GIF
import proj1 from "../../public/images/proj1.png"; // Screenshot/GIF
import ToggleTheme from "../components/ToggleTheme";
import { themeContext } from "../useContext/store";

function ProjectsSection() {
  const {theme}=useContext(themeContext)
  return (
    <section 
    // className="py-20 bg-gray-100 dark:bg-zinc-900"
    className={theme==='dark'?' pt-14 pb-20':'bg-[#d6d6d6] pt-14 pb-20 [&_h2]:text-black'}
    >
      <ToggleTheme/>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          My Projects
        </h2>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="User Management System"
            description="React + Redux project to create, edit, and delete user profiles with responsive UI."
            image={proj1}
            liveLink="https://user-profile-management.netlify.app/"
            githubLink="https://github.com/Paras-1435/profile-management-project"
          />
          {/* Add more ProjectCard components here */}
          <ProjectCard
            title="Royal Luxury Beauty Salon"
            description="Responsive React salon website with clean UI, service showcase, testimonials, and smooth animations."
            image={salonHero}
            liveLink="https://salonproject-parth.netlify.app/"
            githubLink="https://github.com/Paras-1435/salon-project"
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;

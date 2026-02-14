import { useSelector } from "react-redux";
import Fillinformation from "./Fillinformation";

const SecandTemp = () => {
  const resume = useSelector((state) => state.resume);

  return (
    <>
      <div className="w-full h-screen bg-black">
        <div className="px-2 py-2 h-full grid grid-cols-1 md:grid-cols-2 items-center text-white overflow-hidden">
          <Fillinformation />

          {/* Second Template */}
          <div className="w-full h-full hidden md:flex justify-center bg-gray-100 shadow-sm shadow-neutral-300">
            <main className="w-full h-full max-w-4xl bg-white p-2 font-sans text-black rounded-xl">

              {/* Header */}
              <header className="text-center sm:text-left">
                <h1 className={`text-2xl sm:text-3xl font-bold ${resume.name ? "text-black" : "text-gray-400"}`}>
                  {resume.name || "Meet Matlabi"}
                </h1>

                <p className={`text-sm sm:text-base mt-1 ${resume.proffession ? "text-black" : "text-gray-400"}`}>
                  {resume.proffession || "Frontend Developer"}
                </p>

                <p className="text-xs sm:text-sm mt-1 leading-relaxed flex gap-3">
                  <span className={resume.email ? "text-black" : "text-gray-400"}>
                    {resume.email || "meet@email.com"}
                  </span>
                  <br className="sm:hidden" />
                  <span className={resume.phone ? "text-black" : "text-gray-400"}>
                    {resume.phone || "+91-XXXXXXXXXX"}
                  </span>
                  <br className="sm:hidden" />
                  <span className={resume.github ? "text-black" : "text-gray-400"}>
                    {resume.github || "github.com/meet"}
                  </span>
                  <span className={resume.country ? "text-black" : "text-gray-400"}>
                    {resume.country || "India"}
                  </span>
                </p>
              </header>

              {/* Summary */}
              <section className="mt-2">
                <h2 className="text-base sm:text-lg font-semibold border-b border-black">
                  Professional Summary
                </h2>
                <p className={`text-sm leading-relaxed mt-2 ${resume.summary ? "text-black" : "text-gray-400"}`}>
                  {resume.summary ||
                    "Passionate Frontend Web Developer with hands-on experience in building responsive and modern web applications using React and Tailwind CSS. Strong focus on clean UI, performance, and user experience Passionate Frontend Web Developer with hands-on experience in building responsive and modern web applications using React and Tailwind CSS. Strong focus on clean UI, performance, and user experience"}
                </p>
              </section>

              {/* Skills */}
              <section className="mt-3">
                <h2 className="text-base sm:text-lg font-semibold border-b border-black">
                  Skills
                </h2>

                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-1 text-sm list-disc list-inside">
                  {resume.skill?.map((item, index) => (
                    <li key={index}>{item.input}</li>
                  ))}
                </ul>
              </section>

              {/* Languages */}
              <section className="mt-3">
                <h2 className="text-base sm:text-lg font-semibold border-b border-black">
                  Languages
                </h2>

                <ul className="list-disc list-inside text-sm">
                  {resume.language?.map((item, index) => (
                    <li key={index}>{item.languageInput}</li>
                  ))}
                </ul>
              </section>

              {/* Experience */}
              <section className="mt-3">
                <h2 className="text-base sm:text-lg font-semibold border-b border-black">
                  Experience
                </h2>

                <div className="space-y-2">
                  <h3 className={`text-sm sm:text-base font-semibold ${resume.jobTittle ? "text-black" : "text-gray-400"}`}>
                    {resume.jobTittle || "Frontend Developer"}
                  </h3>

                  <p className={`text-xs sm:text-sm ${resume.companyName ? "text-gray-700" : "text-gray-400"}`}>
                    {resume.companyName || "Flipkart"} | {resume.startEndDate || "2024 – Present"}
                  </p>

                  <p className={`text-sm ${resume.companyDescription ? "text-black" : "text-gray-400"}`}>
                    {resume.companyDescription ||
                      "Worked on building scalable UI components and improving performance is a technology company that makes computer software and digital tools. It helps people and businesses work."}
                  </p>
                </div>
              </section>

              {/* Projects */}
              <section className="mt-3">
                <h2 className="text-base sm:text-lg font-semibold border-b border-black">
                  Projects
                </h2>

                {resume.projects?.map((project, index) => (
                  <div key={index} className="space-y-1 mt-2">
                    <h3 className={`text-sm sm:text-base font-semibold ${project.projectName ? "text-black" : "text-gray-400"}`}>
                      {project.projectName || "Project Name"}
                    </h3>

                    <p className={`text-xs sm:text-sm ${project.projectStartEndDate ? "text-gray-700" : "text-gray-400"}`}>
                      {project.projectStartEndDate || "Jan – Mar"}
                    </p>

                    <p className={`text-sm ${project.projectDescription ? "text-black" : "text-gray-400"}`}>
                      {project.projectDescription ||
                        "Built a modern web application using React and Tailwind CSS."}
                    </p>
                  </div>
                ))}
              </section>

              {/* Education */}
              <section>
                <h2 className="text-base sm:text-lg font-semibold border-b border-black mt-2">
                  Education
                </h2>

                <p className={`text-sm font-medium ${resume.dgree ? "text-black" : "text-gray-400"}`}>
                  {resume.dgree || "Bachelor’s Degree in Computer Science"}
                </p>

                <p className={`text-xs sm:text-sm ${resume.collageName ? "text-gray-700" : "text-gray-400"}`}>
                  {resume.collageName || "University Name"} | {resume.endDate || "2021 – 2024"}
                </p>
              </section>

            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecandTemp;

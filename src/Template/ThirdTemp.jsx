import { useSelector } from "react-redux";
import Fillinformation from "./Fillinformation";

const ThirdTemp = () => {
  const resume = useSelector((state) => state.resume);

  return (
    <>
      <div className="w-full h-screen bg-black">
        <div className="px-2 py-2 h-full grid grid-cols-1 md:grid-cols-2 items-center text-white overflow-hidden">

          <Fillinformation />

          {/* ATS Friendly Template */}
          <div className="hidden w-full h-full md:flex justify-center bg-gray-100">
            <main className="w-full h-full max-w-3xl bg-white p-8 text-black font-serif">

              {/* HEADER */}
              <header className="text-center border-b pb-4">
                <h1 className={`text-xl font-bold ${resume.name ? "text-black" : "text-gray-400"}`}>
                  {resume.name || "Your Name"}
                </h1>

                <p className={`text-sm ${resume.proffession ? "text-black" : "text-gray-400"}`}>
                  {resume.proffession || "Frontend Developer"}
                </p>

                <p className="text-sm mt-1">
                  <span className={resume.email ? "text-black" : "text-gray-400"}>
                    {resume.email || "email@example.com"}
                  </span>{" | "}
                  <span className={resume.phone ? "text-black" : "text-gray-400"}>
                    {resume.phone || "0000000000"}
                  </span>{" | "}
                  <span className={resume.github ? "text-black" : "text-gray-400"}>
                    {resume.github || "github.com/username"}
                  </span>{" | "}
                  <span className={resume.country ? "text-black" : "text-gray-400"}>
                    {resume.country || "India"}
                  </span>
                </p>
              </header>

              {/* SUMMARY */}
              <section className="mt-3">
                <h2 className="text-lg font-bold uppercase border-b pb-1">
                  Professional Summary
                </h2>

                <p className={`text-sm mt-1 leading-relaxed ${resume.summary ? "text-black" : "text-gray-400"}`}>
                  {resume.summary ||
                    "Motivated developer with experience building responsive and scalable web applications using modern technologies."}
                </p>
              </section>

              {/* SKILLS */}
              <section className="mt-3">
                <h2 className="text-lg font-bold uppercase border-b pb-1">
                  Skills
                </h2>

                <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                  {resume.skill?.length > 0 ? (
                    resume.skill.map((item, index) => (
                      <li key={index}>{item.input}</li>
                    ))
                  ) : (
                    <li className="text-gray-400">Add your skills</li>
                  )}
                </ul>
              </section>

              {/* LANGUAGES */}
              <section className="mt-3">
                <h2 className="text-lg font-bold uppercase border-b pb-1">
                  Languages
                </h2>

                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                  {resume.language?.length > 0 ? (
                    resume.language.map((item, index) => (
                      <li key={index}>{item.languageInput}</li>
                    ))
                  ) : (
                    <li className="text-gray-400">Add languages</li>
                  )}
                </ul>
              </section>

              {/* EXPERIENCE */}
              <section className="mt-3">
                <h2 className="text-lg font-bold uppercase border-b pb-1">
                  Experience
                </h2>

                <div className="mt-2 space-y-1">
                  <h3 className={`font-semibold text-sm ${resume.jobTittle ? "text-black" : "text-gray-400"}`}>
                    {resume.jobTittle || "Job Title"}
                  </h3>

                  <p className={`text-sm ${resume.companyName ? "text-gray-700" : "text-gray-400"}`}>
                    {resume.companyName || "Company Name"} |{" "}
                    {resume.startEndDate || "2024 - Present"} |{" "}
                    {resume.location || "Location"}
                  </p>

                  <p className={`text-sm ${resume.companyDescription ? "text-black" : "text-gray-400"}`}>
                    {resume.companyDescription ||
                      "Describe your responsibilities and achievements here."}
                  </p>
                </div>
              </section>

              {/* PROJECTS */}
              <section className="mt-3">
                <h2 className="text-lg font-bold uppercase border-b pb-1">
                  Projects
                </h2>

                {resume.projects?.length > 0 ? (
                  resume.projects.map((project, index) => (
                    <div key={index} className="mt-3 space-y-1">
                      <h3 className={`font-semibold text-sm ${project.projectName ? "text-black" : "text-gray-400"}`}>
                        {project.projectName || "Project Name"}
                      </h3>

                      <p className={`text-sm ${project.projectStartEndDate ? "text-gray-700" : "text-gray-400"}`}>
                        {project.projectStartEndDate || "Jan - Mar"}
                      </p>

                      <p className={`text-sm ${project.projectDescription ? "text-black" : "text-gray-400"}`}>
                        {project.projectDescription ||
                          "Short project description with technologies used."}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 text-sm mt-2">Add your projects</p>
                )}
              </section>

              {/* EDUCATION */}
              <section className="mt-3">
                <h2 className="text-lg font-bold uppercase border-b pb-1">
                  Education
                </h2>

                <div className="mt-2 space-y-1">
                  <h3 className={`font-semibold text-sm ${resume.dgree ? "text-black" : "text-gray-400"}`}>
                    {resume.dgree || "Bachelor's Degree"}
                  </h3>

                  <p className={`text-sm ${resume.collageName ? "text-gray-700" : "text-gray-400"}`}>
                    {resume.collageName || "University Name"} |{" "}
                    {resume.endDate || "2026"} |{" "}
                    {resume.collageLocation || "Location"}
                  </p>
                </div>
              </section>

            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdTemp;

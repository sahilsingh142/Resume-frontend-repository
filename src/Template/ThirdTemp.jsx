import { useSelector } from "react-redux";
import Fillinformation from "./Fillinformation";

const ThirdTemp = () => {
  const resume = useSelector((state) => state.resume);

  return (
    <>
      <div className="w-full min-h-screen bg-gray-200">
        <div className="px-2 py-2 grid grid-cols-1 md:grid-cols-2">

          <Fillinformation />

          {/* ATS Friendly Template */}
          <div className="hidden md:flex justify-center bg-gray-100 p-6">
            <main className="w-full max-w-3xl bg-white p-8 text-black font-serif">

              {/* HEADER */}
              <header className="text-center border-b pb-4">
                <h1 className="text-3xl font-bold">
                  {resume.name || "Your Name"}
                </h1>

                <p className="mt-1 text-sm">
                  {resume.proffession || "Frontend Developer"}
                </p>

                <p className="text-sm mt-2">
                  {resume.email || "email@example.com"} |{" "}
                  {resume.phone || "0000000000"} |{" "}
                  {resume.github || "github.com/username"} |{" "}
                  {resume.country || "India"}
                </p>
              </header>

              {/* SUMMARY */}
              <section className="mt-6">
                <h2 className="text-lg font-bold uppercase border-b pb-1">
                  Professional Summary
                </h2>

                <p className="text-sm mt-2 leading-relaxed">
                  {resume.summary ||
                    "Motivated developer with experience building responsive and scalable web applications using modern technologies."}
                </p>
              </section>

              {/* SKILLS */}
              <section className="mt-6">
                <h2 className="text-lg font-bold uppercase border-b pb-1">
                  Skills
                </h2>

                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                  {resume.skill?.map((item, index) => (
                    <li key={index}>{item.input}</li>
                  ))}
                </ul>
              </section>

              {/* LANGUAGES */}
              <section className="mt-6">
                <h2 className="text-lg font-bold uppercase border-b pb-1">
                  Languages
                </h2>

                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                  {resume.language?.map((item, index) => (
                    <li key={index}>{item.languageInput}</li>
                  ))}
                </ul>
              </section>

              {/* EXPERIENCE */}
              <section className="mt-6">
                <h2 className="text-lg font-bold uppercase border-b pb-1">
                  Experience
                </h2>

                <div className="mt-3">
                  <h3 className="font-semibold text-sm">
                    {resume.jobTittle || "Job Title"}
                  </h3>

                  <p className="text-sm">
                    {resume.companyName || "Company Name"} |{" "}
                    {resume.startEndDate || "2024 - Present"} |{" "}
                    {resume.location || "Location"}
                  </p>

                  <p className="text-sm mt-2">
                    {resume.companyDescription ||
                      "Describe your responsibilities and achievements here."}
                  </p>
                </div>
              </section>

              {/* PROJECTS */}
              <section className="mt-6">
                <h2 className="text-lg font-bold uppercase border-b pb-1">
                  Projects
                </h2>

                {resume.projects?.map((project, index) => (
                  <div key={index} className="mt-3">
                    <h3 className="font-semibold text-sm">
                      {project.projectName || "Project Name"}
                    </h3>

                    <p className="text-sm">
                      {project.projectStartEndDate || "Jan - Mar"}
                    </p>

                    <p className="text-sm mt-1">
                      {project.projectDescription ||
                        "Short project description with technologies used."}
                    </p>
                  </div>
                ))}
              </section>

              {/* EDUCATION */}
              <section className="mt-6">
                <h2 className="text-lg font-bold uppercase border-b pb-1">
                  Education
                </h2>

                <div className="mt-3">
                  <h3 className="font-semibold text-sm">
                    {resume.dgree || "Bachelor's Degree"}
                  </h3>

                  <p className="text-sm">
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

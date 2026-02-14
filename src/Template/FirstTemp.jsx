import { useSelector } from "react-redux";
import Fillinformation from "./Fillinformation";
const FirstTemp = () => {
    const resume = useSelector((state) => state.resume)

    return (
        <>
            <div className="w-full h-screen bg-black">
                <div className="px-2 py-2 h-full grid grid-cols-1 md:grid-cols-2 items-center text-white">
                    <Fillinformation/>
                    <div className="w-full h-full bg-black hidden md:flex">
                        {/* Resume Page */}
                        <div className="w-[90%] bg-white shadow-2xl grid grid-cols-1 md:grid-cols-3 mt-10">
                            <aside className="bg-neutral-900 text-white p-8">
                                <h1 className={`text-2xl font-bold ${resume.name ? "text-white" : "text-neutral-400"}`}>{resume.name || "Rohan Kapur"}</h1>
                                <p className={`text-sm text-neutral-300 mt-1 ${resume.proffession ? "text-white" : "text-neutral-400"} `}>{resume.proffession || "Developer"}</p>

                                <div className="mt-8">
                                    <h2 className="text-lg font-semibold border-b border-neutral-700 pb-1">Contact</h2>
                                    <ul className="text-sm mt-3 space-y-2">
                                        <li className={`${resume.email ? "text-white" : "text-neutral-400"}`}>{resume.email || "email@gmail.com"}</li>
                                        <li className={`${resume.phone ? "text-white" : "text-neutral-400"}`}>{resume.phone || "555-666-333"}</li>
                                        <li className={`${resume.country ? "text-white" : "text-neutral-400"}`}>{resume.country || "India"}</li>
                                        <li className={`${resume.github ? "text-white" : "text-neutral-400"}`}> {resume.github || "github"}</li>
                                    </ul>
                                </div>

                                <div className="mt-8">
                                    <h2 className="text-lg font-semibold border-b border-neutral-700 pb-1">Skills</h2>
                                    <ul className="text-sm mt-3 space-y-1">
                                        {resume.skill.map((item, index) => (
                                            <li key={index}>{item.input}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-8">
                                    <h2 className="text-lg font-semibold border-b border-neutral-700 pb-1">Languages</h2>
                                    <ul className="text-sm mt-3 space-y-1">
                                        {resume.language.map((items, index) => (
                                            <li key={index}>{items.languageInput}</li>
                                        ))}
                                    </ul>
                                </div>
                            </aside>

                            {/* Main Content */}
                            <main className="md:col-span-2 p-10">
                                {/* Summary */}
                                <section>
                                    <h2 className="text-2xl font-bold border-b pb-2 text-black">Professional Summary</h2>
                                    <p className={`text-sm mt-2 leading-relaxed overflow-hidden ${resume.summary ? "text-black" : "text-neutral-400"}`}>
                                        {resume.summary || "Passionate Frontend Web Developer with hands-on experience in building responsive and modern web applications using React and Tailwind CSS. Strong focus on clean UI, performance, and user experience."}
                                    </p>
                                </section>

                                {/* Experience */}
                                <section className="mt-8">
                                    <h2 className="text-2xl font-bold border-b pb-2 text-black">Experience</h2>
                                    <div className="text-black">
                                        <div className="flex justify-between">
                                            <h1 className={`font-semibold text-xl tracking-wide ${resume.companyName ? "text-black" : "text-neutral-400"}`}>{resume.companyName || 'Microsoft'}</h1>
                                            <h2 className={`font-medium text-sm ${resume.jobTittle ? "text-black" : "text-neutral-400"}`}>{resume.jobTittle || "Frontend Developer"}</h2>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className={`text-sm ${resume.startEndDate ? "text-black" : "text-neutral-400"}`}>{resume.startEndDate || "feb 24 - jan 25"}</p>
                                            <p className={`text-sm ${resume.location ? "text-black" : "text-neutral-400"}`}>{resume.location || 'Delhi'}</p>
                                        </div>

                                        <p className={`text-sm mt-3 ${resume.companyDescription ? 'text-black' : 'text-neutral-400'}`}>{resume.companyDescription || "Microsoft is a technology company that makes computer software and digital tools. It helps people and businesses work."}</p>
                                    </div>
                                </section>

                                {/* Projects */}
                                <section className="mt-8">
                                    <h2 className="text-2xl font-bold border-b pb-2 text-black">Projects</h2>
                                    {resume.projects?.map((project, index) => (
                                        <div key={index} className="mt-1">
                                            <div className="flex justify-between">
                                                <h2 className={`font-semibold text-xl text-black ${project.projectName ? 'text-black' : 'text-neutral-400'}`}>{project.projectName || "Music Player"}</h2>
                                                <p className={`text-black text-sm mt-1 ${project.projectStartEndDate ? 'text-black' : 'text-neutral-400'}`}>{project.projectStartEndDate || 'Jan 12 - Marh 30'}</p>
                                            </div>
                                            <p className={`text-sm mt-1 ${project.projectDescription ? 'text-black' : 'text-neutral-400'}`}>
                                                {project.projectDescription || 'Built a dynamic resume builder using React and Tailwind CSS with live preview and reusable templates.'}
                                            </p>
                                        </div>
                                    ))
                                    }
                                </section>

                                {/* Education */}
                                <section className="mt-8 text-black">
                                    <h2 className="text-2xl font-bold border-b pb-2 text-black">Education</h2>
                                    <h1 className={`font-medium mt-2 ${resume.collageName ? 'text-black' : 'text-neutral-400'}`}>{resume.collageName || "Computer Science Engineering Collage"}</h1>
                                    <h2 className={`text-sm font-medium mt-1 ${resume.dgree ? 'text-black' : 'text-neutral-400'}`}>{resume.dgree || "Computer Science"}</h2>
                                    <div className="flex justify-between text-sm mt-1">
                                        <p className={`${resume.endDate ? 'text-black' : 'text-neutral-400'}`}>{resume.endDate || "Jun 2026"}</p>
                                        <p className={`${resume.collageLocation ? 'text-black' : 'text-neutral-400'}`}>{resume.collageLocation || "Delhi"}</p>
                                    </div>
                                </section>
                            </main>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default FirstTemp;
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFild, skill, language, summary, companyDescription, updateExp, updateCollage, projects} from "../handleSlice";

const Fillinformation = () => {
    const [input, setInput] = useState("");
    const [languageInput, setlanguageInput] = useState("");
    const [projectName, setProjectName] = useState('');
    const [projectStartEndDate, setProjectStateEndDate] = useState('');
    const [projectDescription, setProjectDescription] = useState(null);

    const resume = useSelector((state) => state.resume)
    const dispatch = useDispatch();

    //Skill
    const handleAdd = () => {
        if (input.trim() === "") return;
        dispatch(skill({ input }))
        setInput("");
    };

    //Language
    const handleLanguagebox = () => {
        if (languageInput.trim() === "") return;
        dispatch(language({ languageInput }))
        setlanguageInput('');
    }

    //Summery
    const showRef = useRef(null);
    const handleSummery = (e) => {
        dispatch(summary(showRef.current.innerText));
    }

    const editorRef = useRef(null);
    const handleCompanyExprience = (e) => {
        dispatch(companyDescription(editorRef.current.innerText))
    }

    const editorProjectRef = useRef(null);
    const handleProjectdetail = (e) => {
        setProjectDescription(editorProjectRef.current.innerText);
    }

    const handleAddProject = () => {

        if (!projectName && !projectStartEndDate && !projectDescription) return;

        const addProject = {
           projectName: projectName,
            projectStartEndDate: projectStartEndDate,
           projectDescription: projectDescription
        }

        dispatch(projects(addProject));

        setProjectName("");
        setProjectStateEndDate("");
        editorProjectRef.current.innerText = "";
    }
    return (
        <>
            {/* Filling Information */}
            <div className="w-full md:w-[85%] md:h-full bg-neutral-950 shadow-sm shadow-neutral-700 overflow-x-auto whitespace-nowrap">
                {/*Information */}
                <h1 className="text-3xl font-mono font-bold mt-5 ml-2">Information</h1>
                <div className="h-[30%] grid grid-cols-1 md:grid-cols-2 mt-2">

                    <div className="flex flex-col m-4">
                        <span className="text-sm font-medium ml-3">Full Name</span>
                        <input
                            className="border px-4 py-3 rounded-xl "
                            value={resume.name}
                            onChange={(e) => dispatch(updateFild({ field: "name", value: e.target.value }))}
                            type="text"
                            placeholder="Atul Singh"
                        />
                    </div>
                    <div className="flex flex-col m-4">
                        <span className="text-sm font-medium ml-3">Proffesion</span>
                        <input
                            className="border px-4 py-3 rounded-xl "
                            value={resume.proffession ?? ""}
                            onChange={(e) => dispatch(updateFild({ field: "proffession", value: e.target.value }))}
                            type="text"
                            placeholder="Web Developer"
                        />
                    </div>
                    <div className="flex flex-col m-4">
                        <span className="text-sm font-medium ml-3">Phone No</span>
                        <input
                            className="border px-4 py-3 rounded-xl"
                            value={resume.phone}
                            onChange={(e) => dispatch(updateFild({ field: "phone", value: e.target.value }))}
                            type="text"
                            placeholder="444-555-666"
                        />
                    </div>
                    <div className="flex flex-col m-4">
                        <span className="text-sm font-medium ml-3">Email</span>
                        <input
                            className="border px-4 py-3 rounded-xl "
                            value={resume.email}
                            onChange={(e) => dispatch(updateFild({ field: "email", value: e.target.value }))}
                            type="text"
                            placeholder="email@gmail.com"
                        />
                    </div>
                    <div className="flex flex-col m-4">
                        <span className="text-sm font-medium ml-3">City</span>
                        <input
                            className="border px-4 py-3 rounded-xl "
                            value={resume.country}
                            onChange={(e) => dispatch(updateFild({ field: "country", value: e.target.value }))}
                            type="text"
                            placeholder="Delhi"
                        />
                    </div>
                    <div className="flex flex-col  m-4">
                        <span className="text-sm font-medium ml-3">GitHub</span>
                        <input
                            className="border px-4 py-3 rounded-xl"
                            value={resume.github}
                            onChange={(e) => dispatch(updateFild({ field: "github", value: e.target.value }))}
                            type="text"
                            placeholder="https://github.com"
                        />
                    </div>
                </div>

                {/* Skill */}
                <h1 className="font-mono text-3xl font-bold mt-20 md:mt-30 ml-2">Skill</h1>
                <div>
                    <input className="border px-6 py-3 rounded-xl mt-3 ml-3"
                        type="text"
                        value={input}
                        placeholder="Type something..."
                        onChange={(e) => setInput(e.target.value)}
                    />

                    <button className="px-5 py-1 ml-4 mt-3 cursor-pointer  bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 hover:scale-105 transition duration-300"
                        onClick={handleAdd} >
                        Add
                    </button>
                </div>

                {/* Language */}
                <h1 className="font-mono text-3xl font-bold mt-15 ml-2">Language</h1>
                <div>
                    <input className="border px-6 py-3 rounded-xl mt-3 ml-3"
                        value={languageInput}
                        onChange={(e) => setlanguageInput(e.target.value)}
                        type="text" placeholder="Language" />

                    <button className="px-5 py-1 ml-4 mt-3 cursor-pointer  bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 hover:scale-105 transition duration-300"
                        onClick={handleLanguagebox}>Add</button>
                </div>

                {/* Summery scetion */}
                <h1 className="font-mono text-3xl font-bold mt-15 ml-2">Summary</h1>
                <div
                    ref={showRef}
                    contentEditable
                    onInput={handleSummery}
                    className="h-30 m-4 px-3 py-2 text-white overflow-hidden rounded-sm shadow shadow-white focus:outline-none">
                </div>

                {/* Experience */}
                <h1 className="font-mono text-3xl font-bold mt-15 ml-2">Experience</h1>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">

                        <div className="flex flex-col mt-3">
                            <span className="text-sm font-medium ml-3">Company Name</span>
                            <input
                                className="border px-4 py-3 rounded-xl mt-1"
                                type="text"
                                placeholder="Microsoft"
                                value={resume.companyName}
                                onChange={(e) => dispatch(updateExp({ field: "companyName", value: e.target.value }))}
                            />
                        </div>

                        <div className="flex flex-col mt-3">
                            <span className="text-sm font-medium ml-3">Job Title</span>
                            <input
                                className="border px-4 py-3 rounded-xl mt-1"
                                type="text"
                                placeholder="Web Developer"
                                value={resume.jobTittle}
                                onChange={(e) => dispatch(updateExp({ field: "jobTittle", value: e.target.value }))}
                            />
                        </div>

                        <div className="flex flex-col mt-5">
                            <span className="text-sm font-medium ml-3">Start Date - End Date</span>
                            <input
                                className="border px-4 py-3 rounded-xl mt-1"
                                type="text"
                                placeholder="Feb 2024 - Dec 2024"
                                value={resume.startEndDate}
                                onChange={(e) => dispatch(updateExp({ field: "startEndDate", value: e.target.value }))}
                            />
                        </div>

                        <div className="flex flex-col mt-5">
                            <span className="text-sm font-medium ml-3">Location</span>
                            <input
                                className="border px-4 py-3 rounded-xl mt-1"
                                type="text"
                                placeholder="Delhi"
                                value={resume.location}
                                onChange={(e) => dispatch(updateExp({ field: "location", value: e.target.value }))}
                            />
                        </div>

                    </div>

                    <div className="flex flex-col m-4">
                        <span className=" font-medium ml-3 mt-3">Company Description</span>
                        <div
                            ref={editorRef}
                            contentEditable
                            onInput={handleCompanyExprience}
                            className="h-20 mt-1 px-3 py-2 text-white overflow-hidden rounded-sm focus:outline-none bg-neutral-900">
                        </div>
                    </div>
                </div>

                {/* Project */}
                <h1 className="font-mono text-3xl font-bold mt-20 ml-2">Project</h1>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">

                        <div className="flex flex-col mt-3">
                            <span className="text-sm font-medium ml-3">Project Name</span>
                            <input
                                className="border px-4 py-3 rounded-xl mt-1"
                                type="text"
                                value={projectName}
                                placeholder="Music player"
                                onChange={(e) => setProjectName(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col mt-4">
                            <span className="text-sm font-medium ml-3">Start Date - End Date</span>
                            <input
                                className="border px-4 py-3 rounded-xl"
                                type="text"
                                value={projectStartEndDate}
                                placeholder="Feb 2024 - Marh 2024"
                                onChange={(e) => setProjectStateEndDate(e.target.value)}
                            />
                        </div>


                    </div>

                    <div className="flex flex-col m-4">
                        <span className=" font-medium ml-3 mt-3">Responsibility or Achievement </span>
                        <div
                            ref={editorProjectRef}
                            contentEditable
                            onInput={handleProjectdetail}
                            className="h-20 mt-1 px-3 py-2 text-white rounded-sm focus:outline-none bg-neutral-900 overflow-hidden">
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <button className="px-15 py-2 mt-2 cursor-pointer  bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 hover:scale-105 transition duration-300"
                            onClick={handleAddProject}
                        >Add</button>
                    </div>
                </div>

                {/* Education */}
                <h1 className="font-mono text-3xl font-bold mt-20 ml-2">Educatin</h1>
                <div>
                    <div className="grid grid-cols-1 gap-4 m-4">

                        <div className="flex flex-col mt-3">
                            <span className="text-sm font-medium ml-3">Collage Name</span>
                            <input
                                className="border px-4 py-3 rounded-xl mt-1"
                                type="text"
                                placeholder="University of Colorado"
                                value={resume.collageName}
                                onChange={(e) => dispatch(updateCollage({ field: "collageName", value: e.target.value }))}
                            />
                        </div>

                        <div className="flex flex-col mt-3">
                            <span className="text-sm font-medium ml-3">Dgree</span>
                            <input
                                className="border px-4 py-3 rounded-xl"
                                type="text"
                                placeholder="Bachelor of Computer Science"
                                value={resume.dgree}
                                onChange={(e) => dispatch(updateCollage({ field: "dgree", value: e.target.value }))}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                            <div className="flex flex-col mt-4">
                                <span className="text-sm font-medium ml-3">Date Complete</span>
                                <input
                                    className="border px-4 py-3 rounded-xl"
                                    type="text"
                                    placeholder="Marh 2024"
                                    value={resume.endDate}
                                    onChange={(e) => dispatch(updateCollage({ field: "endDate", value: e.target.value }))}
                                />
                            </div>

                            <div className="flex flex-col mt-4">
                                <span className="text-sm font-medium ml-3">Location</span>
                                <input
                                    className="border px-4 py-3 rounded-xl"
                                    type="text"
                                    placeholder="Delhi"
                                    value={resume.collageLocation}
                                    onChange={(e) => dispatch(updateCollage({ field: "collageLocation", value: e.target.value }))}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fillinformation


const SecandTemp = () => {
  return (
   <div className="w-full h-full flex justify-center bg-gray-100 shadow-sm shadow-neutral-300 rounded-xl">
  <main className="w-full h-full max-w-4xl bg-white p-2 font-sans text-black rounded-xl">
    
    {/* Header */}
    <header className="text-center sm:text-left">
      <h1 className="text-2xl sm:text-3xl font-bold">Meet Matlabi</h1>
      <p className="text-sm sm:text-base mt-1">
        Frontend Developer | React | JavaScript
      </p>

      <p className="text-xs sm:text-sm mt-1 leading-relaxed">
        Email: meet@email.com <br className="sm:hidden" />
        Phone: +91-XXXXXXXXXX <br className="sm:hidden" />
        GitHub: github.com/meet
      </p>
    </header>

    {/* Summary */}
    <section className="mt-2">
      <h2 className="text-base sm:text-lg font-semibold border-b border-black">
        Professional Summary
      </h2>
      <p className="text-sm leading-relaxed mt-2">
        Frontend Developer with experience building responsive web applications
        using React, JavaScript, and modern CSS. Strong understanding of clean
        UI, performance, and reusable components.
      </p>
    </section>

    {/* Skills */}
    <section className="mt-3">
      <h2 className="text-base sm:text-lg font-semibold border-b border-black">
        Skills
      </h2>

      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-1 text-sm list-disc list-inside">
        <li>React.js</li>
        <li>JavaScript (ES6+)</li>
        <li>HTML5 & CSS3</li>
        <li>Tailwind CSS</li>
        <li>Git & GitHub</li>
        <li>REST APIs</li>
      </ul>
    </section>

    {/* Experience */}
    <section className="mt-3">
      <h2 className="text-base sm:text-lg font-semibold border-b border-black ">
        Experience
      </h2>

      <div className="space-y-2">
        <h3 className="text-sm sm:text-base font-semibold">
          Frontend Developer
        </h3>
        <p className="text-xs sm:text-sm text-gray-700">
          Company Name | 2024 – Present
        </p>

        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Developed reusable React components for scalable UI</li>
          <li>Integrated REST APIs using Axios</li>
          <li>Improved performance and accessibility</li>
        </ul>
      </div>
    </section>

    {/* Projects */}
    <section className="mt-3">
      <h2 className="text-base sm:text-lg font-semibold border-b border-black">
        Projects
      </h2>

      <div className="space-y-2">
        <h3 className="text-sm sm:text-base font-semibold">
          JWT Authentication App
        </h3>

        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Implemented login and signup using JWT</li>
          <li>Protected routes with token-based authentication</li>
          <li>Built UI using React and Tailwind CSS</li>
        </ul>
      </div>
    </section>

    {/* Education */}
    <section>
      <h2 className="text-base sm:text-lg font-semibold border-b border-black mt-2">
        Education
      </h2>
      <p className="text-sm font-medium">
        Bachelor’s Degree in Computer Science
      </p>
      <p className="text-xs sm:text-sm text-gray-700">
        University Name | 2021 – 2024
      </p>
    </section>

  </main>
</div>

  )
}

export default SecandTemp;

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <section className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        {/* Profile picture */}
        <img
          src="/profile.JPG"
          alt="Profile photo"
          className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-100"
        />

        {/* Name and role */}
        <h1 className="mt-4 text-2xl font-bold text-gray-900">Mongkol Thongmon</h1>
        <p className="text-blue-600 font-medium">Software Engineer II</p>

        {/* About */}
        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
          Hi! I am Software Engineer with 5+ years of experience in enterprise application development.
          I specialize in building scalable web applications using modern technologies.
          I am passionate about learning new things and solving complex problems.
        </p>

        {/* Details */}
        <ul className="mt-6 text-left text-sm text-gray-700 space-y-2">
          <li> 📍  Location: Bangkok, Thailand</li>
          <li>📧 Email: mthongmo@cpaxtra.co.th</li>
          <li>🎓 Education: Khon Kaen University</li>
          <li>💼 Skills: HTML, CSS, JavaScript, TypeScript, Mendix, Java, SQL, Python</li>
        </ul>

        {/* Links */}
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://github.com/mongkolthongmon-dev"
            className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm hover:bg-gray-700"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mongkol-thongmon-829848396"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-500"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}

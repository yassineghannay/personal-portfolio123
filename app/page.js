
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to My Portfolio!</h1>
        <p className="mt-4 text-lg text-gray-700">
          Hi, I&apos;<span className="font-semibold">Yassine Ghannay</span>, a passionate software development student.
        </p>
        <p className="mt-2 text-gray-600">
          Explore my skills, projects, and contact me for opportunities.
        </p>
        <div className="mt-6">
          <a href="/about" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Learn More About Me
          </a>
        </div>
      </main>
    </>
  );
}

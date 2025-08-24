const StudentReadingPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Student Reading</h1>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {/* Main content */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Reading Material</h2>
            <p>This is the main reading content for the student.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Exercises</h2>
            <p>Here are some exercises related to the reading material.</p>
          </div>
        </div>
        <div className="lg:col-span-1 space-y-6">
          {/* Sidebar content */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Vocabulary</h2>
            <ul>
              <li>Word 1: Definition</li>
              <li>Word 2: Definition</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Additional Resources</h2>
            <p>Links to helpful websites and articles.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentReadingPage

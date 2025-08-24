const StudentSpeakingPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Speaking Practice</h1>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {/* Main content */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            <p>Prepare a short speech on the given topic.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">Topic</h2>
            <p>Describe your favorite hobby.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">Record Your Speech</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Start Recording
            </button>
          </div>
        </div>
        <div className="lg:col-span-1 space-y-6">
          {/* Sidebar content */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">Tips</h2>
            <ul>
              <li>Speak clearly and confidently.</li>
              <li>Maintain eye contact with the camera.</li>
              <li>Use appropriate vocabulary.</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">Resources</h2>
            <a href="#" className="text-blue-500 hover:underline">
              Vocabulary List
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentSpeakingPage

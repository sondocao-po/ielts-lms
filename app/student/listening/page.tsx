"use client"

const StudentListeningPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Listening Practice</h1>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {/* Main content */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            <p>Listen to the audio and answer the questions below.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">Audio Player</h2>
            {/* Replace with your audio player component */}
            <p>Audio player will be here.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">Questions</h2>
            {/* Replace with your question components */}
            <p>Questions will be here.</p>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-6">
          {/* Sidebar content */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">Progress</h2>
            <p>You have completed 50% of this lesson.</p>
            {/* Replace with your progress component */}
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">Resources</h2>
            <ul>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Transcript
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Vocabulary List
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentListeningPage

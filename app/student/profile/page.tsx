const StudentProfilePage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Student Profile</h1>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-1">
          {/* Profile sidebar content */}
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Profile Information</h2>
            <p>
              <strong>Name:</strong> John Doe
            </p>
            <p>
              <strong>Email:</strong> john.doe@example.com
            </p>
            <p>
              <strong>Major:</strong> Computer Science
            </p>
          </div>
        </div>
        <div className="lg:col-span-2">
          {/* Main profile content */}
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Courses</h2>
            <ul>
              <li>Introduction to Programming</li>
              <li>Data Structures and Algorithms</li>
              <li>Database Management Systems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentProfilePage

const StudentSettingsPage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Student Settings</h1>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-1">
          {/* Settings sidebar content */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-2">Account</h2>
            <ul>
              <li className="py-2 hover:bg-gray-100 rounded-md px-2 cursor-pointer">Profile</li>
              <li className="py-2 hover:bg-gray-100 rounded-md px-2 cursor-pointer">Password</li>
              <li className="py-2 hover:bg-gray-100 rounded-md px-2 cursor-pointer">Notifications</li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-2">
          {/* Main settings content */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-2">Profile Information</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Email"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentSettingsPage

const StudentWritingPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Student Writing</h1>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {/* Main content */}
          <p>This is the main content area for student writing.</p>
        </div>
        <div className="lg:col-span-1 space-y-6">
          {/* Sidebar content */}
          <p>This is the sidebar area.</p>
        </div>
      </div>
    </div>
  )
}

export default StudentWritingPage

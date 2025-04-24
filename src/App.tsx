import './App.css'
function App() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 ">
    <h1
      className={` text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 p-4`}
      style={{
        fontSize: '100px', // Change this value as needed
        fontWeight: 'bold',
        color: 'transparent',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        backgroundImage: 'linear-gradient(to right, #FFA089, #E5583A)',
        padding: '1rem',
      }}
    >
      Hi I&apos;m Kalyan
    </h1>
  </div>

  )
}

export default App

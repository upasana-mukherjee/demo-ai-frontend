import './App.css'
import {User, MessageCircle, X, Heart } from 'lucide-react';
const ProfileSelector = () => (
    <div className= "rounded-lg overflow-hidden bg-white shadow-lg">
      <div className= "relative">
        <img src="http://localhost:8080/images/0e985a4b-6944-4dec-b0f7-4a4453592dd0.jpg"/>
        <div className="absolute bottom-0 left-0 right-0 text-white p-4 bg-gradient-to-t from-black">
          <h2 className='text-3xl font-bold'>Foo Bar, 30</h2>
        </div>
      </div>
      <div className="p-4">
          <p className="text-gray-600 mb-4">Hello! Let's have a conversation.</p>
      </div>
      <div className="p-4 flex justify-center space-x-4">
      <button className='bg-red-500 rounded-full p-4 text-white hover:bg-red-700'
        onClick={() => console.log("left")}>
        <X size={24} />
      </button>
      <button className='bg-green-500 rounded-full p-4 text-white hover:bg-green-700'
        onClick={() => console.log("right")}>
        <Heart size={24} />
      </button>
      </div>
    </div>
);

function App() {
  return (
  <div className="max-w-md mx-auto p-4">
    <nav className="flex justify-between mb-4">
      <User />
      <MessageCircle />
    </nav>
    <ProfileSelector />
  </div>
  )
}

export default App
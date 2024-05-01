import Navbar from "./components/Navbar/Navbar"
import Avatar from "./assets/avatar.png"

function App() {

  return (
    <>
      <header>
        <div className="background-black">
          <Navbar />

          <img className="avatar-img" src={Avatar} alt="" />

          <h2 className="header-h2">José Alvarez <span>Desarrollador Front End</span></h2>
        </div>
      </header>
    </>
  )
}

export default App

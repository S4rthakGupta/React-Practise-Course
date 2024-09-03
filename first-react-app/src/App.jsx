import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"

function App() {

  return (
    <>
    <Navbar/>

    <div className="cards">
    <Card title="card1" description="desc 1" />
    <Card title="card2" description="desc 2" />
    <Card title="card3" description="desc 3" />
    <Card title="card4" description="desc 4" />
    <Card title="card5" description="desc 5" />
    
    </div>

    <Footer/>
    </>
  )
}

export default App

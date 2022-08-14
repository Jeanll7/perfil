import MainContent from './components/MainContent'
import Navbar from './components/Navbar'
import './styles/components/app.scss'

function App() {
  return (
    <div className="main" id="portfolio">
      <h1>Jean Leal</h1>
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App

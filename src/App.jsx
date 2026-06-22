import {
BrowserRouter,
Routes,
Route
}
from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {

return (

<BrowserRouter>

<div className="overflow-x-hidden">

<Navbar />

<div className="pt-24">

<Routes>

<Route
path="/"
element={<Home />}
/>

<Route
path="/about"
element={<About />}
/>

<Route
path="/education"
element={<Education />}
/>

<Route
path="/experience"
element={<Experience />}
/>

<Route
path="/projects"
element={<Projects />}
/>

</Routes>

</div>

</div>

</BrowserRouter>

)

}

export default App

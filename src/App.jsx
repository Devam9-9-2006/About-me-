import {
BrowserRouter,
Routes,
Route
}
from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import About from './pages/About'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Project from './pages/Project'
import Contact from './pages/Contact'

function App() {

return (

<BrowserRouter>

<div

className="

min-h-screen

overflow-x-hidden

bg-[#050816]

text-white

"

>

<Navbar />

<div

className="

pt-32

md:pt-24

"

>

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
element={<Project />}
/>

<Route
path="/contact"
element={<Contact />}
/>

</Routes>

</div>

</div>

</BrowserRouter>

)

}

export default App

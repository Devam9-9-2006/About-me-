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
import Project from './components/Project'
import Contact from './components/Contact'

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

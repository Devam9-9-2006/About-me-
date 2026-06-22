import './App.css'

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

function App() {
return (

<BrowserRouter>

<Navbar />

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

</Routes>

</BrowserRouter>

)
}

export default App

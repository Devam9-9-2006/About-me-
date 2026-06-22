import { Link } from 'react-router-dom'

function Navbar() {

return (

<nav

className="

fixed
top-0
left-0

w-full

px-6
md:px-10
lg:px-24

py-5

flex

flex-col
md:flex-row

gap-5

justify-between

items-center

bg-black/20

backdrop-blur-xl

border-b

border-white/10

z-50

text-white

"

>

<h2

className="

text-2xl

md:text-3xl

font-bold

tracking-widest

text-blue-400

"

>

DEVAM

</h2>

<ul

className="

flex

flex-wrap

justify-center

gap-5

md:gap-10

text-sm

md:text-lg

font-medium

"

>

<li>

<Link

to="/"

className="
hover:text-blue-400
duration-300
"

>

Home

</Link>

</li>

<li>

<Link

to="/about"

className="
hover:text-blue-400
duration-300
"

>

About Me

</Link>

</li>

<li>

<Link

to="/education"

className="
hover:text-blue-400
duration-300
"

>

Education

</Link>

</li>

<li>

<Link

to="/experience"

className="
hover:text-blue-400
duration-300
"

>

Experience

</Link>

</li>

<li>

<Link

to="/projects"

className="
hover:text-blue-400
duration-300
"

>

Projects

</Link>

</li>

</ul>

</nav>

)

}

export default Navbar

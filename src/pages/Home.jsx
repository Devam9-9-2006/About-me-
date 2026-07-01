import { useNavigate } from 'react-router-dom'

function Home() {

const navigate = useNavigate()

return (

<section

className="

min-h-screen

bg-[#050816]

text-white

flex

flex-col

lg:flex-row

items-center

justify-between

px-10

lg:px-24

overflow-hidden

"

>

<div

className="

w-full

lg:w-1/2

"

>

<p

className="

text-blue-400

tracking-[6px]

mb-6

"

>

✦ WEB DEVELOPER • REACT

</p>

<h1

className="

text-6xl

md:text-7xl

lg:text-8xl

font-bold

leading-tight

"

>

Hi, I'm

<span className="text-blue-400">

Devam

</span>

</h1>

<h2

className="

mt-6

text-3xl

text-gray-300

"

>

Building Modern Experiences

</h2>

<p

className="

mt-8

text-gray-400

text-lg

leading-9

max-w-[650px]

"

>

B.Tech AI & DS Student creating
futuristic websites and premium
digital experiences with React,
modern UI and innovation.

</p>

<div

className="

flex

gap-5

mt-12

flex-wrap

"

>

<button

onClick={() => navigate('/projects')}

className="

bg-blue-500

hover:bg-blue-600

hover:scale-105

duration-300

px-8

py-4

rounded-2xl

font-medium

"

>

View Projects

</button>

<button

onClick={() => navigate('/about')}

className="

border

border-blue-400

hover:bg-blue-500

hover:border-blue-500

duration-300

px-8

py-4

rounded-2xl

font-medium

"

>

Explore

</button>

</div>

</div>

<div

className="

w-full

lg:w-1/2

flex

justify-center

relative

mt-20

lg:mt-0

"

>

<div

className="

absolute

w-[350px]

h-[350px]

rounded-full

bg-blue-500/30

blur-[120px]

animate-pulse

"

> </div>

<div

className="

w-[340px]

h-[240px]

rounded-[35px]

bg-white/5

backdrop-blur-xl

border

border-white/10

flex

flex-col

justify-center

items-center

hover:scale-105

duration-500

"

>

<h3

className="

text-6xl

font-bold

text-blue-400

"

>

DEVAM

</h3>

<p

className="

mt-5

text-gray-400

text-lg

"

>

React Developer

</p>

</div>

</div>

</section>

)

}

export default Home

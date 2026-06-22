function About() {

const cards = [
{
icon:'🎓',
title:'Education',
value:'B.Tech AI & DS'
},
{
icon:'💼',
title:'Experience',
value:'Web Development'
},
{
icon:'🚀',
title:'Projects',
value:'Portfolio & React Apps'
}
]

return (

<section

className="

min-h-screen

bg-[#050816]

text-white

px-6

md:px-10

lg:px-24

py-32

flex

flex-col

lg:flex-row

items-center

justify-between

gap-20

"

>

<div

className="

w-full

lg:w-[40%]

flex

justify-center

"

>

<div

className="

w-[240px]

h-[240px]

md:w-[320px]

md:h-[320px]

rounded-full

bg-gradient-to-br

from-blue-500

to-blue-900

flex

items-center

justify-center

text-[90px]

md:text-[130px]

font-bold

shadow-[0_0_120px_rgba(59,130,246,.35)]

hover:scale-105

duration-500

"

>

D

</div>

</div>

<div

className="

w-full

lg:w-[60%]

"

>

<p

className="

text-blue-400

tracking-[6px]

text-sm

"

>

ABOUT ME

</p>

<h1

className="

text-5xl

md:text-6xl

lg:text-7xl

font-bold

mt-6

leading-tight

"

>

Turning Ideas Into

<span className="text-blue-400">

Modern Experiences

</span>

</h1>

<p

className="

mt-10

text-gray-400

leading-8

md:leading-10

text-base

md:text-lg

"

>

Hello, I'm Devam — a passionate
B.Tech student specializing in
Artificial Intelligence & Data Science
with strong interest in frontend
development and modern UI.

I enjoy creating premium digital
experiences and transforming ideas
into modern interfaces.

My journey expanded from web
technologies into React, design
systems and intelligent solutions.

I continuously improve through
learning, projects and practical
development.

My goal is to become a developer
capable of building impactful
technology and solving real-world
problems.

</p>

<div

className="

grid

grid-cols-1

md:grid-cols-2

xl:grid-cols-3

gap-6

mt-16

"

>

{

cards.map((card)=>(

<div

key={card.title}

className="

bg-white/5

backdrop-blur-xl

rounded-[30px]

p-8

border

border-white/10

hover:-translate-y-2

duration-500

"

>

<h3

className="

text-blue-400

text-2xl

"

>

{card.icon}

{' '}

{card.title}

</h3>

<p

className="

mt-5

text-gray-300

"

>

{card.value}

</p>

</div>

))

}

</div>

</div>

</section>

)

}

export default About

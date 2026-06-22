function About() {

return (

<section
className="

min-h-screen

bg-[#050816]

text-white

px-10

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

w-[320px]

h-[320px]

rounded-full

bg-gradient-to-br

from-blue-500

to-blue-900

flex

items-center

justify-center

text-[130px]

font-bold

shadow-[0_0_120px_rgba(59,130,246,.35)]

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

"

>

ABOUT ME

</p>

<h1
className="

text-5xl

lg:text-7xl

font-bold

mt-6

leading-tight

"

>

Turning Ideas Into

<span
className="

text-blue-400

"

>

Modern Experiences

</span>

</h1>

<p
className="

mt-10

text-gray-400

leading-10

text-lg

"

>

Hello, I'm Devam — a passionate
B.Tech student specializing in
Artificial Intelligence & Data Science
with strong interest in frontend
development and modern UI design.

I enjoy transforming ideas into
interactive digital experiences and
building premium user interfaces.

My journey started from learning
web technologies and expanded into
React development, design systems
and intelligent technologies.

I continuously improve through
project building, experimentation and
creative development.

My goal is to become a developer
capable of creating impactful digital
products and solving real-world
problems through technology.

</p>

<div
className="

grid

grid-cols-1

md:grid-cols-3

gap-6

mt-16

"

>

<div
className="

bg-white/5

backdrop-blur-xl

rounded-[30px]

p-8

hover:-translate-y-3

duration-500

"

>

<h3
className="

text-blue-400

text-2xl

"

>

🎓 Education

</h3>

<p className="mt-4">

B.Tech AI & DS

</p>

</div>

<div
className="

bg-white/5

backdrop-blur-xl

rounded-[30px]

p-8

hover:-translate-y-3

duration-500

"

>

<h3
className="

text-blue-400

text-2xl

"

>

💼 Experience

</h3>

<p className="mt-4">

Web Development

</p>

</div>

<div
className="

bg-white/5

backdrop-blur-xl

rounded-[30px]

p-8

hover:-translate-y-3

duration-500

"

>

<h3
className="

text-blue-400

text-2xl

"

>

🚀 Projects

</h3>

<p className="mt-4">

Portfolio & React Apps

</p>

</div>

</div>

</div>

</section>

)

}

export default About

function Education() {

return (

<section
className="

min-h-screen

bg-[#050816]

text-white

px-10

lg:px-24

py-32

"

>

<div className="text-center">

<p
className="

text-blue-400

tracking-[6px]

"

>

ACADEMIC JOURNEY

</p>

<h1
className="

text-5xl

lg:text-7xl

font-bold

mt-5

"

>

My

<span
className="

text-blue-400

"

>

Education

</span>

</h1>

</div>

<div
className="

relative

mt-24

space-y-10

"

>

<div
className="

absolute

left-1/2

top-0

hidden

lg:block

w-[3px]

h-full

bg-blue-500/30

"

> </div>

<div
className="

bg-white/5

backdrop-blur-xl

border

border-white/10

rounded-[30px]

p-10

lg:w-[46%]

hover:-translate-y-3

duration-500

"

>

<div
className="

text-blue-400

mb-5

"

>

2022 — 2025

</div>

<h2
className="

text-4xl

"

>

Diploma in Computer Engineering

</h2>

<h4
className="

mt-5

text-gray-300

"

>

LJ Polytechnic

</h4>

<p
className="

mt-8

text-gray-400

leading-9

"

>

Built strong foundations in
programming, frontend technologies,
software development and problem
solving.

Worked on practical projects while
learning application development,
database concepts and technical
implementation.

</p>

<div
className="

flex

gap-3

mt-8

flex-wrap

"

>

{

[
'HTML',
'CSS',
'JavaScript',
'React',
'Database',
'Programming'

]

.map((item)=>(

<span

key={item}

className="

bg-blue-500/15

text-blue-300

px-5

py-3

rounded-full

"

>

{item}

</span>

))

}

</div>

</div>

<div
className="

bg-white/5

backdrop-blur-xl

border

border-white/10

rounded-[30px]

p-10

lg:ml-auto

lg:w-[46%]

hover:-translate-y-3

duration-500

"

>

<div
className="

text-blue-400

mb-5

"

>

Continuing

</div>

<h2
className="

text-4xl

"

>

B.Tech — AI & Data Science

</h2>

<h4
className="

mt-5

text-gray-300

"

>

JG University

</h4>

<p
className="

mt-8

text-gray-400

leading-9

"

>

Currently exploring Artificial
Intelligence, Data Science,
modern software development
and building practical
industry-level projects.

Focused on learning technologies
that combine innovation,
problem solving and real-world
implementation.

</p>

<div
className="

flex

gap-3

mt-8

flex-wrap

"

>

{

[
'AI',
'Data Science',
'Python',
'Machine Learning',
'React',
'Frontend'

]

.map((item)=>(

<span

key={item}

className="

bg-blue-500/15

text-blue-300

px-5

py-3

rounded-full

"

>

{item}

</span>

))

}

</div>

</div>

</div>

</section>

)

}

export default Education

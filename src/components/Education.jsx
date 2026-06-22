function Education() {

const diplomaSkills = [
'HTML',
'CSS',
'JavaScript',
'React',
'Database',
'Programming'
]

const degreeSkills = [
'AI',
'Data Science',
'Python',
'Machine Learning',
'React',
'Frontend'
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

"

>

<div className="text-center">

<p

className="

text-blue-400

tracking-[6px]

text-sm

"

>

ACADEMIC JOURNEY

</p>

<h1

className="

text-5xl

md:text-6xl

lg:text-7xl

font-bold

mt-5

"

>

My

<span className="text-blue-400">

Education

</span>

</h1>

</div>

<div

className="

relative

mt-20

space-y-10

"

>

<div

className="

hidden

xl:block

absolute

left-1/2

top-0

w-[2px]

h-full

bg-blue-500/20

"

> </div>

<div

className="

bg-white/5

backdrop-blur-xl

border

border-white/10

rounded-[30px]

p-8

md:p-10

xl:w-[46%]

hover:-translate-y-2

duration-500

"

>

<p

className="

text-blue-400

"

>

2022 — 2025

</p>

<h2

className="

text-3xl

md:text-4xl

mt-5

"

>

Diploma in Computer Engineering

</h2>

<h4

className="

mt-4

text-gray-300

"

>

LJ Polytechnic

</h4>

<p

className="

mt-8

leading-8

text-gray-400

"

>

Built strong foundations in
programming, frontend
development, software
engineering and practical
technical implementation.

Worked on academic projects
while improving development
and problem-solving skills.

</p>

<div

className="

flex

flex-wrap

gap-3

mt-10

"

>

{

diplomaSkills.map((skill)=>(

<span

key={skill}

className="

px-5

py-3

rounded-full

bg-blue-500/15

text-blue-300

text-sm

"

>

{skill}

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

p-8

md:p-10

xl:ml-auto

xl:w-[46%]

hover:-translate-y-2

duration-500

"

>

<p

className="

text-blue-400

"

>

Continuing

</p>

<h2

className="

text-3xl

md:text-4xl

mt-5

"

>

B.Tech — AI & Data Science

</h2>

<h4

className="

mt-4

text-gray-300

"

>

JG University

</h4>

<p

className="

mt-8

leading-8

text-gray-400

"

>

Currently exploring Artificial
Intelligence, Data Science and
modern software technologies.

Focused on building practical
knowledge through projects,
learning and industry-ready
development.

</p>

<div

className="

flex

flex-wrap

gap-3

mt-10

"

>

{

degreeSkills.map((skill)=>(

<span

key={skill}

className="

px-5

py-3

rounded-full

bg-blue-500/15

text-blue-300

text-sm

"

>

{skill}

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

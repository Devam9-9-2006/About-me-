function Experience() {

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

MY EXPERIENCE

</p>

<h1
className="

text-5xl

lg:text-7xl

font-bold

mt-5

"

>

Experience

<span
className="

text-blue-400

"

>

& Internship

</span>

</h1>

</div>

<div
className="

grid

grid-cols-1

xl:grid-cols-2

gap-10

mt-20

"

>

<div
className="

bg-white/5

backdrop-blur-xl

rounded-[30px]

p-10

border

border-white/10

hover:-translate-y-3

duration-500

"

>

<div className="text-6xl">
💼
</div>

<h2
className="

text-4xl

mt-6

"

>

Web Development Internship

</h2>

<h4
className="

mt-4

text-blue-400

"

>

Frontend • React • UI Development

</h4>

<p
className="

mt-8

leading-9

text-gray-400

"

>

Completed practical training in
modern web development with focus
on building responsive interfaces,
frontend architecture and premium
user experiences.

Worked with React components,
clean UI structure and practical
development workflows while
improving debugging and design
implementation skills.

</p>

<div
className="

flex

gap-3

flex-wrap

mt-10

"

>

{

[
'React',
'HTML',
'CSS',
'JavaScript',
'Responsive UI',
'Debugging'

]

.map((skill)=>(

<span

key={skill}

className="

px-5

py-3

rounded-full

bg-blue-500/15

text-blue-300

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

rounded-[30px]

p-10

border

border-white/10

hover:-translate-y-3

duration-500

"

>

<div className="text-6xl">
🚀
</div>

<h2
className="

text-4xl

mt-6

"

>

Fresher Developer Journey

</h2>

<h4
className="

mt-4

text-blue-400

"

>

Learning • Building • Growing

</h4>

<p
className="

mt-8

leading-9

text-gray-400

"

>

Actively creating personal and
academic projects to strengthen
real-world experience.

Focused on frontend engineering,
modern UI systems, project building
and continuous improvement through
hands-on development.

Building strong foundations for a
professional software career.

</p>

<div
className="

flex

gap-3

flex-wrap

mt-10

"

>

{

[
'Portfolio',
'Projects',
'Problem Solving',
'UI Design',
'AI Learning',
'Growth'

]

.map((skill)=>(

<span

key={skill}

className="

px-5

py-3

rounded-full

bg-blue-500/15

text-blue-300

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

export default Experience

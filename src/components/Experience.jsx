function Experience() {

const internshipSkills = [
'React',
'HTML',
'CSS',
'JavaScript',
'Responsive UI',
'Debugging'
]

const fresherSkills = [
'Portfolio',
'Projects',
'Problem Solving',
'UI Design',
'AI Learning',
'Growth'
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

MY EXPERIENCE

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

Experience

<span className="text-blue-400">

& Internship

</span>

</h1>

</div>

<div

className="

grid

grid-cols-1

xl:grid-cols-2

gap-8

mt-20

"

>

<div

className="

bg-white/5

backdrop-blur-xl

rounded-[30px]

p-8

md:p-10

border

border-white/10

hover:-translate-y-2

duration-500

"

>

<div className="text-5xl">
💼
</div>

<h2

className="

text-3xl

md:text-4xl

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

leading-8

text-gray-400

"

>

Completed practical training in
modern web development focused
on responsive websites, UI design
and frontend architecture.

Worked with reusable React
components and improved real
development workflow experience.

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

internshipSkills.map((skill)=>(

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

rounded-[30px]

p-8

md:p-10

border

border-white/10

hover:-translate-y-2

duration-500

"

>

<div className="text-5xl">
🚀
</div>

<h2

className="

text-3xl

md:text-4xl

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

leading-8

text-gray-400

"

>

Building personal and academic
projects while continuously
improving development skills.

Focused on creating modern UI,
learning frontend technologies
and preparing for professional
software opportunities.

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

fresherSkills.map((skill)=>(

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

export default Experience

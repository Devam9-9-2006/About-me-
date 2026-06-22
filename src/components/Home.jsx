import { useNavigate } from 'react-router-dom'

function Home() {

const navigate = useNavigate()

return (

<section className="min-h-screen">

<div className="buttons">

<button

className="

bg-blue-500

px-8

py-4

rounded-2xl

hover:scale-105

duration-300

"

onClick={() => navigate('/projects')}

>

View Projects

</button>

<button

className="

border

border-blue-400

px-8

py-4

rounded-2xl

"

>

Explore

</button>

</div>

</section>

)

}

export default Home

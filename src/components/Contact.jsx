import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {

const form = useRef()

const [loading,setLoading]=useState(false)

const sendEmail=(e)=>{

e.preventDefault()

setLoading(true)

emailjs.sendForm(

'service_yy75hoc',

'template_wvnq57b',

form.current,

'x73vCMhTIiOHpC2J0'

)

.then(()=>{

alert('Message Sent Successfully ✅')

form.current.reset()

setLoading(false)

})

.catch((error)=>{

console.log(error)

alert('Failed To Send Message ❌')

setLoading(false)

})

}

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

<div
className="
max-w-[800px]
mx-auto
"
>

<h1

className="

text-5xl

md:text-6xl

font-bold

text-center

"

>

Contact

<span className="text-blue-400">

Me

</span>

</h1>

<p

className="

text-center

text-gray-400

mt-6

"

>

Send your question,
project request or message.

</p>

<form

ref={form}

onSubmit={sendEmail}

className="

mt-16

space-y-6

"

>

<input

type="text"

name="name"

placeholder="Your Name"

required

className="

w-full

p-5

rounded-2xl

bg-white/5

border

border-white/10

outline-none

"

/>

<input

type="email"

name="email"

placeholder="Your Email"

required

className="

w-full

p-5

rounded-2xl

bg-white/5

border

border-white/10

outline-none

"

/>

<textarea

rows="6"

name="message"

placeholder="Write Your Message"

required

className="

w-full

p-5

rounded-2xl

bg-white/5

border

border-white/10

outline-none

"

></textarea>

<button

type="submit"

disabled={loading}

className="

w-full

bg-blue-500

hover:bg-blue-600

duration-300

py-5

rounded-2xl

font-semibold

"

>

{

loading

?

'Sending...'

:

'Send Message'

}

</button>

</form>

</div>

</section>

)

}

export default Contact

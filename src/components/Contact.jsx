import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Formik } from 'formik'
import * as Yup from 'yup'

function Contact() {

const formRef = useRef()

const [loading,setLoading]=useState(false)

const schema=Yup.object({

name:Yup.string()
.min(2,'Too Short')
.required('Name Required'),

email:Yup.string()
.email('Invalid Email')
.required('Email Required'),

message:Yup.string()
.min(10,'Minimum 10 characters')
.required('Message Required')

})

const sendEmail=(values,{resetForm})=>{

setLoading(true)

emailjs.send(

'service_yy75hoc',

'template_wvnq57b',

values,

'x73vCMhTIiOHpC2J0'

)

.then(()=>{

alert('Message Sent Successfully ✅')

resetForm()

setLoading(false)

})

.catch(()=>{

alert('Failed To Send ❌')

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

md:px-24

py-32

"

>

<div className="max-w-[800px] mx-auto">

<h1
className="
text-5xl
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

<Formik

initialValues={{
name:'',
email:'',
message:''
}}

validationSchema={schema}

onSubmit={sendEmail}

>

{

({

values,
errors,
touched,
handleChange,
handleSubmit

})=>(

<form
ref={formRef}
onSubmit={handleSubmit}
className="mt-16 space-y-6"
>

<input

name="name"

placeholder="Your Name"

value={values.name}

onChange={handleChange}

className="
w-full
p-5
rounded-2xl
bg-white/5
"

>

</input>

{

touched.name&&errors.name&&

<p className="text-red-400">

{errors.name}

</p>

}

<input

name="email"

type="email"

placeholder="Your Email"

value={values.email}

onChange={handleChange}

className="
w-full
p-5
rounded-2xl
bg-white/5
"

>

</input>

{

touched.email&&errors.email&&

<p className="text-red-400">

{errors.email}

</p>

}

<textarea

rows="6"

name="message"

placeholder="Write Message"

value={values.message}

onChange={handleChange}

className="
w-full
p-5
rounded-2xl
bg-white/5
"

></textarea>

{

touched.message&&errors.message&&

<p className="text-red-400">

{errors.message}

</p>

}

<button

type="submit"

disabled={loading}

className="

w-full

bg-blue-500

py-5

rounded-2xl

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

)

}

</Formik>

</div>

</section>

)

}

export default Contact

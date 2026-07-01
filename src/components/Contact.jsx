import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Formik } from 'formik'
import * as Yup from 'yup'

function Contact() {
  const [loading, setLoading] = useState(false)

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Name is required'),

    email: Yup.string()
      .email('Please enter a valid email')
      .required('Email is required'),

    subject: Yup.string()
      .required('Subject is required'),

    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .required('Message is required'),
  })

  const sendEmail = (values, { resetForm }) => {
    setLoading(true)

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        values,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert('✅ Message Sent Successfully!')
        resetForm()
      })
      .catch((error) => {
        console.error(error)
        alert('❌ Failed To Send Message')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <section className="min-h-screen bg-[#050816] text-white px-6 md:px-10 lg:px-24 py-32">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl md:text-6xl font-bold text-center">
          Contact <span className="text-blue-400">Me</span>
        </h1>

        <p className="text-center text-gray-400 mt-6">
          Have a question, project idea or collaboration opportunity?
          Feel free to send me a message.
        </p>

        <Formik
          initialValues={{
            name: '',
            email: '',
            subject: '',
            message: '',
          }}
          validationSchema={validationSchema}
          onSubmit={sendEmail}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form
              onSubmit={handleSubmit}
              className="mt-16 space-y-6"
            >

              {/* Name */}

              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-blue-500"
                />

                {touched.name && errors.name && (
                  <p className="text-red-400 mt-2">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-blue-500"
                />

                {touched.email && errors.email && (
                  <p className="text-red-400 mt-2">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject */}

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-blue-500"
                />

                {touched.subject && errors.subject && (
                  <p className="text-red-400 mt-2">
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}

              <div>
                <textarea
                  rows="6"
                  name="message"
                  placeholder="Write your message..."
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-blue-500 resize-none"
                />

                {touched.message && errors.message && (
                  <p className="text-red-400 mt-2">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 hover:bg-blue-600 duration-300 py-5 rounded-2xl font-semibold"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

            </form>
          )}
        </Formik>

      </div>

    </section>
  )
}

export default Contact
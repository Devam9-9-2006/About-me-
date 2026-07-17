import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: "",
    password: "",
    remember: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting, setStatus, resetForm }) => {
    const admin = {
      email: "devampanchal99@gmail.com",
      password: "123456",
    };

    if (
      values.email === admin.email &&
      values.password === admin.password
    ) {
      localStorage.setItem("isAdmin", "true");

      if (values.remember) {
        localStorage.setItem("adminEmail", values.email);
      }

      setStatus({
        success: "Login Successful!",
      });

      resetForm();

      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 1000);
    } else {
      setStatus({
        error: "Invalid Email or Password",
      });
    }

    setSubmitting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#050816] via-[#0b1023] to-[#050816] px-5">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-center text-white">
          Admin Login
        </h1>

        <p className="text-center text-gray-300 mt-2">
          Welcome back! Please login.
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, status }) => (
            <Form className="space-y-6 mt-8">

              {/* Email */}

              <div>

                <div className="relative">

                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <Field
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#111827] border border-slate-700 text-white outline-none focus:border-blue-500"
                  />

                </div>

                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-400 text-sm mt-2"
                />

              </div>

              {/* Password */}

              <div>

                <div className="relative">

                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="w-full pl-12 pr-12 py-4 rounded-xl bg-[#111827] border border-slate-700 text-white outline-none focus:border-blue-500"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>

                </div>

                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-400 text-sm mt-2"
                />

              </div>

              {/* Remember */}

              <div className="flex justify-between items-center">

                <label className="flex items-center gap-2 text-gray-300">

                  <Field type="checkbox" name="remember" />

                  Remember Me

                </label>

                <button
                  type="button"
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  Forgot Password?
                </button>

              </div>

              {/* Messages */}

              {status?.error && (
                <div className="bg-red-500/20 border border-red-500 rounded-xl p-3 text-center text-red-400">
                  {status.error}
                </div>
              )}

              {status?.success && (
                <div className="bg-green-500/20 border border-green-500 rounded-xl p-3 text-center text-green-400">
                  {status.success}
                </div>
              )}

              {/* Login Button */}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold transition duration-300"
              >
                {isSubmitting ? "Logging In..." : "Login"}
              </button>

            </Form>
          )}
        </Formik>

      </div>

    </div>
  );
}

export default Login;
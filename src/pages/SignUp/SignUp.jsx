import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../features/auth/authApi";

function SignUp() {
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, { error, isError, isSuccess, isLoading }] =
    useRegisterMutation();

  const [errorObj, setErrorObj] = useState({
    name: "",
    email: "",
    password: "",
  });

  const from = location?.state?.from || "/";
  if (!isError && isSuccess) {
    console.log("in login", from);
    navigate(from, { replace: true });
  }
  const handleSignUp = (e) => {
    e.preventDefault();
    const userObj = { name, email, password };
    register(userObj);
  };
  console.log(error);
  useEffect(() => {
    const { data: { message, errors = {} } = {} } = error || {};
    if (errors.name) {
      setErrorObj((pre) => ({ ...pre, name: errors?.name?.msg }));
    } else {
      setErrorObj((pre) => ({ ...pre, name: "" }));
    }
    if (errors.password) {
      setErrorObj((pre) => ({ ...pre, password: errors?.password?.msg }));
    } else {
      setErrorObj((pre) => ({ ...pre, password: "" }));
    }
    if (message?.includes("email_1 dup key")) {
      setErrorObj((pre) => ({
        ...pre,
        email: "Email Already Used, Try With Another Email",
      }));
    } else {
      setErrorObj((pre) => ({ ...pre, email: "" }));
    }

    if (message?.includes("Password must be at least 4 characters")) {
      setErrorObj((pre) => ({
        ...pre,
        password: "Password must be at least 4 characters",
      }));
    } else {
      setErrorObj((pre) => ({ ...pre, password: "" }));
    }
  }, [error]);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center pt-10 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="text-xl text-blue-500 font-bold text-center">
          Task Management
        </h1>
        <h2 className="mt-2 text-center text-xl leading-9 tracking-tight text-gray-900">
          Create New Account
        </h2>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSignUp} className="space-y-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="name"
                placeholder="John Snow"
                className="input input-bordered focus:outline-none w-full"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <p className="text-red-500 text-sm">
              {errorObj.name && errorObj.name}
            </p>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email Address
            </label>
            <div className="mt-">
              <input
                type="email"
                id="email"
                placeholder="jhon@gmail.com"
                className="input input-bordered focus:outline-none w-full"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <p className="text-red-500 text-sm">
              {errorObj.email && errorObj.email}
            </p>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                type="password"
                placeholder="********"
                className="input input-bordered focus:outline-none w-full"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <p className="text-red-500 text-sm">
              {errorObj.password && errorObj.password}
            </p>
          </div>

          <div>
            <button
              type="submit"
              className={`flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                isLoading && "cursor-wait"
              }`}
              disabled={isLoading}
            >
              {!isLoading ? "Sign Up" : "Loading..."}
            </button>
          </div>
        </form>

        <p className="mt-2 text-center text-sm text-gray-500">
          Already a member?{" "}
          <Link
            to="/log-in"
            className="font-semibold leading-6 text-primary hover:text-blue-500"
          >
            Log In Here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;

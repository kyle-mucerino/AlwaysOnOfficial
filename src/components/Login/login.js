import '../Login/login.css';

const Login = () => {
  return (
    <div className="login justify-center items-center flex flex-col border-top-2 border-black border-2">
      <h1 className="text-3xl sm:text-6xl poppins-bold p-2 sm:p-4 mt-2">
        Login to the Platform
      </h1>
      <a
        className="text-lg sm:text-4xl open-sans-regular p-2 sm:p-2 border-black border-2 rounded-lg bg-yellow-500"
        href="https://app.alwayson.ai/login"
        aria-label="Login"
        target="_blank"
        rel="noreferrer" 
      >
        Login
      </a>
    </div>
  );
}

export default Login;

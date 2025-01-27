import "../Login/login.css";

const Login = () => {
  return (
    <div className="login flex flex-col justify-center items-center p-6 border-top border-black border-2">
      <h1 className="text-3xl sm:text-6xl font-bold text-center">
        Login to AlwaysOn's Platform
      </h1>
      <p className="text-3xl sm:text-6xl my-2">&darr;</p>
      <a
        className="px-8 py-4 text-lg sm:text-2xl font-semibold text-black bg-yellow-400 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-yellow-500 hover:shadow-xl focus:ring-4 focus:ring-yellow-300 focus:outline-none"
        href="https://app.alwayson.ai/login"
        aria-label="Login"
        target="_blank"
        rel="noreferrer"
      >
        Login to Platform
      </a>
    </div>
  );
};

export default Login;

import {Link} from "react-router-dom";

const Login = () => {
  return (
      <div>
        <div>Авторизация</div>


        <Link to={"/"}>
          <button>
            Войти
          </button>

        </Link>

        <Link to={"/register"}>
          <button>
            Зарегистрироваться
          </button>
        </Link>
      </div>
  );
};

export default Login;

import { useState } from "react";
import HeadForm from "../components/form/HeadForm";
import InputForm from "../components/form/InputForm";
import { Loader, SquarePen } from "lucide-react";
import BtnForm from "../components/form/BtnForm";
import * as Yup from "yup";
import { toast } from "react-toastify";
import useAuthStore from "../stores/authstore";
import { schemaLogin } from "../validators/schemaLogin";
import { AxiosError } from "axios";
import { useNavigate } from "react-router";

const initialInput = {
  username: "",
  password: "",
};
function LoginPage() {
  const actionLogin = useAuthStore((state) => state.actionLogin);

  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInput);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInput((prev) => ({ ...prev, [id]: value }));
    setInputError((prev) => ({ ...prev, [id]: "" }));
  };

  const handleKeyUp = (event) => {
    if (event.keyCode === 13 || event.which === 13) {
      handleSubmit();
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);

      //validator
      schemaLogin.validateSync(input, { abortEarly: false });

      //api
      const res = await actionLogin(input);
      console.log("res===", res);

      //to login page
      setInput(initialInput);
      navigate("/todo");

      toast.success("Login sucessful!");

      //alert
    } catch (error) {
      console.log(error);

      if (error instanceof AxiosError) {
        console.log("error AxiosError", error.response.data.message);
        toast.error(error.response.data.message);
      }

      if (error instanceof Yup.ValidationError) {
        const err = error.inner.reduce((acc, curr) => {
          acc[curr.path] = curr.message;
          return acc;
        }, {});
        setInputError(err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="px-10 py-8">
      <form onSubmit={handleSubmit} className="w-2/5 mx-auto space-y-4">
        <HeadForm text="Login" />

        <InputForm
          onChange={handleChange}
          text="Username"
          error={inputError.username}
          value={input.username}
          id="username"
          placeholder="Enter your username"
        />

        <InputForm
          onChange={handleChange}
          text="Password"
          error={inputError.password}
          value={input.password}
          id="password"
          placeholder="Enter your password"
        />

        <BtnForm onKeyUp={handleKeyUp}>
          {isLoading ? (
            <>
              <Loader className="w-5 h-5 animate-spin" strokeWidth={1.5} />
              <span>Loading...</span>
            </>
          ) : (
            <>
              <SquarePen className="w-5 h-5" strokeWidth={1.5} />
              <span>Login</span>
            </>
          )}
        </BtnForm>
      </form>
    </main>
  );
}

export default LoginPage;

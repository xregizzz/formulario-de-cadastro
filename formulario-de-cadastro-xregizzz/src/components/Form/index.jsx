import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormStyled } from "./styles";
import { useHistory } from "react-router-dom";

function Form() {
  const history = useHistory();
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .matches(/^[aA-zZ\s]+$/, "Apenas letras são aceitas neste campo"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1}).*$/,
        "Senha deve ter no mínimo 8 caracteres. Necessário ter letras, números e ao menos um símbolo"
      ),
    confirmedPassword: yup
      .string()
      .required("Senha de confirmação obrigatória")
      .oneOf(
        [yup.ref("password"), null],
        "A senha de confirmação não é a mesma"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onSubmitFunction(data) {
    history.push("/logedIn/" + data.name);
    console.log(data);
  }

  return (
    <div className="formContainer">
      <FormStyled onSubmit={handleSubmit(onSubmitFunction)} className="form">
        <h3 className="title">Criar sua conta</h3>
        <input type="text" placeholder="Nome" {...register("name")} />
        {errors.name?.message}
        <input type="text" placeholder="E-mail" {...register("email")} />
        {errors.email?.message}
        <input type="password" placeholder="Senha" {...register("password")} />
        {errors.password?.message}
        <input
          type="password"
          placeholder="Confirmar a senha"
          {...register("confirmedPassword")}
        />
        {errors.confirmedPassword?.message}
        <button type="submit">Cadastrar</button>
      </FormStyled>
    </div>
  );
}

export default Form;

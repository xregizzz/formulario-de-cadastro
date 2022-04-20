import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { DivStyled } from "./styles";

function LoginPage() {
  const history = useHistory();
  const params = useParams();

  return (
    <DivStyled>
      <div>
        <h1>Bem vindo, {params.name}! </h1>
        <button className="button" onClick={() => history.push("/")}>
          Voltar
        </button>
      </div>
    </DivStyled>
  );
}

export default LoginPage;

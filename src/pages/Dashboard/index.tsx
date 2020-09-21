import React from "react";
import { FiChevronRight } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";

import { Title, Form, Repositories } from "./styles";

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <h1>Explore Repositórios no Github</h1>
    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="text">
        <img
          src="https://avatars2.githubusercontent.com/u/7084057?s=460&u=c7b68a082cab59395de87f8577e8fd6577d03dd4&v=4"
          alt="Gabriel"
        />
        <div>
          <strong>Gabriel/Repo</strong>
          <p>Super repo</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      
      <a href="text">
        <img
          src="https://avatars2.githubusercontent.com/u/7084057?s=460&u=c7b68a082cab59395de87f8577e8fd6577d03dd4&v=4"
          alt="Gabriel"
        />
        <div>
          <strong>Gabriel/Repo</strong>
          <p>Super repo</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;

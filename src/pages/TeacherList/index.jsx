import React from "react";

import PageHeader from "../../components/PageHeader";
import whatsappImg from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";
function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Horário</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        <article>
          <img
            src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4"
            alt="Lucas Gabriel"
            className=""
          />
          <p>
            <p className="mt-4">Diego Fernandes</p>
            <p>
              <p>Entusiasta das melhores tecnologias de química avançada.</p>
              <br />
              <p>
                Apaixonado por explodir coisas em laboratório e por mudar a vida
                das pessoas através de experiências. Mais de 200.000 pessoas já
                passaram por uma das minhas explosões.
              </p>
            </p>
          </p>
          <footer>
            <p>
              Preço/hora:
              <strong className="ml-1">R$ 80,00</strong>
            </p>
            <button style={{ fontSize: "1.8rem" }}>
              <img src={whatsappImg} alt="Whatsapp" />
              Entrar em contato
            </button>
          </footer>
        </article>
      </main>
    </div>
  );
}

export default TeacherList;

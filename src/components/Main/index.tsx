"use client";
import * as S from "./styles";

const Main = () => (
  <S.Wrapper>
    <S.Logo src="react.svg" alt="Imagem de um átomo" />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS e Styled Components
    </S.Description>
    <S.Illustration
      src="computers.svg"
      alt="Programador de frente para um computador"
    />
  </S.Wrapper>
);

export default Main;

import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext.jsx";
import * as S from "../../styles/style.js";
import { useNavigate } from "react-router-dom";

export const GameResult = ({ game }) => {
  //const URL = `${process.env.REACT_APP_API_URL}/bets/:gameId`;
  //const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const hasResult = game.score1 !== null && game.score2 !== null ? true : false;
  const score1 = hasResult ? game.score1 : "-";
  const score2 = hasResult ? game.score2 : "-";

  function seeBets() {
    navigate("/homepage");
  }

  return (
    <S.GameResult>
      <S.TeamName>{game.team1.name}</S.TeamName>
      <S.BoxInput>
        {<span>{score1}</span>}
        <p>x</p>
        {<span>{score2}</span>}
      </S.BoxInput>
      <S.TeamName>{game.team2.name}</S.TeamName>
      <S.EyeIcon onClick={seeBets}></S.EyeIcon>
    </S.GameResult>
  );
};

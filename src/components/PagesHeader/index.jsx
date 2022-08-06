import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import * as S from "../../styles/style.js";
import { ModalComponent } from "../Modal/index";

export const PagesHeader = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const [logoutModal, setLogoutModal] = useState(false);

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/", { replace: true });
  }

  return (
    <>
      <ModalComponent
        modalState={logoutModal}
        callbackCloseModal={() => setLogoutModal(false)}
        callbackFunction={() => logout()}
        message={"logout"}
      />
      <S.PagesHeader>
        <S.BackIcon onClick={() => navigate(-1)}></S.BackIcon>
        <h1>Qatar Bets</h1>
        <S.LogoutIcon onClick={() => setLogoutModal(true)}></S.LogoutIcon>
      </S.PagesHeader>
    </>
  );
};

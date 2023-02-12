import { Button } from 'react-bootstrap';
import AuthController from '../../../../controllers/AuthController';
import './Footer.scss';

export interface FooterProps {
  setIsEditData: (state: boolean) => void,
  setIsEditPassword: (state: boolean) => void,
}

const Footer = ({ setIsEditData, setIsEditPassword }: FooterProps) => {
  const handlerEditData = () => {
    setIsEditData(true);
  };

  const handlerEditPassword = () => {
    setIsEditPassword(true);
  };

  const logout = async () => {
    await AuthController.logout();
  };

  return <footer className="footer">
    <Button
      variant="link"
      onClick={handlerEditData}
    >
      Изменить данные
    </Button>
    <Button
      variant="link"
      onClick={handlerEditPassword}
    >
      Изменить пароль
    </Button>
    <Button
      variant="link"
      className="danger"
      onClick={logout}
    >
      Выйти
    </Button>
  </footer>;
};

export default Footer;

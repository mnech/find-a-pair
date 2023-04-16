import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AuthController from '../../../../controllers/AuthController';
import './Footer.scss';
import { routes } from '../../../../models/App';

export interface FooterProps {
  setIsEditData: (state: boolean) => void;
  setIsEditPassword: (state: boolean) => void;
}

const Footer = ({ setIsEditData, setIsEditPassword }: FooterProps) => {
  const navigate = useNavigate();
  const handlerEditData = () => {
    setIsEditData(true);
  };

  const handlerEditPassword = () => {
    setIsEditPassword(true);
  };

  const logout = async () => {
    await AuthController.logout();
    navigate(routes.auth);
  };

  return (
    <footer className="footer">
      <Button variant="link" onClick={handlerEditData}>
        Изменить данные
      </Button>
      <Button variant="link" onClick={handlerEditPassword}>
        Изменить пароль
      </Button>
      <Button variant="link" className="danger" onClick={logout}>
        Выйти
      </Button>
    </footer>
  );
};

export default Footer;

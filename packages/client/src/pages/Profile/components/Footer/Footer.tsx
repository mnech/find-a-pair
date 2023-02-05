import Button from 'react-bootstrap/Button';
import AuthController from '../../../../controllers/AuthController';

export interface FooterProps {
  setIsEditData: (state: boolean) => void,
  setIsEditPassword: (state: boolean) => void,
}

const Footer = ({ setIsEditData, setIsEditPassword }: FooterProps) => {
  return <footer className='footer'>
    <Button
      variant='link'
      onClick={() => setIsEditData(true)}
    >
      Изменить данные
    </Button>
    <Button
      variant='link'
      onClick={() => setIsEditPassword(true)}
    >
      Изменить пароль
    </Button>
    <Button
      variant='link'
      className='danger'
      onClick={async () => await AuthController.logout()}
    >
      Выйти
    </Button>
  </footer>;
};

export default Footer;

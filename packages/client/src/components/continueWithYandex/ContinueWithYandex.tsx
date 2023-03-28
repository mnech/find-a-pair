import Button from 'react-bootstrap/Button';
import OAuthController from '../../controllers/OAuthController';
import { REDIRECT_URI } from '../../consts';

const ContinueWithYandex = () => {
  const signin = async () => {
    const res = await OAuthController.getServiceId(REDIRECT_URI);
    const clientID = res.data.service_id;
    const url = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${clientID}&redirect_uri=${REDIRECT_URI}`;
    window.location.assign(url);
  };

  return <Button onClick={signin}>Продолжить с Yandex</Button>;
};

export default ContinueWithYandex;

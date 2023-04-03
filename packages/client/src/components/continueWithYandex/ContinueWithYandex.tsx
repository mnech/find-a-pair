import { Button } from 'react-bootstrap';
import OAuthController from '../../controllers/OAuthController';
import { REDIRECT_URI, YANDEX_OAUTH } from '../../consts';
import { useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import AuthController from '../../controllers/AuthController';

const ContinueWithYandex = () => {
  const url = new URL(YANDEX_OAUTH);
  const [searchParams, setSearchParams] = useSearchParams();

  const signin = async () => {
    const res = await OAuthController.getServiceId(REDIRECT_URI);
    if (res === null) {
      return;
    }

    const clientID = res.data?.service_id;

    if (!clientID) {
      return;
    }

    url.searchParams.set('client_id', clientID);
    url.searchParams.set('redirect_uri', REDIRECT_URI);
    window.location.assign(url);
  };

  const oAuthYandex = useCallback(() => {
    const code = searchParams.get('code');

    if (!code) {
      return;
    }

    const data = {
      code,
      redirect_uri: REDIRECT_URI,
    };

    OAuthController.signin(data).then(() => {
      AuthController.fetchUser();
    });

    searchParams.delete('code');
    setSearchParams(searchParams);
  }, []);

  useEffect(() => {
    if (searchParams.has('code')) {
      oAuthYandex();
    }
  }, []);

  return <Button onClick={signin}>Продолжить с Yandex</Button>;
};

export default ContinueWithYandex;

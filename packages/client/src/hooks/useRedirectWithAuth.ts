import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import AuthController from '../controllers/AuthController';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { routes } from '../models/App';
import { authActions } from '../reducers/auth';
import { UserStatusTypes } from '../models/Auth';
import { RootState } from '../store';
import { REDIRECT_URI } from '../consts';
import OAuthController from '../controllers/OAuthController';

export const useRedirectWithAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.profile.data.id);
  const status = useSelector(
    (state: RootState) => state.auth.userLoadingStatus,
  );
  const location = useLocation();
  const [pathName, setPathName] = useState(location.pathname);

  const [searchParams, setSearchParams] = useSearchParams();

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
      getUserInfo();
    });
    setSearchParams('');
  }, []);

  useEffect(() => {
    if (searchParams.has('code')) {
      oAuthYandex();
    }
  }, []);

  const getUserInfo = async () => {
    await AuthController.fetchUser();
  };

  useEffect(() => {
    dispatch(authActions.setUserLoadingStatus(null));
    if (!userId) {
      getUserInfo();
    }
    setPathName(location.pathname);
  }, [location]);

  const handleRedirect = () => {
    if (pathName !== routes.auth && pathName !== routes.signUp && !userId) {
      navigate(routes.auth);
    } else if (
      userId &&
      (pathName === routes.auth || pathName === routes.signUp)
    ) {
      navigate(routes.startGame);
    }
  };

  useEffect(() => {
    if (status !== null && status !== UserStatusTypes.BEGIN) {
      handleRedirect();
    }
  }, [userId, status]);
};

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import AuthController from '../controllers/AuthController';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../models/App';
import { authActions } from '../reducers/auth';
import { UserStatusTypes } from '../models/Auth';
import { RootState } from '../store';

export const useRedirectWithAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.profile.data.id);
  const status = useSelector(
    (state: RootState) => state.auth.userLoadingStatus,
  );
  const location = useLocation();
  const [pathName, setPathName] = useState(location.pathname);

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

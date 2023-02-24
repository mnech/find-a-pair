import { useDispatch, useSelector } from 'react-redux';
import { userIdSelector } from '../selectors/profile';
import { useEffect, useState } from 'react';
import AuthController from '../controllers/AuthController';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../models/App';
import { statusSelector } from '../selectors/auth';
import { authActions } from '../reducers/auth';
import { EGetUserStatusTypes } from '../models/Auth';

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector(userIdSelector);
  const status = useSelector(statusSelector);
  const location = useLocation();
  const [pathName, setPathName] = useState(location.pathname);

  const getUserInfo = async () => {
    await AuthController.fetchUser();
  };

  useEffect(() => {
    setPathName(location.pathname);
    dispatch(authActions.setStatusLoading(null));
    !userId && getUserInfo();
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
    status !== null && status !== EGetUserStatusTypes.BEGIN && handleRedirect();
  }, [userId, status]);
};

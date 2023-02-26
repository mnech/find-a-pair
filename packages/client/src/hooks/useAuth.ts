import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import AuthController from '../controllers/AuthController';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../models/App';
import { authActions } from '../reducers/auth';
import { EGetUserStatusTypes } from '../models/Auth';
import { RootState } from '../store';

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.profile.data.id);
  const status = useSelector((state: RootState) => state.auth.status);
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

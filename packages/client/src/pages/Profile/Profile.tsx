import {
  Footer,
  Header,
  PlayerInfo,
  EditDataForm,
  EditPasswordForm,
} from './components';
import { useState } from 'react';
import './Profile.scss';
import { useSelector } from 'react-redux';
import { userDataSelector } from '../../selectors/profile';

const Profile = () => {
  const userData = useSelector(userDataSelector);
  const [isEditData, setIsEditData] = useState<boolean>(false);
  const [isEditPassword, setIsEditPassword] = useState<boolean>(false);

  return (
    <div className="profile">
      <Header avatar={userData.avatar} name={userData.first_name} />
      {isEditData && (
        <EditDataForm data={userData} setIsEditData={setIsEditData} />
      )}
      {isEditPassword && (
        <EditPasswordForm setIsEditPassword={setIsEditPassword} />
      )}
      {!isEditData && !isEditPassword && (
        <>
          <PlayerInfo data={userData} />
          <Footer
            setIsEditData={setIsEditData}
            setIsEditPassword={setIsEditPassword}
          />
        </>
      )}
    </div>
  );
};

export default Profile;

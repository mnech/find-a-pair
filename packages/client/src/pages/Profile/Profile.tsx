import { Footer, Header, PlayerInfo, EditDataForm, EditPasswordForm } from './components';
import { useState } from 'react';

// TODO Поправить когда понятно будет, где данные хранятся
const testUser = {
  first_name: 'Иван',
  second_name: 'Иванов',
  display_name: 'Иванушка',
  login: 'ivanovv',
  email: 'ivanov@yandex.ru',
  phone: '89999999999',
  avatar: ''
};

const Profile = () => {
  const [isEditData, setIsEditData] = useState<boolean>(false);
  const [isEditPassword, setIsEditPassword] = useState<boolean>(false);

  return <div className='profile'>
    <Header
      avatar={testUser.avatar}
      name={testUser.first_name}
    />
    {isEditData && (
      <EditDataForm
        data={testUser}
        setIsEditData={(state) => setIsEditData(state)}
      />
    )}
    {isEditPassword && (
      <EditPasswordForm
        setIsEditPassword={(state) => setIsEditPassword(state)}
      />
    )}
    {!isEditData && !isEditPassword && (
      <>
        <PlayerInfo data={testUser} />
        <Footer
          setIsEditData={(state) => setIsEditData(state)}
          setIsEditPassword={(state) => setIsEditPassword(state)}
        />
      </>
    )}
  </div>;
};

export default Profile;

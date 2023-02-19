import {
  Footer,
  Header,
  PlayerInfo,
  EditDataForm,
  EditPasswordForm,
} from './components'
import { useState } from 'react'
import './Profile.scss'
import { ErrorBoundary } from '../../utils/ErrorBoundary'

// TODO Поправить когда понятно будет, где данные хранятся
const testUser = {
  first_name: 'Иван',
  second_name: 'Иванов',
  display_name: 'Иванушка',
  login: 'ivanovv',
  email: 'ivanov@yandex.ru',
  phone: '89999999999',
  avatar: '',
}

const Profile = () => {
  const [isEditData, setIsEditData] = useState<boolean>(false)
  const [isEditPassword, setIsEditPassword] = useState<boolean>(false)

  return (
    <ErrorBoundary>
      <div className="profile">
        <Header avatar={testUser.avatar} name={testUser.first_name} />
        {isEditData && (
          <EditDataForm data={testUser} setIsEditData={setIsEditData} />
        )}
        {isEditPassword && (
          <EditPasswordForm setIsEditPassword={setIsEditPassword} />
        )}
        {!isEditData && !isEditPassword && (
          <>
            <PlayerInfo data={testUser} />
            <Footer
              setIsEditData={setIsEditData}
              setIsEditPassword={setIsEditPassword}
            />
          </>
        )}
      </div>
    </ErrorBoundary>
  )
}

export default Profile

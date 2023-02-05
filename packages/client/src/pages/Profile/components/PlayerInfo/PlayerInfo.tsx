import { Group } from './components';
import { UserData } from '../../../../types/interfaces';

export interface PlayerInfoProps {
  data: UserData;
}

const PlayerInfo = ({
  data
}: PlayerInfoProps) => {
  return <div className='player-info'>
    <Group
      name='Имя'
      value={data.first_name}
    />
    <Group
      name='Фамилия'
      value={data.second_name}
    />
    <Group
      name='Имя профиля'
      value={data.display_name}
    />
    <Group
      name='Логин'
      value={data.login}
    />
    <Group
      name='Почта'
      value={data.email}
    />
    <Group
      name='Телефон'
      value={data.phone}
    />
  </div>;
};

export default PlayerInfo;

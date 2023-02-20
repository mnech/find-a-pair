import UsersController from '../../../../controllers/UsersController';
import { useRef } from 'react';
import './Header.scss';

export interface HeaderProps {
  avatar: string;
  name: string;
}

const Header = ({ avatar, name }: HeaderProps) => {
  const inputFile = useRef<HTMLInputElement>(null);
  const changeAvatar = () => {
    if (inputFile.current) {
      inputFile.current.value = '';
      inputFile.current.click();
    }
  };

  const onchange = async (event: React.FormEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (!file) {
      return;
    } else {
      const formData = new FormData();
      formData.set('avatar', file, file.name);

      await UsersController.updateAvatar(formData);
    }
  };

  const onErrorHandler = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src = '/logo.png';
  };

  return (
    <header className="header">
      <img
        src={avatar && `https://ya-praktikum.tech/api/v2/resources${avatar}`}
        className="avatar rounded-3 shadow"
        onError={onErrorHandler}
        alt="Аватар"
        onClick={changeAvatar}
      />
      <input
        type="file"
        accept="image/*"
        ref={inputFile}
        onChange={onchange}
        hidden
      />
      <h1>{name}</h1>
    </header>
  );
};

export default Header;

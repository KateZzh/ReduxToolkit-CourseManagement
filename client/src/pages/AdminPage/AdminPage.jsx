import Header from '../../component/Header/Header';
import style from './AdminPage.module.scss';
import { Button, Input } from '@mantine/core';
import { useState } from 'react';

const AdminPage = () => {
  const [opt, setOpt] = useState('Создание');

  const changeOpt = (e) => {
    setOpt(e.target.textContent);
  };

  const showContent = () => {
    if (opt === 'Создание') {
      return (
        <>
          <Input.Wrapper label='Курс' size='md'>
            <Input placeholder='Введите название курса' />
          </Input.Wrapper>

          <Input.Wrapper label='Описание' size='md'>
            <Input placeholder='Введите описание курса' />
          </Input.Wrapper>

          <Input.Wrapper label='Город' size='md'>
            <Input placeholder='Введите название города' />
          </Input.Wrapper>
        </>
      );
    } else if (opt === 'Обновление') {
      return (
        <>
          <Input.Wrapper label='Курс' size='md'>
            <Input placeholder='Введите название курса' />
          </Input.Wrapper>

          <Input.Wrapper label='Описание' size='md'>
            <Input placeholder='Введите описание курса' />
          </Input.Wrapper>

          <Input.Wrapper label='Город' size='md'>
            <Input placeholder='Введите название города' />
          </Input.Wrapper>

          <Input.Wrapper label='ID' size='md'>
            <Input placeholder='Введите ID' />
          </Input.Wrapper>
        </>
      );
    } else {
      return (
        <>
          <Input.Wrapper label='ID' size='md'>
            <Input placeholder='Введите ID' />
          </Input.Wrapper>
        </>
      );
    }
  };

  return (
    <div>
      <Header />

      <div className={style.container}>
        <div className={style.crudText}>
          <h2 onClick={changeOpt}>Создание</h2>
          <h2 onClick={changeOpt}>Обновление</h2>
          <h2 onClick={changeOpt}>Удаление</h2>
        </div>

        <div className={style.fieldsWrapper}>
          {showContent()}

          <Button variant='filled' radius='md'>
            Применить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

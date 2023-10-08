import Header from '../../component/Header/Header';
import style from './AdminPage.module.scss';
import { Button, Input } from '@mantine/core';
import { useState, useEffect } from 'react';
import {
  useCreateCourseMutation,
  useUpdateCourseMutation,
  useDeleteCourseMutation,
} from '../../service/serviceCourse';

const AdminPage = () => {
  const [opt, setOpt] = useState('Создание');
  const [inp, setInp] = useState({});

  const [createCourse] = useCreateCourseMutation();
  const [updateCourse] = useUpdateCourseMutation();
  const [deleteCourse] = useDeleteCourseMutation();

  const changeOpt = (e) => {
    setOpt(e.target.textContent);
  };

  const getInputsVal = (e) => setInp({ ...inp, [e.target.name]: e.target.value });

  useEffect(() => {
    setInp({});
  }, [opt]);

  const sendData = async () => {
    if (opt === 'Создание') {
      const data = await createCourse(inp);
      console.log(data.data);
      window.location.reload();
    } else if (opt === 'Обновление') {
      const data = await updateCourse(inp);
      console.log(data.data);
      window.location.reload();
    } else {
      const data = await deleteCourse(inp);
      console.log(data.data);
      window.location.reload();
    }
  };

  const showContent = () => {
    if (opt === 'Создание') {
      return (
        <>
          <Input.Wrapper label='Курс' size='md'>
            <Input
              placeholder='Введите название курса'
              name='course'
              onChange={getInputsVal}
              value={inp?.course || ''}
            />
          </Input.Wrapper>

          <Input.Wrapper label='Описание' size='md'>
            <Input
              placeholder='Введите описание курса'
              name='description'
              onChange={getInputsVal}
              value={inp?.description || ''}
            />
          </Input.Wrapper>

          <Input.Wrapper label='Город' size='md'>
            <Input
              placeholder='Введите название города'
              name='city'
              onChange={getInputsVal}
              value={inp?.city || ''}
            />
          </Input.Wrapper>
        </>
      );
    } else if (opt === 'Обновление') {
      return (
        <>
          <Input.Wrapper label='Курс' size='md'>
            <Input
              placeholder='Введите название курса'
              name='course'
              onChange={getInputsVal}
              value={inp?.course || ''}
            />
          </Input.Wrapper>

          <Input.Wrapper label='Описание' size='md'>
            <Input
              placeholder='Введите описание курса'
              name='description'
              onChange={getInputsVal}
              value={inp?.description || ''}
            />
          </Input.Wrapper>

          <Input.Wrapper label='Город' size='md'>
            <Input
              placeholder='Введите название города'
              name='city'
              onChange={getInputsVal}
              value={inp?.city || ''}
            />
          </Input.Wrapper>

          <Input.Wrapper label='ID' size='md'>
            <Input
              placeholder='Введите ID'
              name='id'
              onChange={getInputsVal}
              value={inp?.id || ''}
            />
          </Input.Wrapper>
        </>
      );
    } else {
      return (
        <>
          <Input.Wrapper label='ID' size='md'>
            <Input
              placeholder='Введите ID'
              name='id'
              onChange={getInputsVal}
              value={inp?.id || ''}
            />
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

          <Button variant='filled' radius='md' onClick={sendData}>
            Применить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

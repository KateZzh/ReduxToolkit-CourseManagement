import Header from '../../component/Header/Header';
import style from './AdminPage.module.scss';
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
          <div className={style.inputsWrapper}>
            <div className={style.inpName}>Курс</div>
            <div className={style.inpWrapper}>
              <input type='text' />
            </div>
          </div>

          <div className={style.inputsWrapper}>
            <div className={style.inpName}>Описание</div>
            <div className={style.inpWrapper}>
              <input type='text' />
            </div>
          </div>

          <div className={style.inputsWrapper}>
            <div className={style.inpName}>Город</div>
            <div className={style.inpWrapper}>
              <input type='text' />
            </div>
          </div>
        </>
      );
    } else if (opt === 'Обновление') {
      return (
        <>
          <div className={style.inputsWrapper}>
            <div className={style.inpName}>Курс</div>
            <div className={style.inpWrapper}>
              <input type='text' />
            </div>
          </div>

          <div className={style.inputsWrapper}>
            <div className={style.inpName}>Описание</div>
            <div className={style.inpWrapper}>
              <input type='text' />
            </div>
          </div>

          <div className={style.inputsWrapper}>
            <div className={style.inpName}>Город</div>
            <div className={style.inpWrapper}>
              <input type='text' />
            </div>
          </div>

          <div className={style.inputsWrapper}>
            <div className={style.inpName}>ID</div>
            <div className={style.inpWrapper}>
              <input type='text' />
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={style.inputsWrapper}>
            <div className={style.inpName}>ID</div>
            <div className={style.inpWrapper}>
              <input type='text' />
            </div>
          </div>
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

        {showContent()}
        
        <div className='btn'>Применить</div>
      </div>
    </div>
  );
};

export default AdminPage;

import style from './homePage.module.scss';
import Header from '../../component/Header/Header';

const HomePage = () => {
  const arr = [
    {
      id: 1,
      header: 'C# Couse',
      description: 'В течение курса студенты ознакомятся с ...',
      location: 'Минск',
    },
    {
      id: 2,
      header: 'C# Couse',
      description: 'В течение курса студенты ознакомятся с ...',
      location: 'Минск',
    },
    {
      id: 3,
      header: 'JavaScript Couse',
      description: 'В течение курса студенты ознакомятся с ...',
      location: 'Минск',
    },
    {
      id: 4,
      header: 'JavaScript Couse',
      description: 'В течение курса студенты ознакомятся с ...',
      location: 'Минск',
    },
    {
      id: 5,
      header: 'JavaScript Couse',
      description: 'В течение курса студенты ознакомятся с ...',
      location: 'Минск',
    },
    {
      id: 6,
      header: 'JavaScript Couse',
      description: 'В течение курса студенты ознакомятся с ...',
      location: 'Минск',
    },
  ];

  return (
    <div>
      <Header />

      <div className={style.container}>
        <div className={style.search}>
          <div className={style.inp}>
            <input type='text' placeholder='Введите название курса' />
          </div>

          <div className={style.btn}>Поиск</div>
        </div>

        <div className={style.blockWrapper}>
          {arr.map((el, index) => (
            <div key={index} className={style.course}>
              <h2>{el.header}</h2>
              <p>{el.description}</p>

              <div className={style.location}>{el.location}</div>
            </div>
          ))}
        </div>

        <div className={style.pagination}></div>
      </div>
    </div>
  );
};

export default HomePage;

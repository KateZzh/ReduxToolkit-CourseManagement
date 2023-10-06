import style from './homePage.module.scss';
import Header from '../../component/Header/Header';
import { Button, Input, Pagination } from '@mantine/core';
import { IconSearch, IconMapPin } from '@tabler/icons-react';

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
          <Input
            placeholder='Введите название курса'
            leftSection={<IconSearch size={16} />}
            size='md'
            rightSection={
              <Button variant='filled' size='xs' radius='md' style={{ marginRight: '50px' }}>
                Поиск
              </Button>
            }
          />
        </div>

        <div className={style.blockWrapper}>
          {arr.map((el, index) => (
            <div key={index} className={style.course}>
              <h2>{el.header}</h2>
              <p>{el.description}</p>

              <div className={style.wrapperLocation}>
                <IconMapPin size={16} />
                <div className={style.location}>{el.location}</div>
              </div>
            </div>
          ))}
        </div>

        <Pagination total={3} style={{ paddingBottom: '40px' }} />
      </div>
    </div>
  );
};

export default HomePage;

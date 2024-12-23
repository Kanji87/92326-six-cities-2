import notFound from '../../../assets/img/404.svg';
import styles from './404.module.scss';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <Helmet>
        <title>404</title>
      </Helmet>
      <img
        src={notFound}
        alt='На оранжевом фоне сидит код с оборваным проводом в зубах. Перед ним ноутбук с надписью "404 Page not found" на экране'
        className={styles.image}
      />
    </div>
  );
}

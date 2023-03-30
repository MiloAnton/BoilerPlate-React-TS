import { FC } from 'react';
import style from './App.module.scss';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Topbar from './components/topbar/Topbar';

const App: FC = () => {
  return (
    <main className={style['App']}>
      <Topbar />
      <Main />
      <Footer />
    </main>
  );
};

export default App;
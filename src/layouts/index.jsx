import { Link, Outlet, history, useLocation  } from 'umi';
import styles from './index.less';
import { selectLayout } from 'utils/selectLayout'
import BaseLayout from './BaseLayout'
import loginLayout from './loginLayout'
export default function Layout() {
  const location  = useLocation();
  const layoutMap = { BaseLayout, loginLayout }
  const Container = layoutMap[selectLayout(location.pathname)]
  console.log(Container, 'location');
  return (
    <div className={styles.navs}>
      <Container></Container>
      <Outlet />
    </div>
  );
}

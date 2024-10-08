import { Link, Outlet, history  } from 'umi';
import styles from './index.less';

export default function Layout() {
 
  const goTargetPage = () => {
   
    console.log(history , 'his');
    history.push('/user/123')
  }
  return (
    <div className={styles.navs}>
      
   
          <Link to="/dashboard">跳转到图标界面</Link>
  
        <span>使用点击时间 + history API跳转到user</span>
        <span onClick={() => goTargetPage()}>使用点击时间 + history API跳到首页</span>
       
      <Outlet />
    </div>
  );
}

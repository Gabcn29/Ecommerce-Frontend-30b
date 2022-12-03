import styles from './DSidebar.module.scss'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { dark, light } from '../../../../redux/slices/darkmodeSlice';
import darkk from '../../Dark.module.scss';

export const DSidebar = () => {

  const { darkMode } = useSelector(state => state.darkmode)
  const dispatch = useDispatch();

  return (
    <div className={`${styles.sidebar} ${darkMode && darkk.sidebar}`}>
      <div className={styles.top}>
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <span className={styles.logo}>Santiago Segurado</span>
        </Link>
      </div>
      <hr />
      <div className={styles.center}>
        <ul>
          <p className={styles.title}>DASHBOARD</p>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className={styles.icon} />
              <span>Home</span>
            </li>
          </Link>
          <Link to="/dashboard/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className={styles.icon} />
              <span>Usuarios</span>
            </li>
          </Link>
          <Link to="/dashboard/users" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className={styles.icon} />
              <span>Productos</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className={styles.icon} />
            <span>Ordenes</span>
          </li>

          <p className={styles.title}>USER</p>
          <li>
            <AccountCircleOutlinedIcon className={styles.icon}/>
            <span>Perfil</span>
          </li>
          <li>
            <ExitToAppIcon className={styles.icon} />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className={styles.bottom}>
        <div
          className={styles.colorOption}
          onClick={() => dispatch(light())}
        ></div>
        <div
          className={styles.colorOption}
          onClick={() => dispatch(dark())}
        ></div>
      </div>
    </div>
  );
};
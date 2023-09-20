import { Link } from 'react-router-dom';
import HeaderSCSS from './Header.module.scss';

const RegistrAutho = () => {
    return (
        <div className={HeaderSCSS.log}>
            <Link to="/sign-in" className={HeaderSCSS.linkAuth}>SignIn</Link>
            <Link to="/sign-up" className={HeaderSCSS.linkAuth}>SignUp</Link>
        </div>
    );
};
export default RegistrAutho;
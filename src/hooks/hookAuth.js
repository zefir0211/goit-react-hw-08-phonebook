import { useSelector } from 'react-redux';
import {
    selectUsername,
    selectIsLoggedIn,
    selectIsRefreshing,
} from 'redux/authorization/authSelectors.js';

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const user = useSelector(selectUsername);

    return {
        isLoggedIn,
        isRefreshing,
        user,
    };
};

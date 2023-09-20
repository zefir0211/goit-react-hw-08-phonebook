import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { IoIosArrowBack } from 'react-icons/io';
import PageNotFoundSCSS from './PageNotFound.module.scss'

const PageNotFound = () => {
    // const navigate = useNavigate();
    // const goBackPage = () => {
    //     navigate(-1);
    //     return;
    // };
    return (
        <div className={PageNotFoundSCSS.notFound}>
            {/* <button type="button" onClick={goBackPage} className={PageNotFoundSCSS.button}>
                <IoIosArrowBack size={30} />    Go Back
            </button> */}
            <p className={PageNotFoundSCSS.text}>Page not found</p>
        </div>
    );
}
export default PageNotFound;
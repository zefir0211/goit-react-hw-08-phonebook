import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from 'redux/contacts/requestAPI';
import { selectIsLoading, selectError } from 'redux/contacts/contactsSelectors';
import { Loader } from '../components/Loader/Loader';
import { Filter } from '../components/Phonebook/Filter/Filter';
import ContactForm from '../components/Phonebook/ContactForm/ContactForm';
import ContactList from '../components/Phonebook/ContactList/ContactList';
// import { Section, Containet, H1, DivList } from '../components/App.stiled';
import PhonebookSCSS from './Phonebook.module.scss'

const PhoneBook = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchAll());
    }, [dispatch]);
    return (
        <section className={PhonebookSCSS.section}>
            <div className={PhonebookSCSS.container}>
                {isLoading && !error && <Loader />}
                <h1 className={PhonebookSCSS.header}>Phonebook</h1>
                <Filter />
                <div className={PhonebookSCSS.bottom}>
                    <ContactForm />
                    <div className={PhonebookSCSS.contacts}>
                        <h2 className={PhonebookSCSS.h2}>Contacts</h2> 
                        <ContactList />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PhoneBook;
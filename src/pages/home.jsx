import PagesSCSS from './Pages.module.scss'

const HomePage = () => {
    return (
        <main>
            <section className={PagesSCSS.section}>
                <h1 className={PagesSCSS.header}>Welcome</h1>
                <p className={PagesSCSS.text}>This is your PhoneBook</p>
            </section>
        </main>
    )
}
export default HomePage;
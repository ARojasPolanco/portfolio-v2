
import { useTranslation } from 'react-i18next';

const Header = ({ handleDark, handleClickChangeLanguages, isDark }) => {

    const { t } = useTranslation()

    return (
        <section id="Home">
            <header className="px-2 flex flex-col gap-6 md:flex-row items-center justify-between max-w-[850px] mx-auto">
                <div className="h-[130px] aspect-square borderImg relative">
                    <img src="/images/ap-logo.png" alt="" />
                </div>
                <button className={`text-2xl ${isDark ? 'text-light-blue-sky' : 'text-white'}`} onClick={handleDark}>{isDark ? <i class='bx bxs-moon' ></i> : <i class='bx bxs-sun'></i>}</button>
                <button className='btn text-black dark:text-white' onClick={handleClickChangeLanguages}>EN/ES</button>
                <article className="h-12 w-[170px] rounded-2xl flex justify-center text-xl font-medium text-black dark:text-white">
                    <a className="btn cursor-pointer" href="./cv_hf.pdf" download={' '}>{t("header.buttom")}</a>
                </article>
            </header >
        </section>
    )
}

export default Header
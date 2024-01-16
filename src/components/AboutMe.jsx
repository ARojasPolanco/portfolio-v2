import { useTranslation } from 'react-i18next';

const AboutMe = () => {
    const { t } = useTranslation()

    return (
        <section id='About'>
            <article className='text-black flex-1 dark:text-white max-w-[800px] mx-auto text-center p-6'>
                <h2 className='h2 text-light-blue-sky dark:text-very-light-blue'>{t("about.title")}</h2>
                <h3 className='h3'>{t("about.text")}</h3>
                <p className='mb-6'>
                    {t("about.foot")}
                </p>
            </article>
        </section>
    )
}

export default AboutMe
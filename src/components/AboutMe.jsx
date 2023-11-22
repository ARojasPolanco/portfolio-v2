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
            <h2 className='h2 text-light-blue-sky dark:text-very-light-blue text-center'>{t("certificate.title")}</h2>
            <div className='max-w-[450px] mx-auto lg:max-w-[350px] xl:max-w-[350px]'>
                <div className='flex flex-col justify-center gap-10 min-[1136px]:flex-row p-2'>
                    <img src="/public/images/fundamentos.png" alt="" />
                    <img src="/public/images/react.js.png" alt="" />
                    <img src="/public/images/full-stack.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default AboutMe
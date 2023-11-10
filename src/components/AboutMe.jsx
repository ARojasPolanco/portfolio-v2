import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../services/variants.js';
import { useTranslation } from 'react-i18next';

const AboutMe = ({ isDark }) => {
    const { t } = useTranslation()

    const [ref, inView] = useInView({
        threshold: 0.5,
    })
    return (
        <section id='About' ref={ref}>
            <article className='container mx-auto'>
                <article className='flex flex-col items-center gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 h-screen'>
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className={`flex-1 ${isDark ? 'bg-about' : 'bg-about_dark'} bg-contain bg-no-repeat h-[640px] mx-auto`}>
                    </motion.div>
                    <article className='text-black flex-1 dark:text-white'>
                        <h2 className='h2 text-light-blue-sky dark:text-very-light-blue'>{t("about.title")}</h2>
                        <h3 className='h3'>{t("about.text")}</h3>
                        <p className='mb-6'>
                            {t("about.foot")}
                        </p>
                        <article className='flex flex-col gap-2'>
                            <div>
                                <div className='text-[40px] font-aldrich text-light-blue-sky dark:text-very-light-blue'>
                                    {
                                        inView ?
                                            <CountUp start={0} end={2} duration={5} /> : null}
                                </div>
                                <p className='font-orbitron text-sm tracking-[2px]'>
                                    {t("about.fyear")}
                                </p>
                            </div>
                            <div>
                                <div className='text-[40px] font-aldrich text-light-blue-sky dark:text-very-light-blue'>
                                    {
                                        inView ?
                                            <CountUp start={0} end={8} duration={8} /> : null}
                                    +
                                </div>
                                <p className='font-orbitron text-sm tracking-[2px]'>
                                    {t("about.syear")}
                                </p>
                            </div>
                            <div>
                                <div className='text-[40px] font-aldrich text-light-blue-sky dark:text-very-light-blue'>
                                    {
                                        inView ?
                                            <CountUp start={0} end={7} duration={5} /> : null}
                                </div>
                                <p className='font-orbitron text-sm tracking-[2px]'>
                                    {t("about.tyear")}
                                </p>
                            </div>
                        </article>
                    </article>
                </article>
            </article>
        </section>
    )
}

export default AboutMe
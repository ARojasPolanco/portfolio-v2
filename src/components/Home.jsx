import { motion } from "framer-motion"
import { fadeIn } from "../services/variants.js"
import { TypeAnimation } from "react-type-animation"
import { Link } from "react-scroll"
import { useTranslation } from "react-i18next"

const Home = () => {

    const { t } = useTranslation()

    return (
        <section className="sm:flex sm:items-center sm:gap-x-28 justify-center mb-8">
            <article>
                <motion.article animate={{ scale: 1.1, transition: { duration: 1 } }} className="text-3xl font-montserrat font-bold text-white p-3 mt-8 h-[150px] w-[300px] mx-auto">
                    <motion.h1
                        variants={fadeIn('up', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}>
                        <div className="borderWhite text-light-blue-sky">
                            <span className="text-bg-100">{t("home.title")} </span>
                            <br />
                            <TypeAnimation
                                sequence={[
                                    'Alan Polanco',
                                    2000,
                                    'Web developer',
                                    2000,
                                    'Desarrollador',
                                    2000
                                ]}
                                speed={50}
                                wrapper="span"
                                repeat={Infinity} />
                        </div>
                    </motion.h1>
                    <article className="text-[3rem] mt-4">
                        <span className="absolute waveBorder">
                            <h2>Full-Stack</h2>
                        </span>
                        <span className="absolute waveAnimation">
                            <h2>Full-Stack</h2>
                        </span>
                    </article>
                </motion.article>
                <article className="text-center mt-8 text-lg text-black min-[640px]: w-[310px] mx-auto dark:text-white">
                    <motion.p
                        variants={fadeIn('down', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}>
                        {t("home.foot")}
                    </motion.p>
                </article>
            </article>
            <article>
                <article className="flex justify-center mt-8 text-black text-lg font-medium dark:text-white">
                    <Link to='Contact' smooth={true} duration={300} className="btn">
                        {t("home.buttom")}
                    </Link>
                </article>
                <article className="text-3xl flex justify-center gap-5 mt-10 mb-8">
                    <div className="text-whatsapp flex justify-center items-center hover:scale-125">
                        <a href="https://wa.me/qr/AFAJJMJT62VRJ1" target='_blank'>
                            <i className='bx bxl-whatsapp'></i>
                        </a>
                    </div>
                    <div className="flex justify-center items-center hover:scale-125">
                        <a href="https://github.com/ARojasPolanco" target='_blank'>
                            <i className='bx bxl-github'></i>
                        </a>
                    </div>
                    <div className="text-tailwind flex justify-center items-center hover:scale-125">
                        <a href="https://www.linkedin.com/in/alan-rojas-polanco-97a4b5291/" target='_blank'>
                            <i className='bx bxl-linkedin' ></i>
                        </a>
                    </div>
                </article>
            </article>

        </section >


    )
}

export default Home
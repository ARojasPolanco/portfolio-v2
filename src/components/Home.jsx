import { motion } from "framer-motion"
import { fadeIn } from "../services/variants.js"
import { TypeAnimation } from "react-type-animation"

const Home = () => {
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
                            <span className="text-bg-100">Soy </span>
                            <br />
                            <TypeAnimation
                                sequence={[
                                    'Alan Polanco',
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
                            <h2>Front-end</h2>
                        </span>
                        <span className="absolute waveAnimation">
                            <h2>Front-end</h2>
                        </span>
                    </article>
                </motion.article>
                <article className="text-center mt-8 text-lg text-white min-[640px]: w-[310px] mx-auto">
                    <motion.p
                        variants={fadeIn('down', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}>
                        Siempre en constante aprendizaje, mejorando mis habilidades.
                    </motion.p>
                </article>
            </article>
            <article>
                <article className="flex justify-center mt-8 text-white text-lg font-medium">
                    <button className="btn">
                        Contactame
                    </button>
                </article>
                <article className="text-3xl flex justify-center gap-5 mt-10 mb-8">
                    <div className="text-whatsapp bg-light-gray/60 h-10 aspect-square rounded-full flex justify-center items-center">
                        <a href=" https://w.app/U4A6g2" target='_blank'>
                            <i className='bx bxl-whatsapp'></i>
                        </a>
                    </div>
                    <div className="bg-light-gray/60 h-10 aspect-square rounded-full flex justify-center items-center">
                        <a href="https://github.com/ARojasPolanco" target='_blank'>
                            <i className='bx bxl-github'></i>
                        </a>
                    </div>
                    <div className="text-tailwind bg-light-gray/60 h-10 aspect-square rounded-full flex justify-center items-center">
                        <a href="https://ar.linkedin.com/" target='_blank'>
                            <i className='bx bxl-linkedin' ></i>
                        </a>
                    </div>
                </article>
            </article>

        </section>


    )
}

export default Home
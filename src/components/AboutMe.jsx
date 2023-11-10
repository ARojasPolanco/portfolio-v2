import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../services/variants.js';

const AboutMe = () => {
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
                        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-color-dodge mx-auto'>
                    </motion.div>
                    <article className='text-black flex-1 dark:text-white'>
                        <h2 className='h2 text-light-blue-sky dark:text-very-light-blue'>Sobre Mí</h2>
                        <h3 className='h3'>Soy desarrollador web Full-stack, pero me especializo en el desarrollo Front-end.
                            <br />
                            Me forme academicamente en Academlo y de manera autodidacta durante los últimos 2 años</h3>
                        <p className='mb-6'>
                            Me desempeño en la creción de proyectos, utilizando herramientas de programación Front-End, estoy en constante aprendizaje, mejorando mis habilidades.
                        </p>
                        <article className='flex gap-2'>
                            <div>
                                <div className='text-[40px] font-aldrich text-light-blue-sky dark:text-very-light-blue'>
                                    {
                                        inView ?
                                            <CountUp start={0} end={2} duration={5} /> : null}
                                </div>
                                <p className='font-orbitron text-sm tracking-[2px]'>
                                    Años de <br />
                                    experiencia
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
                                    Proyectos <br />
                                    realizados
                                </p>
                            </div>
                            <div>
                                <div className='text-[40px] font-aldrich text-light-blue-sky dark:text-very-light-blue'>
                                    {
                                        inView ?
                                            <CountUp start={0} end={7} duration={5} /> : null}
                                </div>
                                <p className='font-orbitron text-sm tracking-[2px]'>
                                    Lenguajes <br />
                                    aprendidos
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
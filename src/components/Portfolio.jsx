import { motion } from 'framer-motion';
import { fadeIn } from '../services/variants.js';

import img1 from '/images/frontendmentor.png'
import img2 from '/images/ecommerce.png'
import img3 from '/images/weatherapp.png'
import img4 from '/images/randomphrases.png'
import img5 from '/images/rickandmorty.png'
import img6 from '/images/usercrudapi.png'
import img7 from '/images/pokemonapi.png'

const Portfolio = () => {
    return (
        <section className='section mt-56' id='Portfolio'>
            <article className='container mx-auto'>
                <div className='flex flex-col min-[800px]:flex-row gap-x-10'>
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
                        <div>
                            <h2 className='h2 leading-tight text-very-light-blue'>Mis principales <br />
                                proyectos
                            </h2>
                            <p className='max-w-sm mb-16 text-white font-aldrich'>Estos son mis principales proyectos realizados de forma individual y grupal, en estos fui probando diferentes herramientas de programación y <span className='text-lg underline underline-offset-2'>GitHub</span> para trabajar en conjunto con mis compañeros</p>
                        </div>
                        {/* 1 */}
                        <article className=' border-2 border-white/50 rounded-xl overflow-hidden'>
                            <div className='group relative overflow-hidden'>
                                <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
                                <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt="" />
                                <div className='text-white absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                    <span className='text-very-light-blue font-medium font-montserrat'>Front End Mentor Challenge</span>
                                </div>
                                <div className='text-white text-lg absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>Front End Mentor</div>
                            </div>
                            <article className='flex gap-x-12 justify-center p-1'>
                                <article className='text-white flex justify-center items-center gap-x-2 w-[100px] hover:bg-bg-100'>
                                    <i className='bx bxl-github'></i>
                                    <a href="https://github.com/ARojasPolanco/FrontEndMentor" target="_blank">GitHub</a>
                                </article>
                                <article className='flex justify-center items-center gap-x-2 text-netlify w-[100px] hover:bg-bg-100'>
                                    <i className='bx bxl-netlify'></i>
                                    <a className="text-white" href="https://frontendmentor1challenges.netlify.app/" target="_blank">Netlify</a>
                                </article>
                            </article>
                        </article>
                        {/* 2 */}
                        <article className=' border-2 border-white/50 rounded-xl overflow-hidden'>
                            <div className='group relative overflow-hidden'>
                                <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
                                <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt="" />
                                <div className='text-white absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                    <span className='text-very-light-blue font-medium font-montserrat'>HTML, CSS y Javascript</span>
                                </div>
                                <div className='text-white text-lg absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>E-commerce</div>
                            </div>
                            <article className='flex gap-x-12 justify-center p-1'>
                                <article className='text-white flex justify-center items-center gap-x-2 w-[100px] hover:bg-bg-100'>
                                    <i className='bx bxl-github'></i>
                                    <a href="https://github.com/ARojasPolanco/CarritoDeCompras" target="_blank">GitHub</a>
                                </article>
                                <article className='flex justify-center items-center gap-x-2 text-netlify w-[100px] hover:bg-bg-100'>
                                    <i className='bx bxl-netlify'></i>
                                    <a className="text-white" href="https://carrito-de-compras-academlo1.netlify.app" target="_blank">Netlify</a>
                                </article>
                            </article>
                        </article>
                        {/* 3 */}
                        <article className=' border-2 border-white/50 rounded-xl overflow-hidden'>
                            <div className='group relative overflow-hidden'>
                                <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
                                <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt="" />
                                <div className='text-white absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                    <span className='text-very-light-blue font-medium font-montserrat'>Aplicación del clima funcional</span>
                                </div>
                                <div className='text-white text-lg absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>Weather App</div>
                            </div>
                            <article className='flex gap-x-12 justify-center p-1'>
                                <article className='text-white flex justify-center items-center gap-x-2 w-[100px] hover:bg-bg-100'>
                                    <i className='bx bxl-github'></i>
                                    <a href="https://github.com/ARojasPolanco/Project-2-react" target="_blank">GitHub</a>
                                </article>
                                <article className='flex justify-center items-center gap-x-2 text-netlify w-[100px] hover:bg-bg-100'>
                                    <i className='bx bxl-netlify'></i>
                                    <a className="text-white" href="https://weather-api-academlo.netlify.app" target="_blank">Netlify</a>
                                </article>
                            </article>
                        </article>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex-1 flex flex-col gap-y-10 justify-center'>
                        {/* 4 */}
                        <article className=' border-2 border-white/50 rounded-xl overflow-hidden'>
                            <div className='group relative overflow-hidden'>
                                <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
                                <img className='group-hover:scale-125 transition-all duration-500' src={img4} alt="" />
                                <div className='text-white absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                    <span className='text-very-light-blue font-medium font-montserrat'>Frases, autores y  fondo randoms</span>
                                </div>
                                <div className='text-white text-lg absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>Random phrases</div>
                            </div>
                            <article className='flex gap-x-12 justify-center p-1'>
                                <article className='text-white flex justify-center items-center gap-x-2 w-[100px] hover:bg-bg-100'>
                                    <i className='bx bxl-github'></i>
                                    <a href="https://github.com/ARojasPolanco/Project-1-react" target="_blank">GitHub</a>
                                </article>
                                <article className='flex justify-center items-center gap-x-2 text-netlify w-[100px] hover:bg-bg-100'>
                                    <i className='bx bxl-netlify'></i>
                                    <a className="text-white" href="https://project-1-react-academlo.netlify.app" target="_blank">Netlify</a>
                                </article>
                            </article>
                        </article>
                        {/* 5 */}
                        <article className=' border-2 border-white/50 rounded-xl overflow-hidden'>
                            <div className='group relative overflow-hidden'>
                                <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
                                <img className='group-hover:scale-125 transition-all duration-500' src={img5} alt="" />
                                <div className='text-white absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                    <span className='text-very-light-blue font-medium font-montserrat'>Rick and morty wiki</span>
                                </div>
                                <div className='text-white text-lg absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>Rick and morty Api</div>
                            </div>
                            <article className='flex gap-x-12 justify-center p-1'>
                                <article className='text-white flex justify-center items-center gap-x-2 w-[100px] hover:bg-bg-100'>
                                    <i className='bx bxl-github'></i>
                                    <a href="https://github.com/ARojasPolanco/preject-3-academlo" target="_blank">GitHub</a>
                                </article>
                                <article className='flex justify-center items-center gap-x-2 text-netlify w-[100px] hover:bg-bg-100'>
                                    <i className='bx bxl-netlify'></i>
                                    <a className="text-white" href="https://rickandmortydimensions.netlify.app" target="_blank">Netlify</a>
                                </article>
                            </article>
                        </article>
                        {/* 6 */}
                        <article className=' border-2 border-white/50 rounded-xl overflow-hidden'>
                            <div className='group relative overflow-hidden'>
                                <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
                                <img className='group-hover:scale-125 transition-all duration-500' src={img6} alt="" />
                                <div className='text-white absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                    <span className='text-very-light-blue font-medium font-montserrat'>Aplicación para la creación de usuarios</span>
                                </div>
                                <div className='text-white text-lg absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>User crud Api</div>
                            </div>
                            <article className='flex gap-x-12 justify-center p-1'>
                                <article className='text-white flex justify-center items-center gap-x-2 w-[100px] hover:bg-bg-100'>
                                    <i className='bx bxl-github'></i>
                                    <a href="https://github.com/ARojasPolanco/Project-2-react" target="_blank">GitHub</a>
                                </article>
                                <article className='flex justify-center items-center gap-x-2 text-netlify w-[100px] hover:bg-bg-100'>
                                    <i className='bx bxl-netlify'></i>
                                    <a className="text-white" href="https://weather-api-academlo.netlify.app" target="_blank">Netlify</a>
                                </article>
                            </article>
                        </article>
                        {/* 7 */}
                        <article className=' border-2 border-white/50 rounded-xl overflow-hidden'>
                            <div className='group relative overflow-hidden'>
                                <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
                                <img className='group-hover:scale-125 transition-all duration-500' src={img7} alt="" />
                                <div className='text-white absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                    <span className='text-very-light-blue font-medium font-montserrat'>Pokedex</span>
                                </div>
                                <div className='text-white text-lg absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>Pokemon Api</div>
                            </div>
                            <article className='flex gap-x-12 justify-center p-1'>
                                <article className='text-white flex justify-center items-center gap-x-2 w-[100px] hover:bg-bg-100'>
                                    <i className='bx bxl-github'></i>
                                    <a href="https://github.com/ARojasPolanco/Project-2-react" target="_blank">GitHub</a>
                                </article>
                                <article className='flex justify-center items-center gap-x-2 text-netlify w-[100px] hover:bg-bg-100'>
                                    <i className='bx bxl-netlify'></i>
                                    <a className="text-white" href="https://weather-api-academlo.netlify.app" target="_blank">Netlify</a>
                                </article>
                            </article>
                        </article>
                    </motion.div>
                </div>
            </article>
        </section>
    )
}

export default Portfolio
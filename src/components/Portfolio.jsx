import img1 from '/images/frontendmentor.png'
import img2 from '/images/ecommerce.png'
import img3 from '/images/weatherapp.png'
import img4 from '/images/randomphrases.png'
import img5 from '/images/rickandmorty.png'
import img6 from '/images/usercrudapi.png'
import img7 from '/images/pokemonapi.png'
import { useTranslation } from 'react-i18next'

const Portfolio = () => {
    const { t } = useTranslation()

    return (
        <section className='mt-28' id='Portfolio'>
            <article className='container mx-auto'>
                <div className='flex flex-col min-[800px]:flex-row gap-x-10'>
                    <div
                        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
                        <div>
                            <h2 className='h2 leading-tight text-light-blue-sky dark:text-very-light-blue'>{t("portfolio.title")}
                            </h2>
                            <p className='max-w-sm mb-16 text-black font-aldrich dark:text-white'>{t("portfolio.text")}</p>
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
                                <article className='text-black dark:text-white flex justify-center items-center gap-x-2 w-[100px] hover:bg-bg-100 hover:text-white'>
                                    <i className='bx bxl-github'></i>
                                    <a href="https://github.com/ARojasPolanco/FrontEndMentor" target="_blank">GitHub</a>
                                </article>
                                <article className='flex justify-center items-center gap-x-2 text-netlify w-[100px] hover:bg-bg-100'>
                                    <i className='bx bxl-netlify'></i>
                                    <a className="text-black dark:text-white hover:text-white" href="https://frontendmentor1challenges.netlify.app/" target="_blank">Netlify</a>
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
                                <article className='text-black dark:text-white flex justify-center items-center gap-x-2 w-[100px] hover:bg-bg-100 hover:text-white'>
                                    <i className='bx bxl-github'></i>
                                    <a href="https://github.com/ARojasPolanco/CarritoDeCompras" target="_blank">GitHub</a>
                                </article>
                                <article className='flex justify-center items-center gap-x-2 text-netlify w-[100px] hover:bg-bg-100'>
                                    <i className='bx bxl-netlify'></i>
                                    <a className="text-black dark:text-white hover:text-white" href="https://carrito-de-compras-academlo1.netlify.app" target="_blank">Netlify</a>
                                </article>
                            </article>
                        </article>
                        {/* 3 */}
                        <article className=' border-2 border-white/50 rounded-xl overflow-hidden'>
                            <div className='group relative overflow-hidden'>
                                <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
                                <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt="" />
                                <div className='text-white absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                    <span className='text-very-light-blue font-medium font-montserrat'>{t("portfolio.wa1")}</span>
                                </div>
                                <div className='text-white text-lg absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>Weather App</div>
                            </div>
                            <article className='flex gap-x-12 justify-center p-1'>
                                <article className='text-black dark:text-white flex justify-center items-center gap-x-2 w-[100px] hover:bg-bg-100 hover:text-white'>
                                    <i className='bx bxl-github'></i>
                                    <a href="https://github.com/ARojasPolanco/Project-2-react" target="_blank">GitHub</a>
                                </article>
                                <article className='flex justify-center items-center gap-x-2 text-netlify w-[100px] hover:bg-bg-100'>
                                    <i className='bx bxl-netlify'></i>
                                    <a className="text-black dark:text-white hover:text-white" href="https://weather-api-academlo.netlify.app" target="_blank">Netlify</a>
                                </article>
                            </article>
                        </article>
                    </div>
                    <div
                        className='flex-1 flex flex-col gap-y-10 justify-center'>
                        {/* 4 */}
                        <article className=' border-2 border-white/50 rounded-xl overflow-hidden'>
                            <div className='group relative overflow-hidden'>
                                <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
                                <img className='group-hover:scale-125 transition-all duration-500' src={img4} alt="" />
                                <div className='text-white absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                    <span className='text-very-light-blue font-medium font-montserrat'>{t("portfolio.rp1")}</span>
                                </div>
                                <div className='text-white text-lg absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>Random phrases</div>
                            </div>
                            <article className='flex gap-x-12 justify-center p-1'>
                                <article className='text-black dark:text-white flex justify-center items-center gap-x-2 w-[100px] hover:bg-bg-100 hover:text-white'>
                                    <i className='bx bxl-github'></i>
                                    <a href="https://github.com/ARojasPolanco/Project-1-react" target="_blank">GitHub</a>
                                </article>
                                <article className='flex justify-center items-center gap-x-2 text-netlify w-[100px] hover:bg-bg-100'>
                                    <i className='bx bxl-netlify'></i>
                                    <a className="text-black dark:text-white hover:text-white" href="https://project-1-react-academlo.netlify.app" target="_blank">Netlify</a>
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
                                <article className='text-black dark:text-white flex justify-center items-center gap-x-2 w-[100px] hover:bg-bg-100 hover:text-white'>
                                    <i className='bx bxl-github'></i>
                                    <a href="https://github.com/ARojasPolanco/preject-3-academlo" target="_blank">GitHub</a>
                                </article>
                                <article className='flex justify-center items-center gap-x-2 text-netlify w-[100px] hover:bg-bg-100'>
                                    <i className='bx bxl-netlify'></i>
                                    <a className="text-black dark:text-white hover:text-white" href="https://rickandmortydimensions.netlify.app" target="_blank">Netlify</a>
                                </article>
                            </article>
                        </article>
                        {/* 6 */}
                        <article className=' border-2 border-white/50 rounded-xl overflow-hidden'>
                            <div className='group relative overflow-hidden'>
                                <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
                                <img className='group-hover:scale-125 transition-all duration-500' src={img6} alt="" />
                                <div className='text-white absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                    <span className='text-very-light-blue font-medium font-montserrat'>{t("portfolio.uc1")}</span>
                                </div>
                                <div className='text-white text-lg absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>User crud Api</div>
                            </div>
                            <article className='flex gap-x-12 justify-center p-1'>
                                <article className='text-black dark:text-white flex justify-center items-center gap-x-2 w-[100px] hover:bg-bg-100 hover:text-white'>
                                    <i className='bx bxl-github'></i>
                                    <a href="https://github.com/ARojasPolanco/Project-2-react" target="_blank">GitHub</a>
                                </article>
                                <article className='flex justify-center items-center gap-x-2 text-netlify w-[100px] hover:bg-bg-100'>
                                    <i className='bx bxl-netlify'></i>
                                    <a className="text-black dark:text-white hover:text-white" href="https://weather-api-academlo.netlify.app" target="_blank">Netlify</a>
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
                                <article className='text-black dark:text-white flex justify-center items-center gap-x-2 w-[100px] hover:bg-bg-100 hover:text-white'>
                                    <i className='bx bxl-github'></i>
                                    <a href="https://github.com/ARojasPolanco/Project-5" target="_blank">GitHub</a>
                                </article>
                                <article className='flex justify-center items-center gap-x-2 text-netlify w-[100px] hover:bg-bg-100'>
                                    <i className='bx bxl-netlify'></i>
                                    <a className="text-black dark:text-white hover:text-white" href="https://pokedexapiacademlo.netlify.app" target="_blank">Netlify</a>
                                </article>
                            </article>
                        </article>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Portfolio
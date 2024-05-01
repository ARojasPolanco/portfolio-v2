import img3 from '/images/bigboost.png'
import img6 from '/images/preview.png'
import img7 from '/images/pokemonapi.png'
import { useTranslation } from 'react-i18next'

const Portfolio = () => {
    const { t } = useTranslation()

    return (
        <section className='mt-28' id='Portfolio'>
            <div className='text-center'>
                <h2 className='h2 leading-tight text-light-blue-sky dark:text-very-light-blue'>{t("portfolio.title")}
                </h2>
                <p className='max-w-sm mx-auto mb-6 text-black font-aldrich dark:text-white'>{t("portfolio.text")}</p>
            </div>
            <div
                className='flex flex-col min-[800px]:flex-row justify-center items-center gap-10 p-6'>
                <article className=' border-2 border-white/50 rounded-xl overflow-hidden max-w-[450px]'>
                    <div className='group relative overflow-hidden'>
                        <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
                        <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt="" />
                        <div className='text-white absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                            <span className='text-very-light-blue font-medium font-montserrat'>{t("portfolio.wa1")}</span>
                        </div>
                        <div className='text-white text-lg absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>BigBoost</div>
                    </div>
                    <article className='flex gap-x-12 justify-center p-1'>
                        <article className='text-black dark:text-white flex justify-center items-center gap-x-2 w-[100px] hover:bg-bg-100 hover:text-white'>
                            <i className='bx bxl-github'></i>
                            <a href="https://github.com/ARojasPolanco/bigboost" target="_blank">GitHub</a>
                        </article>
                        <article className='flex justify-center items-center gap-x-2 text-netlify w-[100px] hover:bg-bg-100'>
                            <i className='bx bxl-netlify'></i>
                            <a className="text-black dark:text-white hover:text-white" href="https://bigboostsite.netlify.app/" target="_blank">Netlify</a>
                        </article>
                    </article>
                </article>
                <article className=' border-2 border-white/50 rounded-xl overflow-hidden max-w-[450px]'>
                    <div className='group relative overflow-hidden'>
                        <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
                        <img className='group-hover:scale-125 transition-all duration-500' src={img6} alt="" />
                        <div className='text-white absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                            <span className='text-very-light-blue font-medium font-montserrat'>{t("portfolio.uc1")}</span>
                        </div>
                        <div className='text-white text-lg absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>To do list</div>
                    </div>
                    <article className='flex gap-x-12 justify-center p-1'>
                        <article className='text-black dark:text-white flex justify-center items-center gap-x-2 w-[100px] hover:bg-bg-100 hover:text-white'>
                            <i className='bx bxl-github'></i>
                            <a href="https://github.com/ARojasPolanco/ToDoList" target="_blank">GitHub</a>
                        </article>
                        <article className='flex justify-center items-center gap-x-2 text-netlify w-[100px] hover:bg-bg-100'>
                            <i className='bx bxl-netlify'></i>
                            <a className="text-black dark:text-white hover:text-white" href="https://listadetareasbyap.netlify.app/" target="_blank">Netlify</a>
                        </article>
                    </article>
                </article>
                <article className=' border-2 border-white/50 rounded-xl overflow-hidden max-w-[450px]'>
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
            <div className='text-center mt-4'>
                <a className='btn dark:text-white' href="https://github.com/ARojasPolanco?tab=repositories" target='_blank'>{t("buttom.change")}</a>
            </div>
        </section>
    )
}

export default Portfolio
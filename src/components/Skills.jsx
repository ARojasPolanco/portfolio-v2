import html from '/images/html-logo.png'
import css from '/images/css-logo.png'
import javascript from '/images/js-logo.png'
import react from '/images/react-logo.png'
import tailwind from '/images/tailwind-logo.png'
import bootstrap from '/images/bootstrap-logo.png'
import typescript from '/images/typescrpt-logo.png'
import github from '/images/github-logo.png'

const Skiils = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-html'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-css'
        },
        {
            id: 3,
            src: javascript,
            title: 'Javascript',
            style: 'shadow-javascript'
        },
        {
            id: 4,
            src: react,
            title: 'React',
            style: 'shadow-react'
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-tailwind'
        },
        {
            id: 6,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-bootstrap'
        },
        {
            id: 7,
            src: typescript,
            title: 'TypeScript',
            style: 'shadow-typescript'
        },
        {
            id: 8,
            src: github,
            title: 'Git-Hub',
            style: 'shadow-black'
        }
    ]

    return (
        <section id='Skills' className='section max-[412px]:mt-56 mt-16'>
            <div className='container mx-auto'>
                <article className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                    <article>
                        <h2 className='h2 text-light-blue-sky dark:text-very-light-blue'>Habilidades</h2>
                        <h3 className='h3 text-black dark:text-white'>Estás son algunas de las herramientas con las que trabajé</h3>
                    </article>
                    <article className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center px-12 sm:px-0'>
                        {
                            techs.map(({ id, src, title, style }) => (
                                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                    <img src={src} alt="" className='w-20 mx-auto' />
                                    <p className='mt-4 text-black dark:text-white'>{title}</p>
                                </div>
                            ))
                        }

                    </article>
                </article>
            </div>
        </section>
    )
}

export default Skiils

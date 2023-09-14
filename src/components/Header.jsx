const Header = () => {
    return (
        <section id="Home">
            <header className="px-2 flex items-center justify-between max-w-[850px] mx-auto">
                <div className="h-[130px] aspect-square borderImg relative">
                    <img src="/images/ap-logo.png" alt="" />
                </div>
                <article className="h-12 w-[170px] rounded-2xl flex justify-center text-xl font-medium text-white">
                    <button className="btn cursor-pointer">Mis proyectos</button>
                </article>
            </header >
        </section>
    )
}

export default Header
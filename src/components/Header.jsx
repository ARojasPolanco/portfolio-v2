import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch';

const Header = ({ handleDark }) => {
    return (
        <section id="Home">
            <header className="px-2 flex items-center justify-between max-w-[850px] mx-auto">
                <div className="h-[130px] aspect-square borderImg relative">
                    <img src="/images/ap-logo.png" alt="" />
                </div>
                <FormControlLabel
                    sx={{
                        display: 'block',
                    }}
                    control={
                        <Switch
                            onClick={handleDark}
                            color="primary"
                        />
                    }
                    label="🌗"
                />
                <article className="h-12 w-[170px] rounded-2xl flex justify-center text-xl font-medium text-black dark:text-white">
                    <a className="btn cursor-pointer" href="./CV_ATS.pdf" download={' '}>Descargar CV</a>
                </article>
            </header >
        </section>
    )
}

export default Header
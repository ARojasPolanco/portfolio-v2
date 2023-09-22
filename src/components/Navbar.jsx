import Tooltip from '@mui/material/Tooltip';
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import { IconButton } from '@mui/material';
import { Link } from 'react-scroll';

const Navbar = () => {

    return (
        <section>
            <section className='bg-bg-200/10 z-50 backdrop-blur-sm w-full p-2 fixed bottom-0 flex justify-between items-center sm:flex-col sm:top-0 sm:w-[50px] sm:rounded-full sm:my-auto sm:h-[250px] sm:right-4'>
                <Link to='Home' smooth={true} duration={300}>
                    <Tooltip title='Inicio' placement='left'>
                        <IconButton>
                            <HomeIcon className='text-white hover:text-netlify hover:scale-125' />
                        </IconButton>
                    </Tooltip>
                </Link>
                <Link to='About' smooth={true} duration={300}>
                    <Tooltip title='Sobre mí' placement='left'>
                        <IconButton>
                            <PersonIcon className='text-white hover:text-netlify hover:scale-125' />
                        </IconButton>
                    </Tooltip>
                </Link>
                <Link to='Skills' smooth={true} duration={300}>
                    <Tooltip title='Habilidades' placement='left'>
                        <IconButton>
                            <SchoolIcon className='text-white hover:text-netlify hover:scale-125' />
                        </IconButton>
                    </Tooltip>
                </Link>
                <Link to='Portfolio' smooth={true} duration={300}>
                    <Tooltip title='Proyectos' placement='left'>
                        <IconButton>
                            <DashboardIcon className='text-white hover:text-netlify hover:scale-125' />
                        </IconButton>
                    </Tooltip>
                </Link>
                <Link to='Contact' smooth={true} duration={300}>
                    <Tooltip title='Contacto' placement='left'>
                        <IconButton>
                            <ContactPageIcon className='text-white hover:text-netlify hover:scale-125' />
                        </IconButton>
                    </Tooltip>
                </Link>
            </section>
        </section>
    )
}

export default Navbar
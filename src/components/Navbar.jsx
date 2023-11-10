import Tooltip from '@mui/material/Tooltip';
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import { IconButton } from '@mui/material';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Navbar = () => {

    const { t } = useTranslation()

    return (
        <section>
            <section className='bg-bg-200/10 z-50 backdrop-blur-sm w-full p-2 fixed bottom-0 flex justify-between items-center sm:flex-col sm:top-0 sm:w-[50px] sm:rounded-full sm:my-auto sm:h-[250px] sm:right-4'>
                <Link to='Home' smooth={true} duration={300}>
                    <Tooltip title={t("navbar.home")} placement='left'>
                        <IconButton>
                            <HomeIcon className='text-white hover:text-netlify hover:scale-125' />
                        </IconButton>
                    </Tooltip>
                </Link>
                <Link to='About' smooth={true} duration={300}>
                    <Tooltip title={t("navbar.about")} placement='left'>
                        <IconButton>
                            <PersonIcon className='text-white hover:text-netlify hover:scale-125' />
                        </IconButton>
                    </Tooltip>
                </Link>
                <Link to='Skills' smooth={true} duration={300}>
                    <Tooltip title={t("navbar.skills")} placement='left'>
                        <IconButton>
                            <SchoolIcon className='text-white hover:text-netlify hover:scale-125' />
                        </IconButton>
                    </Tooltip>
                </Link>
                <Link to='Portfolio' smooth={true} duration={300}>
                    <Tooltip title={t("navbar.portfolio")} placement='left'>
                        <IconButton>
                            <DashboardIcon className='text-white hover:text-netlify hover:scale-125' />
                        </IconButton>
                    </Tooltip>
                </Link>
                <Link to='Contact' smooth={true} duration={300}>
                    <Tooltip title={t("navbar.contact")} placement='left'>
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
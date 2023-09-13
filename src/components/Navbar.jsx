import Tooltip from '@mui/material/Tooltip';
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import { IconButton } from '@mui/material';
import { useState } from 'react';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }
    return (
        <section className='min-h-screen'>
            <article className="h-full fixed right-4 top-0 flex items-center max-[639px]:hidden">
                <button onClick={handleShowMenu} className={`text-bg-100 text-[40px] my-auto hover:scale-125 ${showMenu ? 'hidden' : 'visible'}`}>
                    <i className='bx bx-chevron-right'></i>
                </button>
            </article>
            <section className={`bg-bg-200/10 backdrop-blur-sm w-full p-2 fixed bottom-0 flex justify-between items-center min-[640px]:flex-col min-[640px]:top-0 min-[640px]:w-[50px] min-[640px]:rounded-full min-[640px]:my-auto min-[640px]:h-[250px] ${showMenu ? 'min-[640px]:right-4' : 'min-[640px]:-right-full'} transition-all duration-300`}>
                <Tooltip title='Home' placement='left'>
                    <IconButton onClick={handleShowMenu}>
                        <HomeIcon className='text-bg-100 hover:text-netlify hover:scale-125' />
                    </IconButton>
                </Tooltip>
                <Tooltip title='About Me' placement='left'>
                    <IconButton onClick={handleShowMenu}>
                        <PersonIcon className='text-bg-100 hover:text-netlify hover:scale-125' />
                    </IconButton>
                </Tooltip>
                <Tooltip title='Skills' placement='left'>
                    <IconButton onClick={handleShowMenu}>
                        <SchoolIcon className='text-bg-100 hover:text-netlify hover:scale-125' />
                    </IconButton>
                </Tooltip>
                <Tooltip title='Projects' placement='left'>
                    <IconButton onClick={handleShowMenu}>
                        <DashboardIcon className='text-bg-100 hover:text-netlify hover:scale-125' />
                    </IconButton>
                </Tooltip>
                <Tooltip title='Contact Me' placement='left'>
                    <IconButton onClick={handleShowMenu}>
                        <ContactPageIcon className='text-bg-100 hover:text-netlify hover:scale-125' />
                    </IconButton>
                </Tooltip>
            </section>
        </section>
    )
}

export default Navbar
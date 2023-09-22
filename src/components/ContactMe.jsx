import { motion } from 'framer-motion';
import { fadeIn } from '../services/variants.js';
import emailjs from '@emailjs/browser';

const ContactMe = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dfq97pg', 'template_4m0dk7j', e.target, 'ac9w6BdON9jxsQ2OZ')
            .then((result) => {
                console.log(result.text)
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className='h-screen mt-36' id='Contact'>
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row'>
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className='flex-1 flex flex-col justify-center'>
                        <h4 className='text-xl uppercase text-tailwind font-inter font-medium mb-2 tracking-wide'>Contactame</h4>
                        <h2 className='text-[45px] lg:text-[70px] leading-none mb-12 font-aldrich text-white'>¡Trabajemos juntos!</h2>
                    </motion.div>
                    <form onSubmit={sendEmail} className='flex-1 border border-white rounded-2xl flex flex-col gap-y-6 pb-26 p-6'>
                        <input className='bg-light-gray/5 border-b border-white text-white py-2 outline-none w-full placeholder:text-white focus:border-very-light-blue transition-all'
                            type="text"
                            placeholder='Nombre' />
                        <input className='bg-light-gray/5 border-b border-white text-white py-2 outline-none w-full placeholder:text-white focus:border-very-light-blue transition-all'
                            type="text"
                            placeholder='Email' />
                        <textarea className='bg-light-gray/5 border-b border-white text-white py-2 outline-none w-full placeholder:text-white focus:border-very-light-blue transition-all resize-none mb-12' placeholder='Mensaje' />
                        <input className='btn w-[100px] text-white border border-light-gray/50' type="submit" value="Enviar" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactMe
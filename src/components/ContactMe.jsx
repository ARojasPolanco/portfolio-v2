import { motion } from 'framer-motion';
import { fadeIn } from '../services/variants.js';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const ContactMe = () => {

    const { t } = useTranslation()

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
        <section className='mt-36 pb-24' id='Contact'>
            <div className="container">
                <div className='flex flex-col lg:flex-row'>
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className='flex-1 flex flex-col justify-center'>
                        <h4 className='text-xl uppercase text-light-blue-sky dark:text-tailwind font-inter font-medium mb-2 tracking-wide'>{t("contact.title")}</h4>
                        <h2 className='text-[45px] lg:text-[70px] leading-none mb-12 font-aldrich text-black dark:text-white'>{t("contact.text")}</h2>
                    </motion.div>
                    <form onSubmit={sendEmail} className='flex-1 border border-black dark:border-white rounded-2xl flex flex-col gap-y-6 pb-26 p-6'>
                        <input className='bg-light-gray/5 border-b border-black dark:border-white text-black dark:text-white py-2 outline-none w-full placeholder:text-black dark:placeholder:text-white focus:border-very-light-blue transition-all'
                            type="text"
                            placeholder={t("contact.name")} />
                        <input className='bg-light-gray/5 border-b border-black dark:border-white text-black dark:text-white py-2 outline-none w-full placeholder:text-black dark:placeholder:text-white focus:border-very-light-blue transition-all'
                            type="text"
                            placeholder='Email' />
                        <textarea className='bg-light-gray/5 border-b border-black dark:border-white text-black dark:text-white py-2 outline-none w-full placeholder:text-black dark:placeholder:text-white focus:border-very-light-blue transition-all resize-none mb-12' placeholder={t("contact.message")} />
                        <input className='btn w-[100px] text-black dark:text-white border border-black' type="submit" value={t("contact.buttom")} />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactMe
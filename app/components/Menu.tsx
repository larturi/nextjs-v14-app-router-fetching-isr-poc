'use client';

import { useMediaQuery } from 'usehooks-ts';
import Button from './Button';
import { BiHome } from 'react-icons/bi';
import { GoDatabase } from 'react-icons/go';

const Menu = () => {
   const isMobile = useMediaQuery('(max-width: 768px)');

   return (
      <div className='flex justify-center flex-wrap md:mt-10 mt-6'>
         <Button url='/static' text='Static' />
         <Button url='/server-side' text='Server' />
         <Button url='/isr' text='ISR' />
         <Button
            url='/'
            text='Home'
            isMobile={isMobile}
            icon={<BiHome size={20} />}
         />
         <Button
            url='https://next-isr-poc.vercel.app/admin'
            text='CMS'
            blank={true}
            isMobile={isMobile}
            icon={<GoDatabase size={20} />}
         />
      </div>
   );
};

export default Menu;

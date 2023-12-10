'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ButtonSkeleton from './ButtonSkeleton';

interface Props {
   url: string;
   text: string;
   blank?: boolean;
   isMobile?: boolean;
   icon?: React.ReactNode;
}

const Button: React.FC<Props> = ({
   url,
   text,
   blank = false,
   isMobile = false,
   icon,
}) => {
   const [domLoaded, setDomLoaded] = useState(false);

   useEffect(() => {
      setDomLoaded(true);
   }, []);

   return (
      <>
         {domLoaded ? (
            <Link href={url} target={`${blank ? '_blank' : '_self'}`}>
               <p
                  className='
                     text-center mr-2 mt-2 border rounded py-1 px-2 md:py-2 md:px-3 text-sm
                     text-gray-800 dark:text-white border-gray-500 dark:border-gray-400 
                     dark:hover:border-gray-300 hover:bg-gray-100 
                     hover:border-neutral-700 hover:dark:bg-neutral-800/30
                  '
               >
                  {isMobile ? icon : text}
               </p>
            </Link>
         ) : (
            <ButtonSkeleton text={text} icon={icon} />
         )}
      </>
   );
};

export default Button;

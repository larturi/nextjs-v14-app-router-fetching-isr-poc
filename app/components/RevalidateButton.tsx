'use client';

import { useState } from 'react';
import { TbRefresh } from 'react-icons/tb';

interface Props {
   text?: string;
}

const RevalidateButton: React.FC<Props> = ({ text = 'Revalidate' }) => {
   const handleRevalidate = async () => {
      setIsLoading(true);
      await fetch(`/api/revalidate?secret=asdf1234wxyz`);
      setTimeout(() => {
         setIsLoading(false);
         window.location.reload();
      }, 500);
   };

   const [isLoading, setIsLoading] = useState(false);

   return (
      <>
         <button
            className='
                    text-center mr-2 mt-2 border rounded py-1 px-2 md:py-2 md:px-3 text-sm
                  text-gray-600 dark:text-white border-gray-500 dark:border-gray-400 
                  dark:hover:border-gray-300 hover:bg-gray-100 
                  hover:border-neutral-700 hover:dark:bg-neutral-800/30
                  '
            onClick={handleRevalidate}
         >
            <div className='flex gap-2red'>
               <span>{text}</span>
               <span className={`${isLoading ? 'animate-spin' : ''} ml-1`}>
                  <TbRefresh size={20} />
               </span>
            </div>
         </button>
      </>
   );
};

export default RevalidateButton;

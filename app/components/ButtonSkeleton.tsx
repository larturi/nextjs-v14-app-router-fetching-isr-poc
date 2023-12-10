interface Props {
   text: string;
   icon: React.ReactNode;
}

const ButtonSkeleton: React.FC<Props> = ({ text, icon }) => {
   return (
      <>
         <div className='hidden md:block'>
            <ButtonSkeletonText text={text} />
         </div>
         <div className='md:hidden'>
            <ButtonSkeletonText text={icon ? icon : text} />
         </div>
      </>
   );
};

interface ButtonSkeletonTextProps {
   text: React.ReactNode;
}

const ButtonSkeletonText: React.FC<ButtonSkeletonTextProps> = ({ text }) => {
   return (
      <p
         className='
      text-center mr-2 mt-2 border rounded py-1 px-2 md:py-2 md:px-3 text-sm
      text-gray-800 dark:text-white border-gray-600 dark:border-gray-400 
      dark:hover:border-gray-300 hover:bg-gray-100 
      hover:border-neutral-700 hover:dark:bg-neutral-800/30
   '
      >
         {text}
      </p>
   );
};

export default ButtonSkeleton;

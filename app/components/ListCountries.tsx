import React from 'react';
import { Country } from '../types/country';

interface Props {
   countries: Country[];
   color: string;
}

const ListCountries: React.FC<Props> = ({ countries, color }) => {
   return (
      <div className='container mx-auto mt-10 md:min-w-[600px] md:max-w-[600px]'>
         <h1 className='text-xl font-bold mb-3 text-gray-800 dark:text-gray-200'>
            Countries
         </h1>
         {countries.map((country: any) => (
            <div
               key={country.id}
               className='
                  border rounded-lg shadow-lg px-4 py-2 mb-3 flex flex-row justify-between
                  dark:border-gray-500 border-gray-400
               '
            >
               <div>
                  <h2 className={`text-sm md:text-xl font-bold ${color}`}>
                     {country.name}
                  </h2>
                  <div className='dark:text-white text-gray-500'>
                     <p className='text-sm'>Population: {country.population}</p>
                     <p className='text-sm hidden md:block'>
                        Continent: {country.continent}
                     </p>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
};

export default ListCountries;

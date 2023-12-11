import ListCountries from '@/app/components/ListCountries';
import TitlePage from '@/app/components/TitlePage';

async function getData() {
   const res = await fetch(
      'https://next-isr-poc-server-api.vercel.app/country',
      { cache: 'no-store' } // Always revalidate
   );

   if (!res.ok) {
      throw new Error('Failed to fetch data');
   }

   return res.json();
}

export default async function ServerSide() {
   const countries = await getData();

   return (
      <main className='flex h-[calc(100vh-90px)] flex-col items-center justify-between mt-[-25px] md:mt-[-45px] px-10 py-10 md:p-24'>
         <div>
            <TitlePage
               title='Server Side Page'
               subtitle='This page does the fetch for each request. Does not apply any
               type of cache, recommended when an instant update is needed. It is necessary to specify in the fetch.'
               codeExample='const res = await fetch(url, { cache: "no-store" } )'
               urlExampleGitHub='https://github.com/larturi/nextjs-v14-app-router-fetching-isr-poc/blob/main/app/(pages)/server-side/page.tsx#L4-L15'
               underlineColor='border-green-600 border-b-4'
               underlineWidth='w-[190px] md:w-[240px]'
            />
            <ListCountries countries={countries} color='text-green-600' />
         </div>
      </main>
   );
}

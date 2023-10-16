import { FEATURES } from '@/constants/constant.index';
import Image from 'next/image';

const Feature = () => {
  return (
    <section className='flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24'>
      <div className='max-container padding-container relative w-full flex justify-end'>
        <div className='flex flex-1 lg:min-h-[900px]'>
          <Image
            src='/phone.png'
            width={440}
            height={1000}
            alt='phone'
            className='feature-phone'
          />
        </div>
        <div className='z-20 flex w-full flex-col lg:w-[60%]'>
          <div className='relative'>
            <Image
              src='/camp.svg'
              width={50}
              height={50}
              alt='camp'
              className='absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]'
            />
            <h2 className='bold-40 lg:bold-64'>Our Feature</h2>
          </div>
          <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20'>
            {FEATURES.map((f, index) => (
              <li
                key={index}
                className='flex w-full flex-1 flex-col items-start'>
                <div className='rounded-full p-4 lg:p-7 bg-green-50'>
                  <Image src={f.icon} width={28} height={28} alt={f.title} />
                </div>
                <h2 className='bold-20 lg:bold-32 mt-5 capitalize'>
                  {f.title}
                </h2>
                <p className='regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none'>
                  {f.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Feature;

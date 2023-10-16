import Image from 'next/image';

const Guide = () => {
  return (
    <section className='flexCenter flex-col'>
      <div className='border-2 border-red-500 padding-container max-container w-full pb-24'>
        <Image src='/camp.svg' alt='camp' width={50} height={50} />
        <p className='uppercase regular-18 mt-1 mb-3 text-green-50 '>
          we are here for you
        </p>
        <div className='flex  flex-wrap justify-between gap-5 lg:gap-10'>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>Guide You to Esay Path</h2>
          <p className='regular-16 text-gray-30 xl:max-w-[520px]'>
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image src='/boat.png' width={1440} height={580} alt='boat' className='object-cover object-center 2xl:rounded-5xl'/>
        <div className='absolute bg-white min-w-[100px] min-h-[100px]'>
        
        </div>
      </div>
    </section>
  );
};

export default Guide;

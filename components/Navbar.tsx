import { NAV_LINKS } from '@/constants/constant.index';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
      <Link href='/'>
        <Image src='/hilink-logo.svg' alt='logo' width={74} height={29} />
      </Link>
      <ul className='hidden h-full gap-12 lg:flex'>
        {NAV_LINKS.map((item) => (
          <li key={item.key} className='regular-16 text-gray-50 flexCenter'>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <div className='hidden lg:flexCenter'>
        <Button
          type='button'
          title='Login'
          icon='/user.svg'
          variant='btn_dark_green'
        />
      </div>

      <Image 
        src='/menu.svg'
        width={32}
        height={32}
        alt='menu'
        className='inline-block cursor-pointer lg:hidden '
      />
    </nav>
  );
};

export default Navbar;

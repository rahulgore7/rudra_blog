import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';
import Image from 'next/image';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-white-400 py-8">
        <div className="cursor-pointer md:float-left block">
          <Link href="/">
            <div className=''>
              <Image src="/rudralogo.png" height={70} width={130}/>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

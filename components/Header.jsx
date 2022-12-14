import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getCategories } from '../services';

const Header = () => {
  const [setCategories] = useState([]);

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
            <div>
              <Image src="/rudralogo.png" height={75} width={150} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

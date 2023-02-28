import * as React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

export default function Footer() {
  return (
    <footer className='bottom-5 flex items-center justify-center p-4 text-gray-700'>
      © {new Date().getFullYear()} By{' '}
      <UnderlineLink href=''>This for the license</UnderlineLink>
    </footer>
  );
}

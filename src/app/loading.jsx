import Image from 'next/image';
import React from 'react';

export default function loading() {
  return (
    <div className="flex justify-center ">
      <Image src="/loading.svg" alt="loading..." width={200} height={200} />
    </div>
  );
}

'use client';

import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function AnimationLottie({ animationPath, width = '95%' }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width,
    },
  };

  return <Lottie {...defaultOptions} />;
}

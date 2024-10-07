'use client';
import { Error } from './Error';
import UFOImage from '../../../../public/images/ufo.png';
import { CriticalErrorProps } from '../../../../lib/types';

export const CriticalError: React.FC<CriticalErrorProps> = ({ onRetry }) => (
  <Error
    imageSrc={UFOImage.src}
    altText="UFO image"
    title="Some superintelligence has broken everything"
    subtitle="We will try to fix it quickly"
    onRetry={onRetry}
    retryText="Try again"
  />
);
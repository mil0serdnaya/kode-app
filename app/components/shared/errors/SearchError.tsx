'use client';
import { Error } from './Error';
import SearchImage from '../../../../public/images/search.png';

export const SearchError = () => {
  return (
    <Error 
      imageSrc={SearchImage.src}
      altText="Magnifying glass image"
      title="We didn&apos;t find anyone"
      subtitle="Try to adjust the request"
    />
  );
}
import Image from 'next/image';
import {
  BannerSlide, Half, ImageContainer, ContentTop, ContentDate, Time, ContentTitle, Description,
} from './Slide.style';
import Button from '../Button/Button';

const Slide = ({ post }) => {
  const {
    title, category, description, minuteToRead, image,
  } = post;

  return (
    <BannerSlide>
      <Half>
        <ImageContainer>
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            alt="Cool Image"
          />
        </ImageContainer>
      </Half>
      <Half>
        <ContentTop>
          <Button bg="#FFCDA3">{category}</Button>
          <ContentDate>September 15, 2021</ContentDate>
        </ContentTop>
        <ContentTitle>
          {title}
        </ContentTitle>
        <Description>{description}</Description>
        <Time>- {minuteToRead} mins to read</Time>
      </Half>
    </BannerSlide>
  );
};

export default Slide;

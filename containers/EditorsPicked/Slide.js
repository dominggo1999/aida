import Image from 'next/image';
import {
  EditorsPickedSlide, Half, ImageContainer, ContentTop, ContentDate, Time, ContentTitle, Description,
} from './Slide.style';
import Button from '../../components/Button/Button';
import { capitalize } from '../../util/capitalize';
import { categoryColors } from '../../data/categoryColors';

const Slide = ({ post }) => {
  const {
    title, category, description, minuteToRead, image,
  } = post;

  const bg = categoryColors[category.toLowerCase()];

  return (
    <EditorsPickedSlide>
      <Half>
        <ContentTop>
          <Button bg={bg}>{capitalize(category)}</Button>
          <ContentDate>September 15, 2021</ContentDate>
        </ContentTop>
        <ContentTitle>
          {title}
        </ContentTitle>
        <Description>{description}</Description>
        <Time>- {minuteToRead} mins to read</Time>
      </Half>
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
    </EditorsPickedSlide>
  );
};

export default Slide;

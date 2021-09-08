import Image from 'next/image';
import {
  CardWrapper, ImageWrapper, CardOverlay, CategoryText,
} from './CategoryCard.style';

const CategoryCard = ({ category }) => {
  return (
    <CardWrapper>
      <ImageWrapper>
        <Image
          src={category.image}
          layout="fill"
          objectFit="cover"
          alt="Cool Image"
        />
        <CategoryText>
          <p>
            {category.category}
          </p>
        </CategoryText>
        <CardOverlay />
      </ImageWrapper>
    </CardWrapper>
  );
};

export default CategoryCard;

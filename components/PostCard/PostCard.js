import Image from 'next/image';
import Link from 'next/link';
import {
  CardWrapper, CardImage, CardContent, CardTitle, CardDate, CardTime,
} from './PostCard.style';
import Button from '../Button/Button';
import { capitalize } from '../../util/capitalize';
import { categoryColors } from '../../data/categoryColors';

const PostCard = ({ post, col, readTime }) => {
  const {
    title, image, minuteToRead, category,
  } = post;
  const bg = categoryColors[category.toLowerCase()];

  return (
    <>
      <CardWrapper col={col}>
        <CardImage>
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            alt="Cool Image"
          />
          <Button bg={bg}>{capitalize(category)}</Button>
        </CardImage>
        <CardContent>
          <CardDate>- September 10 2021</CardDate>
          <div>
            <Link href="/">
              <CardTitle readTime={readTime}>{title}</CardTitle>
            </Link>
          </div>
          {readTime && <CardTime>{minuteToRead} mins to read</CardTime>}
        </CardContent>
      </CardWrapper>

    </>
  );
};

export default PostCard;

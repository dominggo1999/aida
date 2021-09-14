import Image from 'next/image';
import Link from 'next/link';
import {
  CardWrapper, CardImage, CardContent, CardTitle, CardDate, CardTimeToRead,
} from './PostCard2.style';
import Button from '../Button/Button';
import { capitalize } from '../../util/capitalize';
import { categoryColors } from '../../data/categoryColors';

const PostCard2 = ({ post }) => {
  const {
    title, image, minuteToRead, category,
  } = post;
  const bg = categoryColors[category.toLowerCase()];

  return (
    <CardWrapper>
      <CardImage>
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          alt="Cool Image"
        />
      </CardImage>
      <CardContent>
        <Button bg={bg}>{capitalize(category)}</Button>
        <Link href="/blog">
          <a>
            <CardTitle>{title}</CardTitle>
          </a>
        </Link>
        <CardDate>September 11, 2021</CardDate>
        <CardTimeToRead>{minuteToRead} mins to read</CardTimeToRead>
      </CardContent>
    </CardWrapper>
  );
};

export default PostCard2;

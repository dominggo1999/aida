import Image from 'next/image';
import { AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import {
  CardWrapper, ImageWrapper, CardTitle, CardName, CardDescription, SocialLinks,
} from './AboutWriterCard.style';

const authorImage = 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

const AboutWriterCard = () => {
  return (
    <CardWrapper>
      <CardTitle>About Me</CardTitle>
      <ImageWrapper>
        <Image
          src={authorImage}
          layout="fill"
          objectFit="cover"
          alt="Cool Image"
        />
      </ImageWrapper>
      <CardName>Aida Jasmine</CardName>
      <CardDescription>Lorem ipsum dolor sit amet, cons ecte tur adipiscing elit, sed do mod tempor incididunt ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nesciunt.</CardDescription>
      <SocialLinks>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/"
        >
          <AiFillLinkedin />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/"
        >
          <AiOutlineInstagram />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/"
        >
          <AiOutlineTwitter />
        </a>
      </SocialLinks>
    </CardWrapper>
  );
};

export default AboutWriterCard;

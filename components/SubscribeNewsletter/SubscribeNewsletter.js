import { FiSend } from 'react-icons/fi';
import Container from '../Wrapper/Container';
import {
  SubscribeNewsLetterWrapper, Content, ContentTop, SubscribeText, NewsletterText, ContentBottom,
} from './SubscibeNewsletter.style';
import Input from '../Input/Input';
import Button from '../Button/Button';

const SubscribeNewsletter = () => {
  return (
    <SubscribeNewsLetterWrapper>
      <Container>
        <Content>
          <ContentTop>
            <SubscribeText>
              <FiSend />
              Subscribe
            </SubscribeText>
            <NewsletterText>
              To Our Newsletter
            </NewsletterText>
          </ContentTop>
          <ContentBottom>
            <Input>
              <form>
                <input
                  required
                  type="email"
                  placeholder="Enter your email"
                />
                <Button
                  nav
                  type="input"
                >
                  Subscribe
                </Button>
              </form>
            </Input>
          </ContentBottom>
        </Content>
      </Container>
    </SubscribeNewsLetterWrapper>
  );
};

export default SubscribeNewsletter;

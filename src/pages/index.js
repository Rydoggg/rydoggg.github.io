import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout, { Content } from '../components/Layout';
import { HireMe, LinkButton } from '../components/Button.js';
import HireMePopup from '../components/HireMePopup.js';
import { media } from '../MediaQueries';
import Colors from '../Colors';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { darken } from 'polished';

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding: 140px 0 60px 0;
  ${t.H1} {
    color: ${Colors.darkest};
  }
`;

const Block = styled.div`
  &:nth-child(odd) {
    border: solid 1px ${darken(0.1, Colors.light)};
    background-color: ${Colors.light};
  }
`;

const BlockContent = styled(Content)`
  ${Mixins.block}
  padding: 100px 40px;
  ${media.tablet`
    flex-direction: column;
    align-items: baseline;
  `};
  ${media.phone`
    padding: 40px 10px;
  `};
  ${t.P} {
    margin-top: 10px;
  }
  ${t.H2} {
    margin-top: 0;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const DivWrapper = styled.div`
  padding: 80px 30px;
  ${media.tablet`padding: 50px 0;`}
  &:first-child {
    ${media.tablet`
      margin-bottom: 40px;
  `};
  }
`;

const ItemImage = styled.img`
  max-width: 85%;
  position: relative;
  ${media.tablet`max-width: none;`}
`;

const HomepageWrapper = styled.div`
  ${Mixins.wrapper}
  .who-desc {
    display: block;
    margin: 0 auto 60px auto;
    max-width: 90%;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
  }
  ${t.H1} {
    margin: 0 0 20px 0;
  }
  .avatar {
    max-width: 200px;
    width: 80%;
    margin: 0 auto 50px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
  .link {
    padding: 0;
    color: ${Colors.darkest};
    text-decoration: underlined;
    svg {
      margin-left: 7px;
    }
  }
  .portfolio {
    margin: 100px 0 50px 0;
    font-size: 42px;
  }
`;

const WorkWithMe = styled.div`
  padding: 80px;
  width: 73%;
  border-radius: 6px;
  box-shadow: 0 2px 26px 0 rgba(57, 55, 55, 0.08);
  background-color: #ffffff;
  text-align: center;
  position: relative;
  margin: 100px auto -150px auto;
  ${t.LargeP} {
    max-width: 80%;
    margin: 0 auto 28px auto;
  }
  ${media.tablet`
    width: auto;
    padding: 40px;
    margin: 50px 30px -100px 30px;
  `};
`;

class Homepage extends React.Component {
  state = {
    openHireMePopup: false
  };

  handleRequestDemoClose = () => {
    this.setState({
      openHireMePopup: false
    });
  };

  openContactPopup = () => {
    this.setState({
      openHireMePopup: true
    });
  };

  render() {
    const { openHireMePopup } = this.state;
    const { data } = this.props;
    return (
      <HomepageWrapper>
        <Layout theme="white" bigFooter openContactPopup={this.openContactPopup}>
          <AboveFold>
            <Img fluid={data.avatarHomepage.childImageSharp.fluid} alt="Ryan Long" className="avatar" />
            <t.H1 primary align="center">
              Ryan Long
            </t.H1>
            <t.LargeP align="center" max45>
              A friendly Software Consultant based just outside of London, UK. Taking development seriously whilst
              ensuring that a client's ideas are brought to life, alongside adhering to strict timelines and best
              practices.
            </t.LargeP>
            <HireMe
              large
              onClick={() => window.open('https://www.linkedin.com/in/ryan-long-6a8aaa19a/', '_blank')}
              book
            >
              Hire me
            </HireMe>
          </AboveFold>
          <Content>
            <t.H2 primary align="center" bold>
              Fluid Development
            </t.H2>
            <t.P align="center" max70 className="who-desc">
              As an avid technology user I understand that the perfect user interface needs to look good and work even
              better. Alongside taking a clients initial vision and bringing it to life, I also help uncover existing
              issues or faults and work fast to fix them. My speciality is working with whatever suits you best - from
              pure website design through to mobile applications, we'll work together to ensure your ideas match the
              output.
            </t.P>
            <t.H2 primary align="center" bold className="portfolio">
              Portfolio
            </t.H2>
          </Content>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={'https://i.imgur.com/V6fFWan.jpg'} alt="Placeholder title" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Sam Bamford Video Editor Website</t.H2>
                <t.P>
                  This bespoke website was made for Sam after he contacted me interested in a lightweight and responsive
                  website to help his video editing business.
                </t.P>
                <t.P>React / JavaScript / HTML / CSS</t.P>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://sam-bamford-videos.now.sh/"
                >
                  Link to project
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>Clothing Store Mobile App</t.H2>
                <t.P>
                  Following on from another website I created for this mobile company, they once again contacted me to
                  work as part of a team to build their mobile shopping app.
                </t.P>
                <t.P>React Native / JavaScript / HTML / CSS</t.P>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={'https://i.imgur.com/DxCP18B.png'} alt="Placeholder title" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={'https://i.imgur.com/lHs8fYk.png'} alt="Placeholder title" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Clothing Store Website</t.H2>
                <t.P>
                  This startup clothing sale company contacted me to update and flesh out the frontend for their
                  website, tying in what I produced with their existing API.
                </t.P>
                <t.P>JavaScript / HTML / CSS</t.P>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>Training Tool App</t.H2>
                <t.P>
                  Currently I'm working on a contract for a large company who have asked for a bespoke
                  mobile application to aid in training on a piece of unique equipment. The application needs to be
                  secure, responsive and lightweight.
                </t.P>
                <t.P>React Native / JavaScript / HTML / CSS</t.P>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={'https://i.imgur.com/YFlcKw8.png'} alt="Placeholder title" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <WorkWithMe>
            <t.H1 green>Get in touch</t.H1>
            <t.LargeP>Want to find out more? Contact me on LinkedIn for more info. </t.LargeP>
            <HireMe onClick={() => window.open('https://www.linkedin.com/in/ryan-long-6a8aaa19a/', '_blank')} book>
              Contact me
            </HireMe>
          </WorkWithMe>
        </Layout>
        <HireMePopup open={openHireMePopup} handleClose={this.handleRequestDemoClose} />
      </HomepageWrapper>
    );
  }
}

export default Homepage;

export const pageQuery = graphql`
  query {
    avatarHomepage: file(relativePath: { eq: "avatar.jpg" }) {
      ...fluidImage
    }
  }
`;

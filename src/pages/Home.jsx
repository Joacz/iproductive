import React, { Fragment } from 'react';
import Header from '../components/Header.tsx';
import Nav from '../components/Nav.tsx';
import CardContainer from '../components/CardContainer.tsx';
import Card from '../components/Card';
import Url from '../components/Url.tsx';
import AboutMe from '../images/aboutme.jpg';
import AboutApp from '../images/aboutapp.jpg';

const Home = () => {
  const links = [
    {
      name: 'Home',
      href: '/',
      disabled: true,
    },
    {
      name: 'Support',
      href: '/support',
    },
    {
      name: 'Tasks',
      href: '/tasks',
    },
  ];

  return (
    <div>
      <Nav links={links} brand='IProductive' />
      <Header
        title='IProductive'
        subtitle='Make tasks easier'
        about='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quo accusamus doloremque enim nobis? Deleniti eaque ipsam suscipit reprehenderit ex quibusdam impedit. Distinctio, qui veniam porro dicta eum voluptatum ullam.'
        support={
          <Fragment>
            If you want to contact me do it <Url href='/contact'>here</Url>.
          </Fragment>
        }
      ></Header>
      <div className='app-bg-cover'>
        <CardContainer>
          <Card
            title={'About The Project'}
            img={AboutApp}
            content={
              <Fragment>
                This App was designed for making your tasks easier, you can{' '}
                <Url href='/register'>Register</Url> for free and start
                creating, checking and deleting tasks dinamically. This
                application was created on{' '}
                <span className='text-pink-900 font-medium'>React.js</span>{' '}
                framework, with{' '}
                <span className='text-green-800 font-medium'>Spring REST</span>{' '}
                on the back side.
              </Fragment>
            }
          />
          <Card
            title={'About me'}
            img={AboutMe}
            content={
              <Fragment>
                I'm Joaquín Gómez, a self-taught programmer. From Argentina,
                I've created several applications with{' '}
                <mark>React, Next.js, Spring Boot, and SQL databases</mark>. You
                can find more information about me in my{' '}
                <Url href='#'>Personal Portfolio</Url>
              </Fragment>
            }
          />
        </CardContainer>
      </div>
    </div>
  );
};

export default Home;

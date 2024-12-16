import React, { useState } from 'react';
import img1 from '../../imgs/Illustration.png';
import { A11y, Autoplay, Pagination } from 'swiper/modules'; // Autoplay modulini import qiling
import { Swiper, SwiperSlide } from 'swiper/react';
import imgs1 from '../../imgs/Company logo.png';
import imgs2 from '../../imgs/Company logo-1.png';
import imgs3 from '../../imgs/Company logo-2.png';
import imgs4 from '../../imgs/Company logo-3.png';
import imgs5 from '../../imgs/Company logo-4.png';
import imgs6 from '../../imgs/Company logo-5.png';
import conImg from '../../imgs/asdf.png';
import icon1 from '../../imgs/icon (1).png';
import iconn from '../../imgs/iconn.png';
import 'swiper/css/pagination';
import bottom from '../../imgs/bottom.png';
import 'swiper/css';
import 'swiper/css/autoplay'; // Autoplay uchun kerakli style
import Fetch from '../components/Fetch';
import { Link } from 'react-router-dom';
import makeImg from '../../imgs/imgss.png';
function Home() {
  const { data } = Fetch('http://localhost:8000/item');
  const { team } = Fetch('http://localhost:8000/team');
  const [activeIndex, setActiveIndex] = useState(0);

  const accc = [
    {
      numb: '01',
      title: 'Consultation',
      text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
      id: 1,
    },
    {
      numb: '02',
      title: 'Research and Strategy Development',
      text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
      id: 2,
    },
    {
      numb: '03',
      title: 'Implementation',
      text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
      id: 3,
    },
    {
      numb: '04',
      title: 'Monitoring and Optimization',
      text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
      id: 4,
    },
    {
      numb: '05',
      title: 'Reporting and Communication',
      text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
      id: 5,
    },
    {
      numb: '06',
      title: 'Continual Improvement',
      text: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
      id: 6,
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="wrap container">
      <div className="home">
        <div className="home-row">
          <div className="home-left">
            <h2 className="home-title">
              Navigating the digital landscape for success
            </h2>
            <p className="home-text">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <button className="btn home-btn">Book a consultation</button>
          </div>
          <div className="home-right">
            <img
              src={img1}
              alt="Illustration"
            />
          </div>
        </div>
      </div>
      <div className="imgs">
        <Swiper
          // Install Swiper modules
          modules={[A11y, Autoplay]} // Autoplay modulini qo'shing
          spaceBetween={50}
          slidesPerView={5}
          loop={true} // Infinite loop
          autoplay={{
            delay: 1500, // 2 seconds delay between slides
            disableOnInteraction: false, // Ensures autoplay keeps going even after user interaction
          }}
          speed={1000}
          grabCursor={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <img
              src={imgs1}
              alt="there have a picture"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imgs2}
              alt="there have a picture"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imgs3}
              alt="there have a picture"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imgs4}
              alt="there have a picture"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imgs5}
              alt="there have a picture"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imgs6}
              alt="there have a picture"
            />
          </SwiperSlide>
          {/* Add more slides here */}
        </Swiper>
      </div>
      <div className="services">
        <div className="serv-box">
          <h2 className="serv-title">Services</h2>
          <p className="serv-text">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>
        <div className="s-row">
          {data &&
            data.map((e) => {
              return (
                <div className={`serv-cards ${e.bg}`}>
                  <div className="s-card-left">
                    <h1 className="serv-card-title">
                      <span className={`${e.color}`}>{e.title}</span> <br />
                      <span className={`${e.color}`}>{e.title2}</span>
                    </h1>
                    <div className="s-c-img2">
                      <img
                        src={e.img2}
                        alt="network is error"
                      />
                      <Link
                        to="/"
                        className={`${e.rang}`}
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                  <div className="s-card-right">
                    <img
                      src={e.img}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="make">
        <div className="make-row">
          <div className="make-left">
            <h2 className="make-title">Let’s make things happen</h2>
            <p className="make-text">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <button className="make-btn">Get your free proposal</button>
          </div>
          <div className="make-right">
            <img
              src={makeImg}
              alt=""
              className="make-img"
            />
          </div>
        </div>
      </div>
      <div className="study">
        <div className="serv-box">
          <h2 className="serv-title case">Case Studies</h2>
          <p className="serv-text">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </div>
        <div className="study-row">
          <div className="study-cards">
            <p className="study-card-text">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <Link className="study-card-link">
              Learn more{' '}
              <img
                src={icon1}
                alt=""
                className="s-link_img"
              />
            </Link>
          </div>
          <div className="border-study"></div>
          <div className="study-cards">
            <p className="study-card-text">
              For a B2B software company, we developed an SEO strategy that
              resulted in a first page ranking for key keywords and a 200%
              increase in organic traffic.
            </p>
            <Link className="study-card-link">
              Learn more{' '}
              <img
                src={icon1}
                alt=""
                className="s-link_img"
              />
            </Link>
          </div>
          <div className="border-study"></div>
          <div className="study-cards">
            <p className="study-card-text">
              For a national retail chain, we created a social media marketing
              campaign that increased followers by 25% and generated a 20%
              increase in online sales.
            </p>
            <Link className="study-card-link">
              Learn more{' '}
              <img
                src={icon1}
                alt=""
                className="s-link_img"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="work">
        <div className="serv-box">
          <h2 className="serv-title case">Case Studies</h2>
          <p className="serv-text">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </div>
        {accc.map((item, index) => (
          <div
            className={
              activeIndex === index
                ? 'accordion-body open accordion'
                : 'accordion-body accordion'
            }
            key={index}
            onClick={() => toggleAccordion(index)}
          >
            <div className="accordion-header">
              <div className="accor-text-box">
                <h2 className="numb">{item.numb}</h2>
                <h3 className="accor-title">{item.title}</h3>
              </div>
              <i
                className={activeIndex === index ? 'bx bx-minus' : 'bx bx-plus'}
              ></i>
            </div>
            <div>
              <p className="accor-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="team">
        <div className="serv-box">
          <h2 className="serv-title case">Team</h2>
          <p className="serv-text">
            Meet the skilled and experienced team behind our successful digital
            marketing strategies
          </p>
        </div>
        <div className="team-row">
          {team &&
            team.map((a) => {
              return (
                <div
                  className="team-cards"
                  key={a.id}
                >
                  <div className="t-c-row">
                    <img
                      src={a.img}
                      alt=""
                      className="t-c-img"
                    />
                    <div className="t-c-box">
                      <h2 className="t-name">{a.title}</h2>
                      <p className="t-surname">{a.subtitle}</p>
                    </div>
                  </div>
                  <p className="t-c-text">{a.text}</p>
                  <img
                    className="iconn"
                    src={iconn}
                    alt=""
                  />
                </div>
              );
            })}
        </div>
        <div className="btn-box">
          <button className="team-btn">See all team</button>
        </div>
      </div>
      <div className="test">
        <div className="serv-box">
          <h2 className="serv-title case">Testimonials</h2>
          <p className="serv-text">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
            about Our Digital Marketing Services
          </p>
        </div>
        <div className="test-row">
          <Swiper
            modules={[A11y, Pagination, Autoplay]} // Autoplay modulini qo'shing
            spaceBetween={50} // Bo'shliqni yo'q qilish
            slidesPerView={1.5} // Faqat 1 ta slaydni ko'rsatish
            loop={true} // Infinite loop
            centeredSlides={true} // Slaydni o'rtaga joylashtirish
            autoplay={{
              delay: 1500, // 1.5 seconds delay between slides
              disableOnInteraction: false, // Ensures autoplay keeps going even after user interaction
            }}
            pagination={{ clickable: true }}
            speed={2000} // Animatsiya tezligi
            grabCursor={true} // Tutqich ko'rinishi
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <div className="test-card">
                <div className="t-card-box">
                  <p className="test-text">
                    "We have been working with Positivus for the past year and
                    have seen a significant increase in website traffic and
                    leads as a result of their efforts. The team is
                    professional, responsive, and truly cares about the success
                    of our business. We highly recommend Positivus to any
                    company looking to grow their online presence."
                  </p>
                  <img
                    src={bottom}
                    alt=""
                    className="bottom"
                  />
                </div>
                <h4 className="test-title">John Smith</h4>
                <p className="test-subtitle">Marketing Director at XYZ Corp</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="test-card">
                <div className="t-card-box">
                  <p className="test-text">
                    "We have been working with Positivus for the past year and
                    have seen a significant increase in website traffic and
                    leads as a result of their efforts. The team is
                    professional, responsive, and truly cares about the success
                    of our business. We highly recommend Positivus to any
                    company looking to grow their online presence."
                  </p>
                  <img
                    src={bottom}
                    alt=""
                    className="bottom"
                  />
                </div>
                <h4 className="test-title">John Smith</h4>
                <p className="test-subtitle">Marketing Director at XYZ Corp</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="test-card">
                <div className="t-card-box">
                  <p className="test-text">
                    "We have been working with Positivus for the past year and
                    have seen a significant increase in website traffic and
                    leads as a result of their efforts. The team is
                    professional, responsive, and truly cares about the success
                    of our business. We highly recommend Positivus to any
                    company looking to grow their online presence."
                  </p>
                  <img
                    src={bottom}
                    alt=""
                    className="bottom"
                  />
                </div>
                <h4 className="test-title">John Smith</h4>
                <p className="test-subtitle">Marketing Director at XYZ Corp</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="test-card">
                <div className="t-card-box">
                  <p className="test-text">
                    "We have been working with Positivus for the past year and
                    have seen a significant increase in website traffic and
                    leads as a result of their efforts. The team is
                    professional, responsive, and truly cares about the success
                    of our business. We highly recommend Positivus to any
                    company looking to grow their online presence."
                  </p>
                  <img
                    src={bottom}
                    alt=""
                    className="bottom"
                  />
                </div>
                <h4 className="test-title">John Smith</h4>
                <p className="test-subtitle">Marketing Director at XYZ Corp</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="test-card">
                <div className="t-card-box">
                  <p className="test-text">
                    "We have been working with Positivus for the past year and
                    have seen a significant increase in website traffic and
                    leads as a result of their efforts. The team is
                    professional, responsive, and truly cares about the success
                    of our business. We highly recommend Positivus to any
                    company looking to grow their online presence."
                  </p>
                  <img
                    src={bottom}
                    alt=""
                    className="bottom"
                  />
                </div>
                <h4 className="test-title">John Smith</h4>
                <p className="test-subtitle">Marketing Director at XYZ Corp</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="contact">
        <div className="serv-box">
          <h2 className="serv-title case">Contact Us</h2>
          <p className="serv-text">
            Connect with Us: Let's Discuss Your Digital Marketing Needs
          </p>
        </div>
        <div className="con-row">
          <div className="con-left">
            <div className="con-row2">
              <div className="inp-boxchek">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="con-chekbox"
                />
                <p className="check-text">Say Hi</p>
              </div>
              <div className="inp-boxchek">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="con-chekbox"
                />
                <p className="check-text">Get a Quote</p>
              </div>
            </div>
            <div className="inp-box">
              <h4 className="inp-label">Name</h4>
              <input
                type="text"
                placeholder="Name"
                name=""
                id=""
                className="con-inp"
              />
            </div>
            <div className="inp-box">
              <h4 className="inp-label">Email*</h4>
              <input
                type="text"
                placeholder="Email"
                name=""
                id=""
                className="con-inp"
              />
            </div>
            <div className="inp-box">
              <h4 className="inp-label">Message*</h4>
              <input
                type="text"
                placeholder="Message"
                name=""
                id=""
                className="con-inp"
              />
            </div>
            <button className="con-btn">Send Message</button>
          </div>
          <div className="con-right">
            <img
              src={conImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

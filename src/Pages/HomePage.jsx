import styles from "../Styles/HomePage.module.css";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useState, useEffect } from "react";
import { IoMdMedical } from "react-icons/io";
import img1 from "../Images/Home_Page_Images/homepage-img1.png";
import img2 from "../Images/Home_Page_Images/homepage-img2.png";

import { useNavigate } from "react-router-dom";
export const HomePage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentServiceStep, setServiceCurrentStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % 3);
    }, 2500);

    return () => clearInterval(intervalId);
  }, [currentStep]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setServiceCurrentStep((prevStep) => (prevStep + 1) % 4);
    }, 2500);

    return () => clearInterval(intervalId);
  }, [currentServiceStep]);

  return (
    <div id={styles.HomePage}>
      <DIV>
        <div className="hero-div">
          <div className="first-hero-div">
            <h1>
              Business Loan with Unlimited{" "}
              <span className="gradient-text">Rewards</span> in Lifetime
            </h1>
            <p>
              Thousands of entrepreneurs bank on Winden to start or grow their
              business. Open an account in under 3 minutes.
            </p>
            <button onClick={() => navigate("/loan")} className="getStartedBtn">
              Get Started
            </button>
          </div>
          <div className="second-hero-div">
            <img src={img1} alt="" />
          </div>
        </div>
        {/* Steps section */}
        <p
          style={{
            textAlign: "center",
            color: "#fe9c13",
            fontSize: "1.2rem",
            marginTop: "50px",
          }}
        >
          How it Works
        </p>
        <h1 className="heading">
          We Help You to Find{" "}
          <span className="gradient-text">The Cheapest</span> Loan
        </h1>
        <div className="steps-div">
          <div className="left-steps-div">
            <div className={0 === currentStep ? "highlight" : "not-highlight"}>
              <div className="circleSteps">
                <h3>1</h3>
              </div>
              <div>
                <h2 className="steps-heading">
                  Apply free of charge & without obligation
                </h2>
                <p>
                  You submit one application. It only takes a few minutes. We
                  then obtain offers from the banks for you.
                </p>
              </div>
            </div>
            <div className={1 === currentStep ? "highlight" : "not-highlight"}>
              <div className="circleSteps">
                <h3>2</h3>
              </div>
              <div>
                <h2>Compare The Offer You Choose on Platform</h2>
                <p>
                  You submit one application. It only takes a few minutes. We
                  then obtain offers from the banks for you.
                </p>
              </div>
            </div>
            <div className={2 === currentStep ? "highlight" : "not-highlight"}>
              <div className="circleSteps">
                <h3>3</h3>
              </div>
              <div>
                <h2>Choose The Best Offer That You Need</h2>
                <p>
                  You submit one application. It only takes a few minutes. We
                  then obtain offers from the banks for you.
                </p>
              </div>
            </div>
          </div>
          <div className="right-steps-div">
            <img src={img2} alt="" />
          </div>
        </div>

        {/* Service section */}
        <p
          style={{
            textAlign: "center",
            color: "#fe9c13",
            fontSize: "1.2rem",
            marginTop: "40px",
          }}
        >
          Our Services
        </p>
        <h1 className="heading">
          What Can <span className="gradient-text">We Do</span> {"  "}for Your
          Business
        </h1>
        {/* <p
          style={{
            textAlign: "center",
            color: "gray",
            width: "50%",
            margin: "auto",
            fontSize: "1.2rem",
          }}
        >
          We're on a mission to transform how businesses pay for large invoices,
          from Saas and cloud to professional and marketing expenses.
        </p> */}
        <div className="service-div">
          <div
            className={
              0 === currentServiceStep
                ? "service-highlight"
                : "service-not-highlight"
            }
          >
            <div>
              <h2>
                {" "}
                <span style={{ marginRight: "10px", marginTop: "100px" }}>
                  <IoMdMedical />
                </span>
                Pay For You
              </h2>
            </div>
            <div>
              <p>
                It takes 2 min. to complete the application, and you will
                immediately receive offers from the first banks, so you can
                quicklychoose the best offer.
              </p>
            </div>
          </div>
          <div
            className={
              1 === currentServiceStep
                ? "service-highlight"
                : "service-not-highlight"
            }
          >
            <div>
              <h2>
                {" "}
                <span style={{ marginRight: "10px", marginTop: "100px" }}>
                  <IoMdMedical />
                </span>
                Take Control
              </h2>
            </div>
            <div>
              <p>
                It takes 2 min. to complete the application, and you will
                immediately receive offers from the first banks, so you can
                quicklychoose the best offer.
              </p>
            </div>
          </div>
          <div
            className={
              2 === currentServiceStep
                ? "service-highlight"
                : "service-not-highlight"
            }
          >
            <div>
              <h2>
                {" "}
                <span style={{ marginRight: "10px", marginTop: "100px" }}>
                  <IoMdMedical />
                </span>
                Spend On Growth
              </h2>
            </div>
            <div>
              <p>
                It takes 2 min. to complete the application, and you will
                immediately receive offers from the first banks, so you can
                quicklychoose the best offer.
              </p>
            </div>
          </div>
          <div
            className={
              3 === currentServiceStep
                ? "service-highlight"
                : "service-not-highlight"
            }
          >
            <div>
              <h2>
                {" "}
                <span style={{ marginRight: "10px", marginTop: "100px" }}>
                  <IoMdMedical />
                </span>
                Easy Loan
              </h2>
            </div>
            <div>
              <p>
                It takes 2 min. to complete the application, and you will
                immediately receive offers from the first banks, so you can
                quicklychoose the best offer.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <p
            style={{
              textAlign: "center",
              color: "#fe9c13",
              fontSize: "1.2rem",
              marginTop: "40px",
            }}
          >
            Testimonial
          </p>
          <h1 className="heading">
            What Our Loyal{" "}
            <span className="gradient-text">Customer Saying</span>
          </h1>
        </div>

        <div className="testimonials-div">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            slidesPerView={4} // Display 4 slides at a time
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div>
                <q>
                  I've been with Syloan for a few years, and every single
                  encounter w them has been exceptional despite my comparatively
                  small-status among businesses they likely serve.
                </q>
              </div>
              <div className="testimonial-name">
                <div className="testimonial-image-div">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1591084728795-1149f32d9866?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>
                  <div>
                    <p>David James</p>
                    <p>CEO/ Chairman</p>
                  </div>
                </div>
                <div>⭐⭐⭐⭐</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div>
                <q>
                  I've been with Syloan for a few years, and every single
                  encounter w them has been exceptional despite my comparatively
                  small-status among businesses they likely serve.
                </q>
              </div>
              <div className="testimonial-name">
                <div className="testimonial-image-div">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1591084728795-1149f32d9866?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>
                  <div>
                    <p>David James</p>
                    <p>CEO/ Chairman</p>
                  </div>
                </div>
                <div>⭐⭐⭐⭐</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div>
                <q>
                  I've been with Syloan for a few years, and every single
                  encounter w them has been exceptional despite my comparatively
                  small-status among businesses they likely serve.
                </q>
              </div>
              <div className="testimonial-name">
                <div className="testimonial-image-div">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1591084728795-1149f32d9866?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>
                  <div>
                    <p>David James</p>
                    <p>CEO/ Chairman</p>
                  </div>
                </div>
                <div>⭐⭐⭐⭐</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div>
                <q>
                  I've been with Syloan for a few years, and every single
                  encounter w them has been exceptional despite my comparatively
                  small-status among businesses they likely serve.
                </q>
              </div>
              <div className="testimonial-name">
                <div className="testimonial-image-div">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1591084728795-1149f32d9866?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>
                  <div>
                    <p>David James</p>
                    <p>CEO/ Chairman</p>
                  </div>
                </div>
                <div>⭐⭐⭐⭐</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div>
                <q>
                  I've been with Syloan for a few years, and every single
                  encounter w them has been exceptional despite my comparatively
                  small-status among businesses they likely serve.
                </q>
              </div>
              <div className="testimonial-name">
                <div className="testimonial-image-div">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1591084728795-1149f32d9866?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>
                  <div>
                    <p>David James</p>
                    <p>CEO/ Chairman</p>
                  </div>
                </div>
                <div>⭐⭐⭐⭐</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </DIV>
    </div>
  );
};

const DIV = styled.div`
  margin: 0;
  padding: 0;

  .hero-div {
    display: flex;
    margin: auto;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 100px;
    justify-content: space-around;
    background-color: #0e0a20;
    padding-bottom: 60px;
    color: aliceblue;
    height: 70vh;
  }
  .second-hero-div {
    perspective: 1000px;
  }
  .second-hero-div img {
    width: 700px;
    border-radius: 20px;
    transform: rotateY(-20deg);
    transform-origin: center;
    transition: transform 0.5s ease;
    margin-top: 30px;
  }
  .second-hero-div img:hover {
    transform: rotateY(0deg);
    cursor: pointer;
  }
  .getStartedBtn {
    background-color: #52dffe;
    border: 0;
    border-radius: 22px;
    padding: 0.9rem 2rem;
    display: block;
    text-align: left;
    cursor: pointer;
  }
  .hero-div h1 {
    font-size: 3.3vw;
    text-align: left;
  }
  .hero-div p {
    width: 80%;
    margin-bottom: 32px;
    text-align: left;
  }
  .gradient-text {
    background: linear-gradient(
      45deg,
      #52dffe,
      #6085f9,
      #6085f9,
      #53dafd,
      #0e0a20
    );
    -webkit-background-clip: text;
    color: transparent;
  }
  .steps-div {
    width: 90%;
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-around;
    margin: auto;
    background-color: #fbfbfb;
  }
  .steps-div img {
    width: 500px;
  }
  .left-steps-div > div {
    display: flex;
    align-items: center;
  }

  .left-steps-div > div div:nth-child(2) {
    width: 70%;
    text-align: left;
  }
  .circleSteps {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #4b32bd;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-right: 32px;
  }
  .swiper {
    width: 100%;
    height: 250px;
  }

  .swiper-slide {
    border: 1px solid red;
    border: 0;
    border-radius: 40px;
    text-align: center;
    font-size: 1rem;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 1rem;
    color: #686868;
    padding-bottom: -10px;
  }

  .swiper-slide img {
    width: 40px;
    border-radius: 50%;
  }
  .testimonials-div {
    padding-top: 60px;
    background-color: #d0c8ff;
    padding-bottom: 60px;
  }
  .testimonial-name {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-top: 12px;
    color: black;
    font-weight: 500;
    font-size: 1rem;
  }
  .testimonial-name p:nth-child(2) {
    margin-top: -12px;
  }
  .testimonial-image-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .heading {
    text-align: center;
    font-size: 2.2rem;
    width: 30%;
    margin: auto;
    margin-bottom: 20px;
    margin-top: -10px;
  }

  .service-div {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: auto;
  }
  .service-div h2 {
    color: #5746a7;
  }

  .service-div > div {
    display: flex;
    justify-content: space-around;
    height: 80px;
    align-items: center;
    padding: 0.8rem 1.5rem;
  }

  .service-div > div div:nth-child(1) {
    width: 40%;
  }

  .service-div > div div:nth-child(2) {
    width: 60%;
    padding-right: 10%;
  }
  .service-div p {
    font-size: 1.2rem;
  }

  .service-highlight {
    transform: scale(1.1);
    transition: color 1.5s ease-in-out;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }

  .service-not-highlight h2,
  .service-not-highlight p {
    color: gray;
    transition: color 1.5s ease-in-out;
  }

  .highlight {
    color: black;
    transition: color 1.5s ease-in-out;
    /* transform: scale(1.04); */
  }

  .left-steps-div > div {
    transition: color 1.5s ease-in-out;
  }
  .not-highlight h2,
  .not-highlight p {
    color: gray;
  }

  .not-highlight .circleSteps {
    background-color: gray;
  }

  @media (max-width: 1020px) {
    .hero-div img {
      width: 500px;
    }
    .hero-div h1 {
      font-size: 2rem;
    }
    .hero-div p {
      width: 100%;
    }
    .heading {
      font-size: 1.9rem;
      width: 50%;
    }
    .steps-div img {
      width: 350px;
    }
    .left-steps-div h2 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 800px) {
    .hero-div {
      flex-direction: column-reverse;
    }
    .hero-div img {
      width: 400px;
    }
    .steps-div {
      flex-direction: column-reverse;
    }
    .service-div p,
    h2 {
      font-size: 1rem;
    }
    .service-div h2 {
    }
    .service-div > div div:nth-child(2) {
      padding-right: 0%;
    }
  }
  @media (max-width: 450px) {
    .hero-div img {
      width: 320px;
    }
    .heading {
      font-size: 1.5rem;
    }
    .testimonials-div q {
      /* font-size: 0.3rem; */
    }
  }
  @media (max-width: 500px) {
    .swiper {
      width: 100%;
      /* height: 450px; */
    }
    .swiper-slide {
      /* width: 100%; */
    }
    .service-div {
      width: 95%;
    }
    .service-div p,
    h2 {
      font-size: 0.8rem;
    }
  }
`;

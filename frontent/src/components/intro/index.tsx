import React, { useCallback } from "react";
import DefaultLayout from "../layouts";
import AliceCarousel from "react-alice-carousel";
import CarouselCustomDots from "../utils/carousel-custom-dots";
import { BlueButton, CardContainer, GetStartedComponent } from "./intro-styles";
import { useRouter } from "next/router";

const data: any[] = [
  {
    title: "Welcome to WarmHole Wallet",
    description: "Your one-stop solution for managing all your digital assets.",
  },
  {
    title: "Send Money",
    description:
      "Send money to anyone, anywhere in the world with a few clicks.",
  },
  {
    title: "Receive Money",
    description:
      "Receive money from anyone, anywhere in the world with a few clicks.",
  },
  {
    title: "Swap Assets",
    description: "Swap your digital assets with ease.",
  },
];

const IntroComponent = () => {
  //hooks
  const router = useRouter();

  //states
  const [activeIndex, setActiveIndex] = React.useState(0);
  const carouselRef = React.useRef<any>();

  //functions
  const onDotClick = useCallback((index: number) => {
    if (carouselRef.current) {
      carouselRef.current.slideTo(index);
    }
  }, []);

  return (
    <DefaultLayout>
      <GetStartedComponent>
        <AliceCarousel
          mouseTracking
          items={data.map((items, index) => (
            <CardContainer key={index}>
              <header>{items.title}</header>
              <p>{items.description}</p>
            </CardContainer>
          ))}
          responsive={{
            0: { items: 1 },
          }}
          disableDotsControls
          infinite
          autoPlay
          autoPlayInterval={6000}
          disableButtonsControls
          onSlideChanged={(event) => {
            const correctIndex = event.item % data.length;
            setActiveIndex(correctIndex);
          }}
          ref={carouselRef}
        />
        <CarouselCustomDots
          itemsCount={data.length}
          onDotClick={onDotClick}
          activeIndex={activeIndex}
        />
        <BlueButton
          onClick={() => router.push("/wallet")}
          sx={{ marginTop: "25px" }}
        >
          Get Started
        </BlueButton>
      </GetStartedComponent>
    </DefaultLayout>
  );
};

export default IntroComponent;

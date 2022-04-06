import { useCallback } from "react";
import { useAtom } from "jotai";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { slideAtom } from "../atoms";

export default function Slides({ words, children }) {
  const [currentSlide, setCurrentSlide] = useAtom(slideAtom);
  const onSlideChange = useCallback(
    (index) => {
      if (currentSlide !== index) {
        setCurrentSlide(index);
      }
    },
    [currentSlide, setCurrentSlide]
  );

  const wordSlides =
    !Array.isArray(words) || words.length == 0 ? (
      <div className="my-slide is-size-1 has-text-danger">
        Empty words list
        <style jsx>
          {`
            .empty {
              font-size: 30vh;
              color: #333;
            }
          `}
        </style>
      </div>
    ) : (
      words.map((word, idx) => {
        return (
          <div className="my-slide word" key={idx}>
            {word}
          </div>
        );
      })
    );

  return (
    <Carousel
      selectedItem={currentSlide}
      onChange={onSlideChange}
      autoFocus={true}
      showThumbs={false}
      showStatus={false}
      useKeyboardArrows
      className="presentation-mode"
    >
      {wordSlides}
    </Carousel>
  );
}

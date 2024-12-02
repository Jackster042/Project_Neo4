import { useEffect, useRef } from "react";

import clsx from "clsx";
import { gsap } from "gsap";

// gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass }) => {
  return (
    <div className={clsx("animated-title", containerClass)}>
      Disc<b>o</b>ver the wordl's <br /> largest shared <b>a</b>dventure
      {title.split("<br />").map((line, index) => {
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, i) => (
            <span
              key={i}
              className="animated-word"
              dangerouslySetInnerHTML={{ _html: word }}
            />
          ))}
        </div>;
      })}
    </div>
  );
};

export default AnimatedTitle;

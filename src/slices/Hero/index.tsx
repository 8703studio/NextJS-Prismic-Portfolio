import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid min-h-[100vh] grid-cols-1 items-center">
        <div className="col-start-1 md:row-start-1">
        <h1 className="mb-8 font-semibold text-[clamp(3rem,20vmin,2rem)] leading-none tracking-tighter" aria-label={
          slice.primary.studioname + "" + slice.primary.tagline
        }
        >
        <span className="block">{slice.primary.studioname}</span>
        <span className="mt-6 block">{slice.primary.tagline}</span>
        </h1>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;

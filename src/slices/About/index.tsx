import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Bio`.
 */
export type BioProps = SliceComponentProps<Content.BioSlice>;

/**
 * Component for "Bio" Slices.
 */
const Bio = ({ slice }: BioProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="block md:block bg-neutral-50 w-full md:w-80 h-fit sticky top-3">
        <div>helllllllooo</div>
      </div>
    </Bounded>
  );
};

export default Bio;

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Works`.
 */
export type WorksProps = SliceComponentProps<Content.WorksSlice>;

/**
 * Component for "Works" Slices.
 */
const Works = ({ slice }: WorksProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for works (variation: {slice.variation}) Slices
    </section>
  );
};

export default Works;

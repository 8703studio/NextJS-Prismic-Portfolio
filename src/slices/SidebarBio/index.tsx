import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SidebarBio`.
 */
export type SidebarBioProps = SliceComponentProps<Content.SidebarBioSlice>;

/**
 * Component for "SidebarBio" Slices.
 */
const SidebarBio = ({ slice }: SidebarBioProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for sidebar_bio (variation: {slice.variation})
      Slices
    </section>
  );
};

export default SidebarBio;

import React from "react";
import clsx from "clsx";


type SidebarProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ as: Comp = "section", className, children, ...restProps }, ref) => {
    return (
      <Comp
        ref={ref}
        className={clsx("px-4 py-4 md:px-6 md:py-14 lg:py-16", className)}
        {...restProps}
      >
        <div className="mx-auto w-full max-w-7xl">{children}</div>
      </Comp>
    );
  },
);

// Set a display name for the component
Sidebar.displayName = "Sidebar";

export default Sidebar;
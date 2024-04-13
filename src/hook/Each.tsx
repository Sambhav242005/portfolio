import React, { ReactNode } from "react";

// Define TypeScript interfaces for the component props
interface EachElementProps {
  // The render prop is a function that takes an item of any type and its index, then returns a ReactNode
  render: (item: any, index: number) => ReactNode;
  // The 'of' prop is an array of any type
  of: any[];
}

// Define the functional component with explicit props typing
export const EachElement: React.FC<EachElementProps> = ({ render, of }) => (
  <>
    {of.map((item, index) => (
      // Use React.Fragment to wrap each rendered item, providing a key
      <React.Fragment key={item.id || index}>
        {render(item, index)}
      </React.Fragment>
    ))}
  </>
);

import React from 'react';

const InlineList = ({align, children, styles, spacingBetween, verticalAlign}) => {
  return (
    <div>
      {React.Children.map(children, child => (
        <div>{child}</div>
      ))}
    </div>
  );
}

export default InlineList;
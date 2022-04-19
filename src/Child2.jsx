import React, { memo } from 'react';

function Child2() {
  console.log('Child 2 Component render');
  return <div>Child2 Component</div>;
}

export default memo(Child2, (prevProps, nextProps) => {
  return true;
});

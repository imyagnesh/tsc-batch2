import React, { memo } from 'react';

function Test({ user, age }) {
  console.log('test re render');
  return (
    <div>
      {user.name} age {age}
    </div>
  );
}

export default memo(Test);

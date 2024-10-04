import React from 'react';

import env from '@/env';

const Comp = () => {
  return (
    <div>
      <h1>Test</h1>
      <p>{env.APP_NAME}</p>
    </div>
  );
};

export default Comp;

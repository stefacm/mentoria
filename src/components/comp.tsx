import React from 'react';

import env from '@/env';

const Comp = () => {
  return (
    <div>
      <h1 className="text-xs text-slate-400">Test</h1>
      <p>{env.APP_NAME}</p>
    </div>
  );
};

export default Comp;

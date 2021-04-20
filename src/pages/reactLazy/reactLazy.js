import React, { Suspense } from 'react';
import MyErrorBoundary from './MyErrorBoundary';

const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

export default function ReactLazy() {
  return (
    <div>
        <MyErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <section>
              <OtherComponent />
              <AnotherComponent />
            </section>
          </Suspense>
        </MyErrorBoundary>
    </div>
  );
}
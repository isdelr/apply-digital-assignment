import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';
import React from 'react';

// Mock all SVG imports as React components
vi.mock('*.svg', () => {
  const MockSvg = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => 
    React.createElement('svg', {
      ...props,
      ref,
      'data-testid': 'mock-svg'
    })
  );
  MockSvg.displayName = 'MockSvg';
  return {
    default: MockSvg
  };
});

vi.mock('next/image', () => ({
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return React.createElement('img', {
      ...props,
      src: props.src || '/test.jpg'
    });
  }
}));
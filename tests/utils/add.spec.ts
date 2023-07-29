// File: add.test.ts

import { add } from '../../src/utils/tools'; // Update the import path based on your project structure

describe('add function', () => {
  it('should add two numbers correctly', () => {
    // Test cases
    expect(add(2, 3)).toEqual(5);
    expect(add(0, 0)).toEqual(0);
    expect(add(-1, 1)).toEqual(0);
    expect(add(-5, -2)).toEqual(-7);
  });

});

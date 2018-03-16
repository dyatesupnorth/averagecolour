import AverageColour from './AverageColour.vue';

describe('AverageColour', () => {
  it('should be a an average colour', () => {
    expect(Tech.name).toEqual('AverageColour');
  });

  it(`should return ['averagecolour']`, () => {
    expect(AverageColour.props).toEqual(['averagecolour']);
  });
});

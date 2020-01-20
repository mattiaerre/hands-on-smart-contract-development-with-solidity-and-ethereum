const GreeterContract = artifacts.require('Greeter');

contract('Greeter', () => {
  it('has been deployed successfully', async () => {
    const greeter = await GreeterContract.deployed();
    assert(greeter, 'the contract was not deployed');
  });
});

describe('greet()', () => {
  it('returns "Hello, World!"', async () => {
    const greeter = await GreeterContract.deployed();
    const expected = 'Hello, World!';
    const actual = await greeter.greet();

    assert.equal(actual, expected, 'greeterd with "Hello, World!"');
  });
});

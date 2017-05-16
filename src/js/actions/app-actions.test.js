const invalidateActivityNumbers = require('./app-actions').invalidateActivityNumbers;

test('invalidateActivityNumbers should return object with type', () => {
  expect(invalidateActivityNumbers(0)).toMatchObject(expect.objectContaining({
    type: expect.any(String)
  }))
})
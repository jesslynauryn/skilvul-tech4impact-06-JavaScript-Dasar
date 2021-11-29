import { Add, Substract, Multiplication } from '../Math'

test('Return sum of two arguments', () => {
  // Arrange
  const num1 = 5
  const num2 = 7
  const expectedSum = 12
  // Act
  const actualSum = Add(num1, num2)

  // Assert
  expect(actualSum).toBe(expectedSum)
})

test('Return substraction of a - b', () => {
  // Arrange
  const num1 = 5
  const num2 = 7
  const expectedSubs = -2

  // Act
  const actualSubs = Substract(num1, num2)

  // Assert
  expect(actualSubs).toBe(expectedSubs)
})

test('Return multiplication of two arguments', () => {
  // Arrange
  const num1= 5
  const num2 = 7
  const expectedMultiply = 35

  // Act
  const actualMultiply = Multiplication(num1, num2)

  // Assert
  expect(actualMultiply).toBe(expectedMultiply)
})
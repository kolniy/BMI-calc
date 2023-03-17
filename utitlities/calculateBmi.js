const calculateBmi = (weight, height) => {
  const bmi = weight / ((height / 100) * (height / 100));
  return bmi.toFixed(2);
};

export default calculateBmi;

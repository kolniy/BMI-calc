const calculateBmi = (weight, height) => {
  const bmi = weight / ((height / 100) * (height / 100));
  return bmi.toFixed(1);
};

export default calculateBmi;

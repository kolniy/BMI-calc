const detetermineBmiDescription = (bmi) => {
  if (bmi < 18.5) {
    return "You are underweight, Eat More!";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Pretty Normal, Keep At It";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight, Start Working out!";
  } else if (bmi > 29.9) {
    return "You're obese, Hit the gym";
  }
};

export default detetermineBmiDescription;

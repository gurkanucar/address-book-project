export const stepHandler = (val, max, step, setStep) => {
  if (val == -1) {
    if (step > 1) {
      let tmp = step - 1;
      setStep(tmp);
    } else {
      setStep(max);
    }
  } else if (val == 1) {
    if (step < max) {
      let tmp = step + 1;
      setStep(tmp);
    } else {
      setStep(1);
    }
  }
};

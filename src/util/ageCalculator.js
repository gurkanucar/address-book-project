export const _calculateAge = (birthday) => {
  const ageDifMs = Date.now() - new Date(birthday).getTime();
  const ageDate = new Date(ageDifMs);
  let age = Math.ceil(ageDate.getUTCFullYear() - 1970);
  return age === 0 ? 1 : age;
};

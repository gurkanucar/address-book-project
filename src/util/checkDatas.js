export const checkSocialMedias = (data) => {
  return (
    data?.instagram ||
    data?.facebook ||
    data?.linkedin ||
    data?.twitter ||
    data?.github
  );
};

export const checkPhoneNumbers = (data) => {
  return (
    data?.home_phone_number || data?.work_phone_number || data?.phone_number
  );
};

export const checkAddresses = (data) => {
  return (
    data?.home_address || data?.work_address || data?.city || data?.country
  );
};

export const checkBirth = (data) => {
  return (
    data?.instagram || data?.birth_date, data?.place_of_birth, data?.gender
  );
};

import { addRecord, updateRecord } from "../../store/addresses";
import { generateId } from "../../util/generateId";

export const checkID = (params) => {
  return params.id !== null && params.id !== undefined;
};

export const update = (dispatch, params, values) => {
  dispatch(updateRecord({ id: Number(params.id), values: values }));
};

export const create = (dispatch, addresses, values) => {
  dispatch(
    addRecord({
      id: generateId(addresses),
      ...values,
    })
  );
};

export const getDataOrNavigate = (id, addresses, navigate, path) => {
  const item = addresses.find((x) => x.id === Number(id));
  if (item === undefined) {
    navigate(path);
  } else {
    return item;
  }
};

export const CHANGE_FIELD = 'CHANGE_FIELD';

export const changeField = (name, value) => ({
  type: CHANGE_FIELD,
  name,
  value,
});
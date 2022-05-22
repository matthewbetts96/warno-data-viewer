import get from "lodash/get";

export const getArmourValues = (unit) => {
  return {
    front: get(unit, "ArmorDescriptorFront"),
    rear: get(unit, "ArmorDescriptorRear"),
    sides: get(unit, "ArmorDescriptorSides"),
    top: get(unit, "ArmorDescriptorTop"),
  };
};

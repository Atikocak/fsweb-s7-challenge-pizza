export const createSelectionHandler = (setOrder) => (field) => (e) => {
  const value =
    e.target.type === "checkbox" ? e.target.checked : e.target.value;
  if (value !== "Hamur Kalınlığı") {
    setOrder((prev) => ({ ...prev, [field]: value }));
  }
};

export const createIngredientHandler = (setOrder) => (e) => {
  const { value, checked } = e.target;
  setOrder((prev) => ({
    ...prev,
    ingredients: checked
      ? [...prev.ingredients, value]
      : prev.ingredients.filter((item) => item !== value),
  }));
};

export const createInputHandler =
  (setOrder) =>
  (field, validator = null) =>
  (e) => {
    const value =
      e.target.type === "number" ? parseInt(e.target.value) : e.target.value;

    if (validator) {
      const isValid = validator(value);
      if (!isValid) return;
    }

    setOrder((prev) => ({ ...prev, [field]: value }));
  };

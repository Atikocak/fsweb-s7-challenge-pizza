const sizes = [
  {
    id: 1,
    name: "little",
    value: "Küçük",
  },
  {
    id: 2,
    name: "medium",
    value: "Orta",
  },
  {
    id: 3,
    name: "large",
    value: "Büyük",
  },
];

export default function Size() {
  return (
    <div id="form-size">
      <h3 className="text-lg font-bold">
        Boyut Seç <span className="text-red">*</span>
      </h3>
      {sizes.map((size) => {
        return (
          <div key={size.id} className="flex flex-row items-center">
            <input
              type="radio"
              name="size"
              id={size.name}
              className="radio-primary radio radio-xs"
            />
            <label htmlFor={size.name} className="label cursor-pointer">
              <span className="label-text">{size.value}</span>
            </label>
          </div>
        );
      })}
    </div>
  );
}

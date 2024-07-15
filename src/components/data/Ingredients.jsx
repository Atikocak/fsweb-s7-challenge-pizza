const ingredients = [
  {
    id: 1,
    name: "pepperoni",
    value: "Pepperoni",
  },
  {
    id: 2,
    name: "sausage",
    value: "Sosis",
  },
  {
    id: 3,
    name: "canadian-ham",
    value: "Kanada Jambonu",
  },
  {
    id: 4,
    name: "grilled-chicken",
    value: "Tavuk Izgara",
  },
  {
    id: 5,
    name: "onion",
    value: "Soğan",
  },
  {
    id: 6,
    name: "tomato",
    value: "Domates",
  },
  {
    id: 7,
    name: "corn",
    value: "Mısır",
  },
  {
    id: 8,
    name: "soujouk",
    value: "Sucuk",
  },
  {
    id: 9,
    name: "jalepeno",
    value: "Jalepeno",
  },
  {
    id: 10,
    name: "garlic",
    value: "Sarımsak",
  },
  {
    id: 11,
    name: "pepper",
    value: "Biber",
  },
  {
    id: 12,
    name: "bacon",
    value: "Pastırma",
  },
  {
    id: 13,
    name: "eggplant",
    value: "Patlıcan",
  },
  {
    id: 14,
    name: "zucchini",
    value: "Kabak",
  },
];

export default function Ingredients() {
  return (
    <div className="grid grid-flow-col grid-rows-5 gap-1">
      {ingredients.map((item) => {
        return (
          <div
            key={item.id}
            id={`check-${item.name}`}
            className="flex items-center"
          >
            <input
              type="checkbox"
              id={item.name}
              name={item.name}
              className="checkbox-primary checkbox checkbox-sm"
            />
            <label htmlFor={item.name} className="label cursor-pointer">
              <span className="label-text">{item.value}</span>
            </label>
          </div>
        );
      })}
    </div>
  );
}

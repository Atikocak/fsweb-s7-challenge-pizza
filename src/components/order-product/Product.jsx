export default function Product(props) {
  const { product } = props;

  return (
    <div className="mx-auto max-w-lg px-4">
      <img src={product.bannerUrl} className="mb-10" />
      <div className="flex flex-col gap-y-4 pb-10 font-barlow">
        <h2 className="text-lg font-bold">{product.title}</h2>
        <div className="mb-8 flex justify-between">
          <span className="text-2xl font-bold">{product.price}₺</span>
          <div className="flex gap-6">
            <span>{product.rating} ⭐</span>
            <span>({product.reviews})</span>
          </div>
        </div>
        <p className="text-sm">{product.description}</p>
      </div>
    </div>
  );
}

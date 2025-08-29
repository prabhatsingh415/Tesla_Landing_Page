function DetailsCard({ modelName, topSpeed, range, battery, price }) {
  return (
    <div
      className="h-[22rem] w-[28rem] border-4 border-[var(--color-tesla-red)] rounded-2xl 
                shadow-[0_0_30px_5px_var(--color-tesla-red)] mr-32 mt-64 p-6 
                text-[var(--color-tesla-red)] bg-black/60 backdrop-blur-md"
    >
      <h2 className="text-3xl font-bold mb-6">{modelName}</h2>
      <ul className="space-y-3 text-lg">
        <li>
          <span className="font-semibold">Top Speed:</span> {topSpeed}
        </li>
        <li>
          <span className="font-semibold">Range:</span> {range}
        </li>
        <li>
          <span className="font-semibold">Battery:</span> {battery}
        </li>
        <li>
          <span className="font-semibold">Price:</span> {price}
        </li>
      </ul>
    </div>
  );
}

export default DetailsCard;

const Input = ({ inputName }) => {
  return (
    <input
      type="number"
      required
      className="appearance-none w-32 px-2 py-1 md:py-2 text-[#ac3737] text-right border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#424242] focus:border-[#424242]"
      min={-99999}
      max={99999}
      step="any" // for letting user input decimal
      name={inputName}
    />
  );
};

export default Input;

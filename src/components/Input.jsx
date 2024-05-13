const Input = props => {
  return (
    <input
      type="number"
      required
      className="appearance-none w-32 px-2 py-1 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      min={-99999}
      max={99999}
      step="any"        // for letting user input decimal
      name={props.name}
    />
  );
};

export default Input;

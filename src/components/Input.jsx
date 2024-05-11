const Input = props => {
  return (
    <input
      type="number"
      required
      className="appearance-none w-32 px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      name={props.name}
    />
  );
};

export default Input;

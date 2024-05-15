const Button = () => {
  return (
    <div className="flex justify-center items-center pt-2 pb-2">
      <button className="font-bold px-8 md:px-12 py-2 my-4 md:py-3 bg-[#ff914d] text-[#424242] hover:bg-[#ffbd59] transition duration-100 ease-in-out rounded-md shadow-md" type="submit">
        Calculate
      </button>
    </div>
  );
};

export default Button;

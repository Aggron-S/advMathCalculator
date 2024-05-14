import { Button, Input } from "./imports";

const Form = ({
  onSubmit,
  formElements,
  hasAnswer,
  answer,
  unitTypes,
  isSelectedEquationType,
  isSelectedFindDropdownVal,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div
        className={`grid grid-cols-2 ${
          isSelectedEquationType &&
          isSelectedEquationType.value === "rkw" &&
          isSelectedFindDropdownVal &&
          isSelectedFindDropdownVal.value === "T" // 2 cols for xsm - sm (if user choose T), otherwise 1 col for xsm - sm
            ? "md:grid-cols-4 gap-x-12"
            : "md:grid-cols-3 gap-x-24"
        } md:py-10 gap-y-2`}>
        {formElements.map((formElement, index) => (
          <div key={index}>
            <p className="font-semibold italic">
              {`${formElement.label}`}
              {/* Show unit types (except in Tr) */}
              {formElement.label !== "Tr" && (
                <span className="text-[#53e2ff]">{` (${formElement.unitType})`}</span>
              )}
            </p>
            <Input name={formElement.name} />
          </div>
        ))}
      </div>
      {hasAnswer && (
        <div className="flex justify-center items-center">
          <p className="text-lg font-bold pt-4 md:pt-0 md:py-5">
            Answer:{" "}
            <span className="text-[#53e2ff]">{`${answer} ${
              unitTypes[isSelectedFindDropdownVal.value]
            }`}</span>
          </p>
        </div>
      )}
      <Button />
    </form>
  );
};

export default Form;

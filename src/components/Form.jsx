import { useEffect, useRef } from "react";
import { Button, Input } from "./imports";

const Form = ({
  onSubmit,
  formElements,
  hasAnswer,
  answer,
  unitTypes,
  isSelectedEquationType,
  isSelectedFindDropdownVal,
  isSelectedChemicalCompound,
}) => {
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current && isSelectedChemicalCompound) {
      formRef.current.reset();    // Clear the form inputs whenever isSelectedChemicalCompound.value changes
    }
  }, [isSelectedChemicalCompound]);

  return (
    <form onSubmit={onSubmit} ref={formRef}>
      <div
        className={`grid grid-cols-2 ${
          isSelectedEquationType &&
          isSelectedEquationType.value === "rkw" &&
          isSelectedFindDropdownVal &&
          isSelectedFindDropdownVal.value === "T" // 2 cols for xsm - sm (if user choose T), otherwise 1 col for xsm - sm
            ? "md:grid-cols-4 "
            : "md:grid-cols-3 "
        } md:py-10 items-center gap-y-2`}>
        {formElements.map((formElement, index) => (
          <div key={index} className="flex flex-col items-center">
            <p>
              {`${formElement.label}`}
              {/* Show unit types (except in Tr) */}
              {formElement.label !== "Tr" && (
                <span className="text-[#ffbd59]">{` (${formElement.unitType})`}</span>
              )}
            </p>
            <Input inputName={formElement.name} />
          </div>
        ))}
      </div>
      {hasAnswer && (
        <div className="flex justify-center items-center">
          <p className="text-base sm:text-lg pt-4 md:pt-0">
            Answer:{" "}
            <span className="font-bold text-[#ffbd59]">{`${answer} ${
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
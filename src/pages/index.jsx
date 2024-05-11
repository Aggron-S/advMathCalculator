import { useState, useEffect } from "react";
import Select from "react-select";
import { Button, Input } from "../components/imports";
import {
  // Constant Variables
  R,
  
  // Van Der Waals Constant Variables (a and b)
  aceticAcidA,
  aceticAcidB,
  acetoneA,
  acetoneB,
  acetonitrileA,
  acetonitrileB,
  acetyleneA,
  acetyleneB,
  ammoniaA,
  ammoniaB,
  benzeneA,
  benzeneB,
  carbonMonoxideA,
  carbonMonoxideB,
  carbonDioxideA,
  carbonDioxideB,
  chlorineA,
  chlorineB,
  chloroBenzeneA,
  chloroBenzeneB,
  dimethylEtherA,
  dimethylEtherB,
  ethanolA,
  ethanolB,
  ethyleneA,
  ethyleneB,
  ethylAcetateA,
  ethylAcetateB,
  hydrogenA,
  hydrogenB,
  methaneA,
  methaneB,
  methanolA,
  methanolB,
  naphthaleneA,
  naphthaleneB,
  nitrogenGasA,
  nitrogenGasB,
  nitricOxideA,
  nitricOxideB,
  oxygenGasA,
  oxygenGasB,
  phenolA,
  phenolB,
  propaneA,
  propaneB,
  tolueneA,
  tolueneB,
  waterA,
  waterB,
  // Redlich - Kwong Constant Variables (Tc and Pc)
  aceticAcidTc,
  aceticAcidPc,
  acetoneTc,
  acetonePc,
  acetonitrileTc,
  acetonitrilePc,
  acetyleneTc,
  acetylenePc,
  ammoniaTc,
  ammoniaPc,
  benzeneTc,
  benzenePc,
  carbonMonoxideTc,
  carbonMonoxidePc,
  carbonDioxideTc,
  carbonDioxidePc,
  chlorineTc,
  chlorinePc,
  chloroBenzeneTc,
  chloroBenzenePc,
  dimethylEtherTc,
  dimethylEtherPc,
  ethanolTc,
  ethanolPc,
  ethyleneTc,
  ethylenePc,
  ethylAcetateTc,
  ethylAcetatePc,
  hydrogenTc,
  hydrogenPc,
  methaneTc,
  methanePc,
  methanolTc,
  methanolPc,
  naphthaleneTc,
  naphthalenePc,
  nitrogenGasTc,
  nitrogenGasPc,
  nitricOxideTc,
  nitricOxidePc,
  oxygenGasTc,
  oxygenGasPc,
  phenolTc,
  phenolPc,
  propaneTc,
  propanePc,
  tolueneTc,
  toluenePc,
  waterTc,
  waterPc,

  // react-select component options
  equationType,
  findOps,
  chemCompoundOps,
  // Answer Unit Types
  unitTypes
} from "../constants";

export default function Home() {
  const [isSelectedEquationType, setSelectedEquationType] = useState(null);
  const [isSelectedFindDropdownVal, setFindDropdownVal] = useState(null);
  const [isSelectedChemicalCompound, setSelectedChemicalCompound] = useState(null);
  const [answer, setAnswer] = useState(0);
  // const [isDisplayIgGiven, setIsDisplayIgGiven] = useState(false);
  // const [isDisplayVdwGiven, setIsDisplayVdwGiven] = useState(false);
  // const [isDisplayRkwGiven, setIsDisplayRkwGiven] = useState(false);

  // Handling Answer Resetting Side Effects
  useEffect(() => {
    (answer !== 0) && setAnswer(0);     // Reset the Answer
  }, [isSelectedEquationType, isSelectedFindDropdownVal]);

  // Handling Find Dropdown Val Resetting
  useEffect(() => {
    isSelectedFindDropdownVal && (setFindDropdownVal(null)); 
  }, [isSelectedEquationType]);

  const getEquationTypeValue = selectedOption => {
    setSelectedEquationType(selectedOption); // Change equation type state and output in the Equation Type dropdown
  };

  const getFindDropdownVal = selectedOption => {
    setFindDropdownVal(selectedOption);
    //
    // setIsDisplayIgGiven(false);
    // setIsDisplayVdwGiven(false);
    // setIsDisplayRkwGiven(false);

    // if (selectedOption !== null && isSelectedEquationType !== null) {
    //   const equationTypeValue = isSelectedEquationType.value;

    //   if the equation type is Ideal Gas
    //   if(equationTypeValue === "ig") {
    //     if(selectedOption.value === "P") {
    //       setIsDisplayIgGiven(true);
    //       console.log("P is selected")
    //     } else if (selectedOption.value === "V") {
    //       setIsDisplayVdwGiven(true);
    //     } else if (selectedOption.value === "n") {

    //     } else if (selectedOption.value === "T") {

    //     }

    //   }
    //   // if the equation type is Van der Waals
    //   else if (equationTypeValue === "vdw") {

    //   }
    //   // if the equation type is Redlich Kwong
    //   else if (equationTypeValue === "rkw") {

    //   }
    // }
  };

  const getChemicalCompound = selectedOption => {
    setSelectedChemicalCompound(selectedOption);
  };

  const getChemicalCompoundVal = (equationType, chemCompoundVal) => {
    let a, b, Tc, Pc;
    // For Van Der Waals, Chemical Compound (a & b)
    if(equationType === "vdw") {
      switch (chemCompoundVal) {
        case "aceticAcid":
          a = aceticAcidA;
          b = aceticAcidB;
          break;
        case "acetone":
          a = acetoneA;
          b = acetoneB;
          break;
        case "acetonitrile":
          a = acetonitrileA;
          b = acetonitrileB;
          break;
        case "acetylene":
          a = acetyleneA;
          b = acetyleneB;
          break;
        case "ammonia":
          a = ammoniaA;
          b = ammoniaB;
          break;
        case "benzene":
          a = benzeneA;
          b = benzeneB;
          break;
        case "carbonMonoxide":
          a = carbonMonoxideA;
          b = carbonMonoxideB;
          break;
        case "carbonDioxide":
          a = carbonDioxideA;
          b = carbonDioxideB;
          break;
        case "chlorine":
          a = chlorineA;
          b = chlorineB;
          break;
        case "chlorobenzene":
          a = chloroBenzeneA;
          b = chloroBenzeneB;
          break;
        case "dimethylEther":
          a = dimethylEtherA;
          b = dimethylEtherB;
          break;
        case "ethanol":
          a = ethanolA;
          b = ethanolB;
          break;
        case "ethylene":
          a = ethyleneA;
          b = ethyleneB;
          break;
        case "ethylAcetate":
          a = ethylAcetateA;
          b = ethylAcetateB;
          break;
        case "hydrogen":
          a = hydrogenA;
          b = hydrogenB;
          break;
        case "methane":
          a = methaneA;
          b = methaneB;
          break;
        case "methanol":
          a = methanolA;
          b = methanolB;
          break;
        case "naphthalene":
          a = naphthaleneA;
          b = naphthaleneB;
          break;
        case "nitrogenGas":
          a = nitrogenGasA;
          b = nitrogenGasB;
          break;
        case "nitricOxide":
          a = nitricOxideA;
          b = nitricOxideB;
          break;
        case "oxygenGas":
          a = oxygenGasA;
          b = oxygenGasB;
          break;
        case "phenol":
          a = phenolA;
          b = phenolB;
          break;
        case "propane":
          a = propaneA;
          b = propaneB;
          break;
        case "toluene":
          a = tolueneA;
          b = tolueneB;
          break;
        case "water":
          a = waterA;
          b = waterB;
          break;
        default:
          console.log("Invalid find option");
      }
      return { a, b };
    } 
    // For Redlich - Kwong, Chemical Compound (Tc & Pc)
    else if (equationType === "rkw") {
      switch (chemCompoundVal) {
        case "aceticAcid":
          Tc = aceticAcidTc;
          Pc = aceticAcidPc;
          break;
        case "acetone":
          Tc = acetoneTc;
          Pc = acetonePc;
          break;
        case "acetonitrile":
          Tc = acetonitrileTc;
          Pc = acetonitrilePc;
          break;
        case "acetylene":
          Tc = acetyleneTc;
          Pc = acetylenePc;
          break;
        case "ammonia":
          Tc = ammoniaTc;
          Pc = ammoniaPc;
          break;
        case "benzene":
          Tc = benzeneTc;
          Pc = benzenePc;
          break;
        case "carbonMonoxide":
          Tc = carbonMonoxideTc;
          Pc = carbonMonoxidePc;
          break;
        case "carbonDioxide":
          Tc = carbonDioxideTc;
          Pc = carbonDioxidePc;
          break;
        case "chlorine":
          Tc = chlorineTc;
          Pc = chlorinePc;
          break;
        case "chlorobenzene":
          Tc = chloroBenzeneTc;
          Pc = chloroBenzenePc;
          break;
        case "dimethylEther":
          Tc = dimethylEtherTc;
          Pc = dimethylEtherPc;
          break;
        case "ethanol":
          Tc = ethanolTc;
          Pc = ethanolPc;
          break;
        case "ethylene":
          Tc = ethyleneTc;
          Pc = ethylenePc;
          break;
        case "ethylAcetate":
          Tc = ethylAcetateTc;
          Pc = ethylAcetatePc;
          break;
        case "hydrogen":
          Tc = hydrogenTc;
          Pc = hydrogenPc;
          break;
        case "methane":
          Tc = methaneTc;
          Pc = methanePc;
          break;
        case "methanol":
          Tc = methanolTc;
          Pc = methanolPc;
          break;
        case "naphthalene":
          Tc = naphthaleneTc;
          Pc = naphthalenePc;
          break;
        case "nitrogenGas":
          Tc = nitrogenGasTc;
          Pc = nitrogenGasPc;
          break;
        case "nitricOxide":
          Tc = nitricOxideTc;
          Pc = nitricOxidePc;
          break;
        case "oxygenGas":
          Tc = oxygenGasTc;
          Pc = oxygenGasPc;
          break;
        case "phenol":
          Tc = phenolTc;
          Pc = phenolPc;
          break;
        case "propane":
          Tc = propaneTc;
          Pc = propanePc;
          break;
        case "toluene":
          Tc = tolueneTc;
          Pc = toluenePc;
          break;
        case "water":
          Tc = waterTc;
          Pc = waterPc;
          break;
        default:
          console.log("Invalid find option");
      }
      return { Tc, Pc };
    }
  }
  // get Ideal Gas
  const getIdealGasVal = e => {
    e.preventDefault();
    const form = e.target;
    const findDropdownVal = isSelectedFindDropdownVal.value;

    let n, T, P, V, answer;

    switch (findDropdownVal) {
      case "P":
        n = form.n.value;
        T = form.t.value;
        V = form.v.value;
        answer = (n * R * T) / V;
        setAnswer(answer);
        break;
      case "V":
        n = form.n.value;
        T = form.t.value;
        P = form.p.value;
        answer = (n * R * T) / P;
        setAnswer(answer);
        break;
      case "n":
        P = form.p.value;
        V = form.v.value;
        T = form.t.value;
        answer = (P * V) / (R * T);
        setAnswer(answer);
        break;
      case "T":
        P = form.p.value;
        V = form.v.value;
        n = form.n.value;
        answer = (P * V) / (n * R);
        setAnswer(answer);
        break;
      default:
        console.log("Invalid find option");
    }
  };

  // get Van Der Waals
  const getVanDerWaals = e => {
    e.preventDefault();
    const form = e.target;
    const equationTypeVal = isSelectedEquationType.value;
    const findDropdownVal = isSelectedFindDropdownVal.value;
    const chemCompoundVal = isSelectedChemicalCompound.value;
    const { a, b } = getChemicalCompoundVal(equationTypeVal,chemCompoundVal);   // constant a & b value based on chem compound selected by user

    let n, T, P, V, answer;

    switch (findDropdownVal) {
      case "P":
        n = form.n.value;
        T = form.t.value;
        V = form.v.value;
        answer = ((n * R * T) / (V - (n * b))) - ((a * (n ** 2)) / (V ** 2));
        setAnswer(answer);
        break;
      case "V":
        n = form.n.value;
        T = form.t.value;
        P = form.p.value;
        answer = (n * R * T) / P;
        setAnswer(answer);
        break;
      case "n":
        P = form.p.value;
        V = form.v.value;
        T = form.t.value;
        answer = (P * V) / (R * T);
        setAnswer(answer);
        break;
      case "T":
        P = form.p.value;
        V = form.v.value;
        n = form.n.value;
        answer = (P * V) / (n * R);
        setAnswer(answer);
        break;
      default:
        console.log("Invalid find option");
    }
  }
  return (
    <>
      {/* flex justify-center items-center h-screen */}
      <div className="flex px-52 pt-32 items-center justify-between">
        <div className="">
          <p>Equation Type: </p>
          <Select
            className=""
            value={isSelectedEquationType}
            onChange={getEquationTypeValue}
            isSearchable={false}
            options={equationType}
            placeholder="Select Type"
          />
        </div>

        {/* If user selected an equation type */}
        {isSelectedEquationType && (
          <>
            <div className="">
              <p>Find: </p>
              <Select
                className=""
                value={isSelectedFindDropdownVal}
                onChange={getFindDropdownVal}
                isSearchable={false}
                options={findOps}
                placeholder="Find Unknown Value"
              />
            </div>

            {/* Chemical Compounds Dropdown to only show if user selected either Van Der Waals or Redlich - Kwong in Equation Type */}
            {(isSelectedEquationType.value === "vdw" ||
              isSelectedEquationType.value === "rkw") && (
              <div className="">
                <p>Chemical Compound: </p>
                <Select
                  className=""
                  value={isSelectedChemicalCompound}
                  onChange={getChemicalCompound}
                  isSearchable={false}
                  options={chemCompoundOps}
                  placeholder="Select Chemical Compound"
                />
              </div>
            )}
          </>
        )}
      </div>

      {/* If user selected the Unit to Find */}
      {isSelectedFindDropdownVal && (
        <>
          {/* Ideal Gas */}
          {isSelectedEquationType.value === "ig" && (
            <div className="flex">
              {/* If P is missing */}
              {isSelectedFindDropdownVal.value === "P" && (
                <div className="">
                  <form onSubmit={getIdealGasVal}>
                    <p className="italic">n</p>
                    <Input name="n" />
                    <p className="italic">T</p>
                    <Input name="t" />
                    <p className="italic">V</p>
                    <Input name="v" />
                    <Button />
                  </form>
                </div>
              )}

              {/* If V is missing */}
              {isSelectedFindDropdownVal.value === "V" && (
                <div className="">
                  <form onSubmit={getIdealGasVal}>
                    <p className="italic">n</p>
                    <Input name="n" />
                    <p className="italic">T</p>
                    <Input name="t" />
                    <p className="italic">P</p>
                    <Input name="p" />
                    <Button />
                  </form>
                </div>
              )}

              {/* If n is missing */}
              {isSelectedFindDropdownVal.value === "n" && (
                <div className="">
                  <form onSubmit={getIdealGasVal}>
                    <p className="italic">P</p>
                    <Input name="p" />
                    <p className="italic">V</p>
                    <Input name="v" />
                    <p className="italic">T</p>
                    <Input name="t" />
                    <Button />
                  </form>
                </div>
              )}

              {/* If T is missing */}
              {isSelectedFindDropdownVal.value === "T" && (
                <div className="">
                  <form onSubmit={getIdealGasVal}>
                    <p className="italic">P</p>
                    <Input name="p" />
                    <p className="italic">V</p>
                    <Input name="v" />
                    <p className="italic">n</p>
                    <Input name="n" />
                    <Button />
                  </form>
                </div>
              )}
            </div>
          )}

          {/* If user selected Chemical Compound, show vdw & rkw */}
          {isSelectedChemicalCompound && (
            <>
              {/* Van Der Waals (a and b should be given by the user, R is constant)*/}
              {isSelectedEquationType.value === "vdw" && (
                <div className="flex">
                  {/* If P is missing */}
                  {isSelectedFindDropdownVal.value === "P" && (
                    <div className="">
                      <form onSubmit={getVanDerWaals}>
                        <p>n</p>
                        <Input name="n" />
                        <p>T</p>
                        <Input name="t" />
                        <p>V</p>
                        <Input name="v" />
                        <Button />
                      </form>
                    </div>
                  )}
    
                  {/* If V is missing */}
                  {isSelectedFindDropdownVal.value === "V" && (
                    <div className="">
                      <form onSubmit={getVanDerWaals}>
                        <p>n</p>
                        <Input name="n" />
                        <p>T</p>
                        <Input name="t" />
                        <p>P</p>
                        <Input name="p" />
                        <Button />
                      </form>
                    </div>
                  )}
    
                  {/* If n is missing */}
                  {isSelectedFindDropdownVal.value === "n" && (
                    <div className="">
                      <form onSubmit={getVanDerWaals}>
                        <p>P</p>
                        <Input name="p" />
                        <p>V</p>
                        <Input name="v" />
                        <p>T</p>
                        <Input name="t" />
                        <Button />
                      </form>
                    </div>
                  )}
    
                  {/* If T is missing */}
                  {isSelectedFindDropdownVal.value === "T" && (
                    <div className="">
                      <form onSubmit={getVanDerWaals}>
                        <p>P</p>
                        <Input name="p" />
                        <p>V</p>
                        <Input name="v" />
                        <p>n</p>
                        <Input name="n" />
                        <Button />
                      </form>
                    </div>
                  )}
                </div>
              )}

              {/* Redlich - Kwong (some comutation, see the vid)*/}
              {isSelectedEquationType.value === "rkw" && (
                <></>
              )}
            </>
          )}

          <p>Answer: {`${answer} ${unitTypes[isSelectedFindDropdownVal.value]}`}</p>
        </>
      )}
    </>
  );
}

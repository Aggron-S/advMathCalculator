import { useState, useEffect } from "react";
import Select from "react-select";
import { Form } from "../components/imports";
import {
  // Constant Variables
  R,
  // Redlich - Kwong Constants
  omega,
  psi,
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
  idealGasOps,
  vanDerWaalsOps,
  redlichKwongOps,
  chemCompoundOps,
  // Answer Unit Types
  unitTypes
} from "../constants";

export default function Home() {
  const [isSelectedEquationType, setSelectedEquationType] = useState(null);
  const [isSelectedFindDropdownVal, setFindDropdownVal] = useState(null);
  const [isSelectedChemicalCompound, setSelectedChemicalCompound] = useState(null);
  const [hasAnswer, setHasAnswer] = useState(false);
  const [answer, setAnswer] = useState(0);

  // Handling Answer Resetting Side Effects
  useEffect(() => {
    (answer !== 0) && setAnswer(0);     // Reset the Answer
    (hasAnswer === true) && setHasAnswer(false);
  }, [isSelectedEquationType, isSelectedFindDropdownVal]);

  // Handling Find Dropdown Val & Chemical Compound Resetting
  useEffect(() => {
    isSelectedFindDropdownVal && (setFindDropdownVal(null)); 
    isSelectedChemicalCompound && (setSelectedChemicalCompound(null)); 
  }, [isSelectedEquationType]);

  const getEquationTypeValue = selectedOption => {
    setSelectedEquationType(selectedOption); // Change equation type state and output in the Equation Type dropdown
  };

  const getFindDropdownVal = selectedOption => {
    setFindDropdownVal(selectedOption);
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

  // For answers with whole number bigger than 5 digits
  const formatNumber = (num) => {
    const strNum = num.toString();
    const wholeNum = strNum.split('.');

    // Parse the whole number part and handle negative values properly
    const parsedWholeNum = parseFloat(wholeNum[0]) < 0 ? (-parseInt(wholeNum[0])) : parseInt(wholeNum[0]);
    
    // Check if the parsed whole number is greater than 99999 or less than -99999 (6 digit whole number and above, exclude decimal)
    if (parsedWholeNum > 99999 || parsedWholeNum < -99999) {
      return parsedWholeNum;
    }

    return parseFloat(num);
  };
  // get Ideal Gas
  const getIdealGasVal = e => {
    e.preventDefault();
    const form = e.target;
    setHasAnswer(true);
    const findDropdownVal = isSelectedFindDropdownVal.value;

    let n = 0;
    let T = 0; 
    let P = 0;
    let V = 0;
    let answer = 0;
    let formatAnswer = 0;

    switch (findDropdownVal) {
      case "P":
        n = parseFloat(form.n.value);
        T = parseFloat(form.t.value);
        V = parseFloat(form.v.value);
        answer = (n * R * T) / V;

        formatAnswer = formatNumber(parseFloat(answer.toFixed(10)));
        setAnswer(formatAnswer);
        break;
      case "V":
        n = parseFloat(form.n.value);
        T = parseFloat(form.t.value);
        P = parseFloat(form.p.value);
        answer = (n * R * T) / P;

        formatAnswer = formatNumber(parseFloat(answer.toFixed(10)));
        setAnswer(formatAnswer);
        break;
      case "n":
        P = parseFloat(form.p.value);
        V = parseFloat(form.v.value);
        T = parseFloat(form.t.value);
        answer = (P * V) / (R * T);

        formatAnswer = formatNumber(parseFloat(answer.toFixed(10)));
        setAnswer(formatAnswer);
        break;
      case "T":
        P = parseFloat(form.p.value);
        V = parseFloat(form.v.value);
        n = parseFloat(form.n.value);
        answer = (P * V) / (n * R);
        
        formatAnswer = formatNumber(parseFloat(answer.toFixed(10)));
        setAnswer(formatAnswer);
        break;
      default:
        console.log("Invalid find option");
    }
  };

  // get Van Der Waals
  const getVanDerWaals = e => {
    e.preventDefault();
    const form = e.target;
    setHasAnswer(true);
    const equationTypeVal = isSelectedEquationType.value;
    const findDropdownVal = isSelectedFindDropdownVal.value;
    const chemCompoundVal = isSelectedChemicalCompound.value;
    const { a, b } = getChemicalCompoundVal(equationTypeVal,chemCompoundVal);   // constant a & b value based on chem compound selected by user

    let n = 0;
    let T = 0;
    let P = 0;
    let V = 0;
    let firstPart = 0;
    let secondPart = 0;
    let answer = 0;
    let formatAnswer = 0;

    switch (findDropdownVal) {
      case "P":
        n = parseFloat(form.n.value);
        T = parseFloat(form.t.value);
        V = parseFloat(form.v.value);

        firstPart = ((n * R * T) / (V - (n * b)));
        secondPart = ((a * (n ** 2)) / (V ** 2));
        answer = firstPart - secondPart;
        
        formatAnswer = formatNumber(parseFloat(answer.toFixed(10)));
        setAnswer(formatAnswer);
        break;
      // case "V":
      //   n = parseFloat(form.n.value);
      //   T = parseFloat(form.t.value);
      //   P = parseFloat(form.p.value);
      //   // answer = (n * R * T) / P;
      //   setAnswer(answer.toFixed(10));
      //   break;
      // case "n":
      //   P = parseFloat(form.p.value);
      //   V = parseFloat(form.v.value);
      //   T = parseFloat(form.t.value);
      //   // answer = (P * V) / (R * T);
      //   setAnswer(answer.toFixed(10));
      //   break;
      case "T":
        P = parseFloat(form.p.value);
        V = parseFloat(form.v.value);
        n = parseFloat(form.n.value);

        firstPart = (((a * n * V) - ((a * (n ** 2)) * b)) / ((V ** 2) * R));
        secondPart = ((P * (V - (n * b))) / (n * R));
        answer = firstPart + secondPart;
        
        formatAnswer = formatNumber(parseFloat(answer.toFixed(10)));
        setAnswer(formatAnswer);
        break;
      default:
        console.log("Invalid find option");
    }
  }

  // get Redlich - Kwong
  const getRedlichKwong = e => {
    e.preventDefault();
    const form = e.target;
    setHasAnswer(true);
    const equationTypeVal = isSelectedEquationType.value;
    const findDropdownVal = isSelectedFindDropdownVal.value;
    const chemCompoundVal = isSelectedChemicalCompound.value;
    const { Tc, Pc } = getChemicalCompoundVal(equationTypeVal,chemCompoundVal);   // constant Tc & Pc value based on chem compound selected by user

    let n = 0;
    let T = 0;
    let P = 0;
    let V = 0;
    let Tr = 0;
    let aT = 0;
    let firstPart = 0;
    let secondPart = 0;
    let answer = 0;
    let formatAnswer = 0;

    const b = (omega * ( R * Tc)) / Pc;   // constant b for redlich - kwong

    switch (findDropdownVal) {
      case "P":
        n = parseFloat(form.n.value);
        T = parseFloat(form.t.value);
        V = parseFloat(form.v.value);
        Tr = T / Tc;
        aT = (psi * (Tr ** (-1/2)) * (R ** 2) * (Tc ** 2)) / Pc;

        firstPart = (n * R * T) / (V - b);
        secondPart = ((aT) / (V * (V + b)));
        answer = firstPart - secondPart;
        
        formatAnswer = formatNumber(parseFloat(answer.toFixed(10)));
        setAnswer(formatAnswer);
        
        break;
      // case "V":
      //   n = parseFloat(form.n.value);
      //   T = parseFloat(form.t.value);
      //   P = parseFloat(form.p.value);
      //   Tr = T / Tc;

      //   // answer = () - ();
      //   setAnswer(answer);
      //   break;
      case "n":
        P = parseFloat(form.p.value);
        V = parseFloat(form.v.value);
        T = parseFloat(form.t.value);
        Tr = T / Tc;
        aT = (psi * (Tr ** (-1/2)) * (R ** 2) * (Tc ** 2)) / Pc;

        firstPart = ((P * (V - b)) / (R * T));
        secondPart = ((aT * (V - b)) / ((R * T * V) * (V + b)));
        answer = firstPart - secondPart;
        
        formatAnswer = formatNumber(parseFloat(answer.toFixed(10)));
        setAnswer(formatAnswer);
        break;
      case "T":
        P = parseFloat(form.p.value);
        V = parseFloat(form.v.value);
        n = parseFloat(form.n.value);
        Tr = parseFloat(form.tr.value);
        aT = (psi * (Tr ** (-1/2)) * (R ** 2) * (Tc ** 2)) / Pc;

        firstPart = ((aT * (V - b)) / ((n * R * V) * (V + b)));
        secondPart = ((P * (V - b)) / (n * R));
        answer = firstPart - secondPart;
        
        formatAnswer = formatNumber(parseFloat(answer.toFixed(10)));
        setAnswer(formatAnswer);
        break;
      default:
        console.log("Invalid find option");
    }
  }


  return (
    <div className="flex justify-center items-center h-screen">
      {/* flex justify-center items-center h-screen */}
      <div className=" bg-[#6f5bb1]  px-8 rounded-md h-[33rem] w-[25rem] sm:w-[37rem] md:h-[30rem] md:w-[44rem] lg:w-[55rem]">
        <p className="flex justify-center text-xl font-bold py-6">Advance Math Calculator</p>
        <div className={`grid grid-cols-1 ${isSelectedEquationType && ((isSelectedEquationType.value === "ig") ? 'md:grid-cols-2' : 'md:grid-cols-3')} gap-x-8 pb-5`}>
          <div>
            <p className="font-bold">Equation Type: </p>
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
              <div>
                <p className="font-bold">Find: </p>
                <Select
                  className=""
                  value={isSelectedFindDropdownVal}
                  onChange={getFindDropdownVal}
                  isSearchable={false}
                  options={
                    isSelectedEquationType.value === "ig"
                      ? idealGasOps
                      : isSelectedEquationType.value === "vdw"
                      ? vanDerWaalsOps
                      : isSelectedEquationType.value === "rkw" && redlichKwongOps
                  }
                  placeholder="Find Unknown"
                />
              </div>

              {/* Chemical Compounds Dropdown to only show if user selected either Van Der Waals or Redlich - Kwong in Equation Type */}
              {(isSelectedEquationType.value === "vdw" ||
                isSelectedEquationType.value === "rkw") && (
                <div>
                  <p className="font-bold">Chemical Compound: </p>
                  <Select
                    className=""
                    value={isSelectedChemicalCompound}
                    onChange={getChemicalCompound}
                    isSearchable={false}
                    options={chemCompoundOps}
                    placeholder="Select Compound"
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
              <div className="flex justify-center items-center">
                {/* If P is missing */}
                {isSelectedFindDropdownVal.value === "P" && (
                  <Form 
                    onSubmit={getIdealGasVal}
                    hasAnswer={hasAnswer}
                    answer={answer}
                    unitTypes={unitTypes}
                    isSelectedFindDropdownVal={isSelectedFindDropdownVal}
                    formElements={[
                      { label: 'n', name: 'n', unitType: 'mol' },
                      { label: 'T', name: 't', unitType: 'K' },
                      { label: 'V', name: 'v', unitType: 'L' }
                    ]}
                  />
                )}

                {/* If V is missing */}
                {isSelectedFindDropdownVal.value === "V" && (
                  <Form 
                    onSubmit={getIdealGasVal}
                    hasAnswer={hasAnswer}
                    answer={answer}
                    unitTypes={unitTypes}
                    isSelectedFindDropdownVal={isSelectedFindDropdownVal}
                    formElements={[
                      { label: 'n', name: 'n', unitType: 'mol' },
                      { label: 'T', name: 't', unitType: 'K' },
                      { label: 'P', name: 'p', unitType: 'bar' }
                    ]}
                  />
                )}

                {/* If n is missing */}
                {isSelectedFindDropdownVal.value === "n" && (
                  <Form 
                    onSubmit={getIdealGasVal}
                    hasAnswer={hasAnswer}
                    answer={answer}
                    unitTypes={unitTypes}
                    isSelectedFindDropdownVal={isSelectedFindDropdownVal}
                    formElements={[
                      { label: 'P', name: 'p', unitType: 'bar' },
                      { label: 'V', name: 'v', unitType: 'L' },
                      { label: 'T', name: 't', unitType: 'K' }
                    ]}
                  />
                )}

                {/* If T is missing */}
                {isSelectedFindDropdownVal.value === "T" && (
                  <Form 
                    onSubmit={getIdealGasVal}
                    hasAnswer={hasAnswer}
                    answer={answer}
                    unitTypes={unitTypes}
                    isSelectedFindDropdownVal={isSelectedFindDropdownVal}
                    formElements={[
                      { label: 'P', name: 'p', unitType: 'bar' },
                      { label: 'V', name: 'v', unitType: 'L' },
                      { label: 'n', name: 'n', unitType: 'mol' }
                    ]}
                  />
                )}
              </div>
            )}

            {/* If user selected Chemical Compound, show vdw & rkw */}
            {isSelectedChemicalCompound && (
              <>
                {/* Van Der Waals (a and b should be given by the user, R is constant)*/}
                {isSelectedEquationType.value === "vdw" && (
                  <div className="flex justify-center items-center">
                    {/* If P is missing */}
                    {isSelectedFindDropdownVal.value === "P" && (
                      <Form 
                        onSubmit={getVanDerWaals}
                        hasAnswer={hasAnswer}
                        answer={answer}
                        unitTypes={unitTypes}
                        isSelectedFindDropdownVal={isSelectedFindDropdownVal}
                        formElements={[
                          { label: 'n', name: 'n', unitType: 'mol' },
                          { label: 'T', name: 't', unitType: 'K' },
                          { label: 'V', name: 'v', unitType: 'L' }
                        ]}
                      />
                    )}
      
                    {/* If V is missing */}
                    {isSelectedFindDropdownVal.value === "V" && (
                      <Form 
                        onSubmit={getVanDerWaals}
                        hasAnswer={hasAnswer}
                        answer={answer}
                        unitTypes={unitTypes}
                        isSelectedFindDropdownVal={isSelectedFindDropdownVal}
                        formElements={[
                          { label: 'n', name: 'n', unitType: 'mol' },
                          { label: 'T', name: 't', unitType: 'K' },
                          { label: 'P', name: 'p', unitType: 'bar' }
                        ]}
                      />
                    )}
      
                    {/* If n is missing */}
                    {isSelectedFindDropdownVal.value === "n" && (
                      <Form 
                        onSubmit={getVanDerWaals}
                        hasAnswer={hasAnswer}
                        answer={answer}
                        unitTypes={unitTypes}
                        isSelectedFindDropdownVal={isSelectedFindDropdownVal}
                        formElements={[
                          { label: 'P', name: 'p', unitType: 'bar' },
                          { label: 'V', name: 'v', unitType: 'L' },
                          { label: 'T', name: 't', unitType: 'K' }
                        ]}
                      />
                    )}
      
                    {/* If T is missing */}
                    {isSelectedFindDropdownVal.value === "T" && (
                      <Form 
                        onSubmit={getVanDerWaals}
                        hasAnswer={hasAnswer}
                        answer={answer}
                        unitTypes={unitTypes}
                        isSelectedFindDropdownVal={isSelectedFindDropdownVal}
                        formElements={[
                          { label: 'P', name: 'p', unitType: 'bar' },
                          { label: 'V', name: 'v', unitType: 'L' },
                          { label: 'n', name: 'n', unitType: 'mol' }
                        ]}
                      />
                    )}
                  </div>
                )}

                {/* Redlich - Kwong (some comutation, see the vid)*/}
                {isSelectedEquationType.value === "rkw" && (
                  <div className="flex justify-center items-center">
                    {/* If P is missing */}
                    {isSelectedFindDropdownVal.value === "P" && (
                      <Form 
                        onSubmit={getRedlichKwong}
                        hasAnswer={hasAnswer}
                        answer={answer}
                        unitTypes={unitTypes}
                        isSelectedFindDropdownVal={isSelectedFindDropdownVal}
                        formElements={[
                          { label: 'n', name: 'n', unitType: 'mol' },
                          { label: 'T', name: 't', unitType: 'K' },
                          { label: 'V', name: 'v', unitType: 'L' }
                        ]}
                      />
                      
                    )}
      
                    {/* If V is missing */}
                    {isSelectedFindDropdownVal.value === "V" && (
                      <Form 
                        onSubmit={getRedlichKwong}
                        hasAnswer={hasAnswer}
                        answer={answer}
                        unitTypes={unitTypes}
                        isSelectedFindDropdownVal={isSelectedFindDropdownVal}
                        formElements={[
                          { label: 'n', name: 'n', unitType: 'mol' },
                          { label: 'T', name: 't', unitType: 'K' },
                          { label: 'P', name: 'p', unitType: 'bar' }
                        ]}
                      />
                    )}
      
                    {/* If n is missing */}
                    {isSelectedFindDropdownVal.value === "n" && (
                      <Form 
                        onSubmit={getRedlichKwong}
                        hasAnswer={hasAnswer}
                        answer={answer}
                        unitTypes={unitTypes}
                        isSelectedFindDropdownVal={isSelectedFindDropdownVal}
                        formElements={[
                          { label: 'P', name: 'p', unitType: 'bar' },
                          { label: 'V', name: 'v', unitType: 'L' },
                          { label: 'T', name: 't', unitType: 'K' }
                        ]}
                      />
                    )}
      
                    {/* If T is missing */}
                    {isSelectedFindDropdownVal.value === "T" && (
                      <Form 
                        onSubmit={getRedlichKwong}
                        hasAnswer={hasAnswer}
                        answer={answer}
                        unitTypes={unitTypes}
                        isSelectedFindDropdownVal={isSelectedFindDropdownVal}
                        isSelectedEquationType={isSelectedEquationType}       // only T in Redlich - Kwong has this (for dealing with 2 & 4 cols in diff screen sizes)
                        formElements={[
                          { label: 'P', name: 'p', unitType: 'bar' },
                          { label: 'V', name: 'v', unitType: 'L' },
                          { label: 'n', name: 'n', unitType: 'mol' },
                          { label: 'Tr', name: 'tr', unitType: '' }
                        ]}
                      />
                    )}
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

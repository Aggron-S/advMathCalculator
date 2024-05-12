// hashmap
const constValTable = {
  R: 0.08413, //  (bar * mol) / (L * K)

  // Redlich - Kwong Constants
  omega: 0.08664,
  psi: 0.42748,

  // Chemical Compounds (a and b constants)
  vanDerWaals: {
    aceticAcid: {
      a: 17.71,
      b: 0.1065,
    },
    acetone: {
      a: 16.02,
      b: 0.1124,
    },
    acetonitrile: {
      a: 17.89,
      b: 0.1169,
    },
    acetylene: {
      a: 4.516,
      b: 0.0522,
    },
    ammonia: {
      a: 4.225,
      b: 0.03713,
    },
    benzene: {
      a: 18.82,
      b: 0.1193,
    },
    carbonMonoxide: {
      a: 1.472,
      b: 0.03948,
    },
    carbonDioxide: {
      a: 3.658,
      b: 0.04286,
    },
    chlorine: {
      a: 6.343,
      b: 0.05422,
    },
    chloroBenzene: {
      a: 25.8,
      b: 0.1454,
    },
    dimethylEther: {
      a: 8.69,
      b: 0.07742,
    },
    ethanol: {
      a: 12.56,
      b: 0.0871,
    },
    ethylene: {
      a: 4.612,
      b: 0.05821,
    },
    ethylAcetate: {
      a: 20.57,
      b: 0.1401,
    },
    hydrogen: {
      a: 0.2453,
      b: 0.02651,
    },
    methane: {
      a: 2.3,
      b: 0.04301,
    },
    methanol: {
      a: 9.472,
      b: 0.06584,
    },
    naphthalene: {
      a: 40.32,
      b: 0.192,
    },
    nitrogenGas: {
      a: 1.37,
      b: 0.0387,
    },
    nitricOxide: {
      a: 1.46,
      b: 0.0289,
    },
    oxygenGas: {
      a: 1.382,
      b: 0.03186,
    },
    phenol: {
      a: 22.93,
      b: 0.1177,
    },
    propane: {
      a: 9.385,
      b: 0.09044,
    },
    toluene: {
      a: 24.89,
      b: 0.1499,
    },
    water: {
      a: 5.537,
      b: 0.03049,
    },
  },

  // Chemical Compounds (Tc and Pc Constants)
  redlichKwong: {
    aceticAcid: {
      Tc: 592.0,
      Pc: 57.86,
    },
    acetone: {
      Tc: 508.2,
      Pc: 47.01,
    },
    acetonitrile: {
      Tc: 545.5,
      Pc: 48.3,
    },
    acetylene: {
      Tc: 308.3,
      Pc: 61.39,
    },
    ammonia: {
      Tc: 405.7,
      Pc: 112.8,
    },
    benzene: {
      Tc: 562.2,
      Pc: 48.98,
    },
    carbonMonoxide: {
      Tc: 132.9,
      Pc: 34.99,
    },
    carbonDioxide: {
      Tc: 304.2,
      Pc: 73.83,
    },
    chlorine: {
      Tc: 417.2,
      Pc: 77.1,
    },
    chloroBenzene: {
      Tc: 632.4,
      Pc: 45.2,
    },
    dimethylEther: {
      Tc: 466.7,
      Pc: 36.4,
    },
    ethanol: {
      Tc: 513.9,
      Pc: 61.48,
    },
    ethylene: {
      Tc: 282.3,
      Pc: 50.4,
    },
    ethylAcetate: {
      Tc: 523.3,
      Pc: 38.8,
    },
    hydrogen: {
      Tc: 33.19,
      Pc: 13.13,
    },
    methane: {
      Tc: 190.6,
      Pc: 45.99,
    },
    methanol: {
      Tc: 512.6,
      Pc: 80.97,
    },
    naphthalene: {
      Tc: 748.4,
      Pc: 40.51,
    },
    nitrogenGas: {
      Tc: 126.2,
      Pc: 34.0,
    },
    nitricOxide: {
      Tc: 180.2,
      Pc: 64.8,
    },
    oxygenGas: {
      Tc: 154.6,
      Pc: 50.43,
    },
    phenol: {
      Tc: 694.3,
      Pc: 61.3,
    },
    propane: {
      Tc: 369.8,
      Pc: 42.48,
    },
    toluene: {
      Tc: 591.8,
      Pc: 41.06,
    },
    water: {
      Tc: 647.1,
      Pc: 220.55,
    },
  },
};
/*-----------------------------------------CHEMICAL COMPOUNDS-------------------------------------------------*/
// Constant Variables
const R = constValTable.R;
// Redlich - Kwong Constants
const omega = constValTable.omega;
const psi = constValTable.psi;

// Van Der Waals Constant Variables (a and b)
const aceticAcidA = constValTable.vanDerWaals.aceticAcid.a;
const aceticAcidB = constValTable.vanDerWaals.aceticAcid.b;
const acetoneA = constValTable.vanDerWaals.acetone.a;
const acetoneB = constValTable.vanDerWaals.acetone.b;
const acetonitrileA = constValTable.vanDerWaals.acetonitrile.a;
const acetonitrileB = constValTable.vanDerWaals.acetonitrile.b;
const acetyleneA = constValTable.vanDerWaals.acetylene.a;
const acetyleneB = constValTable.vanDerWaals.acetylene.b;
const ammoniaA = constValTable.vanDerWaals.ammonia.a;
const ammoniaB = constValTable.vanDerWaals.ammonia.b;
const benzeneA = constValTable.vanDerWaals.benzene.a;
const benzeneB = constValTable.vanDerWaals.benzene.b;
const carbonMonoxideA = constValTable.vanDerWaals.carbonMonoxide.a;
const carbonMonoxideB = constValTable.vanDerWaals.carbonMonoxide.b;
const carbonDioxideA = constValTable.vanDerWaals.carbonDioxide.a;
const carbonDioxideB = constValTable.vanDerWaals.carbonDioxide.b;
const chlorineA = constValTable.vanDerWaals.chlorine.a;
const chlorineB = constValTable.vanDerWaals.chlorine.b;
const chloroBenzeneA = constValTable.vanDerWaals.chloroBenzene.a;
const chloroBenzeneB = constValTable.vanDerWaals.chloroBenzene.b;
const dimethylEtherA = constValTable.vanDerWaals.dimethylEther.a;
const dimethylEtherB = constValTable.vanDerWaals.dimethylEther.b;
const ethanolA = constValTable.vanDerWaals.ethanol.a;
const ethanolB = constValTable.vanDerWaals.ethanol.b;
const ethyleneA = constValTable.vanDerWaals.ethylene.a;
const ethyleneB = constValTable.vanDerWaals.ethylene.b;
const ethylAcetateA = constValTable.vanDerWaals.ethylAcetate.a;
const ethylAcetateB = constValTable.vanDerWaals.ethylAcetate.b;
const hydrogenA = constValTable.vanDerWaals.hydrogen.a;
const hydrogenB = constValTable.vanDerWaals.hydrogen.b;
const methaneA = constValTable.vanDerWaals.methane.a;
const methaneB = constValTable.vanDerWaals.methane.b;
const methanolA = constValTable.vanDerWaals.methanol.a;
const methanolB = constValTable.vanDerWaals.methanol.b;
const naphthaleneA = constValTable.vanDerWaals.naphthalene.a;
const naphthaleneB = constValTable.vanDerWaals.naphthalene.b;
const nitrogenGasA = constValTable.vanDerWaals.nitrogenGas.a;
const nitrogenGasB = constValTable.vanDerWaals.nitrogenGas.b;
const nitricOxideA = constValTable.vanDerWaals.nitricOxide.a;
const nitricOxideB = constValTable.vanDerWaals.nitricOxide.b;
const oxygenGasA = constValTable.vanDerWaals.oxygenGas.a;
const oxygenGasB = constValTable.vanDerWaals.oxygenGas.b;
const phenolA = constValTable.vanDerWaals.phenol.a;
const phenolB = constValTable.vanDerWaals.phenol.b;
const propaneA = constValTable.vanDerWaals.propane.a;
const propaneB = constValTable.vanDerWaals.propane.b;
const tolueneA = constValTable.vanDerWaals.toluene.a;
const tolueneB = constValTable.vanDerWaals.toluene.b;
const waterA = constValTable.vanDerWaals.water.a;
const waterB = constValTable.vanDerWaals.water.b;

// Redlich - Kwong Constant Variables (Tc and Pc)
const aceticAcidTc = constValTable.redlichKwong.aceticAcid.Tc;
const aceticAcidPc = constValTable.redlichKwong.aceticAcid.Pc;
const acetoneTc = constValTable.redlichKwong.acetone.Tc;
const acetonePc = constValTable.redlichKwong.acetone.Pc;
const acetonitrileTc = constValTable.redlichKwong.acetonitrile.Tc;
const acetonitrilePc = constValTable.redlichKwong.acetonitrile.Pc;
const acetyleneTc = constValTable.redlichKwong.acetylene.Tc;
const acetylenePc = constValTable.redlichKwong.acetylene.Pc;
const ammoniaTc = constValTable.redlichKwong.ammonia.Tc;
const ammoniaPc = constValTable.redlichKwong.ammonia.Pc;
const benzeneTc = constValTable.redlichKwong.benzene.Tc;
const benzenePc = constValTable.redlichKwong.benzene.Pc;
const carbonMonoxideTc = constValTable.redlichKwong.carbonMonoxide.Tc;
const carbonMonoxidePc = constValTable.redlichKwong.carbonMonoxide.Pc;
const carbonDioxideTc = constValTable.redlichKwong.carbonDioxide.Tc;
const carbonDioxidePc = constValTable.redlichKwong.carbonDioxide.Pc;
const chlorineTc = constValTable.redlichKwong.chlorine.Tc;
const chlorinePc = constValTable.redlichKwong.chlorine.Pc;
const chloroBenzeneTc = constValTable.redlichKwong.chloroBenzene.Tc;
const chloroBenzenePc = constValTable.redlichKwong.chloroBenzene.Pc;
const dimethylEtherTc = constValTable.redlichKwong.dimethylEther.Tc;
const dimethylEtherPc = constValTable.redlichKwong.dimethylEther.Pc;
const ethanolTc = constValTable.redlichKwong.ethanol.Tc;
const ethanolPc = constValTable.redlichKwong.ethanol.Pc;
const ethyleneTc = constValTable.redlichKwong.ethylene.Tc;
const ethylenePc = constValTable.redlichKwong.ethylene.Pc;
const ethylAcetateTc = constValTable.redlichKwong.ethylAcetate.Tc;
const ethylAcetatePc = constValTable.redlichKwong.ethylAcetate.Pc;
const hydrogenTc = constValTable.redlichKwong.hydrogen.Tc;
const hydrogenPc = constValTable.redlichKwong.hydrogen.Pc;
const methaneTc = constValTable.redlichKwong.methane.Tc;
const methanePc = constValTable.redlichKwong.methane.Pc;
const methanolTc = constValTable.redlichKwong.methanol.Tc;
const methanolPc = constValTable.redlichKwong.methanol.Pc;
const naphthaleneTc = constValTable.redlichKwong.naphthalene.Tc;
const naphthalenePc = constValTable.redlichKwong.naphthalene.Pc;
const nitrogenGasTc = constValTable.redlichKwong.nitrogenGas.Tc;
const nitrogenGasPc = constValTable.redlichKwong.nitrogenGas.Pc;
const nitricOxideTc = constValTable.redlichKwong.nitricOxide.Tc;
const nitricOxidePc = constValTable.redlichKwong.nitricOxide.Pc;
const oxygenGasTc = constValTable.redlichKwong.oxygenGas.Tc;
const oxygenGasPc = constValTable.redlichKwong.oxygenGas.Pc;
const phenolTc = constValTable.redlichKwong.phenol.Tc;
const phenolPc = constValTable.redlichKwong.phenol.Pc;
const propaneTc = constValTable.redlichKwong.propane.Tc;
const propanePc = constValTable.redlichKwong.propane.Pc;
const tolueneTc = constValTable.redlichKwong.toluene.Tc;
const toluenePc = constValTable.redlichKwong.toluene.Pc;
const waterTc = constValTable.redlichKwong.water.Tc;
const waterPc = constValTable.redlichKwong.water.Pc;

/*-------------------------------------------Answer Unit Types--------------------------------------------*/
export const unitTypes = {
  "P": "bar",
  "V": "L",
  "n": "mol",
  "T": "K" 
}
/*--------------------------------------react-select component options-------------------------------------*/
// Equation Options
export const equationType = [
  { value: "ig", label: "Ideal Gas" },
  { value: "vdw", label: "Van Der Waals" },
  { value: "rkw", label: "Redlich - Kwong" },
];

// Find Options
export const findOps = [
  { value: "P", label: "Pressure (P)" },
  { value: "V", label: "Volume (V)" },
  { value: "n", label: "mole (n)" },
  { value: "T", label: "Temperature (T)" },
];
// Chemical Compound Options
export const chemCompoundOps = [
  { value: "aceticAcid", label: "Acetic acid (CH\u2083COOH)" },
  { value: "acetone", label: "Acetone (C\u2083H\u2086O)" },
  { value: "acetonitrile", label: "Acetonitrile (C\u2082H\u2083N)" },
  { value: "acetylene", label: "Acetylene (C\u2082H\u2082)" },
  { value: "ammonia", label: "Ammonia (NH\u2083)" },
  { value: "benzene", label: "Benzene (C\u2086H\u2086)" },
  { value: "carbonMonoxide", label: "Carbon monoxide (CO)" },
  { value: "carbonDioxide", label: "Carbon dioxide (CO\u2082)" },
  { value: "chlorine", label: "Chlorine (Cl\u2082)" },
  { value: "chlorobenzene", label: "Chlorobenzene (C\u2086H\u2085Cl)" },
  { value: "dimethylEther", label: "Dimethyl ether (C\u2082H\u2086O)" },
  { value: "ethanol", label: "Ethanol (C\u2082H\u2085OH)" },
  { value: "ethylene", label: "Ethylene (C\u2082H\u2084)" },
  { value: "ethylAcetate", label: "Ethyl Acetate (C\u2084H\u2088O\u2082)" },
  { value: "hydrogen", label: "Hydrogen (H\u2082)" },
  { value: "methane", label: "Methane (CH\u2084)" },
  { value: "methanol", label: "Methanol (CH\u2083OH)" },
  { value: "naphthalene", label: "Naphthalene (C\u2081\u2080H\u2088)" },
  { value: "nitrogenGas", label: "Nitrogen gas (N\u2082)" },
  { value: "nitricOxide", label: "Nitric oxide (NO)" },
  { value: "oxygenGas", label: "Oxygen gas (O\u2082)" },
  { value: "phenol", label: "Phenol (C\u2086H\u2085OH)" },
  { value: "propane", label: "Propane (C\u2083H\u2088)" },
  { value: "toluene", label: "Toluene (C\u2086H\u2085CH\u2083)" },
  { value: "water", label: "Water (H\u2082O)" },
];

export {
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
};

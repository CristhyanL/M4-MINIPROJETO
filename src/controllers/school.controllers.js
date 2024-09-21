import { School } from "../models/school.models.js";

const registerSchool = [
  {
    name: "CE DOUTOR MOACYR MEIRELLES PADILHA",
    InepCode: 33051879,
    address:
      "ROD AMARAL PEIXOTO, 0 RJ 104 KM 19. MARAMBAIA. 24753-560 São Gonçalo - RJ.",
    bairro: "Marambaia",
    contact: 2136387590,
    employees: 4,
    teachers: 17,
    classrooms: 9,
    students_quantity: "Entre 201 e 500 matrículas",
    libraries: "SIM",
    laboratories: "NÃO",
    internet: "SIM",
    accessible_bathroom: "NÃO",
    imageUrl: "Padilha.png",
  },
  {
    name: "CE NILO PECANHA",
    InepCode: 33089094,
    address: "RUA CORONEL SERRADO, 1750 ZE GAROTO. 24440-020 São Gonçalo - RJ.",
    bairro: "Zé Garoto",
    contact: 2137052166,
    employees: 16,
    teachers: 23,
    classrooms: 13,
    students_quantity: "Entre 501 e 1000 matrículas",
    libraries: "SIM",
    laboratories: "NÃO",
    internet: "SIM",
    accessible_bathroom: "SIM",
    imageUrl: "Nilo.png",
  },
  {
    name: "CE WALTER ORLANDINE",
    InepCode: 33091200,
    address:
      "RUA DOUTOR FRANCISCO PORTELA, 794 PARAISO. 24435-005 São Gonçalo - RJ.",
    bairro: "Paraiso",
    contact: 2137052452,
    employees: 28,
    teachers: 28,
    classrooms: 21,
    students_quantity: "Mais de 1000 matrículas",
    libraries: "SIM",
    laboratories: "SIM",
    internet: "SIM",
    accessible_bathroom: "SIM",
    imageUrl: "Walter.png",
  },
  {
    name: "CE SUBTENENTE PM MARCO ANTONIO GRIPP",
    InepCode: 33091323,
    address: "RUA ANTONIO BELO, 0 GALO BRANCO. 24436-600 São Gonçalo - RJ.",
    bairro: "Galo Branco",
    contact: 2137157775,
    employees: 0,
    teachers: 10,
    classrooms: 2,
    students_quantity: "Entre 51 e 200 matrículas",
    libraries: "NÃO",
    laboratories: "NÃO",
    internet: "SIM",
    accessible_bathroom: "SIM",
    imageUrl: "Gripp.png",
  },
  {
    name: "CE CORONEL PM MARCUS JARDIM",
    InepCode: 33091897,
    address:
      "RUA CUSTODIO DE OLIVEIRA, 0 ALCANTARA. 24415-570 São Gonçalo - RJ.",
    bairro: "Alcantara",
    contact: 2127010245,
    employees: 6,
    teachers: 15,
    classrooms: 8,
    students_quantity: "Entre 201 e 500 matrículas",
    libraries: "SIM",
    laboratories: "NÃO",
    internet: "SIM",
    accessible_bathroom: "NÃO",
    imageUrl: "Jardim.png",
  },
  {
    name: "CE COMENDADOR VALENTIM DOS SANTOS DINIZ",
    InepCode: 33507210,
    address:
      "RUA CAPITAO JUVENAL FIGUEIREDO, 0 COLUBANDE. 24753-560 São Gonçalo - RJ.",
    bairro: "Colubandê",
    contact: 2137082442,
    employees: 19,
    teachers: 25,
    classrooms: 13,
    students_quantity: "Entre 201 e 500 matrículas",
    libraries: "SIM",
    laboratories: "SIM",
    internet: "SIM",
    accessible_bathroom: "SIM",
    imageUrl: "NATA.png",
  },
];

export const createSchool = (
  name,
  InepCode,
  address,
  bairro,
  contact,
  employees,
  teachers,
  classrooms,
  libraries,
  laboratories,
  internet,
  accessible_bathroom,
  imageUrl
) => {
  let school = new School(
    name,
    InepCode,
    address,
    bairro,
    contact,
    employees,
    teachers,
    classrooms,
    libraries,
    laboratories,
    internet,
    accessible_bathroom,
    imageUrl
  );
  registerSchool.push(school);
  return school;
};

export const searchByInepCode = (InepCode) => {
  const school = registerSchool.find(
    (school) => school.InepCode === InepCode
  );
  return school || "Não há uma escola com este INEP code";
};

export const deleteSchool = (id) => {
  const schoolIndex = registerSchool.findIndex((school)=> school.id == id);
  if (schoolIndex !== -1) {
    const removedSchool = registerSchool.splice(schoolIndex, 1)[0];
    return removedSchool;
  } else {
    return "Não há uma escola com este id";
  }
};

export const allSchools = () => {
  return registerSchool;
};

export const searchBairro = (bairro) => {
  return registerSchool.filter((school) => school.bairro === bairro);
};

export const updateSchool = (
  id,
  contact,
  employees,
  teachers,
  classrooms,
  libraries,
  laboratories,
  internet,
  accessible_bathroom
) => {
  const schoolIndex = registerSchool.findIndex((school) => school.id === id);

  if (schoolIndex !== -1) {
    const school = registerSchool[schoolIndex];
    if (contact !== undefined) school.contact = contact;
    if (employees !== undefined) school.employees = employees;
    if (teachers !== undefined) school.teachers = teachers;
    if (classrooms !== undefined) school.classrooms = classrooms;
    if (libraries !== undefined) school.libraries = libraries;
    if (laboratories !== undefined) school.laboratories = laboratories;
    if (internet !== undefined) school.internet = internet;
    if (accessible_bathroom !== undefined) school.accessible_bathroom = accessible_bathroom;
    return school;
  } else {
    throw new Error("Não há escola com este id");
  }
};

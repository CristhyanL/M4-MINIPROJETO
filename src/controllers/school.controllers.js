import { School } from "../models/school.models.js";

const registerSchool = [
  {
      name: "CE DOUTOR MOACYR MEIRELLES PADILHA",
      InepCode: 33051879,
      address: "ROD AMARAL PEIXOTO, 0 RJ 104 KM 19. MARAMBAIA. 24753-560 São Gonçalo - RJ.",
      bairro: "Marambaia",
      contact: 2136387590,
      employees: 4,
      teachers: 17,
      classrooms: 9,
      students_quantity: "Entre 201 e 500 matrículas",
      libraries: "SIM",
      laboratories: "NÃO",
      internet: "SIM",
      accessible_bathroom: "NÃO"
  },
  {
      "name": "CE NILO PECANHA",
      "InepCode": 33089094,
      "address": "RUA CORONEL SERRADO, 1750 ZE GAROTO. 24440-020 São Gonçalo - RJ.",
      "bairro": "Zé Garoto",
      "contact": 2137052166,
      "employees": 16,
      "teachers": 23,
      "classrooms": 13,
      "students_quantity": "Entre 501 e 1000 matrículas",
      "libraries": "SIM",
      "laboratories": "NÃO",
      "internet": "SIM",
      "accessible_bathroom": "SIM"
  },
  {
      "name": "CE WALTER ORLANDINE",
      "InepCode": 33091200,
      "address": "RUA DOUTOR FRANCISCO PORTELA, 794 PARAISO. 24435-005 São Gonçalo - RJ.",
      "bairro": "Paraiso",
      "contact": 2137052452,
      "employees": 28,
      "teachers": 28,
      "classrooms": 21,
      "students_quantity": "Mais de 1000 matrículas",
      "libraries": "SIM",
      "laboratories": "SIM",
      "internet": "SIM",
      "accessible_bathroom": "SIM"
  },
  {
      "name": "CE SUBTENENTE PM MARCO ANTONIO GRIPP",
      "InepCode": 33091323,
      "address": "RUA ANTONIO BELO, 0 GALO BRANCO. 24436-600 São Gonçalo - RJ.",
      "bairro": "Galo Branco",
      "contact": 2137157775,
      "employees": 0,
      "teachers": 10,
      "classrooms": 2,
      "students_quantity": "Entre 51 e 200 matrículas",
      "libraries": "NÃO",
      "laboratories": "NÃO",
      "internet": "SIM",
      "accessible_bathroom": "SIM"
  },
  {
      "name": "CE CORONEL PM MARCUS JARDIM",
      "InepCode": 33091897,
      "address": "RUA CUSTODIO DE OLIVEIRA, 0 ALCANTARA. 24415-570 São Gonçalo - RJ.",
      "bairro": "Alcantara",
      "contact": 2127010245,
      "employees": 6,
      "teachers": 15,
      "classrooms": 8,
      "students_quantity": "Entre 201 e 500 matrículas",
      "libraries": "SIM",
      "laboratories": "NÃO",
      "internet": "SIM",
      "accessible_bathroom": "NÃO"
  },
  {
      "name": "CE COMENDADOR VALENTIM DOS SANTOS DINIZ",
      "InepCode": 33507210,
      "address": "RUA CAPITAO JUVENAL FIGUEIREDO, 0 COLUBANDE. 24753-560 São Gonçalo - RJ.",
      "bairro": "Colubandê",
      "contact": 2137082442,
      "employees": 19,
      "teachers": 25,
      "classrooms": 13,
      "students_quantity": "Entre 201 e 500 matrículas",
      "libraries": "SIM",
      "laboratories": "SIM",
      "internet": "SIM",
      "accessible_bathroom": "SIM"
  }
]

export const createSchool = (name, InepCode, address, bairro, contact, employees, 
  teachers, classrooms, libraries, laboratories, 
  internet, accessible_bathroom) => {
    let school = new School(name, InepCode, address, bairro, contact, employees, 
      teachers, classrooms, libraries, laboratories, 
      internet, accessible_bathroom);
      registerSchool.push(school);
      return school;
  }

export const searchByInepCode = (InepCode) => {
  const schoolInepCode = registerSchool.filter(school => school.InepCode === InepCode) 
  return schoolInepCode.length > 0 ? schoolInepCode : "Não há uma escola com este INEP code";
}

export const deleteSchool = (id) => {
  const school = registerSchool.find(school => school.id == id);
  const schoolIndex = registerSchool.indexOf(school)
    if (schoolIndex !== -1) {
        const school = registerSchool.splice(schoolIndex, 1)[0];
        return school;
    } else {
        return "Não há uma escola com este id";
    }
}

export const allSchools = () => {
  return registerSchool;
}

export const searchBairro = (bairro) => {
  return registerSchool.filter((school) => school.bairro === bairro);
}

export const updateSchool = (id, contact, employees, 
  teachers, classrooms, libraries, laboratories, 
  internet, accessible_bathroom) => {
  const schoolIndex = registerSchool.findIndex(school => school.id == id);
  if (schoolIndex !== -1) {
    const school = registerSchool[schoolIndex];
    if (contact) school.contact = contact;
    if (employees) school.employees = employees;
    if (teachers) school.teachers = teachers;
    if (classrooms) school.classrooms = classrooms;
    if (libraries) school.libraries = libraries;
    if (laboratories) school.laboratories = laboratories;
    if (internet) school.internet = internet;
    if (accessible_bathroom) school.accessible_bathroom = accessible_bathroom;
    return school;
  } else {
    return "Não há escola com este id";
  }
}
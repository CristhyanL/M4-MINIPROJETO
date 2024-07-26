import { School } from "../models/school.models.js";
import fs from "fs";
import path from "path";

const schoolDataPath = path.resolve("schools.data.json");

const loadSchools = () => {
  if (fs.existsSync(schoolDataPath)) {
    const data = fs.readFileSync(schoolDataPath);
    return JSON.parse(data);
  }
  return [];
};

const saveSchools = (schools) => {
  fs.writeFileSync(schoolDataPath, JSON.stringify(schools, null, 2));
};

let listSchool = loadSchools();

export const createSchool = (name, INEP_code, address, bairro, contact, employees, 
  teachers, classrooms, libraries, laboratories, 
  internet, accessible_bathroom) => {
    let school = new School(name, INEP_code, address, bairro, contact, employees, 
      teachers, classrooms, libraries, laboratories, 
      internet, accessible_bathroom);
      listSchool.push(school);
      saveSchools(listSchool);
      return school;
  }

export const searchInepCode = (INEP_code) => {
  return listSchool.filter((school) => school.INEP_code === INEP_code);
}

export const deleteSchool = (id) => {
  const schoolExist = listSchool.find(school => school.id == id);
    if (schoolExist) {
        let indexSchool = listSchool.findIndex(school => school.id == id);
        listSchool.splice(indexSchool, 1);
        saveSchools(listSchool);
        return schoolExist;
    } else {
        return "Não há escola com este id";
    }
}

export const allSchools = () => {
  return listSchool;
}

export const searchBairro = (bairro) => {
  return listSchool.filter((school) => school.bairro === bairro);
}

export const updateSchool = (id, contact, employees) => {
  const schoolIndex = listSchool.findIndex(school => school.id == id);
  if (schoolIndex !== -1) {
    const school = listSchool[schoolIndex];
    if (contact) school.contact = contact;
    if (employees) school.employees = employees;
    listSchool[schoolIndex] = school;
    saveSchools(listSchool); 
    return school;
  } else {
    return "Não há escola com este id";
  }
}
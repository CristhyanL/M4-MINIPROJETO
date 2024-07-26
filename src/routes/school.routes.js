import { Router } from 'express';
import { createSchool, allSchools, deleteSchool, searchByInepCode, searchBairro, updateSchool } from '../controllers/school.controllers.js';

const schoolRouter = Router();

// Cadastrando uma nova escola
schoolRouter.post("/createSchool",  (req,res)=> {
    const {name, InepCode, address, bairro, contact, employees, teachers, classrooms, libraries, laboratories, 
    internet, accessible_bathroom} = req.body;

    const newSchool = createSchool(name, InepCode, address, bairro, contact, employees, 
  teachers, classrooms, libraries, laboratories, 
  internet, accessible_bathroom, teachers, classrooms, libraries, laboratories, internet, accessible_bathroom);
    res.status(201).json({newSchool})
});

//Pesquisando todas as Escolas cadastradas
schoolRouter.get("/searchschool", (req,res) => {
    let result = allSchools();
    res.status(200).json({result});
});

// Deletando uma escola
schoolRouter.delete("/deleteSchool/:id", (req,res)=> {
    const { id } = req.params;
    const school = deleteSchool(id);
    res.status(200).json({school});
});

//Pesquisando uma Escola Pelo InepCode
schoolRouter.get("/school/INEP/:InepCode", (req,res)=> {
    const { InepCode } = req.params;
    console.log(InepCode);
    const school = searchByInepCode(parseInt(InepCode)); console.log(school);
        res.status(200).json({ school });
        res.status(404).json({ message: "Não temos o cadastro da escola com o código inep digitado"});
});

//Pesquisando uma Escola por Bairro
schoolRouter.get("/school/bairro/:bairro", (req,res)=> {
    const { bairro } = req.params;
    const school = searchBairro(bairro);
    console.log(school);
    if (school.length > 0) {
        res.status(200).json({ school });
    } else {
        res.status(404).json({ message: "Não há escolas do bairro pesquisado"});
    }
});

//Atualizando Dados de uma Escola
schoolRouter.patch("/updateSchool/:id", (req,res)=> {
    const id = req.params.id;
    const {contact, employees, 
    teachers, classrooms, libraries, laboratories, 
    internet, accessible_bathroom} = req.body;

    const schoolUpdate = updateSchool(id, contact, employees, 
    teachers, classrooms, libraries, laboratories, 
    internet, accessible_bathroom);
    
    if (typeof schoolUpdate === 'string') {
        res.status(404).json({ message: schoolUpdate });
    } else {
        res.status(200).json({ schoolUpdate });
    }
});

export { schoolRouter };
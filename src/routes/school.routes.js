import { Router } from "express";
import {
  createSchool,
  allSchools,
  deleteSchool,
  searchByInepCode,
  searchBairro,
  updateSchool,
} from "../controllers/school.controllers.js";

const schoolRouter = Router();

schoolRouter.post("/createSchool", (req, res) => {
  try {
    const {
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
    } = req.body;

    if (!name || !InepCode || !address || !contact) {
      return res.status(400).json({ error: "Faltam campos obrigatórios." });
    }

    const newSchool = createSchool(
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

    res.status(201).json({ newSchool });
  } catch (error) {
    res.status(500).json({ error: "Erro", details: error.message });
  }
});

schoolRouter.get("/schools", async (req, res) => {
  try {
    let result = await allSchools();
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ message: "Erro", error: error.message });
  }
});

schoolRouter.delete("/deleteSchool/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const school = await deleteSchool(id);

    if (!school) {
      return res.status(404).json({ error: "Escola não encontrada" });
    }

    res.status(200).json({ message: "Escola Deletada", school });
  } catch (error) {
    res.status(500).json({ error: "Erro" });
  }
});

schoolRouter.get("/school/INEP/:InepCode", (req, res) => {
  const { InepCode } = req.params;

  const inepCodeParsed = parseInt(InepCode, 10);

  if (isNaN(inepCodeParsed)) {
    return res
      .status(400)
      .json({ message: "Código INEP inválido. Deve ser um número." });
  }

  const school = searchByInepCode(parseInt(InepCode));

  if (school) {
    return res.status(200).json({ school });
  } else {
    return res
      .status(404)
      .json({
        message: "Não temos o cadastro da escola com o código inep digitado",
      });
  }
});

schoolRouter.get("/school/bairro/:bairro", async (req, res) => {
  try {
    const { bairro } = req.params;
    const school = searchBairro(bairro);
    console.log(school);

    if (school.length > 0) {
      res.status(200).json({ school });
    } else {
      res.status(404).json({ message: "Não há escolas do bairro pesquisado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro", error: error.message });
  }
});

schoolRouter.patch("/updateSchool/:id", async (req, res) => {
  const id = req.params.id;
  const {
    contact,
    employees,
    teachers,
    classrooms,
    libraries,
    laboratories,
    internet,
    accessible_bathroom,
  } = req.body;

  try {
    if (
      !id ||
      !contact ||
      !employees ||
      !teachers ||
      !classrooms ||
      !libraries ||
      !laboratories ||
      !internet ||
      accessible_bathroom === undefined
    ) {
      return res.status(400).json({ message: "Dados insuficientes" });
    }

    const schoolUpdate = await updateSchool(
      id,
      contact,
      employees,
      teachers,
      classrooms,
      libraries,
      laboratories,
      internet,
      accessible_bathroom
    );

    if (typeof schoolUpdate === "string") {
      return res.status(404).json({ message: schoolUpdate });
    }

    res.status(200).json({ schoolUpdate });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro" });
  }
});

export { schoolRouter };

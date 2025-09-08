import dados from "../models/dados.js";
const { animais } = dados;

// GET /animais - Listar Animais com filtros
const getAllAnimais = (req, res) => {
  const { nome, tipo } = req.query;
  let resultado = animais;

  if (nome) {
    resultado = resultado.filter((h) =>
      h.nome.toLowerCase().includes(nome.toLowerCase())
    );
  }
  if (tipo) {
    resultado = resultado.filter((h) =>
      h.tipo.toLowerCase().includes(tipo.toLowerCase())
    );
  }

  res.status(200).json({
    total: resultado.length,
    data: resultado,
  });
};

// POST /animais - Criar novo animal
const createAnimal = (req, res) => {
  const { nome, tipo} = req.body;

  // Validação de campos obrigatórios
  if (!nome || !tipo) {
    return res.status(400).json({
      success: false,
      message: "Nome e tipo são obrigatórios para um Animal!",
    });
  }

  // Criar novo Animal
  const novoAnimal = {
    id: animais.length + 1,
    nome,
    tipo
   
  };

  // Adicionar à lista de Animais
  animais.push(novoAnimal);

  res.status(201).json({
    success: true,
    message: "Novo Animal cadastrado!",
    data: novoAnimal,
  });
};

// Rota GET by ID 

const animaisPorId =  (req, res) => {
    let id = req.params.id;
    id = parseInt(id);

    const animal = animais.find(a => a.id === id);
    
    // Se encontrou, retorna os dados
    if (animal) {
        res.json({
            success: true,
            message: `Animal ${animal.nome} encontrado!🐵 `,
            data: animal
        });
    } else {
        // Se não encontrou, retorna erro 404
        res.status(404).json({
            success: false,
            error: "Animal não encontrado 😕",
            message: `Nenhum animal com ID ${id} foi encontrado `,
            codigo: "WIZARD_NOT_FOUND"
        });
    }
};

export { getAllAnimais, createAnimal, animaisPorId };

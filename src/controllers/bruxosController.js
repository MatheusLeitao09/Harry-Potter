import dados from "../models/dados.js";
const { bruxos } = dados;

// GET /herois - Listar heróis com filtros
const getAllBruxos = (req, res) => {
    const { nome, ano, casa, varinha } = req.query;
    let resultado = bruxos;

    if (nome) {
        resultado = resultado.filter((h) => 
            h.nome.toLowerCase().includes(nome.toLowerCase())
        );
    }
    if (ano) {
        resultado = resultado.filter((h) => 
            h.ano.toLowerCase().includes(ano.toLowerCase())
        );
    }
    if (casa) {
        resultado = resultado.filter((h) => 
            h.casa.toLowerCase().includes(casa.toLowerCase())
        );
    }
    if (varinha) {
        resultado = resultado.filter((h) => 
            h.varinha.toLowerCase().includes(varinha.toLowerCase())
        );
    }

    res.status(200).json({
        total: resultado.length,
        data: resultado,
    });
};

// POST /herois - Criar novo herói
const createBruxo = (req, res) => {
    const { nome, ano, casa, varinha, mascote, patrono, especialidade, vivo } = req.body;

    // Validação de campos obrigatórios
    if (!nome || !casa) {
        return res.status(400).json({
            success: false,
            message: "Nome e casa são obrigatórios para um Bruxo!",
        });
    }

    // Criar novo herói
    const novoBruxo = {
        id: bruxos.length + 1,
        nome,
        casa: casa,
        ano: parseInt(ano),
        varinha: varinha,
        mascote: mascote, 
        patrono: patrono,
        especialidade: especialidade || "Desenvolvendo",
        vivo
       
    };

    // Adicionar à lista de heróis
    bruxos.push(novoBruxo);

    res.status(201).json({
        success: true,
        message: "Novo bruxo cadastrado!",
        data: novoBruxo,
    });
};

// Rota GET by ID 

const bruxosPorId =  (req, res) => {
    let id = req.params.id;
    id = parseInt(id);

    const bruxo = bruxos.find(b => b.id === id);
    
    // Se encontrou, retorna os dados
    if (bruxo) {
        res.json({
            success: true,
            message: `Bruxo ${bruxo.nome} encontrado! ⚡`,
            data: bruxo
        });
    } else {
        // Se não encontrou, retorna erro 404
        res.status(404).json({
            success: false,
            error: "Bruxo não encontrado 😕",
            message: `Nenhum bruxo com ID ${id} foi encontrado`,
            codigo: "WIZARD_NOT_FOUND"
        });
    }
};

export { getAllBruxos, createBruxo, bruxosPorId  };
import dados from "../models/dados.js";
const { pocoes } = dados;

// GET /pocoes - Listar poções com filtros
const getAllPocoes = (req, res) => {
    const { nome, efeito } = req.query;
    let resultado = pocoes;

    if (nome) {
        resultado = resultado.filter((h) => 
            h.nome.toLowerCase().includes(nome.toLowerCase())
        );
    }
    if (efeito) {
        resultado = resultado.filter((h) => 
            h.efeito.toLowerCase().includes(ano.toLowerCase())
        );
    }

    res.status(200).json({
        total: resultado.length,
        data: resultado,
    });
};

// POST /poçoes - Criar nova poção
const createPocao = (req, res) => {
    const { nome, efeito } = req.body;

    // Validação de campos obrigatórios
    if (!nome || !efeito) {
        return res.status(400).json({
            success: false,
            message: "Nome e efeito são obrigatórios para uma Poção!",
        });
    }

    // Criar nova Poção
    const novaPocao = {
        id: bruxos.length + 1,
        nome,
        efeito
       
    };

    // Adicionar à lista de poções
    pocoes.push(novaPocao);

    res.status(201).json({
        success: true,
        message: "Nova poção cadastrada!",
        data: novaPocao,
    });
};

// Rota GET by ID 

const pocoesPorId =  (req, res) => {
    let id = req.params.id;
    id = parseInt(id);

    const pocao = pocoes.find(b => b.id === id);
    
    // Se encontrou, retorna os dados
    if (pocao) {
        res.json({
            success: true,
            message: `Poção ${pocao.nome} encontrada! `,
            data: pocao
        });
    } else {
        // Se não encontrou, retorna erro 404
        res.status(404).json({
            success: false,
            error: "Poção não encontrada 😕",
            message: `Nenhuma poção com ID ${id} foi encontrado`,
            codigo: "WIZARD_NOT_FOUND"
        });
    }
};

export { getAllPocoes, createPocao, pocoesPorId };
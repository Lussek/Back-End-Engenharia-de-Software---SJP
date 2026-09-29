import express from "express";
<<<<<<< HEAD

const app = express();

const categories = [
    {
        "id": 1,
=======
import { randomUUID } from "node:crypto";

const app = express();
app.use(express.json());

// =================
// Initial data
// =================
const pizzasCategoryId = randomUUID();
const drinksCategoryId = randomUUID();

const categories = [
    {
        "id": pizzasCategoryId,
>>>>>>> aula-02
        "name": "Pizzas",
        "description": "Pizzas tradicionais, especiais e sabores da casa."
    },
    {
<<<<<<< HEAD
        "id": 2,
        "name": "Bebidas",
        "description": "Refrigerantes, sucos, águas e outras bebidas para acompanhar a pizza."
    },
    {
        "id": 3,
        "name": "Sobremesas",
        "description": "Opções doces para finalizar a refeição, como pizzas doces e sobremesas."
=======
        "id": drinksCategoryId,
        "name": "Bebidas",
        "description": "Refrigerantes, sucos, águas e outras bebidas para acompanhar a pizza."
>>>>>>> aula-02
    }
];

const products = [
    {
<<<<<<< HEAD
        "id": 1,
        "categoryId": 1,
=======
        "id": randomUUID(),
        "categoryId": pizzasCategoryId,
>>>>>>> aula-02
        "name": "Pizza Margherita",
        "description": "Molho de tomate, mussarela, tomate e manjericão fresco.",
        "price": 39.90
    },
    {
<<<<<<< HEAD
        "id": 2,
        "categoryId": 1,
=======
        "id": randomUUID(),
        "categoryId": pizzasCategoryId,
>>>>>>> aula-02
        "name": "Pizza Calabresa",
        "description": "Molho de tomate, mussarela, calabresa fatiada e cebola.",
        "price": 42.90
    },
    {
<<<<<<< HEAD
        "id": 3,
        "categoryId": 2,
=======
        "id": randomUUID(),
        "categoryId": drinksCategoryId,
>>>>>>> aula-02
        "name": "Coca-Cola 2L",
        "description": "Refrigerante Coca-Cola em garrafa de 2 litros.",
        "price": 12.00
    },
    {
<<<<<<< HEAD
        "id": 4,
        "categoryId": 3,
=======
        "id": randomUUID(),
        "categoryId": pizzasCategoryId,
>>>>>>> aula-02
        "name": "Pizza de Chocolate",
        "description": "Pizza doce com chocolate cremoso e granulado.",
        "price": 36.90
    }
]

<<<<<<< HEAD

=======
// =================
// Root
// =================
>>>>>>> aula-02
app.get("/", (req, res) => {
    res.status(200).json({
        message: "API Restaurante",
        version: "1.0.0"
    });
});

<<<<<<< HEAD
=======
// =================
// Categories
// =================
>>>>>>> aula-02
app.get("/categories", (req, res) => {
    res.status(200).json(categories);
});

<<<<<<< HEAD
=======
app.get("/categories/:id", (req, res) => {
    const category = categories.find((category) => {
        return category.id == req.params.id;
    });

    if (!category) {
        return res.status(404).json({
            message: "Categoria não encontrada."
        });
    }

    res.status(200).json(category);
});

app.post("/categories", (req, res) => {
    const category = {
        id: randomUUID(),
        ...req.body,
    }
    
    categories.push(category);

    res.status(201).json(category);
});

// =================
// Products
// =================
>>>>>>> aula-02
app.get("/products", (req, res) => {
    res.status(200).json(products);
});

<<<<<<< HEAD
=======
app.post("/products", (req, res) => {
    const product = req.body;
    products.push(product);
    res.status(201).json(product);
});

>>>>>>> aula-02
export default app;
import { Router } from "express";
const historial = [];
const router = Router();
router.get("/", async (_req, res) => {
    res.status(200).json({ message: "Digital API", get: "/historial", post: "/historial/add" });
});
router.post("/historial/add", async (req, res) => {
    const pokemon = req.body;
    if (!pokemon.name) {
        res.status(500).json({ message: "pokemon is required" });
    }
    else {
        historial.push(pokemon);
        res.status(200).json({ message: "Added successfully" });
    }
});
router.get("/historial", async (req, res) => {
    res.status(200).json(historial);
});
export default router;
//# sourceMappingURL=index.js.map
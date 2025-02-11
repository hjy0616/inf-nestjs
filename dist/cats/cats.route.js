"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cats_model_1 = require("./cats.model");
var express_1 = require("express");
var cats_service_1 = require("./cats.service");
var router = (0, express_1.Router)();
router.get("/", function (req, res) {
    res.send({ cats: cats_model_1.Cat });
});
router.get("/cats", cats_service_1.readAllcat);
router.get("/cats/:id", cats_service_1.readCat);
router.post("/cats", cats_service_1.createCat);
router.put("/cats/:id", cats_service_1.updateAllCat);
router.patch("/cats/:id", cats_service_1.updateCat);
router.delete("/cats/:id", cats_service_1.deleteCat);
exports.default = router;
//# sourceMappingURL=cats.route.js.map
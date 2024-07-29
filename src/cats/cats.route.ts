import { Cat, CatType } from "./cats.model";
import { Router } from "express";
import {
  createCat,
  deleteCat,
  readAllcat,
  readCat,
  updateAllCat,
  updateCat,
} from "./cats.service";
const router = Router();

router.get("/", (req, res) => {
  res.send({ cats: Cat });
});

// * Read 고양이 데이터를 전체가져오는 것
router.get("/cats", readAllcat);

// * Read 특정 고양이 조회
router.get("/cats/:id", readCat);

// * Create 특정 고양이 생성
router.post("/cats", createCat);

// * Update 특정 고양이 전체 업데이트 -> PUT
router.put("/cats/:id", updateAllCat);

// * Update 특정 고양이 부분 업데이트 -> PATCH
router.patch("/cats/:id", updateCat);

// * Delete 특정 고양이 삭제 -> DELETE
router.delete("/cats/:id", deleteCat);

export default router;

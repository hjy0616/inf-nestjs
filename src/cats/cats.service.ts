import { Request, Response } from "express";
import { Cat, CatType } from "./cats.model";
/* 이처럼 서비스를 분리시키면 가독성과 유지보수하는데 편리함을 갖고있어서 서비스와 라우터를 분리함 */

// * Read 고양이 데이터를 전체가져오는 것
export const readAllcat = (req: Request, res: Response) => {
  try {
    const cats = Cat;
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

// * Read 특정 고양이 조회
export const readCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    console.log(params);
    const cat = Cat.find((cat) => {
      return cat.id === params.id;
    });
    res.status(200).send({
      success: true,
      data: {
        cat,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};
// * Create 특정 고양이 생성
export const createCat = (req: Request, res: Response) => {
  try {
    const data = req.body;
    Cat.push(data); // create
    console.log(data);
    res.status(200).send({
      success: true,
      data: { data },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

// * Update 특정 고양이 업데이트 -> PUT
export const updateAllCat = (req: Request, res: Response) => {
  try {
    const data = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === data.id) {
        cat = body;
        result = cat;
      }
    });
    res.status(200).send({
      success: true,
      data: { cat: result },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

// * Update 특정 고양이 부분 업데이트 -> PATCH
export const updateCat = (req: Request, res: Response) => {
  try {
    const data = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === data.id) {
        cat = { ...cat, ...body };
        result = cat;
      }
    });
    res.status(200).send({
      success: true,
      data: { cat: result },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

// * Delete 특정 고양이 삭제 -> DELETE
export const deleteCat = (req: Request, res: Response) => {
  try {
    const data = req.params;
    const newCat = Cat.filter((cat) => cat.id === data.id);
    res.status(200).send({
      success: true,
      data: newCat,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

import express from "express";
import HomeController from "../controllers/HomeController";
import userController from "../controllers/userController";
import doctorController from "../controllers/doctorController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", HomeController.getHomePage);
  router.get("/about", HomeController.getAbout);
  router.get("/crud", HomeController.getCRUD);

  router.post("/post-crud", HomeController.postCRUD);
  router.get("/get-crud", HomeController.displayGetCRUD);
  router.get("/edit-crud", HomeController.getEditCRUD);
  router.post("/put-crud", HomeController.putCRUD);
  router.get("/delete-crud", HomeController.deleteCRUD);

  router.post("/api/login", userController.handleLogin);
  router.get("/api/get-all-users", userController.handleGetAllUser);
  router.post("/api/create-new-user", userController.handleCreateNewUser);
  router.put("/api/edit-user", userController.handleEditUser);
  router.delete("/api/delete-user", userController.handleDeleteUser);
  router.get("/api/allcode", userController.getAllCode);

  router.get("/api/top-doctor-home", doctorController.getTopDoctorHome);
  router.get("/api/get-all-doctors", doctorController.getAllDoctors);
  router.post("/api/save-infor-doctors", doctorController.postInforDoctor);
  router.get(
    "/api/get-detail-doctor-by-id",
    doctorController.getDetailDoctorById
  );

  router.post("/api/bulk-create-schedule", doctorController.bulkCreateSchedule);

  return app.use("/", router);
};

module.exports = initWebRoutes;

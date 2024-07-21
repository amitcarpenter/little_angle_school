import express from "express";
import {
  upload,
  uploadModuleImage,
  uploadSectionImage,
  uploadFile,
  uploadMultipleFiles,
} from "../services/uploadImage";
import { authenticateUser, isAdmin } from "../middlewares/auth";

//==================================== Import Controller ==============================

import * as adminDashboard from "../controllers/admin/adminDashboard";

const router = express.Router();

//==================================== samples pages ==============================
router.get("/login", adminDashboard.render_login_page);
router.get("/register", adminDashboard.render_register_page);
router.get("/404", adminDashboard.render_404_page);
router.get("/500", adminDashboard.render_500_page);

//==================================== dashboard ==============================
router.get("/dashboard", adminDashboard.render_dashboard_page);

//==================================== home ==============================
router.get("/home", adminDashboard.render_admin_home_page);
router.get("/home/edit", adminDashboard.render_admin_home_edit_page);
router.post("/home/edit/:id", adminDashboard.render_admin_home_edit_page);

export default router;

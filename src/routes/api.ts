import express from "express";
import { uploadFile, uploadProfileImage } from "../services/uploadImage";
import { authenticateUser, isAdmin } from "../middlewares/auth";

//==================================== Import Controller ==============================
import * as homeControllers from "../controllers/api/homeController";

const router = express.Router();

//==================================== Pages ==============================
router.get("/", homeControllers.render_home_page);
router.get("/about", homeControllers.render_about_page);
router.get("/contact", homeControllers.render_contact_page);
router.get("/facilities", homeControllers.render_facility_page);
router.get("/enquiry", homeControllers.render_enquiry_page);
router.get("/classes", homeControllers.render_classes_page);
router.get("/teachers", homeControllers.render_teacher_page);
// router.get("/call-to-action", homeControllers.render_call_to_action_page);
router.get("/appointment", homeControllers.render_appointment_page);
router.get("/appointment", homeControllers.render_appointment_page);
router.get("/testimonial", homeControllers.render_testimonial_page);
router.get("/404", homeControllers.render_404_page);

export default router;

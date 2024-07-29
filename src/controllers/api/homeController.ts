import Joi from "joi";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import User, { IUser } from "../../models/User";
import { generateAccessToken } from "../../utils/jwt";
import { deleteImageFile } from "../../services/deleteImages";
import { generateOTP, send_otp_on_email } from "../../services/otpService";
import { handleError, handleSuccess } from "../../utils/responseHandler";

const APP_URL = process.env.APP_URL as string;

//==================================== Controller for USER side ==============================

export const render_home_page = (req: Request, res: Response) => {
  return res.render("home.ejs");
};

export const render_about_page = (req: Request, res: Response) => {
  return res.render("about.ejs");
};

export const render_contact_page = (req: Request, res: Response) => {
  return res.render("contact.ejs");
};

export const render_facility_page = (req: Request, res: Response) => {
  return res.render("facility.ejs");
};

export const render_enquiry_page = (req: Request, res: Response) => {
  return res.render("enquiry.ejs");
};

export const render_classes_page = (req: Request, res: Response) => {
  return res.render("classes.ejs");
};

export const render_team_page = (req: Request, res: Response) => {
  return res.render("call-to-action.ejs");
};

export const render_teacher_page = (req: Request, res: Response) => {
  return res.render("team.ejs");
};

export const render_appointment_page = (req: Request, res: Response) => {
  return res.render("appointment.ejs");
};

export const render_testimonial_page = (req: Request, res: Response) => {
  return res.render("testimonial.ejs");
};

export const render_404_page = (req: Request, res: Response) => {
  return res.render("404.ejs");
};

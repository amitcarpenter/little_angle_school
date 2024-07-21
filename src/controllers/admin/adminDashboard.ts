import Joi from "joi";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import { Types } from "mongoose";
import { Request, Response } from "express";
import User, { IUser } from "../../models/User";
import { handleError } from "../../utils/responseHandler";
import { sendEmail } from "../../services/otpService";
import { deleteImageFile } from "../../services/deleteImages";

export const render_login_page = (req: Request, res: Response) => {
  return res.render("admin/pages/samples/login.ejs");
};

export const render_register_page = (req: Request, res: Response) => {
  return res.render("admin/pages/samples/register.ejs");
};

export const render_404_page = (req: Request, res: Response) => {
  return res.render("admin/pages/samples/error-404.ejs");
};

export const render_500_page = (req: Request, res: Response) => {
  return res.render("admin/pages/samples/error-500.ejs");
};

export const render_dashboard_page = (req: Request, res: Response) => {
  return res.render("admin/index.ejs");
};

export const render_admin_home_page = (req: Request, res: Response) => {
  return res.render("admin/pages/home/home.ejs");
};

export const render_admin_home_edit_page = (req: Request, res: Response) => {
  return res.render("admin/pages/home/edit.ejs");
};

import express from "express";
import { saveSentEmail,getEmails, moveEmailsToBin } from "../controller/email-controller.js";

const routes = express.Router();

routes.post("/save", saveSentEmail);
routes.get(`/email/:type`, getEmails);
routes.post(`/save-draft`, saveSentEmail);
routes.post(`/bin`,moveEmailsToBin); 

export default routes;

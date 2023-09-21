import express from "express";
import { saveSentEmail,getEmails, moveEmailsToBin,deleteEmail, toggleStaredEmails } from "../controller/email-controller.js";

const routes = express.Router();

routes.post("/save", saveSentEmail);
routes.get(`/email/:type`, getEmails);
routes.post(`/save-draft`, saveSentEmail);
routes.post(`/bin`,moveEmailsToBin); 
routes.post(`/starred`,toggleStaredEmails);
routes.post(`/delete`,deleteEmail);

export default routes;

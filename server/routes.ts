import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import express from "express";
import path from "path";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { sendContactEmail } from "./nodemailer";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static files from public directory
  app.use('/assets', express.static(path.join(process.cwd(), 'public/assets')));
  
  // API routes
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate form data
      const formData = contactFormSchema.parse(req.body);
      
      // Send email
      await sendContactEmail(formData);
      
      // Return success response
      return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error("Error processing contact form:", error);
      
      // Handle validation errors
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.details
        });
      }
      
      // Handle other errors
      return res.status(500).json({ 
        message: "An error occurred while sending your message. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

import { Router } from 'express';
const router = Router();
import { createReport, getAllReports, getReportById, updateReport, deleteReport } from '../controllers/reportController.js';

// CRUD routes
router.post('/', createReport); // Create report
router.get('/', getAllReports); // Get all reports
router.get('/:id', getReportById); // Get report by ID
router.put('/:id', updateReport); // Update report
router.delete('/:id', deleteReport); // Delete report

export default router;
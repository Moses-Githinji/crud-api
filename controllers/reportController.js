import Report from "../model/reportModel.js";

export const createReport = (req, res) => {
  const { description, latitude, longitude, operativeName } = req.body;
  if (!description || !latitude || !longitude) {
    return res.status(400).json({ error: 'Description, latitude, and longitude are required' });
  }
  try {
    const report = Report.create({ description, latitude, longitude, operativeName });
    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create report' });
  }
};

export const getAllReports = (req, res) => {
  const reports = Report.getAll();
  res.status(200).send(reports);
};

export const getReportById = (req, res) => {
  const report = Report.getById(req.params.id);
  if (!report) {
    return res.status(404).json({ error: "Report not found" });
  }
  res.status(200).json(report);
};

export const updateReport = (req, res) => {
  const report = Report.update(req.params.id, req.body);
  if (!report) {
    return res.status(404).json({ error: "Report not found" });
  }
  res.status(200).json(report);
};

export const deleteReport = (req, res) => {
  const success = Report.delete(req.params.id);
  if (!success) {
    return res.status(404).json({ error: "Report not found" });
  }
  res.status(204).send();
};
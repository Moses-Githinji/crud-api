import { v4 as uuidv4 } from 'uuid';

// In-memory storage
let reports = [];

class Report {
    // Attributes of the Report class
  constructor(description, latitude, longitude, operativeName) {
    this.id = uuidv4();
    this.description = description;
    this.latitude = latitude;
    this.longitude = longitude;
    this.operativeName = operativeName || 'Anonymous';
    this.createdAt = new Date().toISOString();
  }

  // CRUD operations
  static create(reportData) {
    const report = new Report(
      reportData.description,
      reportData.latitude,
      reportData.longitude,
      reportData.operativeName
    );
    reports.push(report);
    return report;
  }

  static getAll() {
    return reports;
  }

  static getById(id) {
    return reports.find((report) => report.id === id);
  }

  static update(id, updateData) {
    const index = reports.findIndex((report) => report.id === id);
    if (index === -1) return null;
    reports[index] = { ...reports[index], ...updateData, id };
    return reports[index];
  }

  static delete(id) {
    const index = reports.findIndex((report) => report.id === id);
    if (index === -1) return false;
    reports.splice(index, 1);
    return true;
  }
}

export default Report;
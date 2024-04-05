const DamageReport = require('../models/DamageReport');

exports.createDamageReport = async (req, res) => {
  try {
    const { disasterType, location, description, severityLevel, image } = req.body;
    const damageReport = new DamageReport({
      disasterType,
      location,
      description,
      severityLevel,
      image,
    });
    await damageReport.save();
    res.status(201).json({ success: true, data: damageReport });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

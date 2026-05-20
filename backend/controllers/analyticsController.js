const Analytics = require("../models/Analytics");

exports.getAnalytics = async (req, res) => {
  try {
    const analytics = await Analytics.find();
    res.json(analytics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createAnalytics = async (req, res) => {
  try {
    const { revenue, users, apiUsage } = req.body;

    const analytics = new Analytics({
      revenue,
      users,
      apiUsage,
    });

    await analytics.save();

    res.status(201).json({
      message: "Analytics created successfully",
      analytics,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateAnalytics = async (req, res) => {
  try {
    const { id } = req.params;
    const { revenue, users, apiUsage } = req.body;

    const analytics = await Analytics.findByIdAndUpdate(
      id,
      { revenue, users, apiUsage },
      { new: true }
    );

    res.json({
      message: "Analytics updated successfully",
      analytics,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteAnalytics = async (req, res) => {
  try {
    const { id } = req.params;

    await Analytics.findByIdAndDelete(id);

    res.json({ message: "Analytics deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

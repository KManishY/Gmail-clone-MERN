import email from "../model/email.js";

export const saveSentEmail = function (req, res) {
  try {
    const newMail = new email(req.body);
    newMail.save();
    res.status(200).json("email saved successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getEmails = async (req, res) => {
  // console.log("req: ", req.params);
  try {
    let emails;
    if (req.params.type === "stared") {
      emails = await email.find({ starred: true, bin: false });
      console.log("emails: ", emails);
    } else if (req.params.type === "bin") {
      emails = await email.find({ bin: true });
    } else if (req.params.type === "allmail") {
      emails = await email.find({});
    } else if (req.params.type === "inbox") {
      emails = [];
    } else if (req.params.type === "draft") {
      emails = await email.find({ type: "drafts" });
    } else {
      emails = await email.find({ type: req.params.type });
    }
    res.status(200).json(emails);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
export const moveEmailsToBin = async (request, response) => {
  console.log("request in bin: ", request.body);
  try {
    await email.updateMany(
      { _id: { $in: request.body } },
      { $set: { bin: true, starred: false, type: "" } }
    );
    return response.status(200).json("emails deleted successfully");
  } catch (error) {
    response.status(500).json(error.message);
  }
};

export const toggleStaredEmails = async (req, res) => {
  try {
    await email.updateOne(
      { _id: req.body.id },
      { $set: { starred: req.body.value } }
    );
  } catch (error) {
    res.status(500).json(error.message);
  }
  return res.status(200).json("emails starred successfully");
};

export const deleteEmail = async (req, res) => {
  console.log(req.body.id);
  try {
    await email.deleteMany({ _id: { $in: req.body.id } });
  } catch (error) {
    res.status(500).json(error.message);
  }
  return res.status(200).json("emails deleted successfully");
};

// import mongoose, { Schema } from "mongoose";

// const PartnerFormSchema = new Schema(
//   {
//     company_name: String,
//     contact_person: String,
//     contact_number: String,
//     email: String,
//     designation: String,
//     message: String,
//   },
//   { timestamps: true }
// );

// export default mongoose.models.PartnerForm ||
//   mongoose.model("PartnerForm", PartnerFormSchema);

import mongoose, { Schema } from "mongoose";

const PartnerFormSchema = new Schema(
  {
    name: String,
    mobile: String,
    email: String,
    city: String,
    ip: String,
    userAgent: String,
  },
  { timestamps: true }
);

export default mongoose.models.PartnerForm ||
  mongoose.model("PartnerForm", PartnerFormSchema);

// const { getConnection } = require("../app/db/db");

// export const ColabController = async (req, res) => {
//   const db = await getConnection();

//   try {
//     const {
//       name,
//       email,
//       phone,
//       message,
//       type,
//       gender,
//       occupation,
//       age,
//       education,
//       isMember,
//       city,
//       membership_type,
//       membership_type_details,
//     } = req.body;

//     if (!name || !email || !phone || !message || !type) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are mandatory",
//       });
//     }

//     const isMemberValue = isMember === 1 ? true : false;

//     let membership_id = null;

//     if (isMemberValue) {
//       const insertMembershipQuery = `
//         INSERT INTO membership_details (city, membership_type, membership_type_details)
//         VALUES (?, ?, ?)
//       `;
//       const [membershipResult] = await db.query(insertMembershipQuery, [
//         city,
//         membership_type,
//         membership_type_details,
//       ]);

//       membership_id = membershipResult.insertId;
//     }

//     const insertCollaborateQuery = `
//       INSERT INTO collaborate (name, mobile, email, message,	gender,occupation,age,education, isMember, form_type, membership_id)
//       VALUES (?, ?, ?, ?, ?, ?, ?,?,?,?,?)
//     `;
//     await db.query(insertCollaborateQuery, [
//       name,
//       phone,
//       email,
//       message,
//       gender,
//       occupation,
//       age,
//       education,
//       isMemberValue,
//       type,
//       membership_id,
//     ]);

//     return res.status(200).json({
//       success: true,
//       message: "Collaboration data saved successfully.",
//     });
//   } catch (error) {
//     console.error("Error saving collaboration data:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Server error. Please try again later.",
//     });
//   }
// };

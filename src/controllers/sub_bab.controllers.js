const { Association } = require("sequelize");
const { sub_bab: sub_babModels } = require("../models");

const index = async (req, res, next) => {
  const { id_bab } = req.query;

  const sub_bab = await sub_babModels.findAll({
    where: {
      id_bab,
    },
    attributes: [
      "id",
      "nama_sub_bab",
      "is_free",
      "id_bab",
      [
        sub_babModels.sequelize.literal(
          `(SELECT COUNT(m.id) FROM materis AS m WHERE m.id_sub_bab = sub_bab.id)`
        ),
        "total_materi",
      ],
    ],
    include: [
      {
        association: "materis",
        attributes: [
          "id",
          [
            sub_babModels.sequelize.literal(
              `(SELECT COUNT(p.id) FROM progresses AS p WHERE p.id_materi = materis.id AND p.status_progress = 1 AND p.id_user = ${req.user.id})`
            ),
            "materi_selesai",
          ],
        ],
      },
    ],
  });

  const response = sub_bab.map((sb) => {
    const totalMateri = sb.dataValues.total_materi;
    const materiSelesai = sb.materis.reduce((acc, m) => {
      return acc + m.dataValues.materi_selesai;
    }, 0);

    const progressBar = totalMateri > 0 ? materiSelesai / totalMateri : 0;

    return {
      id: sb.id,
      nama_sub_bab: sb.nama_sub_bab,
      is_free: sb.is_free,
      id_bab: sb.id_bab,
      total_materi: totalMateri,
      materi_selesai: materiSelesai,
      progress_bar: progressBar,
    };
  });

  return res.send({
    message: "success",
    data: response,
  });
};

module.exports = { index };

// const sub_bab = await sub_babModels.findAll({
//   attributes: ["id", "nama_sub_bab", "is_free", "id_bab"],
//   include: [
//     {
//       association: "materis",
//       attributes: ["id"],
//       include: [
//         {
//           where: {
//             id: req.user.id,
//           },
//           association: "users",
//           attributes: ["id"],
//           through: { attributes: ["status_progress"] },
//         },
//       ],
//     },
//   ],
// });

// const response = sub_bab.map((sb) => {
//   const materi = sb.materis.map((m) => {
//     const user = m.users.map((u) => u.progress.status_progress);
//     return user[0];
//   });

//   let hasil = materi.map((value) => (value ? 1 : 0));
//   let jumlah = hasil.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     0
//   );
// sadam

//   return {
//     id: sb.id,
//     nama_sub_bab: sb.nama_sub_bab,
//     is_free: sb.is_free,
//     lohe: jumlah,
//   };
// });

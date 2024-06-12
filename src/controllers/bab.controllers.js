const { bab: babModels, progress: progressModels } = require("../models");

const index = async (req, res, next) => {
  const { id_mata_pelajaran: id_mata_pembelajaran } = req.query;

  const bab = await babModels.findAll({
    where: id_mata_pembelajaran ? { id_mata_pembelajaran } : {},
    attributes: [
      "id",
      "nama_bab",
      [
        babModels.sequelize.literal(
          `(SELECT COUNT(sb.id) FROM sub_babs AS sb WHERE sb.id_bab = bab.id AND sb.is_free = 1 )`
        ),
        "total_sub_bab_gratis",
      ],
      [
        babModels.sequelize.literal(
          `(SELECT COUNT(sb.id) FROM sub_babs AS sb WHERE sb.id_bab = bab.id  )`
        ),
        "total_sub_bab",
      ],
    ],
  });

  // const bab = await babModels.findAndCountAll({
  //   where: id_mata_pembelajaran ? { id_mata_pembelajaran } : {},
  //   attributes: ["id", "nama_bab", "id_mata_pembelajaran"],
  //   include: [
  //     {
  //       association: "sub_babs",
  //       attributes: ["is_free"],
  //       include: [
  //         {
  //           association: "materis",
  //           include: [
  //             {
  //               where: {
  //                 id: req.user.id,
  //               },
  //               association: "users",
  //               through: { attributes: ["status_progress"] },
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // });
  //  sadam

  // const progres = await progressModels.findAll({
  //   where: {
  //     id_user: req.user.id,
  //     status_progress: 1,
  //   },
  //   include: [
  //     {
  //       association: "materis",
  //     },
  //   ],
  // });
  // const dataMateris = [];
  // for (let i = 0; i < progres.length; i++) {
  //   dataMateris.push(progres[i].materis);
  // }

  // const response = bab.map((b) => {
  //   let totalSubBab = b.sub_babs.length;

  //   return totalSubBab;
  // });

  res.send({
    message: "success",
    data: bab,
    // count: response,
  });
};

module.exports = {
  index,
};

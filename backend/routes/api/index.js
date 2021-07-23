const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.post("/test", function (req, res) {
  res.json({ requestBody: req.body });
});

const asyncHandler = require("express-async-handler");
const { setTokenCookie } = require("../../utils/auth.js");
const { User } = require("../../db/models");

router.get(
  "/set-token-cookie",
  asyncHandler(async (req, res) => {
    const user = await User.findOne({
      where: {
        username: "Demo-lition",
      },
    });
    setTokenCookie(res, user);
    return res.json({ user });
  })
);

//will test the restoreUser middleware by connecting the middleware and checking whether or not the req.user key has been populated by the middleware properly.
const { restoreUser } = require("../../utils/auth.js");
router.get(
  "/restore-user",

  restoreUser,
  (req, res) => {
    return res.json(req.user);
  }
);

const { requireAuth } = require("../../utils/auth.js");
router.get(
  "/require-auth",
  requireAuth,

  (req, res) => {
    return res.json(req.user);
  }
);

const { Images } = require("../../db/models");

router.get(
  "/images",
  asyncHandler(async (req, res) => {
    const images = await Images.findAll();
    return res.json({ images });
  })
);

const { Reviews } = require('../../db/models')

router.get(
  '/reviews', 
  asyncHandler(async(req, res)=>{
    const reviews = await Reviews.findAll();
    return res.json({reviews})
  })
)

router.delete(
  '/reviews/:id', asyncHandler(async (req, res) => {
    const id = req.params.id
    const review = await Reviews.findByPk(id)
    review.destroy()
    
    // const reviewsId = await Reviews.destroy({where:id});
    // return res.json({reviewsId})
  })
)

router.post(
  '/reviews', asyncHandler(async(req, res) => {
    const {userId, stayId, content} = req.body
 
    const review = await Reviews.create({userId, stayId, content});
    return res.json(review)

  })
)


const { Stays } = require('../../db/models')

router.get(
  '/stays', 
  asyncHandler(async(req, res)=>{
    const stays = await Stays.findAll();
    return res.json({stays})
  })
)
module.exports = router;

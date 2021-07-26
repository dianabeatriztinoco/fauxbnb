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
        email: "demoUser@demo.com",
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

const { Image } = require("../../db/models");

router.get(
  "/images",
  asyncHandler(async (req, res) => {
    const images = await Image.findAll();
    return res.json({ images });
  })
);

const { Review } = require('../../db/models')


router.get(
  '/reviews', 
  asyncHandler(async(req, res)=>{
    const reviews = await Review.findAll();
   
    return res.json({reviews})
  })
)

// router.get (
//   '/reviews/:id', asyncHandler(async(req,res) => {
//     const id = req.params.id
//     console.log('++++++++++++++++++++++++',id)
//     const review = await Reviews.findByPk(id)
//     return res.json({review})
//   })
// )

router.delete(
  '/reviews/:id', asyncHandler(async (req, res) => {
    const id = req.params['id']
    const idNum = parseInt(id)
    
    
   const deletedReview = await Review.destroy({where:{ id : idNum}})
   return res.json(deletedReview)
    // const review = await Review.findByPk(idNum)
    
    // return review.destroy()
    
    // const reviewsId = await Reviews.destroy({where:id});
    // return res.json({reviewsId})
  })
)

router.post(
  '/reviews', asyncHandler(async(req, res) => {

    // res.json({requestBody: req.body})
    const {userId, stayId, content} = req.body
    
  

  

    const review = await Review.create({
       userId, 
       stayId, 
       content 
      });

     return res.json(review)
     

  })
)

router.put(
  '/reviews/:id', asyncHandler(async(req, res)=> {
    const id = req.params.id

    // const id = await Reviews.update(req.body);
    const review = await Review.findByPk(id); 
    return res.json(review)
  })
)

const { Stay } = require('../../db/models');


router.get(
  '/stays', 
  asyncHandler(async(req, res)=>{
    const stays = await Stay.findAll();
    return res.json({stays})
  })
)

router.get(
  '/stays/:id', 
  asyncHandler(async(req, res)=> {
    const id = req.params.id

    const stay = await Stay.findByPk(id);
    return res.json(stay)
  })
)
module.exports = router;

import db from "../models/index";
import CRUDService from "../services/CRUDService";
//  HomePage

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log("---------------------");
    console.log(data);
    console.log("---------------------");
    return res.render("homePage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};

// About

let getAbout = (req, res) => {
  return res.render("About.ejs");
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

// post CRUD

let postCRUD = async (req, res) => {
  let messsage = await CRUDService.createNewUser(req.body);
  console.log(messsage);
  return res.send("post-crud from server");
};

let displayGetCRUD = async (req, res) => {
  let data = await CRUDService.getAllUser();
  return res.render("displayCRUD.ejs", {
    dataTable: data,
  });
};

let getEditCRUD = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let userData = await CRUDService.getUserInfoById(userId);
    // check user data not found

    return res.render("editCRUD.ejs", {
      user: userData,
    });
  } else {
    return res.send("Users not found!");
  }
};

let putCRUD = async (req, res) => {
  let data = req.body;
  let allUser = await CRUDService.UpadateUserData(data);
  return res.render("displayCRUD.ejs", {
    dataTable: allUser,
  });
};

// delete user
let deleteCRUD = async (req, res) => {
  let id = req.query.id;
  if (id) {
    await CRUDService.deleteUserById(id);
    return res.send("Delete the user succeed!");
  } else {
    return res.send("User not found!");
  }
};

//  object: {
//      key : '',
//      value : ''
// }
module.exports = {
  getHomePage: getHomePage,
  getAbout: getAbout,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayGetCRUD: displayGetCRUD,
  getEditCRUD: getEditCRUD,
  putCRUD: putCRUD,
  deleteCRUD: deleteCRUD,
};

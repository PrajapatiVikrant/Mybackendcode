const EmployeeSchema = require("../models/EmployeeSchema");
const ManagerSchema = require("../models/ManagerSchema");
const AllId = require("../UserId");
const Auth = {
  SignUp: async (req, res) => {
  console.log('signup function has run')
    try {
     
        if (req.query.EmployeeId_or_ManagerId === AllId.EmployeeId) {
            console.log('phase 1')
          const EmployeeExist = await EmployeeSchema.findOne({email:req.query.email});
          console.log(EmployeeExist)
          if(!EmployeeExist){
            const EmployeeData = new EmployeeSchema({
                name: req.query.name,
                email: req.query.email,
                position: "Employee",
                manager_email: req.query.manager_email,
              });
              console.log('hello world')
              await EmployeeData.save();
              res.send('/TimeSheetForm');
          }else{
            res.send("User already exist");
          }
         
        } else if (req.query.EmployeeId_or_ManagerId === AllId.ManagerId) {
            console.log('phase 2')
          const ManagerExist = await ManagerSchema.findOne({email:req.query.email});
          console.loge(ManagerExist)
          if(!ManagerExist){
            const ManagerData = new ManagerSchema({
                name: req.query.name,
                email: req.query.email,
                position: "Manager",
                EmployeeData: [],
              });
              await ManagerData.save();
              res.send('/EmployeeDetail');
          }else{
            res.send('User already exist')
          }
         
        } else {
          res.send("You are not exist in this firm");
        }
      
    } catch (err) {
      console.log(err);
    }
  },
  Login: async (req, res) => {
    try{
         if(req.query.EmployeeId_or_ManagerId===AllId.EmployeeId){
            const data = await EmployeeSchema.find({email:req.query.email});
            if(data){
                res.send('/TimeSheetForm');
            }else{
                res.send("Invalid detail")
            }
         }else if(req.query.EmployeeId_or_ManagerId === AllId.ManagerId){
           
            const data = await ManagerSchema.find({email:req.query.email});
            if(data){
                res.send('/EmployeeDetail');
            }else{
                res.send("Invalid detail")
            }

         }else{
            res.send('Invalid detail')
         }
    }catch(err){
         console.log('Some error occur')
    }
  },
};
module.exports = Auth;

const ManagerSchema = require("../models/ManagerSchema");
const Employee = {
    AddTimeSheetData:async (req,res)=>{
        const employeeDetail = {
            name:req.query.name,
            employeeEmail:req.query.email,
            date:Date.now(),
            timeRange:req.query.timeRange,
            projectName:req.query.projectName,
            taskDescription:req.query.taskDescription,
            rated:''
        }
        const data = await ManagerSchema.find({email:req.query.ManagerEmail});
        data.employeeData.push(employeeDetail);
    },
    getManagerSide:async (req,res)=>{
        try{
            const data = await ManagerSchema.find({email:req.query.ManagerEmail});
            
            res.json({
               display:data.employeeData
            })
          }catch(err){
           console.log(err)
          } 
    },
    getEmployeeSid:async (req,res)=>{
       try{
         const data = await ManagerSchema.find({email:req.query.ManagerEmail});
         const Employee  = data.employeeData.filter((elem)=>{
            return elem.email === req.query.email;
         })
         res.json({
            display:Employee
         })
       }catch(err){
        console.log(err)
       } 
    }
    ,

    EditingRate:async (req,res)=>{
         const data = await ManagerSchema.find({email:req.query.ManagerEmail});
         if(data){
          const updatedData =  data.employeeData.filter((elem)=>{
                if(elem.email === req.query.EmployeeEmail&&elem.projectName === req.query.projectName){
                    elem.rated=req.query.rated;
                }
            })
          await ManagerSchema.updateOne({email:req.query.ManagerEmail,projectName:req.query.projectName},updatedData)
          res.send('Rate has edited');
         }else{
            res.send('You are not exist')
         }
    }
}
module.exports = Employee;
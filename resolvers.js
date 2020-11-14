const db = require('./db')

const Query = {
  greeting:() => {
     return "hello from  TutorialsPoint !!!"
  },
  students:() => db.students.list(),
  colleges:() => db.colleges.list(),
  student:(root,args,context,info) => {
    return db.students.get(args.id);
  }
}
module.exports = {Query}

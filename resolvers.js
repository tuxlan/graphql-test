const db = require('./db')

const Query = {
  greeting:() => {
     return "hello from  TutorialsPoint !!!"
  },
  students:() => db.students.list(),
  colleges:() => db.colleges.list(),
  student:(root, args, context, info) => {
    return db.students.get(args.id);
  }
}

const Student = {
  fullName:(root, args, context, info) => {
    return root.firstName+' '+root.lastName
  },
  college:(root) => {
    return db.colleges.get(root.collegeId)
  }
}

module.exports = {Query, Student}

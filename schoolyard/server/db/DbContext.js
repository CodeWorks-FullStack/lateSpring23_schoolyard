import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { SchoolSchema } from '../models/School.js';
import { CourseSchema } from '../models/Course.js';
import { CourseStudentSchema } from '../models/CourseStudent.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Schools = mongoose.model('School', SchoolSchema);
  Courses = mongoose.model('Course', CourseSchema);
  CourseStudents = mongoose.model('CourseStudent', CourseStudentSchema)
}

export const dbContext = new DbContext()

import { dbContext } from "../db/DbContext.js"

class CourseStudentsService {


    async createCourseStudent(courseStudentData) {
        const newCourseStudent = await dbContext.CourseStudents.create(courseStudentData)
        // NOTE for creates...populate must go on a new line because it has to be created before we can populate
        await newCourseStudent.populate('course')
        await newCourseStudent.populate('student')
        return newCourseStudent
    }

    async getStudentsByCourseId(courseId) {
        // NOTE I supplied you with one side of the relationship, expect to return the other:
        // I gave the courseId so I will populate the student
        const courseStudents = await dbContext.CourseStudents.find({ courseId: courseId }).populate('student')
        return courseStudents
    }

    async getCoursesByAccountId(accountId) {
        const courses = await dbContext.CourseStudents.find({ accountId: accountId }).populate('course')
        return courses
    }

}

export const courseStudentsService = new CourseStudentsService()
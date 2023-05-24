import { dbContext } from "../db/DbContext.js"

class CoursesService {



    async createCourse(courseData) {
        const newCourse = await dbContext.Courses.create(courseData)
        return newCourse
    }

    async getCourses(query) {
        const courses = await dbContext.Courses.find(query).populate('school')
        return courses
    }

    async getCoursesBySchoolId(schoolId) {
        const courses = await dbContext.Courses.find({ schoolId: schoolId })
        // NOTE you can also write it like this if the property name and parameter name match:
        // const courses = await dbContext.Courses.find({ schoolId })
        return courses
    }


}

export const coursesService = new CoursesService()
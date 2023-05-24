import { courseStudentsService } from "../services/CourseStudentsService.js";
import { coursesService } from "../services/CoursesService.js";
import BaseController from "../utils/BaseController.js";

export class CoursesController extends BaseController {
    constructor() {
        super('api/courses')
        this.router
            .post('', this.createCourse)
            .get('', this.getCourses)
            .get('/:courseId/coursestudents', this.getStudentsByCourseId)
    }


    async createCourse(req, res, next) {
        try {
            const courseData = req.body
            const newCourse = await coursesService.createCourse(courseData)
            return res.send(newCourse)
        } catch (error) {
            next(error)
        }
    }

    async getCourses(req, res, next) {
        try {
            const query = req.query
            const courses = await coursesService.getCourses(query)
            return res.send(courses)
        } catch (error) {
            next(error)
        }
    }

    async getStudentsByCourseId(req, res, next) {
        try {
            const courseId = req.params.courseId
            const courseStudents = await courseStudentsService.getStudentsByCourseId(courseId)
            return res.send(courseStudents)
        } catch (error) {
            next(error)
        }
    }
}
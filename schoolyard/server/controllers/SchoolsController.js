import { coursesService } from "../services/CoursesService.js";
import { schoolsService } from "../services/SchoolsService.js";
import BaseController from "../utils/BaseController.js";

export class SchoolsController extends BaseController {
    constructor() {
        super('api/schools')
        // NOTE if you get a 404 error, you should look here!
        this.router
            .post('', this.createSchool)
            .get('', this.getSchools)
            .get('/:id', this.getById)
            // NOTE RESTful api conventions: because the id we will provide is for a school... we will facilitate this request through the schools super
            .get('/:schoolId/courses', this.getCoursesBySchoolId)
    }


    async createSchool(req, res, next) {
        try {
            const schoolData = req.body
            const newSchool = await schoolsService.createSchool(schoolData)
            return res.send(newSchool)
        } catch (error) {
            next(error)
        }
    }
    async getSchools(req, res, next) {
        try {
            const query = req.query
            const schools = await schoolsService.getSchools(query)
            res.send(schools)
        } catch (error) {
            next(error)
        }
    }

    async getById(req, res, next) {
        try {
            const schoolId = req.params.id
            const school = await schoolsService.getById(schoolId)
            res.send(school)
        } catch (error) {
            next(error)
        }
    }

    async getCoursesBySchoolId(req, res, next) {
        try {
            const schoolId = req.params.schoolId
            const courses = await coursesService.getCoursesBySchoolId(schoolId)
            return res.send(courses)
        } catch (error) {
            next(error)
        }
    }
}
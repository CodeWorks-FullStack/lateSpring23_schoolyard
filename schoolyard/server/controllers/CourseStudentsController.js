import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { courseStudentsService } from "../services/CourseStudentsService.js";

export class CourseStudentsController extends BaseController {
    constructor() {
        super('api/coursestudents')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createCourseStudent)
    }
    async createCourseStudent(req, res, next) {
        try {
            const courseStudentData = req.body
            // NOTE never trust the user to tell you who they are!
            courseStudentData.accountId = req.userInfo.id // manually cast the accountId to the user who sent request
            const newCourseStudent = await courseStudentsService.createCourseStudent(courseStudentData)
            return res.send(newCourseStudent)
        } catch (error) {
            next(error)
        }
    }
}
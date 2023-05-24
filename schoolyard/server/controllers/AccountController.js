import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'
import { coursesService } from '../services/CoursesService.js'
import { courseStudentsService } from '../services/CourseStudentsService.js'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/:id/courses', this.getCoursesByAccountId)
  }


  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async getCoursesByAccountId(req, res, next) {
    try {
      const accountId = req.params.id
      const courses = await courseStudentsService.getCoursesByAccountId(accountId)
      return res.send(courses)
    } catch (error) {
      next(error)
    }
  }
}

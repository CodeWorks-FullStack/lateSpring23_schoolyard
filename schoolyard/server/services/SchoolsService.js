import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"

class SchoolsService {

    async createSchool(schoolData) {
        const newSchool = await dbContext.Schools.create(schoolData)
        return newSchool
    }
    async getSchools(query) {
        const schools = await dbContext.Schools.find(query)
        return schools
    }

    async getById(schoolId) {
        const school = await dbContext.Schools.findById(schoolId)
        // NOTE you can also use the find method if you format the id correctly as an object that searches for the '_id' field in the database
        // const school = await dbContext.Schools.find({ _id: schoolId })
        if (!school) throw new BadRequest("Invalid id")
        return school
    }

}

export const schoolsService = new SchoolsService()
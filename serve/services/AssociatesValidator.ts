import { body, param } from "express-validator";

class AssociatesValidator{
    associateBodyValidation(){
        return[
            body("id").optional().isUUID(4).withMessage("Id value must be a valid UUID V4"),
            
            body("name").notEmpty().withMessage("Name field must have a valid value"),

            body("email").notEmpty().withMessage("Email field must have a valid value"),

            body("sex").notEmpty().withMessage("Sex field must have a valid value")
        ]
    };

    associateIdValidation(){
        return [
            param("id").notEmpty().withMessage("Id value must not be empty").isUUID(4)
            .withMessage("The id value must be a valid UUIDV4 id")
        ]
    };
};

export default new AssociatesValidator();
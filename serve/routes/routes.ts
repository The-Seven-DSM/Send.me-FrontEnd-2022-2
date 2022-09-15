import express from "express";
import AssociateController from "../constroller/AssociateController";
import AssociatesValidator from "../services/AssociatesValidator";
import ErrorAnalysis from "../services/ErrorAnalysis";

const route = express.Router();

route.post('/create/associate',
    AssociatesValidator.associateBodyValidation(),
    ErrorAnalysis.lookingForErros,
    AssociateController.create
);

route.get('/get/associates',
    ErrorAnalysis.lookingForErros,
    AssociateController.getAll
);

route.get('/get/associate/:id',
    AssociatesValidator.associateIdValidation(),
    ErrorAnalysis.lookingForErros,
    AssociateController.getById
);

route.post('/send',
AssociateController.sendmail
)
export default route;
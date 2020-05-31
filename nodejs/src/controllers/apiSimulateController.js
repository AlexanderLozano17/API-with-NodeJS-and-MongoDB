const Student = require('../models/PersonModel');
const Company = require('../models/CompanySimulateModel');
const uscoCtrl = {};

/**
 *  search student with email in database usco
 */
uscoCtrl.checkStudentUscoSimulate = async (req, res) => {

    const email = req.params.email;
    await Student.findOne({ correo_estudiantil: email }, (err, data) => {
        if (err) res.json({ status: 500, message: 'Ocurrió un error!' });

        if (data && Object.keys(data).length > 0) {
            res.json({ res: data, status: 200 });
        } else {
            //res.json({ res: data, status: 200, message: 'No se encontraron resultados!' });
        }
    });
};

/**
 * search company with nit in database
 */
uscoCtrl.checkCompanySimulate = async (req, res) => {

    const { nit } = req.params.nit;
    await Company.findOne({ nit: nit }, (err, data) => {
        if (err) res.json({ status: 500, message: 'Ocurrió un error!' });

        if (data && Object.keys(data).length > 0) {
            res.json({ res: data, status: 200 });
        } else {
            res.json({ res: data, status: 200, message: 'No se encontraron resultados!' });
        }
    });

};

/**
 * Create companies to simulate
 */
uscoCtrl.createCompanySimulate = async (req, res) => {

    // search company exist
    await Company.findOne({nit: req.body.nit}, (err, data) => {
        if (err) res.json({ status: 500, message: 'Ocurrió un error!' });
        // if no exist create company
        if (!data) {
            const saveCompany = new Company(req.body);
            saveCompany.save();
            if (saveCompany._id) {
                res.json({nit: saveCompany.nit, status: 201, message:'Empresa creada correctamente!'});
            } 
        } else {
            res.json({nit: data.nit, status: 200, message:'La empresa ya se encuentra creada!'});
        }
    });
};


/**
 * get all companies
 */
uscoCtrl.getAllCompaniesSimulate = async (req, res) => {
    const data = await Company.find();
    res.json(data);
};


module.exports = uscoCtrl;





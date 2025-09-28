const Ajv = require("ajv");
const ajv = new Ajv({ allErrors: true });

module.exports = (schema) => {
  return (req, res, next) => {
    const validate = ajv.compile(schema);
    const valid = validate(req.body);

    if (!valid) {
      return res.status(400).json({
        message: "Validation failed",
        errors: validate.errors,
      });
    }

    next();
  };
};

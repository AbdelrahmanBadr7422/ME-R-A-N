const Ajv = require('ajv');
const ajv = new Ajv();

const validate = (schema, data) => {
  const validate = ajv.compile(schema);
  const valid = validate(data);

  if (!valid) {
    return validate.errors;
  }
  return null;
};

module.exports = validate;
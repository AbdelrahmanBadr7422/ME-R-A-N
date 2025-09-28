const studentSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    email: { type: 'string' },
    department: { type: 'string' }, 
  },
  required: ['name', 'email','department'],
  additionalProperties: false
};

const departmentSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    courses: { type: 'array', items: { type: 'string' } } 
  },
  required: ['name'],
  additionalProperties: false
};

const courseSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    code: { type: 'string' },
    department: { type: 'string' }, 
  },
  required: ['name', 'code', 'department'],
  additionalProperties: false
};

module.exports = { studentSchema, departmentSchema, courseSchema };

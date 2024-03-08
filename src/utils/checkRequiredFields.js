const checkRequiredFields = (receivedFields, requiredFields) => {
  for (let i = 0; i < requiredFields.length; i += 1) {
    const currentField = requiredFields[i];
    if (!(currentField in receivedFields) 
    || receivedFields[currentField] === ''
    || receivedFields[currentField] === undefined
    ) {
      return `O campo "${currentField}" é obrigatório`;
    }
  }
};

module.exports = checkRequiredFields;
const cleanObject = (object: any, additionalProps: string[]) => {
  additionalProps.forEach((prop) => {
    if (object.hasOwnProperty(prop)) delete object[prop];
  });
};

export default cleanObject;

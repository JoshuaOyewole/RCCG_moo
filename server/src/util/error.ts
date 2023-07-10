const createError = (status: number, message: string) => {
  const err = new Error();
  err.message = message;
  //err.status =status;
  return err;
};

export default createError; 
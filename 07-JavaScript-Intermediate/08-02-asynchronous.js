const isR18Plus = ( .... ) => { .... }
const printR18Plus = async () => {
  const underAge = await isR18Plus(10);
  const properAge = await isR18Plus(19);

  console.log(underage);
  console.log(properAge);
}

printR18Plus();

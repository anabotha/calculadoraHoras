const ConvertTime = ({ calculateHours }) => {
  const manageTime = () => {
    const time = calculateHours();
    const hours = Math.floor(time); // parte entera
    const minutes = Math.round((time - hours) * 60); // parte decimal en minutos

    const messages = {
      exact: `${hours} horas`,
      withMinutes: `${hours} horas y ${minutes} minutos`,
    };

    if (minutes === 0) {
      return messages.exact;
    } else {
      return messages.withMinutes;
    }
  };
  return (
    <>
      <h3 className="p-2">{manageTime()}</h3>
    </>
  );
};

export default ConvertTime;

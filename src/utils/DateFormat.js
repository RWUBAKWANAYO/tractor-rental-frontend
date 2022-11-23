const DateFormat = (data) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const d = new Date(data);
  const resMonth = months[d.getMonth()];
  const resYear = d.getFullYear();
  const resDate = d.getDate();

  return `${resDate} ${resMonth} ${resYear}`;
};

export default DateFormat;

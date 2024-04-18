import moment from "moment";

export const formatDateTime = (value: string) => {
  const isFalsePositive = !Number.isNaN(+value);

  if (!isFalsePositive && moment(value).isValid()) {
    let d = new Date(value);
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    let year = d.getFullYear();
    let hours = "" + d.getHours();
    let minutes = "" + d.getMinutes();
    let seconds = "" + d.getSeconds();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    if (hours.length < 2) hours = "0" + hours;

    if (minutes.length < 2) minutes = "0" + minutes;
    if (seconds.length < 2) seconds = "0" + seconds;
    return (
      [year, month, day].join("-") + " " + [hours, minutes].join(":")
    );
  } else {
    return value;
  }
};

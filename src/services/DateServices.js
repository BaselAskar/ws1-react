class DateServices {
  AddYears(date, years) {
    const y = date.getFullYear();
    const m = date.getMonth();
    const d = date.getDate();

    const newDate = new Date(y + years, m, d);
    return newDate;
  }

  getAge(birthDate = new Date()) {
    const now = new Date();
    let age = now.getFullYear() - birthDate.getFullYear();

    if (birthDate > this.AddYears(now, -age)) --age;

    return age;
  }
}

export default new DateServices();

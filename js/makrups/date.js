function dateMarkUp() {
  return `
    <div class="fallbackDatePicker">
      <span class="input-date-wrapper">
        <label for="day">Day:</label>
        <select id="day" name="day"></select>
      </span>
      <span class="input-date-wrapper">
        <label for="month">Month:</label>
        <select id="month" name="month">
          <option selected value="1">Январь</option>
           <option value="2">Февраль</option>
           <option value="3">март</option>
           <option value="4">Апрель</option>
           <option value="5">Май</option>
           <option value="6">Июнь</option>
           <option value="7">Июль</option>
           <option value="8">Август</option>
           <option value="9">Сентябрь</option>
           <option value="10">Октябрь</option>
           <option value="11">Ноябрь</option>
           <option value="12">Декабрь</option>
        </select>
      </span>
      <span class="input-date-wrapper">
        <label for="year">Year:</label>
        <select id="year" name="year"></select>
      </span>
    </div>
  
    <!-- place for img -->
    <div>
  `;
}

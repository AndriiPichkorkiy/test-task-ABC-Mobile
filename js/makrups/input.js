function inputMarkUp(value, i) {
    return `
                <div class="input-wrapper">
                    <input
                    type="radio"
                    name="question"
                    value="${value}"
                    id="choice${i}"
                    />
                    <label for="choice${i}">${value}</label>
                </div>
            `;
}
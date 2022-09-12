function tableMarkup(row1, row2) {
  return `
        <table class="styled-table">
            <thead>
                <tr>
                    <th colspan="2">Ответ с бекэнда</th>
                </tr>
            </thead>
            <tbody class="place-for-response">
                
            </tbody>
        </table>
    `;
}

function rowMarkup(row1, row2) {
  return `
        <tr>
                    <td>${row1}</td>
                    <td>${row2}</td>
                </tr>
    `;
}

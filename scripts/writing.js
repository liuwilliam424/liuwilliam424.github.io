article = document.querySelector('article');

const create_entries = function (data) {
    data.forEach(function (entry) {
        const entry_label = document.createElement('div');
        entry_label.classList.add('entry-label');

        const url = ("writing/" + entry['title'] + '.html').toLowerCase().replaceAll(" ", "_");

        const a_url = document.createElement('a');
        a_url.setAttribute('href', url);

        const titles_label = document.createElement('div');
        titles_label.classList.add('titles-label');

        const title_label = document.createElement('span');
        title_label.classList.add('title-label');
        title_label.textContent = entry['title'];

        const subtitle_label = document.createElement('span');
        subtitle_label.classList.add('subtitle-bel');
        subtitle_label.textContent = entry['subtitle'];

        const date_label = document.createElement('span');
        date_label.classList.add('date-label');
        date_label.textContent = entry['date'];

        titles_label.appendChild(title_label);
        titles_label.appendChild(subtitle_label);
        a_url.appendChild(titles_label);
        entry_label.appendChild(a_url);
        entry_label.appendChild(date_label);
        article.append(entry_label);
    })
}

fetch('writing/writing_data.json').then(function (file_data) {
    file_data.json().then(
        function (json_data) {
            data = json_data['data'];
            create_entries(data);
        }
    );
})

const xmlData = `<art>
<painting>
<title> Sunset </title>
<artist>
<name> Jhon </name>
<nationality> India
</nationality>
</artist>
<year> 1990 </year>
</painting>
</art>`;

const jsonData = JSON.parse(xmlData);

// Access the JSON data
console.log(jsonData.art.painting.title);
console.log(jsonData.art.painting.artist.name);
console.log(jsonData.art.painting.artist.nationality);
console.log(jsonData.art.painting.year);

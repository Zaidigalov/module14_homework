const parser = new DOMParser();

const xmlList = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlList, "text/xml");

const list = xmlDOM.querySelector("list");

const student = list.querySelectorAll("student").forEach((elem) => {
  const name = elem.querySelector("name");
  const firstName = name.querySelector("first").textContent;
  const secondName = name.querySelector("second").textContent;
  const fullName = firstName + " " + secondName;
  const age = elem.querySelector("age");
  const prof = elem.querySelector("prof").textContent;
  const lang = name.getAttribute("lang");

  const person = {
    name: fullName,
    age: Number(age.textContent),
    prof: prof,
    lang: lang,
  };

  console.log(person);
});

selection();

function selection() {
  let page = document.getElementById("languages");
  if (page == null) {
    page = 0;
  }
  let lgn = page.value;
  if (lgn == "English") {
    language = 1;
    location.hash = "/English";
  } else {
    language = 0;
    location.hash = "";
  }
  languageselection(language);
}

async function languageselection(selection) {
  const res = await fetch(
      'https://raw.githubusercontent.com/Leyla-Carmona/Data_index_Portfolio/refs/heads/main/api_index/index.json'); // RAMA OFICIAL
   // https://raw.githubusercontent.com/Leyla-Carmona/Data_index_Portfolio/refs/heads/test_branch/api_index/index.json); // RAMA DE PRUEBAS

  const courses = await res.json();
  console.log(courses.results[selection]);

  document.getElementById("nav1").innerText =
  courses.results[selection].nav1 || "";
  const nav2 = document.getElementById("nav2");
  nav2.innerText = courses.results[selection].nav2 || "";
  const nav3 = document.getElementById("nav3");
  nav3.innerText = courses.results[selection].nav3 || "";
  const div = document.getElementById("aboutmedescription");
  const title = document.getElementById("aboutmetitle");
  title.innerText = courses.results[selection].aboutme_title || "";
  const text = document.getElementById("aboutmetext");
  text.innerHTML = courses.results[selection].text_title;
  const techtitle = document.getElementById("skillstitle");
  techtitle.innerText = courses.results[selection].aboutme_tech_title ?? "";

  const text_tech = document.getElementById("skillstext");
  const textTech = courses.results[selection].text_tech;

  const div_tables = document.createElement('div');
  div_tables.id = 'herramientasdiv'
  div_tables.className = 'Tools'
for (const category in textTech) {
    const table = document.createElement('table');
    table.id='skillstable'    
    table.className = 'Tools'
    const title_table = document.createElement('h3');
    title_table.innerText = category;      
    title_table.className = 'Tools'
    console.log(textTech[category]);

    table.appendChild(title_table);

    if (Array.isArray(textTech[category])) {
        textTech[category].forEach((technology) => {    
            const tr = document.createElement('tr');
            const img = document.createElement('img');
            const name = document.createElement('td');
            const table_category = document.createElement('table');
            img.src = technology.img ?? '';   
            name.innerText = technology.name;
            img.className = 'Tools'
            name.className = 'Tools'
            const tdImg = document.createElement('td');
            tdImg.appendChild(img);            
            tdImg.className = 'Tools'
            tr.appendChild(tdImg);
            tr.appendChild(name);
            tr.appendChild(title);            
            tr.className = 'Tools'
            table.appendChild(tr);            
            table.className = 'Tools'
            table_category.appendChild(table);            
            table_category.className = 'Tools'
            div_tables.appendChild(table_category);            
            div_tables.className = 'Tools'
        });

    } else {
      for (const subCategory in textTech[category]) {  
            deletetools();      
            const table = document.createElement('table');            
            table.id='skillstable'
            const subTitle = document.createElement('h4');
            subTitle.innerText = subCategory;
            table.appendChild(subTitle);

            textTech[category][subCategory].forEach((technology) => {    
                const tr = document.createElement('tr');
                const img = document.createElement('img');
                const name = document.createElement('td');

                img.src = technology.img ?? '';   
                name.innerText = ' ' + technology.name;

                const tdImg = document.createElement('td');
                tdImg.appendChild(img);
                tr.appendChild(tdImg);
                tr.appendChild(name);
                table.appendChild(tr);
                div_tables.appendChild(table);
            });
        }
    }
}
text_tech.appendChild(div_tables);

  
  const aboutmeskills = document.getElementById("aboutmeskills");
  aboutmeskills.appendChild(text_tech);
  const projectstitle = document.getElementById("projectstitle");
  projectstitle.innerHTML = courses.results[selection].projectstitle;
  const projectstext = document.getElementById("projectstext");
  projectstext.innerHTML = courses.results[selection].projectstext;
  document.getElementById("platzilogo").innerHTML =
    courses.results[selection].platziprofile || "";

  if (selection == 1) {
    mycourseseng();
  } else {
    mycourses();
  }

  proyects(selection);
  const input1 = document.getElementById("inputname");
  input1.innerText = courses.results[selection].inputname;
  const input2 = document.getElementById("inputemail");
  input2.innerText = courses.results[selection].inputemail;
  const input3 = document.getElementById("inputsubject");
  input3.innerText = courses.results[selection].inputsubject;
  const input4 = document.getElementById("inputmessage");
  input4.innerText = courses.results[selection].inputmessage;
  const button = document.getElementById("button");
  button.innerText = courses.results[selection].sendmessage;
  const titlecontact = document.getElementById("Contacttitle");
  titlecontact.innerText = courses.results[selection].Contacttitle;
}

async function mycourses() {
  deletecourses();
  const res = await fetch(
    "https://raw.githubusercontent.com/Leyla-Carmona/Data_index_Portfolio/refs/heads/main/api_index/output.json"
  );
  const courses = await res.json();
  console.log(courses);
  let div1 = document.getElementById("certificados");
  const title = document.getElementById("certifiedtitle");
  title.innerText = "Certificaciones más recientes:";
  courses.slice(0, 7).forEach((courses) => {
    const course = document.createElement("a");
    const description = document.createElement("h4");
    const color = document.createElement("div");    
    color.id = 'presentation';
    const divcard = document.createElement("div");
    const link = document.createElement("h4");
    const date = document.createElement("h4");

    if(document.body.className == "darkmode")
      {
        color.style.background =
          "linear-gradient(to right," + courses.color + ", black)";    
      } 
      else{
        color.style.background =
          "linear-gradient(to right," + courses.color + ",#D9D9D9)";
      }
      
    course.innerHTML =
      courses.title +
      '<br> <a style="font-weight: 100; padding-right: 5;">' +
      courses.description +
      '<br> <a style="font-weight: 100; font-style: italic;">' +
      courses.update_at +
      "</a></a>";
    link.innerHTML = "<a href=" + courses.diploma_url + ">Certificado<a>";
    link.id = "certificado";
    date.innerText = courses.update_at;
    course.className = "certifications";
    description.className = "certifications";
    color.className = "imgcertifications";
    link.className = "certifications";
    date.className = "certifications";

    divcard.id = "card";
    divcard.appendChild(color);
    divcard.appendChild(course);
    divcard.appendChild(description);
    divcard.appendChild(link);
    div1.appendChild(divcard);
  });
}

async function mycourseseng() {
  deletecourses();

  const res = await fetch(
    "https://raw.githubusercontent.com/Leyla-Carmona/Data_index_Portfolio/refs/heads/main/api_index/outputeng.json"
  );

  const courses = await res.json();
  console.log(courses);
  let div1 = document.getElementById("certificados");
  const title = document.getElementById("certifiedtitle");
  title.innerText = "Most recent certifications:";
  courses.slice(0, 7).forEach((courses) => {
    const course = document.createElement("a");
    const description = document.createElement("h4");
    const color = document.createElement("div");
    color.id = 'presentation';
    const divcard = document.createElement("div");
    const link = document.createElement("h4");
    const date = document.createElement("h4");

    if(document.body.className == "darkmode")
      {
        color.style.background =
          "linear-gradient(to right," + courses.color + ",black)";    
      } 
      else{
        color.style.background =
          "linear-gradient(to right," + courses.color + ",#D9D9D9)";
      }
       
    course.innerHTML =
      courses.title +
      '<br> <a style="font-weight: 100; padding-right: 5;">' +
      courses.description +
      '<br> <a style="font-weight: 100; font-style: italic;">' +
      courses.update_at +
      "</a></a>";
    0;
    link.innerHTML = "<a href=" + courses.diploma_url + ">Certificate<a>";
    link.id = "certificado";
    date.innerText = courses.update_at;
    course.className = "certifications";
    description.className = "certifications";
    color.className = "imgcertifications";
    link.className = "certifications";
    date.className = "certifications";

    divcard.id = "card";
    divcard.appendChild(color);
    divcard.appendChild(course);
    divcard.appendChild(description);
    divcard.appendChild(link);
    div1.appendChild(divcard);
  });
}

async function proyects(selection) {
  let language;
  const res = await fetch(
    "https://raw.githubusercontent.com/Leyla-Carmona/Data_index_Portfolio/refs/heads/main/api_index/projectsenglish.json"); //RAMA MAIN
//      "https://raw.githubusercontent.com/Leyla-Carmona/Data_index_Portfolio/refs/heads/test_branch/api_index/projects.json"); //RAMA DE PRUEBAS
  const courses = await res.json();
  console.log(courses);
  if (selection == 1) {
    language = "en";
    console.log(courses[language].projects);
  } else {
    language = "es";
    console.log(courses[language].projects);
  }

  courses[language].projects.forEach((project, index) => {
    [
      "title",
      "subtechtitle",
      "description",
      "description2",
      "subfunctitle",
      "function",
      "subchallengestitle",
      "challenges"
    ].forEach((key) => {
      const element = document.getElementById(`${key}_${index}`);
      if (element) {
        element.innerHTML = project[`${key}_${index}`] || "";
      }
    });
  
    const techContainer = document.getElementById(`technologies_${index}`);
    if (techContainer) {
      const technologies = project[`technologies_${index}`] || [];
      techContainer.innerHTML = technologies
        .map((tech) => `<img src='img/${tech.img}.svg' alt='${tech.alt}' />`)
        .join("");
    }
  });
  };

async function deletecourses() {
  document
    .querySelectorAll(
      "#card, .certifications, .imgcertifications, .certificado"
    )
    .forEach((el) => el.remove());
}

async function deletetools(){  
document.querySelectorAll(".Tools").forEach(el => el.remove());  
}

async function mode(){
  let body = document.body.className;  
  if(body == "darkmode")
  {
      document.body.className ="lightmode";
      deletecourses();
      selection();
  } 
  else{
      document.body.className ="darkmode";
      deletecourses();
      selection();
  }
}

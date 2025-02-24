selection()

function selection() {
 let page = document.getElementById("languages");
 if(page == null)
 {
  page = 0;
 }
 let lgn = page.value;
 if(lgn == 'English')
 {
  language = 1;
  location.hash = '/English';
 } else{
  language = 0;  
  location.hash = '';
 }
 languageselection(language);
}

async function languageselection(selection) {
  const res = await fetch(
      'https://raw.githubusercontent.com/Leyla-Carmona/Data_index_Portfolio/refs/heads/main/api_index/index.json');
  const courses = await res.json();
   console.log(courses.results[selection]);

   document.getElementById('nav1').innerText = courses.results[selection].nav1 || '';   
   const nav2 = document.getElementById('nav2');
   nav2.innerText = courses.results[selection].nav2 || '';   
   const nav3 = document.getElementById('nav3');
   nav3.innerText = courses.results[selection].nav3 || '';   
   const div = document.getElementById('aboutmedescription');
   const title = document.getElementById('aboutmetitle'); 
   title.innerText = courses.results[selection].aboutme_title || '';   
   const text = document.getElementById('aboutmetext');
   text.innerHTML = courses.results[selection].text_title;
   const techtitle = document.getElementById('skillstitle');
   techtitle.innerText = courses.results[selection].aboutme_tech_title ?? '';   
   const text_tech = document.getElementById('skillstext');
   text_tech.innerHTML = courses.results[selection].text_tech;
   const aboutmeskills = document.getElementById('aboutmeskills');
   div.appendChild(text);
   aboutmeskills.appendChild(text_tech);   
   const projectstitle = document.getElementById('projectstitle');
   projectstitle.innerHTML = courses.results[selection].projectstitle;
   const projectstext = document.getElementById('projectstext');
   projectstext.innerHTML = courses.results[selection].projectstext;
   document.getElementById('platzilogo').innerHTML = courses.results[selection].platziprofile || '';

   if(selection == 1)
   {
    mycourseseng();
   }else{
    mycourses();
   }  

   proyects(selection);
   const input1 = document.getElementById('inputname');
   input1.innerText = courses.results[selection].inputname;
   const input2 = document.getElementById('inputemail');
   input2.innerText = courses.results[selection].inputemail;
   const input3 = document.getElementById('inputsubject');
   input3.innerText = courses.results[selection].inputsubject;
   const input4 = document.getElementById('inputmessage');
   input4.innerText = courses.results[selection].inputmessage;
   const button = document.getElementById('button');
   button.innerText = courses.results[selection].sendmessage;   
   const titlecontact = document.getElementById('Contacttitle');
   titlecontact.innerText = courses.results[selection].Contacttitle;   
}

async function mycourses() {
  deletecourses();
  const res = await fetch('https://raw.githubusercontent.com/Leyla-Carmona/Data_index_Portfolio/refs/heads/main/api_index/data.json');
   const courses = await res.json();
  console.log(courses["results"]);
  let div1 = document.getElementById("certificados");
  const title = document.getElementById('certifiedtitle');
  title.innerText = 'Certificaciones más recientes:'  
  courses["results"].slice(0,7).forEach((courses) => {
   
    const course = document.createElement("a");
    const description = document.createElement('h4');
    const category = document.createElement("div");
    const divcard = document.createElement("div");    
    const link = document.createElement("h4");
    const date = document.createElement("h4");

    category.style.background = "linear-gradient(to right," + courses.category + ",black)";
    course.innerHTML = courses.title + '<br> <a style="font-weight: 100; padding-right: 5;">'+ courses.description + '<br> <a style="font-weight: 100; font-style: italic;">'+ courses.updated_at.slice(0,22) + '</a></a>';
    link.innerHTML = "<a href=" + courses.diploma_url + ">Certificado<a>";
    link.id = 'certificado';
    date.innerText = courses.updated_at;
    course.className = "certifications";
    description.className = "certifications";
    category.className = "imgcertifications";
    link.className = "certifications";
    date.className = "certifications";

    divcard.id = "card";
    divcard.appendChild(category);
    divcard.appendChild(course);  
    divcard.appendChild(description);
    divcard.appendChild(link);
    div1.appendChild(divcard);
      });
  };

async function mycourseseng() {  
  deletecourses();
    
  const res = await fetch('https://raw.githubusercontent.com/Leyla-Carmona/Data_index_Portfolio/refs/heads/main/api_index/dataenglish.json');
  
  const courses = await res.json();
  console.log(courses["results"]);
  let div1 = document.getElementById("certificados");
  const title = document.getElementById('certifiedtitle');
  title.innerText = 'Most recent certifications:';  
  courses["results"].slice(0,7).forEach((courses) => {
   
    const course = document.createElement("a");
    const description = document.createElement('h4');
    const category = document.createElement("div");
    const divcard = document.createElement("div");    
    const link = document.createElement("h4");
    const date = document.createElement("h4");

    category.style.background = "linear-gradient(to right," + courses.category + ",black)";
    course.innerHTML = courses.title + '<br> <a style="font-weight: 100; padding-right: 5;">'+ courses.description + '<br> <a style="font-weight: 100; font-style: italic;">'+ courses.updated_at.slice(0,22) + '</a></a>';0
    link.innerHTML = "<a href=" + courses.diploma_url + ">Certificate<a>";
    link.id = 'certificado';
    date.innerText = courses.updated_at;
    course.className = "certifications";
    description.className = "certifications";
    category.className = "imgcertifications";
    link.className = "certifications";
    date.className = "certifications";

    divcard.id = "card";
    divcard.appendChild(category);
    divcard.appendChild(course);  
    divcard.appendChild(description);
    divcard.appendChild(link);
    div1.appendChild(divcard);
      });
  };

async function proyects(selection) {  
  let language;
  const res = await fetch(
      "https://raw.githubusercontent.com/Leyla-Carmona/Data_index_Portfolio/refs/heads/main/api_index/projectsenglish.json");
  const courses = await res.json(); 
  console.log(courses);
  if(selection == 1)
    {
      language = "en";
      console.log(courses[language].projects);
    }else{
      language = "es";      
      console.log(courses[language].projects);
    }  

courses[language].projects.forEach((project, index) => {
  ["title", "subtechtitle", "description", "description2", "technologies", "subfunctitle", "function", "subchallengesctitle", "challenges"]
    .forEach(key => {
      const element = document.getElementById(`${key}_${index}`);
      if (element)
        element[["technologies", "function", "challenges"].includes(key) ? "innerHTML" : "innerText"] = project[`${key}_${index}`] || '';
    });
});
}

async function deletecourses() {
  document.querySelectorAll("#card, .certifications, .imgcertifications, .certificado").forEach(el => el.remove());  
};


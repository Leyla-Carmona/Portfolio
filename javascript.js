function navigateToPage() {
  var select = document.getElementById("languages");
  var url = select.value;
  if (url) {
    window.location.href = url; 
  }
}

mycourses();
mycourseseng();

async function mycourses() {
  const res = await fetch(
    "https://gist.githubusercontent.com/Leyla-Carmona/edc0c1cb1a06e5af89650ea1062208e6/raw/1034d15f1c92adeef92c6ebf8d7d0d35ab622443/courses"
  );
// INGLÉS URL "https://gist.githubusercontent.com/Leyla-Carmona/5fd1d0a609e96d0006811941dd9aaabb/raw/6c38da5e31dc889ba184214ab46d8f6bc98908b0/englishcourses"
//HACER VALIDADOR PARA SOLO TENER UN INDEX Y CAMBIAR LA INFORMACIÓN DINÁMICAMENTE
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
   // description.innerHTML = '<a>'+ courses.description + '<br>'+ courses.updated_at.slice(0,22) + '</a>'
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
  const res = await fetch(
    "https://gist.githubusercontent.com/Leyla-Carmona/5fd1d0a609e96d0006811941dd9aaabb/raw/9c14fdd9b1958bc49d1cbb41a6b158a74d15ba99/englishcourses"
  );
  
  const courses = await res.json();
  console.log(courses["results"]);
  let div1 = document.getElementById("certificados");
  const title = document.getElementById('certifiedtitleeng');
  title.innerText = 'Most recent certifications:';  
  courses["results"].slice(0,7).forEach((courses) => {
   
    const course = document.createElement("a");
    const description = document.createElement('h4');
    const category = document.createElement("div");
    const divcard = document.createElement("div");    
    const link = document.createElement("h4");
    const date = document.createElement("h4");

    category.style.background = "linear-gradient(to right," + courses.category + ",black)";
    course.innerHTML = courses.title + '<br> <a style="font-weight: 100; padding-right: 5;">'+ courses.description + '<br> <a style="font-weight: 100; font-style: italic;">'+ courses.updated_at.slice(0,22) + '</a></a>';
   // description.innerHTML = '<a>'+ courses.description + '<br>'+ courses.updated_at.slice(0,22) + '</a>'
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
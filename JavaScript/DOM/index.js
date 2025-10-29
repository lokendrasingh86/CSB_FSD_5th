// const div = document.getElementsByTagName('div');
// div[0].innerText = "ABES Engineering College";
// div[0].style.color = 'red';
// div[0].style.backgroundColor = 'cyan'
// console.log(div);



const button = document.getElementById('btn');
    const loading = document.getElementById('disp');

    function displayData() {
      loading.innerHTML = "<h2>Data is loading...</h2>";

      setTimeout(() => {
        const div = document.getElementsByClassName('container');
        console.dir(div);

        div[0].innerHTML = '<h2 style="color:cyan">Hii, I am using DOM</h2>';

        const h2 = document.createElement('h2');
        h2.innerText = "CS B Students";
        h2.style.backgroundColor = 'cadetblue';
        div[0].appendChild(h2);

        const img = document.createElement('img');
        img.src = "https://media.istockphoto.com/id/618637822/photo/male-silverback-western-lowland-gorilla.jpg?s=612x612&w=0&k=20&c=mQOaH9z57ccvTq1_5YVEzaQ5vuLVL8WcqoTQ7nagUqQ=";
        img.setAttribute('height', 400); // set smaller height/width for better fit
        img.setAttribute('width', 300);
        div[0].appendChild(img);
      }, 2000);
    }

    button.addEventListener('click', displayData);
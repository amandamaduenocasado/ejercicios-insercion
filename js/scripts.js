// ## Inserción de elementos en el DOM

// - Usando este HTML, haz que al hacer click en el botón se vayan añadiendo items con el texto Item 1, Item 2, Item 3,... Los item deben llevar el número correspondiente independiente de con cuantos item empiece la lista

// ```html
// <button>Añadir Elementos</button>
// <ul>
//   <li>Item 1</li>
// </ul>
// ```

const buttonEl = document.getElementById('button');
const itemListEl = document.getElementById('item-list');

let number = 2;

const createNewItem = () => {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${number++}`;
    itemListEl.append(newItem);
};

buttonEl.addEventListener('click', createNewItem);


// - Usando el input range que te doy haz un generador de encabezados. El input te permite seleccionar un número del 1 al 6, en función de cual elijas ser generará un encabezado con la etiqueta correspondiente. Si elijes un 3, al hacer click en el botón se generará un h3 con el texto "soy un h3", si elijes un 5 un h5 con el texto "soy un h5" y así para todos.

// ```html
// <div>
//   <label>1</label>
//   <input type="range" id="range" min="1" max="6" step="1" value="1" />
//   <button>Generar Encabezado</button>
// </div>
// ```


const containerEl = document.getElementById('container');
const button2El = document.getElementById('button2');
const rangeEl = document.getElementById('range');

const generateText = () => {
    const newText = document.createElement('h' + range.value);
    newText.textContent = `Soy un h${range.value}`;
    containerEl.append(newText);
};

button2.addEventListener('click', generateText);


// - Con este HTML consigue que al introducir un número POSITIVO y MAYOR de 0 se genere la tabla de multiplicar de ese número del 0 al 10 como elementos de la lista. En el caso de que el número no sea correcto o no haya número, el botón estará desactivado.

// ```html
// <label>Introduce un número</label>
// <input type="number" />
// <button>Imprimir tabla de multiplicar</button>
// <ul></ul>
// ```

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numberInputEl = document.getElementById('number-input');
const containerMultiplyEl = document.getElementById('container-multiply');
const button3El = document.getElementById('button3');

const buttonActive = () => {
    if (numberInputEl.value !== '' && numberInputEl.value >= 0) {
        button3El.disabled = false;
    } else {
        button3El.disabled = true;
    }
};

const generateNumber = () => {
    const fragment = document.createDocumentFragment();

    numbers.forEach((number) => {
        const table = document.createElement('p');
        table.textContent = `${numberInputEl.value} x ${number} = ${number * numberInputEl.value}`;

        fragment.append(table);
    });

    containerMultiplyEl.append(fragment);
};

numberInputEl.addEventListener("input", buttonActive);
button3El.addEventListener("click", generateNumber);



// - Con este objeto debes crear tarjetas de usuario que muestren todos los datos, el diseño es libre, lo importante es que muestren toda la información del usuario y la imagen de perfil. Crea una función que genere todas las tarjetas de usuario y las inserte en el DOM

const users = [
  {
    name: 'Josep Flores',
    age: 77,
    username: 'Josep85',
    email: 'Josep_Flores@hotmail.com',
    profileImage: 'https://randomuser.me/api/portraits/women/24.jpg'
  },
  {
    name: 'Ricardo Rosas',
    age: 43,
    username: 'Ricardo_Rosas',
    email: 'Ricardo_Rosas22@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/57.jpg'
  },
  {
    name: 'Iván Tamayo',
    age: 40,
    username: 'tamayo87',
    email: 'Ivan_Tamayo61@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/9.jpg',
    job: 'Lead Communications Designer'
  },
  {
    name: 'Maica Villanueva',
    age: 64,
    username: 'Maica.Villanueva18',
    email: 'Maica.Villanueva1@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    name: 'Pedro Estrada',
    age: 77,
    username: 'Pedro29',
    email: 'Pedro_Estrada22@hotmail.com',
    profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
    job: 'Central Directives Liaison'
  },
  {
    name: 'Jorge Cedillo',
    age: 33,
    username: 'Jorge_Cedillo',
    email: 'Jorge.Cedillo2@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/88.jpg'
  }
];

const usuarios = document.getElementById('usuarios');

const shownUsers=()=>{
    const fragment = document.createDocumentFragment();
    users.forEach(user=>{
        const newDiv = document.createElement('div')
        const name = document.createElement ('h1');
        const age = document.createElement ('p');
        const username = document.createElement ('p');
        const email = document.createElement ('p');
        const profileImage = document.createElement ('img');

        name.textContent=user.name;
        age.textContent=user.age;
        username.textContent=user.username;
        email.textContent=user.email;
        profileImage.src=user.profileImage;

        newDiv.append(name,age,username,email,profileImage);
        fragment.append(newDiv);
    })
    usuarios.append(fragment);
}

shownUsers();
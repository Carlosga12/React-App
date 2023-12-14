import React, { useState } from 'react';
import Listado from './components/Listado';
import Detail from './components/Detail';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Importa el archivo de estilos

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    { id: 1, name: 'Bondad', description: 'La bondad es uno de los valores humanos más generales de nuestro ser. Puede traducirse en cientos y cientos de miles de acciones según cada contexto, pero siempre recoge el deseo de hacer el bien, tener buenas intenciones con el resto de las personas, ser amable o ayudar en la medida de nuestras posibilidades.', image: 'imagesI/Bondad.jpeg' },// Nombre del archivo de la imagen en la carpeta 'images'
    { id: 2, name: 'Sinceridad', description: 'Como virtud, la sinceridad se traduce en vivir y relacionarse sin intenciones ocultas a través de nuestros actos o palabras. Se trata de uno de los valores morales por antonomasia, pues ser sincero con uno mismo nos lleva siempre a ser sincero con los demás.', image: 'imagesI/Sinceridad.jpeg' },
    { id: 3, name: 'Empatía', description: 'Asimismo, la empatía está muy relacionada con la sinceridad. Quien busca la bondad, la felicidad o la sinceridad con uno mismo, entiende que cualquier ser humano también vive en búsqueda constante de lo mismo. Por ello, la empatía, que nos ayuda a ponernos en la situación de nuestros semejantes, también nos ayuda a entenderlos, apoyarlos y ayudarlos cuando es necesario, que es lo mismo que nosotros deseamos, ¿o no?........Como madres y padres preocupados, creemos que una buena forma de trabajar la empatía y la educación en valores es a través de nuestros propios hijos, que serán los encargados de luchar mañana por un mundo mejor, y en Ayuda en Acción te recomendamos algunas películas infantiles que transmiten valores positivos tanto para la empatía como para el resto de valores que nos hacen humanos.', image: 'imagesI/Empatia.jpeg' },
    { id: 4, name: 'Amor', description: 'Al igual que otros valores relacionados como la alegría u el optimismo, el amor es, muy probablemente, uno de los sentimientos más fuertes de un ser humano: ¡amor por el arte!, ¡por nuestros seres queridos!, ¡amor por lo que hacemos! Como valor humano, el amor es el motor que inicia el dar y el recibir, el convivir, el compartir, el respetar o el confiar.', image: 'imagesI/Amor.jpeg' },
    { id: 5, name: 'Paciencia', description: 'Contraria al aquí y al ahora, la paciencia nos enseña a luchar por aquello que deseamos, a tolerar una incomodidad o una preocupación y a comprender que hay días buenos y días malos, pero pocos problemas sin solución.', image: 'imagesI/Paciencia.jpeg'},
    { id: 6, name: 'Gratitud', description: 'Podíamos haber elegido otros valores, como la amistad, pero en Ayuda en Acción sabemos que la gratitud es, casi siempre, la mayor recompensa para el que da y el gran gesto del que recibe. Es tan simple y tan compleja en sí misma como agradecer a las personas que nos han ayudado o apoyado.', image: 'imagesI/Gratitud.jpeg' },
    { id: 7, name: 'Perdon', description: 'A diferencia de la gratitud, el perdón no solo nos empodera como personas, sino que nos permite mostrar el camino correcto a aquel individuo que ha obrado mal con nosotros y quizá con terceros; con el perdón desistimos del castigo o la venganza frente a una persona que se comportó injustamente con nosotros.', image: 'imagesI/Perdon.jpeg' },
    { id: 8, name: 'Humildad', description: 'La humildad se basa en el hecho de que nadie lo sabe todo. Como seres humanos, nos movemos entre nuestros propios límites y debilidades; una persona humilde sabe que juntos somos más, y, por ello, se preocupa por el bien de todos los que le rodean.', image: 'imagesI/Humildad.jpeg' },
    { id: 9, name: 'Responsabilidad', description: 'A su vez, la responsabilidad adopta muchas facetas, desde aquella colectiva a la individual vinculada a nuestros deberes, compromisos y obligaciones con terceros. Quizá es uno de los valores humanos que más dificultad entraña, y para el que nos recomendamos recordar siempre que la responsabilidad empieza en uno mismo.', image: 'imagesI/Responsabilidad.jpeg' },
    { id: 10, name: 'Solidaridad', description: 'Por último, como ONG preocupada por principios como el esfuerzo colectivo, la transparencia institucional y la dignidad de todas las personas, en Ayuda en Acción creemos que la solidaridad es uno de los grandes valores humanos de nuestro tiempo. La solidaridad es el sentimiento y el principio que nos permite ayudar a cualquier ser humano en cualquier momento, en especial, en situaciones de desamparo, y creemos que recoge muchos de los valores humanos sobre los que hemos podido hablar en este artículo, como la bondad, el amor, la humildad o la empatía. Porque creemos que aprender sobre ellos es una buena forma de crecer como personas, y ayudar a que otros puedan educarse en valores es la mejor forma de construir un mundo mejor.', image: 'imagesI/Solidaridad.jpeg' },
  ];

  return (
     <> <div>
        <Listado items={items} onItemClick={setSelectedItem} />
      </div>
      <div className="detail-container">
        <Detail selectedItem={selectedItem} />
      </div>
      <div className="login-container">
        <Login />
      </div>
    </>
  );
};

export default App;

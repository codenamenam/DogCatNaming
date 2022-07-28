/* eslint-disable */

import styles from "./Breed.module.css";

const dog = [
  "https://content.fortune.com/wp-content/uploads/2019/01/boo.jpg",
  "https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn",
  "https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp",
  "https://ichef.bbci.co.uk/news/976/cpsprodpb/1A90/production/_124800860_gettyimages-1287712627.jpg",
  "https://www.rd.com/wp-content/uploads/2022/01/GettyImages-912084898-e1641834261695.jpg",
  "https://dogsqueensland.org.au/media/1003/buying-a-dog.jpg",
];

const cat = [
  "https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg",
  "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg",
  "https://images.theconversation.com/files/457052/original/file-20220408-15-pl446k.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip",
  "https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip",
  "https://www.collinsdictionary.com/images/full/cat_156310937.jpg",
];

var temp = [""];

function Breed(props) {
  if (props.type == 1) {
    temp = cat;
  } else if (props.type == 2) {
    temp = dog;
  }

  return (
    <div className={styles.container}>
      {temp.map((src) => (
        <div
          key={src}
          className={styles.card}
          style={{
            backgroundImage: `url(${src})`,
          }}
        />
      ))}
    </div>
  );
}

export default Breed;

import {collection, getDocs, getFirestore, query, where,doc, getDoc} from 'firebase/firestore';

export function getItem (id){
    const db = getFirestore();

    const itemRef = doc (db , 'items', id);

    return getDoc(itemRef)
};


export default function traerProductos(category){
  const db = getFirestore();
  const itemCollection = collection(db,'items')

  const q = category && query(
    itemCollection,
    where ('category','==',category)
  );

  return getDocs(q || itemCollection);
};
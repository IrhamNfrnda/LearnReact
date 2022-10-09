import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="Parentbox"> 
      <FotoProduk/>
      <ProdukInfo name="Irham" category = "Lebaran"/>
    </div>
  );
}


function FotoProduk() {
  return (
      <div className='Foto'>
        <img src='sneaker.jpg'></img>
      </div>
  );
}

function ProdukInfo(props) {
  const { category, name } = props; 
  return (
      <div className='Deskripsi'>
        <p className='Cate'>{ category }</p>
        <h1 className='Title'>{ name }</h1>
        <p className='Price'>IDR 73.300.999</p>
        <p className='Info'>
          Ipsum amet proident cupidatat et ipsum ex anim excepteur id aliquip exercitation est est. Reprehenderit aliquip sint laboris minim. Sint laborum et tempor labore occaecat proident proident enim excepteur velit pariatur. Aliquip pariatur tempor nulla elit do incididunt commodo elit. Ea non minim culpa sit mollit aliqua reprehenderit sint laborum sunt adipisicing reprehenderit. Sit eu tempor culpa Lorem.
        </p>
        <a onClick={TambahCart} href='#'>Add to Cart</a>
      </div>
  );
}


function TambahCart() {
  console.log("Membeli Produk...");
}


export default App;

import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="Parentbox"> 
      <FotoProduk/>
      <ProdukInfo isDiscount="yes" name="Irham" category = "Lebaran"/>
    </div>
  );
}

function CheckDiscount(props) {
  const { isDiscount } = props;

  if (isDiscount) {
    return (
      <p>Discount 50% Off</p>
    );
  } else {
    return (
      <p>Belum ada Discount</p>
    )
  }

}

function FotoProduk() {
  return (
      <div className='Foto'>
        <img src='sneaker.jpg'></img>
      </div>
  );
}

function ProdukInfo(props) {
  const { category, name, isDiscount } = props; 
  const benefits = ["Anti Api", "Tahan Banting", "Dapat dicuci dengan pasir"];

  const listBenefits = benefits.map((itemBenefit) =>
    <li> { itemBenefit }</li>
  );

  return (
      <div className='Deskripsi'>
        <p className='Cate'>{ category }</p>
        <h1 className='Title'>{ name }</h1>
        <p className='Price'>IDR 73.300.999</p>
        <CheckDiscount isDiscount = { isDiscount }/>
        <p className='Info'>
          Ipsum amet proident cupidatat et ipsum ex anim excepteur id aliquip exercitation est est. Reprehenderit aliquip sint laboris minim. Sint laborum et tempor labore occaecat proident proident enim excepteur velit pariatur. Aliquip pariatur tempor nulla elit do incididunt commodo elit. Ea non minim culpa sit mollit aliqua reprehenderit sint laborum sunt adipisicing reprehenderit. Sit eu tempor culpa Lorem.
        </p>
        <ul>
          { listBenefits }
        </ul>
        <a onClick={(e) => TambahCart(name, e )} href='#'>Add to Cart</a>
      </div>
  );
}


function TambahCart(e) {
  console.log("Membeli Produk " + e);
}


export default App;

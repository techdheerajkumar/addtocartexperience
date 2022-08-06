import Card from "../../Components/Card/Card";
const Products = (props) => {
  return (
    <>
      <h2 className="h2 bottom-bar"><span>All Products</span></h2>
      <div className="cards-wrapper d-flex flex-wrap">
        {props.products.map((item, index) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              imgUrl={item.image}
              price={item.price}
              id={item.id}
              addCart={props.click}
            />
          );
        })}
      </div>
    </>
  );
};

export default Products;

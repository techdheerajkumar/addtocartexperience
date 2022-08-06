import Card from "../../Components/Card/Card";
import { Link } from "react-router-dom";
const Home = (props) => {
  return (
    <>
      <h2 className="bottom-bar">
        <span>Top Rated Products</span>
      </h2>
      <div className="d-flex flex-wrap">
        {props.products.map((item, index) => {
          return item.rating.rate > 4.5 ? (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              imgUrl={item.image}
              price={item.price}
              id={item.id}
              addCart={props.click}
            />
          ) : (
            ""
          );
        })}
      </div>
      <div className="btn-wrapper text-center pb-5">
        <Link to="/products" className="btn btn-success mx-auto ">
          View all products
        </Link>
      </div>
    </>
  );
};
export default Home;

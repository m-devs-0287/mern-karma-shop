import CardActionLink from "../Card-action-link/CardActionLink";

const styles = {
  wrapper: "flex flex-col gap-3",
  imgContainer: "w-full h-[255px]",
  img: "w-full h-full",
  h3: "font-semibold",
  p: "flex gap-4 font-semibold",
  pSpan: "line-through text-black/20",
};

const ProductCard = ({data}) => {
  const { img, brand, model, type, price, salesPrice } = data;
  
  return (
    <div className={styles.wrapper}>
      
      <div className={styles.imgContainer}>
        <img src={img} alt="" className={styles.img} />
      </div>

      <div>
        <h3 className={styles.h3}>
          {brand} {model} {type}
        </h3>
        <p className={styles.p}>
          <span>${salesPrice}</span>
          <span className={styles.pSpan}>{price}</span>
        </p>
      </div>
      <CardActionLink />
    </div>
  );
};

export default ProductCard;

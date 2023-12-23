import usetask from "../../../Hooks/usetask";
import UserCardhome from "./userCardhome";

const Userhome = () => {
  const [products] = usetask();
  // console.log(products);
  return (
    <div className="grid md:grid-cols-1 gap-6">
      {products?.map((item) => (
        <UserCardhome key={item._id} product={item} />
      ))}
    </div>
  );
};

export default Userhome;

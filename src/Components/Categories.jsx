import "./Categories.css";
export default function CategoriesComponent({
  category,
  changeCurrentCategory,
}) {
  return (
    <div className="Category">
      <div className="CategoryImg">
        <img
          key={category.id}
          src={
            category.id === 0
              ? // ? "https://i.pinimg.com/originals/1d/08/b6/1d08b6d2adcd60bc69e0754fa385d527.jpg"
                "https://i.pinimg.com/originals/9a/c9/d4/9ac9d495a2bda9e81218906175795835.jpg"
              : category.id === 1
              ? "https://i.pinimg.com/originals/1b/d0/05/1bd0051ae2ae99795db575be81f89641.jpg"
              : category.id === 2
              ? "https://cdn.uc.assets.prezly.com/922e44fe-e018-4534-a052-f5f53cca191b/Acer_Chromebook_512_lifestyle02.jpg"
              : category.id === 3
              ? "https://i.pinimg.com/originals/9e/52/e1/9e52e12b99152abce02417fa69c1d3ee.jpg"
              : category.id === 4
              ? // ? "https://i.pinimg.com/736x/e8/46/9d/e8469df6855e40b288d367e4126acce1.jpg"
                "https://i.pinimg.com/originals/ec/bc/76/ecbc76bb223302144e27e1dd0e2dbe18.jpg"
              : category.id === 5
              ? "https://maycointernational.com/wp-content/uploads/2021/07/Computer-Science-Engineer-wear-1.jpg"
              : ""
          }
          onClick={() => {
            changeCurrentCategory(category.id);
          }}
        />
      </div>
      <div className="CategoryName">{category.name}</div>
    </div>
  );
}

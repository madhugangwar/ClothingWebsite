// // Component: HomePage (Simulated: src/components/pages/HomePage.jsx)
// import ProductCard  from "../ui/ProductCard";
// const HomePage = ({ theme, searchTerm, setSearchTerm, activeCategory, setActiveCategory, activeSeason, setActiveSeason, filteredProducts, isProductInWishlist, toggleWishlist, addToCart }) => {
//     const categories = ['all', 'man', 'women', 'children'];
//     const seasons = ['all', 'summer', 'winter', 'rainy'];

//     const themeClass = theme === 'dark' ? 'bg-secondary-custom text-white' : 'bg-secondary-custom text-primary';
//     const inputClass = theme === 'dark' ? 'input-dark text-white border-light' : 'bg-white text-dark';
    
//     return (
//       <main className="container-fluid py-5">
        
//         {/* Sliding Images (Pure CSS Slider) */}
//         <div className="css-slider-container mb-5 rounded-3 shadow-lg">
//           <div className="css-slider-track">
//               <div className="css-slider-slide" style={{backgroundImage: "url(https://img.pikbest.com/origin/10/10/31/97vpIkbEsTShb.jpg!w700wp )"}}>
//                   {/* <div className="slide-caption">
//                     <h1>Flat 50% Off on Summer Sale</h1>
//                   </div> */}
//               </div>
//               <div className="css-slider-slide" style={{backgroundImage: "url(https://img.freepik.com/free-vector/hand-drawn-fashion-collection-twitch-banner_23-2149985384.jpg?semt=ais_hybrid&w=740&q=80)"}}>
//                    {/* <div className="slide-caption">
//                     <h1>New Winter Arrivals are Here!</h1>
//                   </div> */}
//               </div>
//               <div className="css-slider-slide" style={{backgroundImage: "url(https://marketplace.canva.com/EAGHC5NUD-Q/1/0/1600w/canva-black-and-white-modern-fashion-sale-banner-landscape-n7GVeIDu0Tg.jpg)"}}>
//                   {/* <div className="slide-caption">
//                     <h1>Fun Clothing for Kids!</h1>
//                   </div> */}
//               </div>
//               {/* Duplicate first slide for smooth looping */}
//               <div className="css-slider-slide" style={{backgroundImage: "url(https://cdn.vectorstock.com/i/500p/19/21/fashion-clothing-shop-banner-vector-15001921.jpg)"}}>
//                   {/* <div className="slide-caption">
//                     <h1>Flat 50% Off on Summer Sale</h1>
//                   </div> */}
//               </div>
//           </div>
//         </div>
        
//         {/* Search and Filters */}
//         <div className={`p-4 mb-4 rounded-3 shadow-sm ${themeClass}`}>
//           <div className="row g-3">
//             <div className="col-12 col-md-4">
//               <input
//                 type="text"
//                 className={`form-control form-control-lg rounded-pill ${inputClass}`}
//                 placeholder="Search by product name or type..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
            
//             {/* Category Filters (Primary Blue) */}
//             <div className="col-12 col-md-4">
//               <div className="btn-group w-100 rounded-pill" role="group">
//                 {categories.map(cat => (
//                   <button
//                     key={cat}
//                     type="button"
//                     className={`btn btn-sm text-capitalize ${activeCategory === cat ? 'btn-primary' : (theme === 'dark' ? 'btn-outline-primary-dark' : 'btn-outline-primary')}`}
//                     onClick={() => setActiveCategory(cat)}
//                     style={{borderRadius: 0}}
//                   >
//                     {cat === 'all' ? 'All' : cat}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Season Filters (Accent Yellow) */}
//             <div className="col-12 col-md-4">
//               <div className="btn-group w-100 rounded-pill" role="group">
//                 {seasons.map(season => (
//                   <button
//                     key={season}
//                     type="button"
//                     className={`btn btn-sm text-capitalize ${activeSeason === season ? 'btn-info' : (theme === 'dark' ? 'btn-outline-info-dark' : 'btn-outline-info')}`}
//                     onClick={() => setActiveSeason(season)}
//                     style={{borderRadius: 0}}
//                   >
//                     {season === 'all' ? 'All' : season}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Product Grid */}
//         <h2 className="text-center mb-4 mt-5 text-primary">Featured Products ({filteredProducts.length})</h2>
//         <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map(product => (
//               <div className="col" key={product.id}>
//                 <ProductCard 
//                     product={product} 
//                     theme={theme}
//                     isProductInWishlist={isProductInWishlist}
//                     toggleWishlist={toggleWishlist}
//                     addToCart={addToCart}
//                 />
//               </div>
//             ))
//           ) : (
//             <div className="col-12 text-center py-5">
//               <h4 className="text-muted">No product found for your search.</h4>
//             </div>
//           )}
//         </div>
//       </main>
//     );
//   };
// export default HomePage;


/// Component: HomePage (Simulated: src/components/pages/HomePage.jsx)

import ProductCard from "../ui/ProductCard";

const HomePage = ({
  theme,
  searchTerm,
  setSearchTerm,
  activeCategory,
  setActiveCategory,
  activeSeason,
  setActiveSeason,
  filteredProducts,
  isProductInWishlist,
  toggleWishlist,
  addToCart
}) => {

  const categories = ['all', 'man', 'women', 'children'];
  const seasons = ['all', 'summer', 'winter', 'rainy'];

  const themeClass = theme === 'dark'
    ? 'bg-secondary-custom text-white'
    : 'bg-secondary-custom text-primary';

  const inputClass = theme === 'dark'
    ? 'input-dark text-white border-light'
    : 'bg-white text-dark';

  return (
    <main className="container-fluid py-5">

      {/* Slider */}
      <div className="css-slider-container mb-5 rounded-3 shadow-lg">
        <div className="css-slider-track">

          <div
            className="css-slider-slide"
            style={{
              backgroundImage: "url(https://img.pikbest.com/origin/10/10/31/97vpIkbEsTShb.jpg!w700wp)"
            }}
          />

          <div
            className="css-slider-slide"
            style={{
              backgroundImage: "url(https://img.freepik.com/free-vector/hand-drawn-fashion-collection-twitch-banner_23-2149985384.jpg?semt=ais_hybrid&w=740&q=80)"
            }}
          />

          <div
            className="css-slider-slide"
            style={{
              backgroundImage: "url(https://marketplace.canva.com/EAGHC5NUD-Q/1/0/1600w/canva-black-and-white-modern-fashion-sale-banner-landscape-n7GVeIDu0Tg.jpg)"
            }}
          />

          {/* Duplicate Slide */}
          <div
            className="css-slider-slide"
            style={{
              backgroundImage: "url(https://cdn.vectorstock.com/i/500p/19/21/fashion-clothing-shop-banner-vector-15001921.jpg)"
            }}
          />

        </div>
      </div>

      {/* Search + Filter */}
      <div className={`p-4 mb-4 rounded-3 shadow-sm ${themeClass}`}>
        <div className="row g-3">

          {/* Search */}
          <div className="col-12 col-md-4">
            <input
              type="text"
              className={`form-control form-control-lg rounded-pill ${inputClass}`}
              placeholder="Search by product name or type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Categories */}
          <div className="col-12 col-md-4">
            <div className="btn-group w-100 rounded-pill" role="group">
              {categories.map(cat => (
                <button
                  key={cat}
                  type="button"
                  className={`btn btn-sm text-capitalize ${
                    activeCategory === cat
                      ? 'btn-cart'
                      : (theme === 'dark'
                        ? 'btn-outline-primary-dark'
                        : 'btn-outline-primary')
                  }`}
                  onClick={() => setActiveCategory(cat)}
                  style={{ borderRadius: 0 }}
                >
                  {cat === 'all' ? 'All' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Seasons */}
          <div className="col-12 col-md-4">
            <div className="btn-group w-100 rounded-pill" role="group">
              {seasons.map(season => (
                <button
                  key={season}
                  type="button"
                  className={`btn btn-sm text-capitalize ${
                    activeSeason === season
                      ? 'btn-info'
                      : (theme === 'dark'
                        ? 'btn-outline-info-dark'
                        : 'btn-outline-info')
                  }`}
                  onClick={() => setActiveSeason(season)}
                  style={{ borderRadius: 0 }}
                >
                  {season === 'all' ? 'All' : season}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Products Grid */}
      <h2 className="text-center mb-4 mt-5 ">
        Featured Products ({filteredProducts.length})
      </h2>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">

        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div className="col" key={product.id}>
              <ProductCard
                product={product}
                theme={theme}
                isProductInWishlist={isProductInWishlist}
                toggleWishlist={toggleWishlist}
                addToCart={addToCart}
              />
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <h4 className="text-muted">No product found for your search.</h4>
          </div>
        )}

      </div>

    </main>
  );
};

export default HomePage;


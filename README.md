I have built a simple React E-Commerce Product Listing App called 'Kids Toy Catalog' without using frameworks like Bootstrap, focusing on custom styling.
I set up the React app by following project instructions.

My project consists of three main components, following the React component hierarchy: 
- App Component (Parent);
- ProductList Component (Child of App);
- ProductItem Component (Child of ProductList).

In the App Component each product has the required attributes (id, name, price, and description). It Initializes state using useState to store a list of products, and passes the product list as props to ProductList.

My ProductList component takes the product list as a prop and maps through it using the .map() method to iterate over products and render a ProductItem for each.

ProductItem Component displays product details: Name, Price, and Description, and uses props to receive data and render it dynamically.

Styles have been applied to all the components accordingly for a well-styled and responsive UI.

As a bonus, I extended my app by adding Category Filtering and Product Images:
- Products are grouped into categories (e.g., Educational, Electronics, Stuffed Toys, Musical, Role Play).
- A responsive menu allows users to filter products by category.
- When "All" is selected, images are hidden by default, and users can click the "Show Image" button to reveal them.
- When a specific category is selected, all images in that category are displayed automatically.
- Custom styling ensures images are responsive and visually appealing.

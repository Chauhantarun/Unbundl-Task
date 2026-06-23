<<<<<<< HEAD
# ShopHub – React Product Listing

A responsive product listing application built with React that fetches data from the DummyJSON API and provides interactive features such as search, sorting, accordion panels, and tab switching between grid and list views.

---

## 🚀 Features

### Task B — Fetch and Render Data

- Fetches product data from the **DummyJSON API**
- Uses **useEffect** and **useState** to manage the fetch lifecycle
- Displays a loading state while data is being fetched
- Handles API errors gracefully with a user-friendly error message
- Dynamically renders products in reusable cards

### Task C — Interactions

Implemented multiple interactions:

#### ✅ Search Functionality

- Search products by title in real time.

#### ✅ Sort Toggle

- Sort products by:
  - Price Low → High
  - Price High → Low

#### ✅ Expand / Collapse Panel (Accordion)

- "Read More" and "Show Less" buttons expand and collapse product descriptions.

#### ✅ Tab Switch Between Two Content Views

- Grid View
- List View

#### ✅ Hover Effects

- Product cards animate on hover.
- Buttons have hover states for improved user experience.

---

## 🛠 Technologies Used

- React
- JavaScript (ES6+)
- CSS3
- DummyJSON API

---

## 📡 API Used

DummyJSON Products API:

https://dummyjson.com/products

Products are fetched using:

```javascript
useEffect(() => {
  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
  };

  fetchProducts();
}, []);
```

---

## 📁 Project Structure

```
src/
│
├── Components/
│ └── Header2.jsx
│
├── Pages/
│ └── Products.jsx
│
├── CSS/
│ ├── header2.css
│ └── product.css
│
└── App.jsx
```

---

## ⚙️ State Management

The application uses React hooks:

### useState

Used for:

- Products data
- Loading state
- Error state
- Search input
- Sorting option
- Accordion state
- Grid/List view toggle

### useEffect

Used for:

- Fetching products from the API when the component mounts.

---

## Loading State

While products are being fetched, users see:

```jsx
Loading Products...
```

---

## Error Handling

If the API request fails, users see:

```jsx
Unable to load products. Please try again later.
```

instead of a blank page.

---

## Interactions Implemented

| Interaction   | Description                         |
| ------------- | ----------------------------------- |
| Search        | Filters products by title           |
| Sort Toggle   | Price Low → High and High → Low     |
| Accordion     | Expand/Collapse product description |
| Tab Switch    | Grid View ↔ List View               |
| Hover Effects | Cards and buttons animate on hover  |

---

## Responsive Design

Supports:

- Desktop
- Tablet
- Mobile devices

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

---

## Assignment Requirements Covered

### Task B – Fetch Data

✔ Used DummyJSON API

✔ Used useEffect and useState

✔ Visible loading state

✔ Error handling with user-friendly message

✔ Dynamic rendering of products

### Task C – Interaction

✔ Hover state on cards and buttons

✔ Sort toggle

✔ Expand/Collapse accordion

✔ Tab switch between Grid and List views

---

## Author

Built using React and DummyJSON API.
=======
# Unbundl-Task
>>>>>>> adbc305c3d8222ee1faccbe2eb0a2fbfc0e8fbd5

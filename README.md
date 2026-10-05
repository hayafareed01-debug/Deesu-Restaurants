# FARNAJ Cuisine 

FARNAJ Cuisine is a modern restaurant website developed using HTML, CSS, JavaScript, and Firebase. The platform allows customers to browse the menu, add items to a cart, place orders online, and enables administrators to manage incoming orders through a secure admin panel.

---

##  Features

### Customer Side

- Modern restaurant landing page
- Beautiful and responsive user interface
- Browse menu items by category
- Search menu items instantly
- Add items to cart
- Increase or decrease item quantity
- Customer details form before checkout
- Professional order success popup
- Mobile-friendly design
- Responsive cart drawer

### Order Management

- Orders stored in Firebase Firestore
- Customer information stored securely
- Order status tracking
- Pending and Completed orders
- Real-time order management

### Admin Panel

- Secure Firebase Authentication login
- Protected admin access
- View customer orders
- View ordered items and details
- Mark orders as completed
- Delete orders
- Logout functionality

---

##  Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Firebase Firestore
- Firebase Authentication
- Google Fonts
- Font Awesome

---

##  Project Structure

```text
FARNAJ-Cuisine/
│
├── index.html
├── menu.html
├── login.html
├── admin.html
│
├── css/
│   ├── style.css
│   └── menu.css
│
├── js/
│   ├── firebase.js
│   ├── menu.js
│   ├── login.js
│   └── admin.js
│
├── data/
│   └── menu-data.js
│
├── assets/
│   ├── images/
│   └── logo/
│
└── screenshots/
```

---

##  Firebase Integration

### Firestore Database

Orders are stored in a Firebase Firestore collection.

Collection Name:

```text
orders
```

Each order contains:

```javascript
{
  customerName,
  phone,
  address,
  items,
  total,
  status,
  createdAt
}
```

### Firebase Authentication

Firebase Authentication is used to secure the admin dashboard.

Only authorized users can access:

```text
admin.html
```

---

##  Live Website

### Customer Website

https://farnaj-cuisine.web.app

### Admin Login

https://farnaj-cuisine.web.app/login.html

---

##  How to Open the Website

### Option 1: Open the Live Website (Recommended)

Visit:

```text
https://farnaj-cuisine.web.app
```

No installation is required.

---

### Option 2: Run Locally Using VS Code

This project uses JavaScript Modules and Firebase services.

Because of this, opening files directly with double-click will not work properly.

 Do NOT open:

```text
file:///C:/Users/.../index.html
```

This can cause errors such as:

```text
Access to script has been blocked by CORS policy
filterCategory is not defined
menuItems is not defined
```

### Correct Method

1. Open the project folder in VS Code.
2. Install the Live Server extension.
3. Right-click on `index.html`.
4. Select **Open with Live Server**.
5. Open the generated URL:

```text
http://127.0.0.1:5500/index.html
```

or

```text
http://localhost:5500/index.html
```

Menu Page:

```text
http://127.0.0.1:5500/menu.html
```

Admin Login:

```text
http://127.0.0.1:5500/login.html
```

---

##  Ordering Process

1. Customer opens the menu page.
2. Customer browses menu items.
3. Customer adds items to the cart.
4. Customer enters:
   - Name
   - Phone Number
   - Delivery Address
5. Customer clicks **Place Order**.
6. Order is saved in Firebase Firestore.
7. Success popup confirms the order.
8. Admin can view and manage orders through the dashboard.

---

##  Admin Access

### Login Process

1. Open:

```text
https://farnaj-cuisine.web.app/login.html
```

2. Enter authorized admin credentials.
3. Login successfully.
4. Access the admin dashboard.

### Admin Features

- View all orders
- View customer information
- View ordered items
- Mark orders as completed
- Delete orders
- Logout securely

---

##  Responsive Design

The website is fully responsive and optimized for:

- Desktop Computers
- Laptops
- Tablets
- Mobile Phones

Responsive features include:

- Flexible layouts
- Mobile-friendly navigation
- Responsive menu cards
- Responsive cart drawer
- Touch-friendly buttons
- Optimized forms and inputs

---

##  Screenshots

Recommended screenshots to include in the repository:

### Home Page
- Hero Section
- Featured Menu

### Menu Page
- Search Functionality
- Category Filters
- Food Cards

### Cart System
- Cart Drawer
- Customer Details Form

### Order Confirmation
- Success Popup

### Admin Panel
- Login Page
- Orders Dashboard
- Order Management

Example:

```md
![Home Page](screenshots/home-page.png)

![Menu Page](screenshots/menu-page.png)

![Admin Panel](screenshots/admin-panel.png)
```

---

##  Future Improvements

Potential future enhancements:

- Online payment integration
- Email notifications
- SMS order confirmation
- Customer order tracking
- Discount and coupon system
- Multiple admin accounts
- Analytics dashboard
- Inventory management
- Customer reviews and ratings

---

##  Developer

**Haya Ali**

Developed as a complete restaurant management website project using HTML, CSS, JavaScript, Firebase Firestore, and Firebase Authentication.

---

##  License

This project was created for educational, portfolio, and learning purposes.

© FARNAJ Cuisine. All Rights Reserved.

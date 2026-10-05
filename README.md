# FARNAJ Cuisine 

FARNAJ Cuisine is a modern restaurant website developed using HTML, CSS, JavaScript, and Firebase. The platform allows customers to browse the menu, add items to a cart, place orders online, and enables administrators to manage incoming orders through a secure admin panel.

---

##  Features

### Customer Side

- Modern and attractive restaurant website
- Fully responsive design for mobile, tablet, and desktop
- Browse restaurant menu
- Search menu items instantly
- Filter menu by categories
- Add items to cart
- Increase or decrease item quantity
- Customer details form before checkout
- Order placement with Firebase integration
- Professional success popup after order submission

### Admin Panel

- Secure Firebase Authentication login
- Protected admin access
- View all customer orders
- View customer information and ordered items
- Mark orders as completed
- Delete orders
- Logout functionality

### Order Management

- Orders stored in Firebase Firestore
- Customer details saved automatically
- Order status tracking
- Pending and Completed order management

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
│   ├── images
│   └── logo
│
└── screenshots/
```

---

##  Firebase Integration

### Firestore Database

The project uses Firebase Firestore to store customer orders.

Collection:

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

Firebase Authentication is used to secure the admin panel.

Only authorized administrators can access:

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

##  Responsive Design

The website is fully responsive and optimized for:

- Desktop Computers
- Tablets
- Mobile Phones

Responsive features include:

- Flexible layouts
- Mobile-friendly navigation
- Responsive menu cards
- Full-screen cart drawer on mobile devices
- Touch-friendly buttons and inputs

---

##  Ordering Process

1. Customer opens the menu page.
2. Customer browses menu items.
3. Items are added to the cart.
4. Customer enters:
   - Name
   - Phone Number
   - Delivery Address
5. Customer clicks "Place Order".
6. Order is saved to Firebase Firestore.
7. Success popup confirms the order submission.
8. Admin can view and manage orders from the admin dashboard.

---

##  Admin Features

The admin dashboard provides:

- Secure login authentication
- Order monitoring
- Customer details viewing
- Order status updates
- Order deletion
- Logout system

---

##  Screenshots

Recommended screenshots for the repository:

### Home Page
- Hero Section
- Featured Menu

### Menu Page
- Menu Categories
- Search Bar
- Food Cards

### Cart System
- Cart Drawer
- Customer Information Form

### Order Confirmation
- Success Popup

### Admin Panel
- Login Page
- Orders Dashboard
- Order Management Features

---

##  Future Improvements

Possible future enhancements:

- Online payment integration
- Email notifications
- SMS order confirmation
- Customer order tracking
- Discount and coupon system
- Multiple admin accounts
- Sales analytics dashboard
- Inventory management

---

##  Developer

**Haya Ali**

Developed as a complete restaurant management website project using modern web technologies and Firebase backend services.

---

##  License

This project is created for educational and portfolio purposes.

© 2025 FARNAJ Cuisine. All Rights Reserved.

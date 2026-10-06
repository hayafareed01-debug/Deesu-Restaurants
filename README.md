# DEESU Restaurant Website

A modern restaurant website developed for **DEESU Restaurant**, providing customers with an interactive online experience to explore the menu, place orders, contact the restaurant, and learn more about the business.

The project is built using HTML, CSS, JavaScript, Firebase Authentication, and Firebase Firestore Database.

---

# Live Features

## Home Page

The website includes a fully responsive home page featuring:

- Hero Section
- Restaurant Introduction
- Popular Dishes
- Customer Reviews
- Google Maps Integration
- Contact Information
- WhatsApp Integration

---

## About Us Page

A dedicated About Us page containing:

### About DEESU Restaurant

DEESU Restaurant is committed to bringing authentic Pakistani and fusion flavors to customers.

From Biryani and Haleem to Burgers, Handi, Chaat, and Continental dishes, every meal is prepared with care, quality, and hygiene.

### Service Options

- No-contact Delivery
- Delivery
- Drive-through
- Onsite Services
- Takeout
- Dine-In

### Popular For

- Lunch
- Dinner
- Solo Dining

### Offerings

- Late-night Food
- Quick Bites
- Small Plates
- Vegetarian Options

### Dining Options

- Lunch
- Dinner
- Dessert

### Atmosphere

- Casual

### Crowd

- College Students
- Groups

### Planning

- Reservations Accepted

### Payments

- Debit Cards
- NFC Mobile Payments

### Children

- Good for Kids
- Kids Menu

### Parking

- Free Parking Lot
- Free Street Parking

---

# About DEESU

DEESU is a software engineering team founded in 2019 that designs, develops, and maintains production software for businesses and organizations.

### Services

- Web Development
- Android Development
- EdTech Platforms
- LMS Systems
- UI/UX Design
- Technical Documentation
- Cloud Infrastructure

### Company Statistics

| Metric | Value |
|----------|----------|
| Projects Shipped | 50+ |
| Uptime SLA | 99.9% |
| Client Satisfaction | 98% |
| Support Availability | 24/7 |

---

# Menu System

The menu page allows customers to:

- Browse food categories
- View food images
- Check prices
- Add products to cart
- Manage quantities
- Place orders

---

# Shopping Cart

The cart system includes:

- Product Images
- Product Details
- Quantity Management
- Live Total Calculation
- Customer Checkout Form

Customers can review their selected items before placing an order.

---

# Firebase Integration

The project uses Firebase for:

## Firebase Authentication

Used for:

- Admin Login
- Admin Access Protection

## Firebase Firestore Database

Used for:

- Order Storage
- Customer Information
- Order Status Tracking

---

# Order Management System

Customer orders are stored inside Firebase Firestore.

Each order contains:

- Customer Name
- Phone Number
- Address
- Ordered Items
- Total Amount
- Order Status

---

# Admin Panel

The website includes a secure admin dashboard.

Admin Features:

- View Orders
- View Customer Information
- View Order Total
- View Order Status
- Mark Orders as Completed
- Delete Orders
- Secure Logout

---

# Customer Reviews

Customers can:

- Submit Reviews
- Select Ratings
- Upload Images

Reviews help improve customer engagement and restaurant credibility.

---

# Contact & Location

The website includes:

- Contact Information
- WhatsApp Ordering
- Google Maps Integration
- Restaurant Location

---

# Technologies Used

## Frontend

- HTML5
- CSS3
- JavaScript (ES6)

## Backend Services

- Firebase Authentication
- Firebase Firestore Database

## External Libraries

- Font Awesome
- Google Fonts

---

# Project Structure

```text
DEESU-Restaurant/

│
├── index.html
├── about.html
├── menu.html
├── cart.html
├── login.html
├── admin.html
│
├── css/
│   ├── style.css
│   ├── about.css
│   ├── menu.css
│   └── cart.css
│
├── js/
│   ├── script.js
│   ├── menu.js
│   ├── cart.js
│   ├── firebase.js
│   ├── login.js
│   └── admin.js
│
├── images/
│   ├── hero-bg.jpg
│   ├── menu-images
│   └── assets
│
├── firebase.json
│
└── README.md
```

---

# Running Locally

Because this project uses JavaScript Modules and Firebase, it must be run using a local server.

## Using VS Code

Install:

- Live Server Extension

Then:

1. Open the project folder.
2. Right-click `index.html`.
3. Select **Open With Live Server**.

The website will run at:

```text
http://127.0.0.1:5500/
```

Important:

Do NOT open files directly using:

```text
file:///...
```

because Firebase and JavaScript modules will not work correctly.

---

# Deployment

## GitHub

Push updates using:

```bash
git add .
git commit -m "Project update"
git push origin master
```

## Firebase Hosting

Deploy the latest version using:

```bash
firebase deploy --only hosting
```

---

# Future Improvements

Planned enhancements include:

- Online Payment Integration
- Real-Time Order Updates
- Admin Dashboard Analytics
- Sales Reports
- Customer Accounts
- Reservation System
- Multi-Branch Management

---

# Developed By

## DEESU

Engineering Reliable Software Since 2019

- Web Applications
- Android Applications
- EdTech Platforms
- LMS Systems
- Cloud Infrastructure
- UI/UX Design

---

# License

This project is developed for educational, portfolio, and restaurant management purposes.

© 2026 DEESU Restaurant. All Rights Reserved.

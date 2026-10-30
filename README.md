### Naira Encoder

A lightweight, universal JavaScript utility that dynamically encodes text placeholders into the official Nigerian Naira symbol (₦) across plain HTML pages and all major JavaScript frameworks. 

### 🚀 Quick Start (CDN)

You do not need to download or install anything locally. Just drop this single CDN script tag into your project, and placeholders will instantly convert to the Naira symbol worldwide. 

### Global Production CDN

<script src="https://cdn.jsdelivr.net/gh/timmichael738/naira-symbol-encoder/naira-encoder.min.js"></script>


### 💡 How It Works

Modern front-end frameworks often escape traditional HTML character entities like &amp;naira;, rendering them broken or as plain text. This encoder solves that problem by using a native MutationObserver to watch the DOM and instantly convert multiple types of semantic text strings into the native ₦ character. 

### Supported Placeholders

You can type any of the following syntaxes interchangeably in your code: 

* &naira;
* [naira]
* {{naira}}

### 🛠️ Framework Integration Examples

Because this library runs on pure vanilla JavaScript, it works seamlessly at the root level of any framework application. 

### 1. Plain HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Naira Symbol Encoder</title>
</head>
<body>
    <p>Fuel price is [naira]1,200 per liter.</p>

    <!-- Load the universal encoder from CDN -->
    <script src="https://cdn.jsdelivr.net/gh/timmichael738/naira-symbol-encoder/naira-encoder.min.js"></script>
</body>
</html>

### 2. React / Next.js

Import the script at your main application entry point (e.g., index.js, main.jsx, or root layout.js). 

import 'https://cdn.jsdelivr.net/gh/timmichael738/naira-symbol-encoder/naira-encoder.min.js';

export default function App() {
  return (
    <div>
      <p>Total Balance: [naira]150,000</p>
    </div>
  );
}

### 3. Vue.js (Vue 2 & Vue 3)

Import it directly into your main.js or main.ts file before mounting your application.

import { createApp } from 'vue';
import App from './App.vue';
import 'https://cdn.jsdelivr.net/gh/timmichael738/naira-symbol-encoder/naira-encoder.min.js';

createApp(App).mount('#app');

### 4. Angular

You can inject it dynamically in your app.component.ts constructor or add the CDN URL directly to your global angular.json scripts array. 

### 📦 Best Practices for Version Control

To ensure future updates to this repository don't break existing websites out in production, lock your CDN link to a specific release version using Git tags (e.g., v1.0.0): 

<script src="https://cdn.jsdelivr.net/gh/timmichael738/naira-symbol-encoder@v1.0.0/naira-encoder.min.js"></script>

### 📄 License

This project is open-source and available under the MIT License.
# Backend Data Integration Notes

Currently, all product and vendor data on the frontend is loaded from `assets/js/products-data.js` via the global variable `window.BOILER_PRODUCTS`.

To connect this to a real backend, you just need to replace the local mock lookup with your API calls. Below are the details on how the data is structured and where to plug it in.

---

## 1. Product Detail Page (product-detail.html)

When a user visits `product-detail.html?id=boiler-hw-1`, the frontend reads the `id` query parameter and finds the matching item in `window.BOILER_PRODUCTS`.

### Where to change the code:

Open `assets/js/product-detail.js` around line 43 in `initProductDetail()`:

Replace:

```javascript
const params = new URLSearchParams(window.location.search);
const productId = params.get('id') || 'carrier-infinity-98';
const products = window.BOILER_PRODUCTS || [];
currentProduct = products.find(p => p.id === productId) || products[0];
```

With:

```javascript
const params = new URLSearchParams(window.location.search);
const productId = params.get('id') || 'carrier-infinity-98';

const res = await fetch(`/api/products/${productId}`);
currentProduct = await res.json();
```

### JSON structure expected for a single product:

Your `GET /api/products/:id` endpoint should return an object with this structure:

```json
{
  "id": "boiler-hw-1",
  "name": "Bosch Greenstar Combi Boiler 100K",
  "category": "hot-water-boilers",
  "price_from": 4850,
  "monthly_financing": 52,
  "rating": 4.9,
  "reviewsCount": 312,
  "efficiency": "95% AFUE",
  "warranty": "10-Year Heat Exchanger Warranty",
  "image": "assets/images/boiler-img-1.jpg",
  "gallery": [
    "assets/images/boiler-img-1.jpg",
    "assets/images/boiler-img-2.jpg",
    "assets/images/boiler-cascade.jpg"
  ],
  "specs": {
    "AHRI Certified": "#20849102",
    "Fuel Type": "Natural Gas",
    "Input BTU": "100,000 BTU/hr",
    "AFUE Rating": "95.0%"
  },
  "vendor": {
    "name": "Affordable Heating & Cooling",
    "subtitle": "Residential Hydronic & Steam Specialists",
    "rating": 4.9,
    "reviews": 284,
    "phone": "(815) 478-3100",
    "earliestInstall": "Wednesday, Oct 18",
    "scope": "Includes municipal permits, system flush & 1-year labor warranty.",
    "district": "Will County & South Suburbs",
    "logo": "assets/images/logos/affordable.png"
  },
  "bundleMatrix": {
    "boiler": {
      "code": "B",
      "model": "Bosch-ZBR100",
      "name": "Combi Boiler",
      "specs": "95% AFUE Condensing Heat Exchanger",
      "badge": "Core Unit"
    },
    "manifold": {
      "code": "M",
      "model": "Hydro-Loop-PSS",
      "name": "P/S Manifold",
      "specs": "1-1/4\" Hydraulic Separator with Header",
      "badge": "Factory Trim"
    },
    "recircKit": {
      "code": "R",
      "model": "Smart-Recirc-Loop",
      "name": "DHW Recirc Loop",
      "specs": "Built-in return line crossover valve & demand timer",
      "badge": "Instant Hot",
      "priceAdd": 650,
      "financeAdd": 11
    }
  },
  "componentSpecs": {
    "boiler": {
      "title": "Combi Boiler",
      "model": "Bosch Greenstar ZBR Combi 100",
      "bento": [
        { "label": "AFUE Efficiency", "value": "95.0%", "sub": "ENERGY STAR Certified" },
        { "label": "Max Input Capacity", "value": "100,000 BTU/hr", "sub": "Modulating Turndown 5:1" }
      ]
    }
  }
}
```

### Notes on bundleMatrix:

- Base components: Any item without `priceAdd` is included in the base package.
- Optional add-on: Any item with `priceAdd` (like `recircKit`, `waterHeater`, or `feeder`) automatically renders as a clickable add-on button. When selected, the frontend adds `priceAdd` to the total price and updates the monthly financing.

---

## 2. Catalog Page (products.html)

In `assets/js/products.js`, the product list currently filters and paginates items from `window.BOILER_PRODUCTS`.

To connect to your server, update `products.js` to fetch from `GET /api/products`.

### Query parameters to support:

- `category`: e.g. `hot-water-boilers`, `steam-boilers`, `hvac-systems`, `commercial`
- `brand`: e.g. `Bosch`, `Navien`, `Carrier`, `Burnham`
- `btu`: e.g. `100,000 BTU`
- `search`: text query from the search input
- `sort`: `price-asc`, `price-desc`, `name-asc`
- `page`: current page number
- `limit`: items per page (frontend currently uses 6)

### Expected response format:

```json
{
  "total": 35,
  "page": 1,
  "items": [
    {
      "id": "boiler-hw-1",
      "name": "Bosch Greenstar Combi Boiler 100K",
      "category": "hot-water-boilers",
      "brand": "Bosch",
      "btu": "100,000 BTU",
      "price_from": 4850,
      "image": "assets/images/boiler-img-1.jpg",
      "description": "High-efficiency condensing combi boiler providing whole-home space heating and on-demand domestic hot water."
    }
  ]
}
```

---

## 3. Booking / Installation Form

When a user clicks "Confirm & Reserve Installation" on `product-detail.html`, the modal collects the booking details.

In `assets/js/product-detail.js` around line 530, the submit handler has access to:

- `productId`
- `productName`
- `unitModel`
- `basePrice`
- `totalPrice`
- `addonSelected` (boolean)
- `addonName`
- `addonPrice`
- `vendorName`
- `customer`: fullName, phone, email, address, propertyType, preferredTime

To send this to your backend, add a `fetch` call inside that handler:

```javascript
fetch('/api/bookings', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(bookingData)
});
```

---

## 4. Vendor Logos & Assets

All contractor partner logos are stored in `assets/images/logos/`:

- `blue_frame.jpg` (Blue Flame Heating & Cooling)
- `affordable.png` (Affordable Heating & Cooling)
- `waters_hot.png` (Waters Hot Again)
- `td.jpg` (Trey Durden HVAC)
- `jerry.jpg` (Jerry's Heating & Cooling)
- `hg.jpg` (HG Home Comfort)
- `poz.jpg` (Pozitive Heating & Cooling)

If you add new vendors in the database, put their logos in this folder. We recommend square images around 600x600 px (PNG or JPG), kept under 300KB for fast loading.

1. Full Name <br>
Email<br>
Phone Number<br>
relationship: one to one
<br>

```
  {
    "_id": "ObjectId('AAA')",
    "fullName": "John Doe",
    "email": "johndoe@yahoo.com",
    "phoneNumber": "001234567",
}
```
<br>
2. 
- **Full Name**
- **Phone Number**
- **Address (Max 2)**

`relationship: one to many`
<br>
```
  {
    "_id": "ObjectId('AAA')",
    "fullName": "John Doe",
    "email": "johndoe@yahoo.com",
    "phoneNumber": "001234567",
    "address": ["address1", "address2"]
}
```
3. **Product**

Product Name: Kaos Polos

Brand Name: SkilShirt

**Varian Pertama**

Varian Name 1: Kaos Polos Hitam

Color: Hitam

Quantity: 12

Price: Rp 99.000

**Varian Kedua**

Varian Name 1: Kaos Polos Navy

Color: Navy

Quantity: 10

Price: Rp 99.000

`relationship: one to many`
```
  {
    "_id": "ObjectId('AAA')",
    "productName": "Kaos Polos",
    "brandName": "SkilShirt",
    "variants": ["ObjectID('AA1')", "ObjectID('AA2')"]
  },
  {
    "_id": "ObjectId('AA1')",
    "variantName": "Kaos Polos Hitam",
    "color": "hitam",
    "quantity": 12,
    "price": 99000
  },
  {
    "_id": "ObjectId('AA2')",
    "variantName": "Kaos Polos Navy",
    "color": "Navy",
    "quantity": 10,
    "price": 99000
  }
```

4. 
**Cinemas**

*First Cinema*
- Cinema Name: CGF
- Films:
  - Venom 2
  - Spiderman No Way Home
- Location: Pondok Indah Mall

*Second Cinema*

- Cinema Name: Cinema31
- Films:
  - Venom 2
  - Spiderman No Way Home
- Location: Mall Kelapa Gading

`relationship: one to many`

```
  {
    "_id": "ObjectId('CG1')",
    "cinemaName": "CGF",
    "films": [
      {
        "_id": "ObjectId('M1')",
        "title": "Venom 2"
      },
      {
        "_id": "ObjectId('M2')",
        "title": "Spiderman No Way Home"
      }
    ],
    "location": "Pondok Indah Mall"
  },
  {
    "_id": "ObjectID('CG2')",
    "cinemaName": "Cinema31",
    "films": [
    {
      "_id": "ObjectId('M1')",
      "title": "Venom 2"
    },
    {
      "_id": "ObjectId('M2')",
      "title": "Spiderman No Way Home"
    }
   ],
   "location": "Mall Kelapa Gading"
}
```

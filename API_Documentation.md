# Backend API Documentation

## Base URL

---

## User APIs

### Register User

**URL:** `/api/user/register`  
**Method:** `POST`

**Body:**

````json
{
  "name": "John",
  "email": "john@test.com",
  "password": "123456"
}


### Login User
**URL:** `/api/user/login`
**Method:** `POST`

**Body:**
```json
{
  "name": "John",
  "email": "john@test.com",
  "password": "123456"
}

### Logout User
**URL:** `/api/user/logout`
**Method:** `POST`


---

## Posts APIs

### Upload Post
**URL:** `/api/post/upload-post`
**Method:** `POST`

**Body:**
```json
{
  "data":{
    "title": "Post1",
    "desc": "Lorem ipsum dolor sit amet."
  }

}

### Get all Post
**URL:** `/api/post/get-all-post`
**Method:** `GET`

### Get User's Post
**URL:** `/api/post/get-user-post`
**Method:** `GET`


````

---

## Posts APIs

### Upload Page

**URL:** `/api/page/upload-page`
**Method:** `POST`

**Body:**

```json
{
   "data2": {
    "item": 2,
    "price": 260,
    "category": "Blue",
    "size": "XL"
  }
}

### Get all Post
**URL:** `/api/post/get-all-post`
**Method:** `GET`

### Get User's Post
**URL:** `/api/post/get-user-post`
**Method:** `GET`


```

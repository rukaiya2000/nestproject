
# NestJs 

### 1. About application
This project has primarily 3 tables, i.e, Products, Orders, Customers. I have made 3 endpoint for the project withe the authentication using jwt token
### 2. Features
#### Compression
Added gzip compression for optimization
#### Caching
caching is setup locally
### 3. Local setup

Clone the project

```bash
  git clone https://github.com/rukaiya2000/nestproject.git
```

Go to the project directory

```bash
  cd nestproject
```

Install dependencies

```bash
  npm install
```

```bash
  add .env file
```
Start the server

```bash
  npm run start:dev
```
### 4. API
- LOGIN 
- Get products (Based on the filer)
- Get order details based on the email id- (auth is required, based on the login this end point works)

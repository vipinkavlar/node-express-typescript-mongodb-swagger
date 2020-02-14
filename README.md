# node-express-typescript-mongodb-swagger



Please follw the below steps:

```
git clone https://github.com/vipinkavlar/node-express-typescript-mongodb-swagger.git
cd node-express-typescript-mongodb-swagger
npm install
npm run dev
```

Swagger documentation sample can be found at `http://localhost:<port>/api-docs`

# Form input validation

Input validation is done through class-validator. The decorators are defined in src/dtos files.
Two middleware can be used to process error responses.
1. ../middlewares/validation.middleware 
2. ../middlewares/validationJsonResponse.middleware

validationJsonResponse will output the response in JSON format as given below: 

```
{
	message : null,
	data: null,
	errorCode : 201
	errorMessages : {
		"email": {
			"isNotEmpty": "email should not be empty",
			"isEmail": "email must be an email"
		},
		"password": {
			"isString": "password must be a string"
		}
	}
}
```
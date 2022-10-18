# Installation node_modules 
![install](https://user-images.githubusercontent.com/57614206/196360923-67128f8a-333d-4265-ad3d-d2beaa59edae.png)

# Running app
![running](https://user-images.githubusercontent.com/57614206/196361126-ac6701dc-ac57-428f-a96d-044f0d564a77.png)

# Documentation of endpoint
* **POST /api/v1/users/register : for register user** _(this endpoint for create new user)_ <br/>
![register](https://user-images.githubusercontent.com/57614206/196363631-3fd44e79-65f0-4a51-9935-190f92d6fdcc.png)


* **POST /api/v1/users/login : for login user** _(if user data is correct, it will return token)_ <br>
![login](https://user-images.githubusercontent.com/57614206/196364063-471c77af-5f38-48d4-be71-6d2e88f33039.png)



* **POST /api/v1/users/reflections : for create data user** _(in headers.authorization user must input token for create new data reflection)_ <br>
![headers_token](https://user-images.githubusercontent.com/57614206/196364625-c30c0fde-d043-440b-835c-ab5063128208.png)
![create_reflection](https://user-images.githubusercontent.com/57614206/196364601-6e94754f-dba1-406d-9a23-9149d5b71773.png)


* **GET /api/v1/users/reflections : for get data user** _(if user have data reflection, it will return it)_ <br>
![get_reflection](https://user-images.githubusercontent.com/57614206/196364879-c9d86074-c0ae-49ab-94b9-57d6e6b29a04.png)


* **PUT /api/v1/users/reflections/:id : for edit data user** _(if you have token in headers.authorization, to change data reflection user must input reflectionid in parameters)_ <br>
![edit_reflection](https://user-images.githubusercontent.com/57614206/196365201-de07f829-a5af-49be-8ce6-3ff16394c555.png)


* **DELETE /api/v1/users/reflections/:id : for delete data user**  _(if you have token in headers.authorization, to delete data reflection user must input reflectionid in parameters)_ <br>
![delete_reflection](https://user-images.githubusercontent.com/57614206/196365311-af9468a2-ad47-44f5-af92-817471eca66b.png)

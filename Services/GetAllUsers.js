import axios from 'axios';
const HTTP_CLIENT_URL= "http://localhost:8080";
const token =localStorage.getItem("access_Token");
const user_id=localStorage.getItem("Id");

class UserService 
{
  
    getAllUser()
    {
           console.log(token);
           return axios.get(`${HTTP_CLIENT_URL}/users`, {
              headers: {
                'Authorization': token
              }
            });
    }
    getUserInfoById(id)
    {      return axios.get(`${HTTP_CLIENT_URL}/users/${id}` , {
      headers: {
        'Authorization': token
      }
    });
}
changeRole(id,role)
{      return axios.post(`${HTTP_CLIENT_URL}/changerole/${id}/${role}` ,{id,role}, {
  headers: {
    'Authorization': token
  }
});
}

    getUserById()
    
    {      return axios.get(`${HTTP_CLIENT_URL}/users/${user_id}` , {
              headers: {
                'Authorization': token
              }
            });
    }
    
    getPodsById()
    {
      
           return axios.get(`${HTTP_CLIENT_URL}/users/${user_id}/pods`, {
            headers: {
              'Authorization': token
            } 
          });
    }

    getAllPods()
    {
      
           return axios.get(`${HTTP_CLIENT_URL}/users/pods`, {
            headers: {
              'Authorization': token
            } 
          });
    }

    getAllService()
    {
           return axios.get(`${HTTP_CLIENT_URL}/user/services`, {
            headers: {
              'Authorization': token
            } 
          });
    }
    
    getServiceById()
    {
           return axios.get(`${HTTP_CLIENT_URL}/users/${user_id}/services`, {
            headers: {
              'Authorization': token
            } 
          });
    }

    createNameSpace(id)
    { 
           return axios.get(`${HTTP_CLIENT_URL}/user/${id}/creatapp`, {
            headers: {
              'Authorization': token
            } 
          });
    }

    getAllNameSpace()
    {
      return axios.get(`${HTTP_CLIENT_URL}/users/namespaces` ,{
        headers: {
          'Authorization': token
        }
      });
    }
    deleteNameSpaceByName(nameSpace)
    {
        return axios.get(`${HTTP_CLIENT_URL}/users/namespaces/${nameSpace}` 
        ,{ 
              headers: {
                'Authorization': token
              }
            });
            
    }

    deleteNameSpace(id)
    {console.log(id);
        return axios.delete(`${HTTP_CLIENT_URL}/user/${id}/delete-namespace` 
        ,{ 
              headers: {
                'Authorization': token
              }
            });
            
    }

    deleteUser(id)
    {
        return axios.delete(`${HTTP_CLIENT_URL}/users/`+id 
        ,{
              headers: {
                'Authorization': token
              }
            });
    }

    signUpUser(firstName,lastName,email,passwordHash,subscribtion)
    {
      console.log(firstName+lastName+email+passwordHash+subscribtion);
        return axios.post(`${HTTP_CLIENT_URL}/user/signup`,{firstName,lastName,email,passwordHash,subscribtion});
    }

    
 getToken(email,passwordHash)
 { console.log(email +passwordHash);
     return axios.post(`${HTTP_CLIENT_URL}/user/login`,{email,passwordHash});
 }
   
}
export default new UserService ();
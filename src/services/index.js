import axios from 'axios';

export const getUserData = async () => {
    try{
      const resp = await axios.get('http://localhost:5000/api/github/userinfo/gmujica')
      console.log(resp.data)
    } catch (err) {
      console.error(err);
    };
};

export const getCommitsData = async () => {
    try{
      const resp = await axios.get('http://localhost:5000/api/github/commitinfo/gmujica/github-node-api')
      console.log(resp.data);
     } catch(err) {
      console.log(err);
    };
};

export const getRepositoryData = async () => {
    try{
      const resp = await axios.get('http://localhost:5000/api/github/repoinfo/gmujica/github-node-api')
      console.log(resp.data);

    } catch(err) {
      console.log(err);
    };
};
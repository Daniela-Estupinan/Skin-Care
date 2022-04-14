import axios from 'axios';
const url = "/api/post";

export default class API{
    //get all post form the server
    static async getAllPost(){
        const res = await axios.get(url,{headers:{"Authorization":JSON.parse(localStorage.getItem("token"))}});
        return res.data;
    }
        //to get single post by id
    static async getPostByID(id){
        const res = await axios.get(`${url}/${id}`,{headers:{"Authorization":JSON.parse(localStorage.getItem("token"))}});
        return res.data;
    }
       //to insert post into database
    static async addPost(post){
        const res = await axios.post(url,post,{headers:{"Authorization":JSON.parse(localStorage.getItem("token"))}});
        return res.data;
    }
       //to update post
    static async updatePost(id,post){
        const res = await axios.patch(`${url}/${id}`,post,{headers:{"Authorization":JSON.parse(localStorage.getItem("token"))}});
        return res.data;
    }
        //to delete Post
    static async deletePost(id){
        const res = await axios.delete(`${url}/${id}`,{headers:{"Authorization":JSON.parse(localStorage.getItem("token"))}});
        return res.data;
    }
}
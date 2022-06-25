import axios from 'axios';
const url = "https://skin-care-tips.herokuapp.com/api/product";

export default class API{
    //get all post form the server
    static async getAllProducts(){
        const res = await axios.get(url,{headers:{"Authorization":JSON.parse(localStorage.getItem("token"))}});
        return res.data;
    }
        //to get single post by id
    static async getProductsByID(id){
        const res = await axios.get(`${url}/${id}`,{headers:{"Authorization":JSON.parse(localStorage.getItem("token"))}});
        return res.data;
    }
       //to insert post into database
    static async addProducts(product){
        const res = await axios.post(url,product,{headers:{"Authorization":JSON.parse(localStorage.getItem("token"))}});
        return res.data;
    }
       //to update post
    static async updateProducts(id,product){
        const res = await axios.patch(`${url}/${id}`,product,{headers:{"Authorization":JSON.parse(localStorage.getItem("token"))}});
        return res.data;
    }
        //to delete Post
    static async deleteProducts(id){
        const res = await axios.delete(`${url}/${id}`,{headers:{"Authorization":JSON.parse(localStorage.getItem("token"))}});
        return res.data;
    }
}
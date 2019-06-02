const graphql = require('graphql')
const axios = require('axios')

const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = graphql

//Queries
const UserType = new GraphQLObjectType({
    name : "User",
    fields : () => ({
        id : { type: GraphQLInt },
        name : {type: GraphQLString }
    })
})

//Mutations
const MutationType = new GraphQLObjectType({
    name: "Mutation",
    fields:{
        addUser:{
            type: UserType,
            args:{
                name:{type : GraphQLNonNull(GraphQLString)}
            },
            resolve(parent,args){
                return axios.post(`http://localhost:3000/users/`,{name: args.name}).then((response) => {
                    return response.data
                })
            }
        },
        removeUser:{
            type: UserType,
            args:{
                id:{type: GraphQLInt},
            },
            resolve(parent,args){
                return axios.delete(`http://localhost:3000/users/${args.id}`).then((response) => {
                    return response.data
                })
            }
        }
    }
})

const RootQuery = new GraphQLObjectType({
    name:"RootQueryType",
    fields:{
        users:{
            type: new GraphQLList(UserType),
            resolve(parent,args){
                return axios.get(`http://localhost:3000/users`).then((response) => {
                    return response.data
                })
            }
        },
        user:{
            type : UserType,
            args:{
                id:{ type: GraphQLInt }
            },
            resolve(parent,args){
                return axios.get(`http://localhost:3000/users/${args.id}`).then((response) => {
                    return response.data
                })
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query : RootQuery,
    mutation: MutationType
})
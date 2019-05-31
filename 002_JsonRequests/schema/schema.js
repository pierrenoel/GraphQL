const graphql = require('graphql')
const axios = require('axios')

const{
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql

// Définir users

const UserType = new GraphQLObjectType({
    'name' : 'User',
    fields : {
        id : {type:GraphQLString},
        name : {type:GraphQLString},
        id_entreprise : {type:GraphQLInt}
    }
})

const EntrepriseType = new GraphQLObjectType({
    name:"Entreprise",
    fields: {
        id:{type:GraphQLString},
        name: {type:GraphQLString}
    }
})

const RootQuery = new GraphQLObjectType({
    name:"RootQueryType",
    fields: {
        user: {
            type:UserType,
            args: {id:{type:GraphQLString}},
            resolve(parentValue,args){
                return axios.get(`http://localhost:3000/users/${args.id}`).then( (response) => {
                    return response.data
                })
            }
        },
        entreprise:{
            type:EntrepriseType,
            args:{id:{type:GraphQLString}},
            resolve(parentValue,args){
                return axios.get(`http://localhost:3000/entreprises/${args.id}`).then( (response) => {
                    return response.data
                })
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery
})
const API_URL = 'http://localhost:8080/graphql';

async function fetchAPI(query ,{ variables } ={}) { 
    const headers = {'Content-Type' : 'application/json'};

    const res = await fetch(API_URL , {
        method: 'POST' ,
        headers , 
        body : JSON.stringify({
            query , 
            variables,
        }),
    });

   const json = await res.json();
   return json.data;
}

export async function getAllPostSlugs(){
    const data = await fetchAPI(`
        {
            posts(first: 1000){
                edges{
                    node{
                        slug
                    }
                }
            }
        }
    `)

    return data?.posts;
}

export async function getAllPostsForHome(){

    const data = await fetchAPI(`
        {
            posts(first: 6){
                edges{
                    node{
                        slug
                        title
                        date
                        content
                    }
                }
            }
        }
    `)
    return data?.posts;
}
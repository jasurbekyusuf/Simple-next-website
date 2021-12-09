export const getStaticPaths = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const path = data.map(list=>{
          return{
        params:{id:list.id.toString()}
    }
    })

    return {
        paths,
        fallback:false
    }
  
}
export const getStaticProps = async(context)=>{
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users ' +id)
    const data = await res.json()
    return {
        props: {list: data}
    }
}
function Details({list}) {
    return (
        <div>
            <h1>{list.name}</h1>
            <p>{list.email}</p>
            <p>{list.website}</p>
            <p>{list.address.city}</p>

        </div>
    )
}

export default Details;

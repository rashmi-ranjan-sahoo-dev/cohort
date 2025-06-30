import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function blog({params}: any){

    const postId = (await params).blogId;
    const response = await axios.get(`http://jsonplaceholder.typicode.com/posts/${postId}`)

    const data = response.data;

    return <div>
        Blog page {postId}

        <br />
        title - {data.title}
        <br />
        body - {data.body}
    </div>

}